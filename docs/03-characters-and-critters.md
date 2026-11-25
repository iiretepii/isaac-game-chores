# 03 – Characters and Critters

## The Player

- **Look:** a kid in a backwards yellow cap and red shirt, riding a turquoise **bicycle** with spinning spokes and moving pedals.
- **Hitbox:** 10 × 14 px standing, 10 × 8 px ducking. You can only stand back up when there's headroom.
- **Moves:** run, variable-height jump, one double jump, duck.
- **MarioKart Toy Room:** the player drives a red Standard Kart; Isaac rides a Flame Rider with Hot Wheels and Annie a pink Sport Bike. These are hand-drawn pixel-art versions of MarioKart 8 Deluxe vehicle models, rendered only in that room during intro, play, pause and chore-complete scenes. Controls and collision boxes are unchanged; Annie retains her balloon.
- **Greeting:** when the siblings appear, the player says a random greeting in a speech bubble (21 options in `GREETINGS`, such as "HEY PAL!", "NO CAP, HI!" and "Sup Bro!").

## Siblings: Isaac and Annie

| | Annie (little sister) | Isaac (big brother) |
|---|---|---|
| Look | Pigtails, pretty pink dress, pink balloon | Red shirt, blue cap, blue-and-red name label |
| Ride | Purple skateboard; pink Sport Bike in MarioKart Toy Room; pink race car #2 on the race track | Original **neon light-bike**: black body, red neon edges, glowing disc wheels, red light trail (Flame Rider with Hot Wheels in MarioKart Toy Room; blue-and-red race car #3 on the race track) |
| Speed | 176 px/s | 176 px/s |
| Follows at | 24 px behind the player | 62 px behind the player |
| Starts collecting at | Immediately in her room and the Whole House; **33%** of the time limit left elsewhere | Immediately in his room and the Whole House; **20%** elsewhere |
| Arrival line | "I'll help all day! (for cookies)" | "Vrrrm! Neon light-bike, baby!" |
| Rush line | "Time's running out! I'll grab some!" | "Turbo mode! I got this!" |

**Abilities** (both have the `ace` flag in `SIBS`; Annie is just as good as Isaac):
- They look further ahead for walls, gaps and critters (12 px versus 4 px; critters 70 px versus 44 px). Outside their own bedroom and the Whole House, they hunt the first live critter in the enemy list that is within 280 px horizontally of the player, 320 px horizontally of the sibling and 90 px vertically of the sibling, ahead of following or collecting. Their rides defeat any critter they touch from any side ("ZAP! +100"), with a slightly bigger zap area than their bodies.
- Neither sibling fumbles obstacles or trips.
- **Annie's balloon** (`balloon:1` in `SIBS`): she carries a pink balloon on a string. When she is in the air and no longer rising fast (`vy > -60`), gravity drops from 1300 to 680 px/s² and her fall speed is capped at 230 px/s (normally 600), giving a short float at the top of each jump and a gentle descent. Her name label sits above the balloon.
- **Annie's outfit** (`dress:1` in her palette): a pink dress with puff sleeves, a bow at the waist and a flared, ruffled skirt, drawn over the usual kid sprite in `drawKidRaw`.
- **Race cars** (`drawRaceCar`, used when `onRaceTrack()`): on Race Track Rumble the player (orange car #1, white helmet), Annie (pink car #2, pink helmet, still with her balloon) and Isaac (blue car #3 with a red stripe and red helmet, his favorite colors) drive race cars instead of the bike, skateboard and light-bike. Everyone wears a striped racing helmet with a dark visor. Only the look changes; hitboxes and physics are the same.
- **Isaac's name label** is blue with a red shadow (his favorite colors) on every level. He wears a red shirt and a blue cap (palette `shirt: #e53935`, `cap: #1e88e5`).

**Behavior spec:**
- **Arrival:** both appear next to the player as soon as the level starts.
- **Normal mode:** outside their own bedroom and the Whole House, they follow a spot behind the player and stop and face the same way when the player stops.
- **Their own rooms:** Isaac collects immediately in Isaac’s Room, and Annie collects immediately in Annie’s Room, prioritizing chores over hunting. The other sibling retains their usual timer threshold.
- **Whole House:** both enter collection mode immediately and remain in it for the entire level. Chore collection takes priority over hunting nearby critters; contact zaps and stomps still work.
- **Rush mode:** throughout their own bedroom and the Whole House, or when the time left elsewhere is at or below their threshold, they pick items (penalizing ones near critters in the target score, splitting work between them, giving up on an item after 2 s without progress and retrying it 4 s later) and drive to them.
- **Physics:** terrain collisions match the player (walls, one-way and moving platforms); Annie's balloon changes her gravity and fall speed as described above. The AI decides when to jump (walls, gaps, critters, LEGO), double jump (over pits, up to high items) and duck (low ceilings).
- **Damage:** downward stomps defeat critters (+100) and bounce the sibling upward; other critter contact triggers their ace zap (+100). LEGO hits bounce them back ("OOPS!") and falls respawn them on safe ground ("BACK!"). Neither costs time.
- **Delivery:** siblings never deliver; only the player can finish the level.

## The Parents: Mom and Uncle Pete

Drawn by `drawMom(x,y,mood)` and `drawPete(x,y,mood)` as 22 × 52 px figures with the usual outline (`mood` 1 = angry, 0 = happy).

| | Mom | Uncle Pete |
|---|---|---|
| Look | Very pretty: long black hair with side-swept bangs, lashes, blush, gold earrings, purple dress | Very handsome: swooped brown hair, strong jaw, blue button-up shirt with a light collar, belt, dark pants |
| Lose screen ("Parents are home!") | Very mad (`parentMad`): V eyebrows, squinting eyes, red cheeks, open frown with gritted teeth, anger mark, steam | Same very mad face. Both are animated yelling: mouths flap open and shut with shout lines, a shaking fist goes up (`madArm`), and they bounce and jitter |
| Victory screen | Smiling, standing to the left of the kids | Grinning, standing to the right of the kids |

## Critters

Speeds are in pixels per second; levels run about 6% faster per level index. "Fly" critters bob on a sine wave along a short path. "Walk" critters patrol and turn at walls, gaps and LEGO bricks. Any critter can be stomped from above.

| Key | Critter | Movement | Speed | Levels |
|---|---|---|---|---|
| `dust` | Dust bunny | walk | 30 | 3, 9, 12, 18, 29 |
| `roach` | Cockroach | walk | 55 | 3, 9, 10, 13, 29 |
| `roomba` | Robot vacuum | walk | 75 | 4, 8, 21, 23, 24, 26, 27, 28, 29 |
| `cat` | Cat | walk | 50 | 4, 13, 14, 17, 29 |
| `dog` | Dog | walk + hop | 90 | 5, 17, 27, 29 |
| `rat` | Rat | walk | 65 | 8, 17, 18, 19, 27, 29 |
| `bee` | Bee | fly | 40 | 5, 8, 29 |
| `spider` | Spider | walk | 60 | 10, 11, 12, 13, 18, 19, 29 |
| `bat` | Bat | fly | 55 | 19, 29 |
| `bubble` | Soap bubble | fly | 35 | 9, 10, 14, 16, 29 |
| `zap` | Lightning bolt | fly (jittery) | 65 | 15, 16, 28, 29 |
| `ant` | Ant | walk | 70 | 11, 14, 28, 29 |
| `hamster` | Hamster | walk + hop | 85 | 11, 12, 20, 23, 29 |
| `mite` | Dust mite | walk | 45 | 17, 29 |
| `bzombie` | Blocky zombie | walk | 32 | 1, 25, 29 |
| `bskel` | Blocky skeleton | walk | 42 | 1, 25, 29 |
| `bspider` | Blocky spider | walk | 62 | 1, 25, 29 |
| `hisser` | Hissing bush-block (original; flashes when near) | walk | 38 | 1, 25, 29 |
| `tabby` | Orange tabby cat | walk | 50 | 2, 20, 29 |
| `husky` | Husky | walk + hop | 72 | 2, 29 |
| `pom` | Pomeranian | walk + hop | 80 | 2, 20, 29 |
| `duck` | Duck | walk | 40 | 7, 29 |
| `goose` | Goose (flashes HONK) | walk | 60 | 7, 21, 29 |
| `swan` | Swan | walk | 35 | 7, 29 |
| `invader` | Pixel space invader (original 8-bit alien, legs flick every frame) | fly | 45 | 22, 26, 29 |
| `chomper` | Yellow chomper that opens and closes its mouth, munching dots | walk | 72 | 22, 29 |
| `ghosty` | Cyan arcade ghost with a wavy hem and eyes that look where it goes | walk | 52 | 22, 24, 26, 29 |
| `squirrel` | Squirrel | walk + hop | 85 | 7, 21, 24, 29 |
| `weed` | Walking weed | walk | 38 | 6, 29 |
| `slime` | Slime | walk | 42 | 16, 23, 29 |

## Chore Items and Drop-offs

| Level | Item (sprite key) | Drop-off (sprite key) |
|---|---|---|
| Isaac's Room | `dragon` | `toychest` |
| Annie's Room | `doll` | `dollhouse` (wide Neuschwanstein-style castle) |
| Kitchen Catastrophe | `dish` | `dishwasher` (built into a counter) |
| Living Room Lego-Land | `pillow` (fluffy throw pillow in 10 colors) | `creamcouch` (wide cream sofa, 56 px like the ending couch, with no pillows on it) |
| Backyard Bonanza | `leaf` | `bag` |
| Garden Glow-Up | `oldflower` (pulled-up dandelion clump: toothed leaves, yellow flowers, a white puffball, dirt and roots) | `compost` |
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
| Money Room Millions | `coin` (gold coins) | `coinchest` (a wide wooden chest with gold bands) |
| MarioKart Toy Room | `toykart` / `toybike` (miniature karts and bikes with red- or green-capped drivers) | `kartgarage` (two-tier display garage) |
| Minecraft Block Room | `diamondblock` (isometric turquoise toy diamond blocks) | `blockchest` (wide wooden storage chest with blocks inside) |
| Roblox Avatar Roundup | `avatar` (classic yellow noobs, red-capped Guests, builders and modern hair avatars) | `avatarshelf` (two-tier display shelf) |
| GTA V + VI Toy Room | `sportscar` / `cruiserbike` (colorful toy sports cars and motorcycles) | `citygarage` (neon two-tier display garage) |
| Charging Room Chaos | `chargecable` (coiled charging cables in four colors, with USB-style plugs) | `cabledock` (wall organizer with cable hooks and a charging strip) |
| The Whole House!! | `mix` (including the same colorful `pillow` collectibles as Living Room) | `couch` (reuses `creamcouch` with matching red, yellow and blue throw pillows) |

Some sprites change by position (`itemSeed`), including paint-bucket colors, robot-part shapes (gear, head, claw, battery), weight types (dumbbell, kettlebell, plate), towel colors, pillows and game controllers.


