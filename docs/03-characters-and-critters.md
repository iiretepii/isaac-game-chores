# 03 – Characters and Critters

## The Player

- **Look:** a kid in a backwards yellow cap and red shirt, riding a turquoise **bicycle** with spinning spokes and moving pedals.
- **Hitbox:** 10 × 14 px standing, 10 × 8 px ducking. You can only stand back up when there's headroom.
- **Moves:** run, variable-height jump, one double jump, duck.
- **Greeting:** when the siblings appear, the player says a random greeting in a speech bubble (21 options in `GREETINGS`, such as "HEY PAL!", "NO CAP, HI!" and "Sup Bro!").

## Siblings: Isaac and Annie

| | Annie (little sister) | Isaac (big brother) |
|---|---|---|
| Look | Pigtails, pretty pink dress, pink balloon | Red shirt, blue cap, blue-and-red name label |
| Ride | Purple skateboard (pink race car #2 on the race track) | Original **neon light-bike**: black body, red neon edges, glowing disc wheels, red light trail (blue-and-red race car #3 on the race track) |
| Speed | 176 px/s | 176 px/s |
| Follows at | 24 px behind the player | 62 px behind the player |
| Starts collecting at | **33%** of the time limit left | **20%** of the time limit left |
| Arrival line | "I'll help all day! (for cookies)" | "Vrrrm! Neon light-bike, baby!" |
| Rush line | "Time's running out! I'll grab some!" | "Turbo mode! I got this!" |

**Abilities** (both have the `ace` flag in `SIBS`; Annie is just as good as Isaac):
- They look further ahead for walls, gaps and critters (12 px versus 4 px; critters 70 px versus 44 px). Whenever a live critter is within 280 px of the player, they ride to it, ahead of following or collecting. Their rides defeat any critter they touch from any side ("ZAP! +100"), with a slightly bigger zap area than their bodies.
- Neither sibling fumbles obstacles or trips.
- **Annie's balloon** (`balloon:1` in `SIBS`): she carries a pink balloon on a string. When she is in the air and no longer rising fast (`vy > -60`), gravity drops from 1300 to 680 px/s² and her fall speed is capped at 230 px/s (normally 600), giving a short float at the top of each jump and a gentle descent. Her name label sits above the balloon.
- **Annie's outfit** (`dress:1` in her palette): a pink dress with puff sleeves, a bow at the waist and a flared, ruffled skirt, drawn over the usual kid sprite in `drawKidRaw`.
- **Race cars** (`drawRaceCar`, used when `onRaceTrack()`): on Race Track Rumble the player (orange car #1, white helmet), Annie (pink car #2, pink helmet, still with her balloon) and Isaac (blue car #3 with a red stripe and red helmet, his favorite colors) drive race cars instead of the bike, skateboard and light-bike. Everyone wears a striped racing helmet with a dark visor. Only the look changes; hitboxes and physics are the same.
- **Isaac's name label** is blue with a red shadow (his favorite colors) on every level. He wears a red shirt and a blue cap (palette `shirt: #e53935`, `cap: #1e88e5`).

**Behavior spec:**
- **Arrival:** both appear next to the player as soon as the level starts.
- **Normal mode:** they follow a spot behind the player and stop and face the same way when the player stops.
- **Rush mode:** when the time left is at or below their threshold, they pick items (avoiding ones near critters, splitting work between them, giving up on an item after 2 s without progress and retrying it 4 s later) and drive to them.
- **Physics:** the same as the player (gravity, walls, one-way and moving platforms). The AI decides when to jump (walls, gaps, critters, LEGO), double jump (over pits, up to high items) and duck (low ceilings).
- **Damage:** they stomp critters (+100). Critter or LEGO hits just bounce them back ("OOPS!"), and falls respawn them on safe ground ("BACK!"). Neither costs time.
- **Delivery:** siblings never deliver; only the player can finish the level.

## Critters

Speeds are in pixels per second; levels run about 6% faster per level index. "Fly" critters bob on a sine wave along a short path. "Walk" critters patrol and turn at walls, gaps and LEGO bricks. Any critter can be stomped from above.

| Key | Critter | Movement | Speed | Levels |
|---|---|---|---|---|
| `dust` | Dust bunny | walk | 30 | 3, 9, 12, 18 |
| `roach` | Cockroach | walk | 55 | 3, 9, 10, 13 |
| `roomba` | Robot vacuum | walk | 75 | 4, 8 |
| `cat` | Cat | walk | 50 | 4, 13, 14, 17 |
| `dog` | Dog | walk + hop | 90 | 5, 17 |
| `rat` | Rat | walk | 65 | 8, 17, 18, 19 |
| `bee` | Bee | fly | 40 | 5, 8 |
| `spider` | Spider | walk | 60 | 10, 11, 12, 13, 18, 19 |
| `bat` | Bat | fly | 55 | 19 |
| `bubble` | Soap bubble | fly | 35 | 9, 10, 14, 16 |
| `zap` | Lightning bolt | fly (jittery) | 65 | 15, 16 |
| `ant` | Ant | walk | 70 | 11, 14 |
| `hamster` | Hamster | walk + hop | 85 | 11, 12 |
| `mite` | Dust mite | walk | 45 | 17 |
| `bzombie` | Blocky zombie | walk | 32 | 1 |
| `bskel` | Blocky skeleton | walk | 42 | 1 |
| `bspider` | Blocky spider | walk | 62 | 1 |
| `hisser` | Hissing bush-block (original; flashes when near) | walk | 38 | 1 |
| `tabby` | Orange tabby cat | walk | 50 | 2 |
| `husky` | Husky | walk + hop | 72 | 2 |
| `pom` | Pomeranian | walk + hop | 80 | 2 |
| `duck` | Duck | walk | 40 | 7 |
| `goose` | Goose (flashes HONK) | walk | 60 | 7 |
| `swan` | Swan | walk | 35 | 7 |
| `invader` | Pixel space invader (original 8-bit alien, legs flick every frame) | fly | 45 | 22 |
| `chomper` | Yellow chomper that opens and closes its mouth, munching dots | walk | 72 | 22 |
| `ghosty` | Cyan arcade ghost with a wavy hem and eyes that look where it goes | walk | 52 | 22 |
| `squirrel` | Squirrel | walk + hop | 85 | 7 |
| `weed` | Walking weed | walk | 38 | 6 |
| `slime` | Slime | walk | 42 | 16 |

## Chore Items and Drop-offs

| Level | Item (sprite key) | Drop-off (sprite key) |
|---|---|---|
| Isaac's Room | `dragon` | `toychest` |
| Annie's Room | `doll` | `dollhouse` (wide Neuschwanstein-style castle) |
| Kitchen Catastrophe | `dish` | `dishwasher` (built into a counter) |
| Living Room Lego-Land | `pillow` (fluffy throw pillow in 10 colors) | `creamcouch` (wide cream sofa, 56 px like the ending couch, with no pillows on it) |
| Backyard Bonanza | `leaf` | `bag` |
| Garden Glow-Up | `oldflower` (pulled weeds) | `compost` |
| Pool Party Panic | `towel` | `towelbasket` |
| Garage of Doom | `trash` (tied black trash bag, crushed soda can with a banana peel, or apple core and fish bones, with stink lines) | `can` (a big green dumpster) |
| Laundry Room Pee-Yew! | `undies` | `washer` (washer, dryer and hamper) |
| Bathroom Blunder | `poop` | `toilet` |
| Home Office Havoc | `paper` | `recycle` |
| Library Book Roundup | `book` | `libraryshelf` |
| Music Room Mayhem | `score` | `bookshelf` |
| Arts & Crafts Chaos | `paint` | `paintshelf` |
| Tech Room Trouble | `robot` | `workbench` (a very big robot) |
| Science Lab Scramble | `testtube` | `labrack` |
| Workout Room Workout | `weight` | `weightrack` |
| The Spooky Basement | `shirt` | `dryer` (washer, dryer and hamper) |
| Attic of Antiques | `ornament` | `trunk` |
| Pet Room Pandemonium | `chewtoy` (squeaky bone, ball or rubber mouse) | `petbasket` (wicker toy basket with a napping puppy) |
| Race Track Rumble | `tire` (racing tire with a silver rim) | `tirerack` (red metal tire shelf) |
| Game Room Glitch | `videogame` (a variety of game controllers: classic flat pad, rounded pad with colored buttons, arcade joystick, twin-stick pad) | `gameshelf` (CRT TV showing an alien, a console and spots for controllers) |
| The Whole House!! | `mix` | `couch` |

Some sprites change by position (`itemSeed`): markers and paint-bucket colors, robot-part shapes (gear, head, claw, battery), weight types (dumbbell, kettlebell, plate) and towel colors.


