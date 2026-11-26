# 02 – Levels

## Level Table

Generated from the `LEVELS` array in `index.html`.

| # | Level | Theme | Item → Drop-off | Items | Time | Length (tiles) | Max gap | Critter density | LEGO chance | Moving platforms | Critters | Music |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Isaac's Room | `bedroom` | dragon → toychest | 10 | 94s | 170 | 3 | 0.4 | 0 | no | bzombie, bskel, bspider, hisser | `rock` |
| 2 | Annie's Room | `annie` | doll → dollhouse | 11 | 98s | 173 | 3 | 0.45 | 0 | no | tabby, husky, pom | `princess` |
| 3 | Daniel'S Monster Jam Room | `danielroom` | monstertrucktoy → monsterarena | 12 | 205s | 410 | 3 | 0.7 | 0.2 | yes | roomba, chomper, rat | `monsterjam` |
| 4 | Colin'S Surf Shack | `colinroom` | surfboardtoy → surfrack | 13 | 208s | 420 | 4 | 0.7 | 0.2 | yes | duck, squirrel, bubble | `surfrock` |
| 5 | Andrew's Sky Room | `andrewroom` | flyingtoy → toyhangar | 14 | 107s | 184 | 4 | 0.45 | 0.15 | no | bee, bat, bubble | `skyhop` |
| 6 | Mom'S Room | `momroom` | jewelry → jewelrybox | 15 | 211s | 430 | 4 | 0.7 | 0.2 | yes | hamster, cat, bubble | `momwaltz` |
| 7 | Uncle Pete'S Room | `peteroom` | bearsgear → bearslocker | 16 | 214s | 440 | 4 | 0.7 | 0.2 | yes | roomba, dog, turkey | `bearsgroove` |
| 8 | Kitchen Catastrophe | `kitchen` | dish → dishwasher | 12 | 101s | 175 | 4 | 0.45 | 0 | no | dust, roach | `jazz` |
| 9 | Living Room Lego-Land | `living` | pillow → creamcouch | 13 | 104s | 178 | 4 | 0.5 | 0.4 | no | roomba, cat | `pop` |
| 10 | Backyard Bonanza | `yard` | leaf → bag | 14 | 107s | 181 | 5 | 0.55 | 0.2 | yes | dog, bee | `hiphop` |
| 11 | Garden Glow-Up | `garden` | oldflower (dandelion-clump weeds) → compost | 15 | 110s | 183 | 5 | 0.62 | 0 | yes | weed | `garden` |
| 12 | Pool Party Panic | `pool` | towel → towelbasket | 16 | 113s | 183 | 5 | 0.58 | 0 | yes | duck, goose, swan, squirrel | `pool` |
| 13 | Garage of Doom | `garage` | trash → can (dumpster) | 17 | 116s | 186 | 5 | 0.62 | 0.45 | yes | rat, roomba, bee | `techno` |
| 14 | Laundry Room Pee-Yew! | `laundry` | undies → washer | 18 | 119s | 189 | 5 | 0.64 | 0.3 | yes | bubble, dust, roach | `polka` |
| 15 | Bathroom Blunder | `bathroom` | poop → toilet | 19 | 122s | 191 | 5 | 0.66 | 0.3 | yes | bubble, roach, spider | `crooner` |
| 16 | Home Office Havoc | `office` | paper → recycle | 20 | 125s | 194 | 5 | 0.68 | 0.3 | yes | ant, spider, hamster | `muzak` |
| 17 | Library Book Roundup | `library` | book → libraryshelf | 21 | 128s | 197 | 6 | 0.45 | 0 | yes | dust, spider, hamster | `library` |
| 18 | Music Room Mayhem | `musicroom` | score → bookshelf | 22 | 131s | 197 | 6 | 0.7 | 0.3 | yes | cat, spider, roach | `practice` |
| 19 | Arts & Crafts Chaos | `arts` | paint → paintshelf | 23 | 134s | 199 | 6 | 0.7 | 0.35 | yes | ant, cat, bubble | `punkska` |
| 20 | Tech Room Trouble | `tech` | robot → workbench | 24 | 137s | 202 | 6 | 0.75 | 0.35 | yes | zap | `silly` |
| 21 | Science Lab Scramble | `science` | testtube → labrack | 25 | 140s | 204 | 6 | 0.7 | 0.2 | yes | slime, bubble, zap | `science` |
| 22 | Workout Room Workout | `gym` | weight → weightrack | 26 | 143s | 205 | 7 | 0.76 | 0.35 | yes | rat, cat, dog, mite | `workout` |
| 23 | The Spooky Basement | `basement` | shirt → dryer | 27 | 146s | 207 | 7 | 0.66 | 0.3 | yes | spider, rat, dust | `romantic` |
| 24 | Attic of Antiques | `attic` | ornament → trunk | 28 | 149s | 210 | 7 | 0.7 | 0.35 | yes | bat, spider, rat | `baroque` |
| 25 | Pet Room Pandemonium | `pets` | chewtoy → petbasket | 29 | 152s | 212 | 7 | 0.66 | 0.3 | yes | hamster, tabby, pom | `pets` |
| 26 | Race Track Rumble | `race` | tire → tirerack | 30 | 154s | 214 | 7 | 0.7 | 0.3 | yes | roomba, squirrel, goose | `racerock` |
| 27 | Game Room Glitch | `gameroom` | videogame → gameshelf | 31 | 157s | 216 | 7 | 0.72 | 0.3 | yes | invader, chomper, ghosty | `chiptune` |
| 28 | Money Room Millions | `money` | coin → coinchest | 32 | 160s | 260 | 8 | 0.7 | 0.25 | yes | hamster, roomba, slime | `money` |
| 29 | MarioKart Toy Room | `kartroom` | kartbike (alternating toykart / toybike) → kartgarage | 33 | 163s | 270 | 8 | 0.7 | 0.25 | yes | roomba, squirrel, ghosty | `grandprix` |
| 30 | Minecraft Block Room | `blockroom` | diamondblock → blockchest | 34 | 166s | 280 | 8 | 0.7 | 0.2 | yes | bzombie, bskel, bspider, hisser | `blockgarden` |
| 31 | Roblox Avatar Roundup | `obbyroom` | avatar → avatarshelf | 35 | 169s | 290 | 8 | 0.7 | 0.2 | yes | roomba, invader, ghosty | `obby` |
| 32 | GTA V + VI Toy Room | `cityroom` | citytoys (alternating sportscar / cruiserbike) → citygarage | 36 | 172s | 300 | 8 | 0.7 | 0.2 | yes | roomba, dog, rat | `cityradio` |
| 33 | Charging Room Chaos | `chargingroom` | chargecable → cabledock | 37 | 175s | 310 | 8 | 0.7 | 0.2 | yes | zap, roomba, ant | `charging` |
| 34 | Halloween Haunt | `halloween` | carvedpumpkin → pumpkinbucket | 38 | 178s | 320 | 8 | 0.7 | 0.2 | yes | bat, spider, ghosty | `halloween` |
| 35 | Thanksgiving Feast | `thanksgiving` | pieslice → pietable | 39 | 181s | 330 | 9 | 0.7 | 0.2 | yes | turkey | `thanksgiving` |
| 36 | Christmas Cheer | `christmas` | gift → gifttree | 40 | 184s | 340 | 9 | 0.7 | 0.2 | yes | roomba, cat, hamster | `christmas` |
| 37 | Valentines Day Love | `valentine` | valentinecard → heartbox | 41 | 187s | 350 | 9 | 0.7 | 0.2 | yes | bubble, hamster, cat | `valentine` |
| 38 | St Patricks Day Luck | `stpatrick` | shamrock → luckypot | 42 | 190s | 360 | 9 | 0.7 | 0.2 | yes | squirrel, hamster, weed | `stpatrick` |
| 39 | April Fools Day Pranks | `aprilfools` | pranktoy → prankbox | 43 | 193s | 370 | 9 | 0.7 | 0.2 | yes | chomper, roomba, bubble | `aprilfools` |
| 40 | Easter Egg Hunt | `easter` | easteregg → eggbasket | 44 | 196s | 380 | 9 | 0.7 | 0.2 | yes | hamster, squirrel, bee | `easter` |
| 41 | Mother'S Day Blooms | `mothersday` | bouquet → momvase | 45 | 199s | 390 | 10 | 0.7 | 0.2 | yes | bee, hamster, squirrel | `mothersday` |
| 42 | Father'S Day Surprise | `fathersday` | necktie → dadrack | 46 | 202s | 400 | 10 | 0.7 | 0.2 | yes | roomba, dog, hamster | `fathersday` |
| 43 | The Whole House!! | `house` | mix → couch | 52 | 220s | 250 | 10 | 0.75 | 0.5 | yes | all critters | `mix` |

## Level Data Format

Each level is one object in the `LEVELS` array:

| Field | Meaning |
|---|---|
| `name` | Title shown on the intro card (ALL CAPS) |
| `difficultyIndex` | Difficulty step from the room's position: `round(position × 23 / (levels − 1))`, so 0 on Level 1 rising to 23 on the Whole House. Drives generation and critter speed; recompute it (and `gap`) for every room when rooms are added or reordered |
| `seed` | Fixed random seed for the layout (stays the same if levels are inserted or reordered) |
| `chore` | One-line chore description |
| `drop` | Drop-off sprite key (drawn in `drawDropRaw`) |
| `item` | Item sprite key (drawn in `drawItemRaw`); `"mix"` uses all item kinds |
| `count` | Number of items to collect |
| `time` | Time limit in seconds |
| `len` | Level length in 16-pixel tiles |
| `gap` | Widest ordinary pit, in tiles (3 on Level 1 rising to 10 near the end). Pits are `2 + floor(gap/3)` to `gap` tiles; over 7 needs a double jump |
| `enemies` | Critter types to spawn (see [03](03-characters-and-critters.md)) |
| `density` | Chance a suitable spot gets a critter |
| `lego` | Chance a flat run gets a LEGO brick |
| `movers` | `1` lets some gaps use moving platforms |
| `theme` | Key into `THEMES` (colors) and `drawBackground` (decorations) |
| `music` | Key into `STYLES` (or `"mix"` for the medley) |
| `text` | The intro text message |

`THEMES` entries define the colors `sky`, `wall2`, `ground`, `top`, `plat` and `ptop`, plus optional flags:

| Flag | Effect |
|---|---|
| `outdoor` | Outdoor sky and hills |
| `checker` | Checkerboard floor |
| `keys` | Piano-key platforms |
| `lounger` | Pool lounge-chair platforms |
| `splat` | Paint-splattered floor |
| `speck` | Speckled gym floor |
| `dark` | Flashlight darkness with caution stripes |
| `garden` | Garden flower beds |
| `studs` | Roblox-style studded baseplates and toy platforms |
| `road` | Asphalt-colored platforms and painted road markings in the GTA toy room |

## Level Generation Rules

- **Fixed seed:** each level has its own `seed`, which preserves its random sequence. Geometry also depends on the stored difficulty factor below: a changed difficulty setting can still change its layout. Adding or moving rooms changes their difficulty step (and so their layout), because difficulty follows position. New levels need a new, unused seed; recheck layouts after reordering.
- **Start and end:** the first 10 columns and last 16 columns are always flat, solid ground (the end zone is forced flat after generation, and long stepping-stone runs are not started within 60 tiles of the end), so the drop-off always sits on a platform. The drop-off sits near the end; wider drop-offs shift left so they stay on the flat ground. Most drop-offs are 70 px wide; the couch, giant robot and toy tote are narrower.
- **Difficulty curve:** `D = min(1, (difficultyIndex ?? level index) / 23)` runs from 0 on Level 1 to 1 on the Whole House, because `difficultyIndex` follows each room's position. It drives every building block:
  - **Pits** get wider (up to the level's `gap`) and more frequent, and late levels pick the widest sizes more often. Their landings get narrower (4–6 tiles early, 2–3 late) and can be higher or lower than the take-off.
  - **Stepping stones** (from about Level 7): two to four narrow pillars, 1–2 tiles wide, over open pits.
  - **Steps** grow from −1…+2 tiles early to −3…+5 late. A 5-tile climb needs a double jump.
  - **Moving-platform pits** widen from 6–8 tiles to 12–14, too wide to jump late in the game, so you have to ride. The platforms move slowly and steadily (42–60 px/s), because fast platforms just made levels annoying, not harder.
  - **Shelves** sit higher and get shorter, and **flat runs** get shorter.
- **Building blocks:** pits (sometimes with moving platforms), stepping stones, steps, shelves (one-way platforms, sometimes stacked) and flat runs with a critter or LEGO brick.
- **Jumpable:** a single jump clears 7 tiles on the flat and rises about 4 tiles; a perfect double jump clears about 11 tiles and rises about 8. Pits are capped so a perfect double jump has at least a 1-tile margin (10 tiles on the flat, 9 for a landing 1–2 tiles higher, 8 for 3 or more). The original 24-level physics check remains the baseline. Added rooms use the same capped pit and climb rules; full end-to-end playthroughs remain a separate check (see [07](07-backlog-and-known-issues.md)).
- **Item placement:** item spots are picked evenly along the level. If a level has fewer spots than `count`, it gets fewer items. Always check counts after editing (see [06](06-development-workflow.md)).

## Checklist: Adding a Level

1. **Level entry:** add an entry to `LEVELS` at the right position with a new `seed`, keeping item counts climbing by one and each time limit at least 3 s above the previous level (renumber later levels' counts and times).
2. **Theme:** add a `THEMES` entry and a `drawBackground` branch for the decorations.
3. **Item:** add the item sprite in `drawItemRaw` and a plural name in `ITEM_NAMES`. Add it to the `kinds` list used by the Whole House.
4. **Drop-off:** add the sprite in `drawDropRaw`. Then add its size settings next to `drawDrop`: width in `DROP_W` (default 56), draw scale in `DROP_SCALE` (default 2; use 1 for sprites drawn at full size) and the height of the HERE! label in `DROP_TOP`. Keep each key in each table only once, because a repeated key silently overrides the first one.
5. **Critters:** add any new critters to `drawEnemyRaw`, the speed table `sp`, and the Whole House critter list.
6. **Music:** add a song to `STYLES` and to `MIX` (see [04](04-audio.md)).
7. **Test:** check that the item count is correct and that the level is winnable (see [06](06-development-workflow.md)).
8. **Assets and docs:** record the MP3s, update the README and these docs, then add a changelog entry.

### Mixed toy pickups

MarioKart Toy Room uses `item: "kartbike"`; generation alternates `toykart` and `toybike` so both are guaranteed (17 karts and 16 bikes). Both toy types also appear in the Whole House mix.

GTA V + VI Toy Room uses `item: "citytoys"`; generation alternates `sportscar` and `cruiserbike` to guarantee 18 of each. Both toy types are also included in the Whole House mix.

## Room order and stable difficulty

Daniel’s Monster Jam Room and Colin’s Surf Shack are levels 3 and 4. Each room's `difficultyIndex` and `gap` follow its position, so the challenge climbs steadily through all 43 levels; seeds, timers and music are per room; Daniel and Colin now have 12/13 pickups. `buildLevel` uses `difficultyIndex` for its capped ramp, and `updateEnemies` uses it for speed. New levels without this field fall back to their current index. Counts and timers are now room-specific rather than increasing at every menu position.
