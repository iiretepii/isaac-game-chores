# 08 – Changelog

Grouped by milestone. See `git log` for every commit.

## 2026-11-17
- **Ending song faster and more celebratory:** tempo up from 132 to 148 BPM, with handclaps, bell runs and synthesized crowd cheers at the key change and the final chord.
- **Ending song more triumphant:** fuller horn fanfare with tuba and low brass, a march bass, the melody doubled by horns throughout, a soaring octave on the key change, and a broader, slowing finale with crashes and a wider final chord.
- **Sibling personalities:** Annie is accident prone (fumbles obstacles, trips). Isaac is an ace (looks further ahead, hunts critters, his light-bike zaps critters on contact).
- **Siblings:** no more time penalties for Isaac and Annie when they get bumped or fall.
- **Volume leveling:** every song now plays at a similar volume, using a per-song trim.
- **New songs:** three songs written by parallel agents. Library: *Marginalia for Four Strings* (Janáček-style string quartet). Science Lab: *Mad Science Slam* (90s science-TV funk). Garden: *Seashell Sunday* (Beatles-style sing-along).
- **Recordings:** the three new songs are recorded, and the medley is re-recorded.
- **Ending song:** the ending screen now plays *Victory Fugue*, a fanfare written as a four-voice fugue (no parallel fifths or octaves), first scored for brass, then rescored for clarinets with the timpani removed, then rewritten with wider spacing and no clashing intervals between voices, then expanded into a full 31-bar fugue (running countersubject, modulations to A major, B minor and G major, augmentation in the bass), then moved to pipe organ with the countersubject in steady eighths and the drums and percussion removed. It was then replaced entirely by *Jubilee for a Job Well Done*, an original celebratory horn fanfare and jubilee with a key change for the finish.
- **Library song replaced:** the Janáček-style piece sounded too harsh, so it became *Where the Books Open Up*, an inspirational strings-and-harp theme.

## 2026-11-16 (Later)
- **Time doubling removed:** picking up items no longer adds time.
- **Item counts and time limits:** item counts now climb 10 → 29, and time limits rise steadily.
- **Whole House:** now includes every item and critter.
- **Fixed seeds:** each level has its own layout seed.
- **Cleanup:** unused sprites removed.
- **Level select:** new screen on the title (press L or tap LEVEL SELECT).
- **Sibling timing:** Annie now starts collecting at 33% of the time left (was 20%), and Isaac at 20% (was 10%).

## 2026-11-16 (Earlier)
- **New levels:** Garden Glow-Up and Science Lab Scramble (Codex, PR #1), then Library Book Roundup with very quiet music (Codex, PR #2).
- **Player:** rides a bicycle, gains a double jump and ducking (Codex).
- **Time doubling:** every pickup doubles the time left; the timer shows K/M/B (Codex).
- **Siblings:** given full physics (driving, jumping, ducking, stomping, taking damage) by Codex. Then changed (Claude) to ride along behind the player and rush to collect at 20% (Annie) and 10% (Isaac) time left.
- **README and music:** updated for all of the above, with new recordings and a re-recorded medley.
- **Docs:** design documents added in `docs/`.

## 2026-11-14 (Second Half)
- **Siblings:** became helpers for the whole game, renamed Isaac (on an original neon light-bike) and Annie (skateboard), with random goofy greetings.
- **New level:** Pool Party Panic (towels, lounge-chair platforms, ducks/geese/swans/squirrels, Cannonball Calypso).
- **Basement:** visibility improvements; music rewritten three times, ending as a romantic movie-style piano theme.
- **Level lengths:** normalized; item counts start at 10 and climb by one.
- **MP3s:** recordings of every song added and linked from the README.
- **README:** expanded and title-cased.

## 2026-11-14 (First Half)
- **First version:** a 90s-style platformer with a timer, the parents' car, critters, LEGO bricks and kazoo music.
- **Graphics:** outlined sprites, textured tiles, lighting and a CRT finish.
- **Music overhaul:** a unique genre per level plus the Whole House medley.
- **New levels:** basement, attic, laundry room, bathroom, home office, music room, arts & crafts, tech room, workout room. The bedroom was split into Isaac's and Annie's rooms.
- **Presentation:** Belvoir Studios penguin splash screen and credits; French impressionist title music.
- **Other tweaks:** Dad renamed to Uncle Pete, a white Tesla-style car, a four-voice attic fugue, and many art tweaks (dishwasher, recycle bin, toy tote, castle doll house, blocky Isaac's room).

### Wider drop-off targets
- Every level's drop-off is now about as wide as the couch (56 px). The small 28 px sprites are drawn at 2x scale; the dollhouse and library shelf are drawn at 1.4x.
- The Laundry and Basement levels now show a whole laundry corner: a washer, a dryer and a wicker hamper.
- In the Tech level, the robot workbench is now a very big robot with blinking chest lights and an antenna.

### Garden pickups are weeds
- In Garden Glow-Up you now pull up weeds (with roots and dirt) instead of collecting old flowers.
