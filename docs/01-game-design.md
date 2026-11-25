# 01 – Game Design

This document describes the original 2D game. See [09 – 3D Fork](09-3d-fork.md) for the separate 3D adaptation.

## Vision

*Chore Rush!* is a 90s-style side-scrolling platformer for kids and families. You race through the rooms of a house (and the yard) doing chores before Mom and Uncle Pete get home. It should feel like a goofy Saturday-morning cartoon: bright, fast, silly and never mean.

*A Belvoir Studios game, made by Isaac & Pete.*

## Design Pillars

1. **Silly first.** Every room has a gag, from stinky underwear and runaway poops to walking weeds and a kid practicing piano. Text messages, critters and music lean into humor.
2. **Each room is its own world.** Every level has a unique chore, drop-off spot, critters, background art and music genre.
3. **Easy to pick up.** Move, jump, duck. There are no lives and no game over: you can always retry.
4. **Family help.** Isaac and Annie (the siblings) ride along and help, so the game feels cooperative.
5. **One file, works anywhere.** The whole game is a single `index.html` that runs in any browser, on desktop or phone, with no install.

## Core Loop

1. **Intro card:** a text message from Mom or Uncle Pete explains the chore and the "now playing" song.
2. **Collect:** ride through the level picking up every chore item, while avoiding critters, LEGO bricks and gaps.
3. **Deliver:** when everything is collected, the drop-off spot glows and shows **HERE!** Ride into it to finish.
4. **Level select:** from the title screen, or from the "Chore Complete!" screen after any level, any level can be started directly.
5. **Result:** finish to get a time bonus and a funny parent reaction. If time runs out, the parents arrive ("YOU'RE GROUNDED UNTIL YOU'RE 40!") and you retry the level.

## Rules

| Rule | Value |
|---|---|
| Time limit | Set per level (see [02 – Levels](02-levels.md)); pickups do not add time |
| Hit by a critter or LEGO brick | −5 seconds, knock-back, 1.5 s of invincibility |
| Falling into a gap | −5 seconds, respawn on the last safe ground |
| Siblings get hurt or fall | No time penalty; their ace vehicles zap critters on contact, LEGO hits bounce them back, and falls respawn them |
| Last 15 seconds | Screen flashes red, music speeds up 8% |
| 10 seconds left | "HONK HONK!" warning |

## Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move | Arrow keys or A / D | ◀ ▶ |
| Jump (hold for higher) | Space, Up, W or Z | JUMP |
| Double jump | Jump again in mid-air | JUMP again |
| Duck | Down or S | DUCK |
| Start / continue | Enter, Space, click or tap | Tap |
| Level select (title or Chore Complete screen) | L, arrows, Enter, Esc | Tap LEVEL SELECT, tap a level |
| Pause | P or Esc | — |
| Mute | M | — |

Browsers block sound until the player interacts, so the title screen first asks for a click or key press.

## Scoring

| Event | Points |
|---|---|
| Player collects an item | +50 |
| Sibling collects an item | +25 |
| Stomp a critter (player or sibling) | +100 |
| Finish a level | +10 for every second left |

## Difficulty Curve Guidelines

- **Item count:** starts at 10 and rises by exactly one per level (38 levels, ending with 47 in the Whole House).
- **Time limit:** rises with item count; most levels allow 3 seconds more than the one before (the opening increase is 4 seconds; Race Track currently adds 2 seconds). Picking up items does **not** add time.
- **Length:** is usually 170–216 tiles. Money Room is 260 tiles, MarioKart Toy Room is 270, Minecraft Block Room is 280, Roblox Avatar Roundup is 290, GTA V + VI Toy Room is 300, Charging Room Chaos is 310, and the finale is 250. Some adjacent rooms share the same length.
- **Rising challenge:** the game gets steadily harder. Early levels only have small single-jump gaps. Later levels add wider pits that need a well-timed double jump (8–10 tiles), bigger climbs, narrow stepping stones and long pits you can only cross by riding a moving platform. Critter density and LEGO bricks also increase. Moving platforms stay slow and steady instead of getting faster.
- **The finale:** *The Whole House!!* mixes items and critters from every room. Isaac and Annie collect from the start and help throughout, prioritizing chores rather than hunting detours.

## Content and Tone Guidelines

- **Kid-friendly:** potty humor is fine at a cartoon level. Nothing scary beyond "spooky basement" and nothing violent: critters are stomped with a "boing" and puff away.
- **Hand-drawn toy-room art:** draw props, toys and scenery in the game's own pixel-art style. The requested MarioKart, Minecraft, Roblox and GTA V/VI toy rooms reference those games with miniature vehicles, blocks, avatars and city landmarks; no external game sprite files are loaded.
- **Soundtracks:** the themed toy rooms use original compositions, not recordings from those games. Public-domain arrangements elsewhere are listed below.
- **Public-domain music is fine:** quoting it is allowed (Mozart's Rondo alla Turca, Chopin's Nocturne Op. 9 No. 1, Ode to Joy and others in the Music Room, and Vivaldi's Winter in the Money Room).
- **The family:** the family names are Isaac, Annie, Mom and Uncle Pete. Mom has long black hair and a purple dress; Uncle Pete has brown hair and a navy Chicago Bears #34 jersey with orange-and-white sleeve stripes. They appear on the "Parents are home!" screen (angry) and the victory screen (smiling).
