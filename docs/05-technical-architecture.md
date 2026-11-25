# 05 – Technical Architecture

## Files

| Path | Purpose |
|---|---|
| `index.html` | The original 2D game (HTML, CSS and JavaScript; no build step) |
| `README.md` | Player-facing overview, level and music tables |
| `music/*.mp3` | Recordings of every song (generated; see [04](04-audio.md)) |
| `docs/` | These design documents |
| `3d/` | Independent 3D game: ES modules, vendored Three.js, separate level/music snapshots and README |

The 2D edition has no build step or libraries. The 3D edition uses vendored Three.js; see [09](09-3d-fork.md). The only external resource is the "Press Start 2P" Google Font, with a monospace fallback.

## Layout of `index.html` (Top to Bottom)

1. **Setup:** canvas (480 × 272, `T=16` px tiles, `ROWS=17`), window scaling and input (keyboard map `KM`, touch buttons, pointer handling).
2. **Audio core:** `initAudio`, `tone`, `noise`, `kazoo`, `softLead` and the `SFX` table.
3. **Music engine:** instrument helpers, drum helpers, `STYLES`, `MIX`, `playMashupTick`, `startMusic` and the `scheduler`.
4. **Level data:** `LEVELS`, `THEMES`, `ITEM_NAMES`, the seeded RNG `rngf` and `buildLevel`.
5. **Game state:** `state`, `lvl`, `P` (the player), `sibs`, `startLevel`, collision helpers and `hurt`.
6. **Update logic:** `updatePlayer`, `updateEnemies`, the sibling AI (`moveSibling`, `chooseSiblingTarget`, `updateSibs`) and `updatePlay`.
7. **Drawing helpers:** `R` (rectangle), `text`, `wrap`, `outlined` (sprite outline system), `shadow`, tile texture cache and overlays.
8. **Sprites:** `drawKidRaw`, `drawCyclistRaw`, `drawRaceCar` (race-track cars via `onRaceTrack()`), `drawKartRoomRide` (Standard Kart, Flame Rider with Hot Wheels and Sport Bike via `onKartRoom()`), `drawItemRaw` and the toy-vehicle, diamond-block and avatar helpers; `drawDropRaw`, `drawEnemyRaw`, siblings, `GREETINGS`, `SIBS` and the penguin logo.
9. **Scenes:** `drawBackground` (per-theme branches), `drawTiles`, `drawHUD`, `drawPlay`, and the splash, title, intro, clear, lose and end screens.
10. **Main loop:** `frame()`.

## Game States

`splash → title → intro → play ⇄ pause` (or `title → select → intro`, and `clear → select → intro` from the Chore Complete screen), then:
- `play → clear → intro` (next level), or `clear → end → title` after the last level.
- `play → lose → intro` (retry the same level). On `lose`, the level music stops, the car honks and the lose jingle plays, then about 3.3 s later the sad `sad` style starts if the player is still on that screen.

## Main Loop

- `requestAnimationFrame` collects elapsed time and runs fixed **1/60 s** updates (catch-up capped at 0.1 s).
- The current state is drawn once per frame.
- `anyPress` and `jumpPressed` are one-frame flags that are cleared after each update.

## Physics Constants

| Constant | Value |
|---|---|
| Gravity | 1300 px/s² (max fall speed 600) |
| Jump velocity | −430 px/s (cut to −160 when jump is released early) |
| Max run speed | 150 px/s |
| Acceleration | 1400 ground / 900 air |
| Friction | 1600 ground / 400 air |
| Coyote time | 0.1 s |
| Jump buffer | 0.12 s |
| Double jumps | 1 extra in the air |
| Invincibility after a hit | 1.5 s (1.2 s after respawn) |
| Knock-back | 170 px/s sideways, −260 px/s up |

Collision is tile-based: `#` is solid, `=` is a one-way platform (land from above only) and `x` is a LEGO hazard. Moving platforms (`lvl.movers`) carry riders using `ride.dx`.

## Sibling AI

`updateSibs(dt)` sets per-sibling `fullTime` in the Whole House, for Isaac in `bedroom`, and for Annie in `annie`, Daniel in `danielroom`, and Colin in `colinroom`. Eligible siblings stay in collection mode from the first update, without detouring to hunt critters. Otherwise, helpers use data-driven thresholds: Annie/Colin 33%, Isaac/Daniel 20% and preserve nearby-critter hunting. `chooseSiblingTarget` reserves separate items, scores distance and nearby critters, and temporarily skips stalled targets. Contact zaps, stomps, ducking, double jumps and brief damage recovery still apply in the finale. Only the player can complete delivery.

## Rendering

- **Primitives:** pixel art is drawn mainly with `fillRect` through `R()`, with Canvas paths, text and transforms for silhouettes, wheels, lettering and scenery. The canvas is CSS-scaled with `image-rendering: pixelated`.
- **Outlines:** `outlined(x, y, fn)` draws a sprite onto an offscreen 176 × 144 canvas (padding `SP=48`), stamps a dark silhouette at four offsets, then draws the sprite on top. Large sprites must fit within that padding.
- **Background:** most indoor rooms use a gradient, parallax stripes, wainscoting and theme decorations every 160 px of parallax distance (index `k`). Outdoor/pool scenes and the GTA sunset-city scene use dedicated background branches. Roblox studs and GTA road markings are visual theme flags; collision geometry is unchanged.
- **Room-specific rides:** `drawCyclistRaw` routes the player to a Standard Kart in MarioKart Toy Room; `drawSibling` routes Isaac to a Flame Rider with Hot Wheels and Annie to a Sport Bike. Rendering is mirrored for direction and preserves wheel alignment, ducking and hurt flashes. Isaac's light-bike trail is suppressed in that room. The physics and collectible toy sprites are unchanged.
- **Overlays:** pre-rendered scan lines and vignette (`fx`), the basement flashlight, the red low-time flash and the HUD.

## Level Generation

`buildLevel(idx)` uses `rngf(L.seed)` (each level's fixed seed) to fill a `ground[]` height array and a `map[row][col]` tile grid:
- **Contents:** platforms, item spots, critter spots, moving platforms and LEGO bricks.
- **Difficulty:** `D = Math.min(1, idx / 23)` scales pit width (up to `L.gap`), pit frequency, landing width, stepping stones, step heights, shelf height and moving-platform pit width. See [02 – Levels](02-levels.md#level-generation-rules).
- **End zone:** after generation, `ground` is trimmed to `cols` and the last 16 columns are forced flat, so the drop-off always sits on solid ground.
- **Item spots:** if the long pits leave too few spots, extra spots are added over solid ground until there are at least `count + 4`.
- **Items:** chosen evenly from the candidate spots.
- **Critters:** placed on spots past column 14, with types picked at random from the level's list.

See [02 – Levels](02-levels.md) for the rules.

## Audio Engine

- **Startup:** `initAudio()` creates the `AudioContext` (on page load if the browser allows it, otherwise on first input), the master, music and SFX gain nodes and a noise buffer, and starts the `scheduler` on a 25 ms interval.
- **Scheduling:** the scheduler stays 0.15 s ahead of the audio clock, calling the current style's `play(step, time, stepDuration)`, which schedules oscillators at exact times.
- **Medley and tempo:** the mashup rotates groups of three songs from `MIX` every four shared 4/4 bars. During `play` with under 15 s left, the tempo rises 8%.

### Whole House mashup

`playMashupTick` layers three level songs at a shared 128 BPM. `MASHUP_TICKS=64` sets each group to four 4/4 bars; thirteen groups cover all 39 songs. Each layer has its own gain, guitar and reverb buses, with the song’s trim divided by three. Individual room playback is unchanged. See [04](04-audio.md) for recording details.

Holiday rooms share `drawHolidayItem` for collectible art and `drawHolidayDrop` for decorated return spots. Their nine theme branches add banners, garlands and holiday props. Level Select computes its row height from `LEVELS.length`, fitting all 40 choices.

### Four family helpers

`SIBS` defines Annie, Isaac, Daniel and Colin. Shared update, physics and target-reservation loops handle all four; appearance, follow distance, rush threshold, bedroom ownership and vehicle selection come from each entry. Menu lineups iterate the registry, including a compact level-intro lineup. The original 3D fork remains separate.

`drawCousinToy` supplies toy monster trucks and surfboards for pickups, room scenery, and the `monsterarena`/`surfrack` drop-off displays. Both are included in the Whole House mix.
