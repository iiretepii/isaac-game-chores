# 07 – Backlog and Known Issues

## Known Issues and Inconsistencies

| # | Issue | Details |
|---|---|---|
| 1 | Item counts don't strictly climb | Garden (15) = Pool (15), Library (20) = Music Room (20), Science Lab (23) = Workout Room (23) |
| 2 | Time limit drops | Garden 108s → Pool 106s; Library 118s → Music Room 116s; Science Lab 124s → Workout Room 122s |
| 3 | Whole House is missing newer content | Its item `kinds` list lacks `oldflower`, `testtube` and `book`; its critter list lacks `weed`, `slime`, `hisser` and `swan` |
| 4 | Time doubling makes the clock trivial | Every pickup doubles the time, so the parents' car rarely matters, the end-of-level bonus can be enormous, and Isaac's 10% rush rarely happens because Annie's pickups refill the clock first |
| 5 | Inserting a level reshuffles layouts | The seed depends on the level index, so every later level gets a new layout |
| 6 | Unused sprites | `sock`, `hamper`, `markercup`, `shredder` and `sink` are still in the code |
| 7 | Basement "auto-moving" report | Not reproduced in testing. Visibility was improved (brighter light, caution stripes, glowing platforms); waiting for feedback |
| 8 | Library recording volume | The MP3 is normalized and sounds much louder than in the game |
| 9 | Duplicate legacy music code | `SONG`, `kazoo` and `softLead` remain from early versions (still used by the rock and win jingles) |

## Ideas and Backlog

- **Time doubling:** make it optional, cap it, or replace it with "+X seconds".
- **Sibling rush:** decide whether siblings keep rushing once triggered, instead of returning to following when the clock refills.
- **Persistence:** save progress and high scores in `localStorage` (per-browser).
- **Level select:** a level select screen, or a password system, 90s-style.
- **Accessibility:** a volume slider, a reduced-motion option, and remappable keys.
- **Seeds:** a per-level seed field so inserting a level doesn't change the others.
- **Cleanup:** remove unused legacy sprites and code.
- **Phones:** try on-screen controls on more phones; consider a landscape lock or hint.
