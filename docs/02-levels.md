# 02 – Levels

## Level Table

Generated from the `LEVELS` array in `index.html`.

| # | Level | Theme | Item → Drop-off | Items | Time | Length (tiles) | Max gap | Critter density | LEGO chance | Moving platforms | Critters | Music |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Isaac's Room | `bedroom` | dragon → toychest | 10 | 94s | 170 | 1 | 0.4 | 0 | no | bzombie, bskel, bspider, hisser | `rock` |
| 2 | Annie's Room | `annie` | doll → dollhouse | 11 | 98s | 173 | 1 | 0.45 | 0 | no | tabby, husky, pom | `princess` |
| 3 | Kitchen Catastrophe | `kitchen` | dish → dishwasher | 12 | 101s | 175 | 2 | 0.45 | 0 | no | dust, roach | `jazz` |
| 4 | Living Room Lego-Land | `living` | toy → toybox | 13 | 104s | 178 | 2 | 0.5 | 0.4 | no | roomba, cat | `pop` |
| 5 | Backyard Bonanza | `yard` | leaf → bag | 14 | 107s | 181 | 3 | 0.55 | 0.2 | yes | dog, bee | `hiphop` |
| 6 | Garden Glow-Up | `garden` | oldflower (weeds) → compost | 15 | 110s | 183 | 3 | 0.62 | 0 | yes | weed | `garden` |
| 7 | Pool Party Panic | `pool` | towel → towelbasket | 16 | 113s | 183 | 3 | 0.58 | 0 | yes | duck, goose, swan, squirrel | `pool` |
| 8 | Garage of Doom | `garage` | trash → can (dumpster) | 17 | 116s | 186 | 3 | 0.62 | 0.45 | yes | rat, roomba, bee | `techno` |
| 9 | Laundry Room Pee-Yew! | `laundry` | undies → washer | 18 | 119s | 189 | 3 | 0.64 | 0.3 | yes | bubble, dust, roach | `polka` |
| 10 | Bathroom Blunder | `bathroom` | poop → toilet | 19 | 122s | 191 | 3 | 0.66 | 0.3 | yes | bubble, roach, spider | `crooner` |
| 11 | Home Office Havoc | `office` | paper → recycle | 20 | 125s | 194 | 3 | 0.68 | 0.3 | yes | ant, spider, hamster | `muzak` |
| 12 | Library Book Roundup | `library` | book → libraryshelf | 21 | 128s | 197 | 2 | 0.45 | 0 | yes | dust, spider, hamster | `library` |
| 13 | Music Room Mayhem | `musicroom` | score → bookshelf | 22 | 131s | 197 | 3 | 0.7 | 0.3 | yes | cat, spider, roach | `practice` |
| 14 | Arts & Crafts Chaos | `arts` | paint → paintshelf | 23 | 134s | 199 | 3 | 0.7 | 0.35 | yes | ant, cat, bubble | `french2` |
| 15 | Tech Room Trouble | `tech` | robot → workbench | 24 | 137s | 202 | 3 | 0.75 | 0.35 | yes | zap | `silly` |
| 16 | Science Lab Scramble | `science` | testtube → labrack | 25 | 140s | 204 | 3 | 0.7 | 0.2 | yes | slime, bubble, zap | `science` |
| 17 | Workout Room Workout | `gym` | weight → weightrack | 26 | 143s | 205 | 3 | 0.76 | 0.35 | yes | rat, cat, dog, mite | `workout` |
| 18 | The Spooky Basement | `basement` | shirt → dryer | 27 | 146s | 207 | 3 | 0.66 | 0.3 | yes | spider, rat, dust | `romantic` |
| 19 | Attic of Antiques | `attic` | ornament → trunk | 28 | 149s | 210 | 3 | 0.7 | 0.35 | yes | bat, spider, rat | `baroque` |
| 20 | The Whole House!! | `house` | mix → couch | 29 | 155s | 250 | 3 | 0.75 | 0.5 | yes | all critters | `mix` |

## Level Data Format

Each level is one object in the `LEVELS` array:

| Field | Meaning |
|---|---|
| `name` | Title shown on the intro card (ALL CAPS) |
| `seed` | Fixed random seed for the layout (stays the same if levels are inserted or reordered) |
| `chore` | One-line chore description |
| `drop` | Drop-off sprite key (drawn in `drawDropRaw`) |
| `item` | Item sprite key (drawn in `drawItemRaw`); `"mix"` uses all item kinds |
| `count` | Number of items to collect |
| `time` | Time limit in seconds |
| `len` | Level length in 16-pixel tiles |
| `gap` | Extra gap width allowed; ordinary gaps are 2 to (1 + gap) tiles |
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

## Level Generation Rules

- **Fixed seed:** each level has its own `seed` field, so inserting or reordering levels never changes another level's layout. New levels should get a new, unused seed (for example `777 + n × 1013` for the next unused `n`).
- **Start and end:** the first 10 columns and last 16 columns are flat. The drop-off sits near the end; extra-wide drop-offs (couch, tote, castle) shift left.
- **Building blocks:** pits (sometimes with moving platforms), steps (−2 to +3 tiles), shelves (one-way platforms, sometimes stacked) and flat runs with a critter or LEGO brick.
- **Jumpable:** every generated gap and step is within the player's jump.
- **Item placement:** item spots are picked evenly along the level. If a level has fewer spots than `count`, it gets fewer items. Always check counts after editing (see [06](06-development-workflow.md)).

## Checklist: Adding a Level

1. **Level entry:** add an entry to `LEVELS` at the right position with a new `seed`, keeping item counts climbing by one and each time limit at least 3 s above the previous level (renumber later levels' counts and times).
2. **Theme:** add a `THEMES` entry and a `drawBackground` branch for the decorations.
3. **Item:** add the item sprite in `drawItemRaw` and a plural name in `ITEM_NAMES`. Add it to the `kinds` list used by the Whole House.
4. **Drop-off:** add the sprite in `drawDropRaw`. If it's wider than 28 px, add its width to the drop-width table in `buildLevel`.
5. **Critters:** add any new critters to `drawEnemyRaw`, the speed table `sp`, and the Whole House critter list.
6. **Music:** add a song to `STYLES` and to `MIX` (see [04](04-audio.md)).
7. **Test:** check that the item count is correct and that the level is winnable (see [06](06-development-workflow.md)).
8. **Assets and docs:** record the MP3s, update the README and these docs, then add a changelog entry.
