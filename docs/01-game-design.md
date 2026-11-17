# 01 – Game Design

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
| Time limit | Set per level (see [02 – Levels](02-levels.md)) |
| Hit by a critter or LEGO brick | −5 seconds, knock-back, 1.5 s of invincibility |
| Falling into a gap | −5 seconds, respawn on the last safe ground |
| Siblings get hurt or fall | No penalty: they bounce off hazards and pop back after a fall |
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

- **Item count:** starts at 10 and rises by exactly one per level (Whole House: 31).
- **Time limit:** rises with item count; each level allows at least 3 seconds more than the one before. Picking up items does **not** add time.
- **Length:** stays fairly even, from 170 tiles at the start to about 210 near the end. The finale is 250.
- **Rising challenge:** gap size, critter density, LEGO bricks and moving platforms increase over the game.
- **The finale:** *The Whole House!!* mixes items and critters from every room.

## Content and Tone Guidelines

- **Kid-friendly:** potty humor is fine at a cartoon level. Nothing scary beyond "spooky basement" and nothing violent: critters are stomped with a "boing" and puff away.
- **Original content only:** don't copy characters, art, logos or music from existing games, movies or brands. Use original designs "in the style of" instead. Examples already in the game: a hissing bush-block instead of a Minecraft creeper, an original neon light-bike instead of a Tron bike, an original princess waltz instead of Disney songs, and generic "dolls" instead of the Barbie name.
- **Public-domain music is fine:** quoting it is allowed (Für Elise, Jingle Bells, Ode to Joy and others in the Music Room).
- **The family:** the family names are Isaac, Annie, Mom and Uncle Pete.
