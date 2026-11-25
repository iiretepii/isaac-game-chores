# 07 – Backlog and Known Issues

## Known Issues and Inconsistencies

| # | Issue | Status |
|---|---|---|
| 1 | Item counts didn't strictly climb | **Fixed 2026-11-16.** Counts now run 10 → 45 across 36 levels, one more per level |
| 2 | Time limits dropped in three places | **Mostly fixed 2026-11-16.** Limits rise throughout, but Race Track gives 154 s after Pet Room's 152 s: a 2 s increase rather than the 3 s guideline |
| 3 | Whole House missed newer items and critters | **Fixed 2026-11-16.** It includes the newer toy collections (coins, karts, bikes, diamond blocks, avatars and sports cars) as well as weeds, test tubes, books and all current critter types |
| 4 | Time doubling made the clock trivial | **Fixed 2026-11-16.** Removed: items no longer add time, so the parents' car is a real threat. Other rooms retain low-time sibling rushes; the Whole House now has full-time collection help |
| 5 | Inserting a level reshuffled later layouts | **RNG reseeding fixed 2026-11-16.** Each room has a fixed `seed`. Geometry also uses index-based difficulty, so early insertions/reorders still need layout checks; late additions preserve the capped ramp |
| 6 | Unused sprites | **Fixed 2026-11-16.** Removed `sock`, `hamper`, `markercup`, `shredder` and `sink` |
| 7 | Basement "auto-moving" report | Open. Not reproduced; visibility improved; waiting for feedback |
| 8 | Recording volumes differ from the game | Won't fix. Every MP3 is normalized on its own for listening, so the gentle songs sound louder in the recordings than in the game (where volumes are leveled) |
| 9 | Duplicate legacy music code | Won't fix. `SONG`, `kazoo` and `softLead` are still used by the rock song and win jingle |
| 10 | Time limits not yet play-tested without doubling | Open. Limits rise steadily, but they haven't been checked by playing every level since time doubling was removed |

## Ideas and Backlog

- **Persistence:** save progress and high scores in `localStorage` (per-browser).
- **Level select:** **Done 2026-11-16** (title screen → LEVEL SELECT). Possible follow-up: lock levels until reached, or 90s-style passwords.
- **Accessibility:** a volume slider, a reduced-motion option, and remappable keys.
- **Seeds:** **Done 2026-11-16.**
- **Cleanup:** unused sprites **removed 2026-11-16**; legacy music code kept (still in use).
- **Phones:** try on-screen controls on more phones; consider a landscape lock or hint.
