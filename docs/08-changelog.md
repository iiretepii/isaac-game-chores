# 08 – Changelog

Grouped by milestone. See `git log` for every commit.

## 2026-11-17
- **Annie as good as Isaac:** Annie now has the `ace` abilities and Isaac's speed (176 px/s). She no longer fumbles obstacles or trips. Rush thresholds are unchanged (Annie 33%, Isaac 20%).
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

### Wide, normal-height drop-offs
- Twelve drop-offs (toy chest, dishwasher, leaf bag, compost bin, towel basket, recycle bin, library shelf, music-room bookshelf, craft shelves, lab rack and attic trunk) are back to their normal height but stretched to 70 px wide.
- The garage trash can is now a big green dumpster.

### Drop-offs redrawn at full width
- The wide drop-offs are no longer stretched; each is redrawn at 70 px wide at normal height (e.g. three leaf bags, a two-bay compost bin, a longer trunk and shelves). The workout weight rack joined them.
- The kitchen dishwasher now sits built into a counter with cabinets.

### Wider princess castle
- Annie's Room castle is back to normal size and redrawn 70 px wide: four towers with flags, a central keep with a heart window, battlements and an arched gate.
- Castle towers restored to the original slender style with tall pointed spires, now in a Neuschwanstein-like cluster with a tall main tower and a gabled palace hall.

### Louder ending fanfare
- Raised the volume of *Jubilee for a Job Well Done* by about 3 dB (gain 0.624 → 0.88) and re-recorded `music/21-ending-jubilee.mp3`.

### Annie's balloon
- Annie now carries a pink balloon that bobs above her. It gives her a small float: lighter gravity and a slower fall after the peak of each jump.

### Annie's pink dress
- Annie now wears a pretty pink dress (puff sleeves, waist bow, ruffled skirt) instead of a shirt and pants.

### New level: Pet Room Pandemonium
- Level 20 is a new pet room: gather squeaky pet toys (bones, balls and rubber mice) into a wicker toy basket with a napping puppy, while escaped hamsters, a tabby and a Pomeranian run around. The room has a fish tank, a bird cage, a cat tree and a BEST PETS portrait.
- New song *Kibble & Cuddles* (`pets`): a warm pet-care tune with ukulele, flute, celesta, brushes, a squeaky toy and a purr. It is also in the Whole House medley.
- The Whole House is now level 21 (30 items). Its MP3 is now `21-whole-house-medley.mp3`, and the ending is `22-ending-jubilee.mp3`. The medley was re-recorded.
- Level select now shows six levels per row so all 21 fit.

### Garage trash looks like trash
- The garage pickups now come in three kinds: a tied black trash bag, a crushed soda can with a banana peel, and an apple core with fish bones. Each has wavy green stink lines.

### New level: Race Track Rumble
- Level 21 is a race track: roll 30 racing tires back onto a red tire shelf, past robot vacuums, squirrels and geese. The background has a grandstand full of fans, a checkered FINISH banner, start lights and a pit wall.
- Its song *Radical Race Rock* (`racerock`) is the Isaac's Room rock song played very fast (210 BPM). It is not added to the medley, which already has the original.
- The Whole House is now level 22 (31 items). MP3s renumbered: `22-whole-house-medley.mp3` and `23-ending-jubilee.mp3`.

### Race Track music 6x faster
- *Radical Race Rock* now plays at 1260 BPM (6x the previous 210). The MP3 was re-recorded.

### Race Track music set to 240 BPM
- After trying 1260 BPM, *Radical Race Rock* is now 240 BPM, with its volume trim back to 0.398. The MP3 was re-recorded.

### Longer race track song
- *Radical Race Rock* is now about a minute long (32 bars) instead of a 16-second loop. It has four sections: the riff, the riff a whole step up, a breakdown that builds like revving engines, and a final lap a fourth up with crashes on every bar. The MP3 was re-recorded.

### Race cars on the race track
- On Race Track Rumble, you, Annie and Isaac drive race cars: blue #1, pink #2 and green #3, each with a spoiler, racing stripe and spinning wheels. Hitboxes and physics are unchanged.

### Racing helmets and Isaac's colors
- Isaac's race car is now blue with a red stripe and a red helmet, his favorite colors. His name label is blue with a red shadow on every level.
- The player's car is now orange so it stands out from Isaac's.
- All three drivers wear striped racing helmets with dark visors.

### Isaac wears red
- Isaac's shirt is now red instead of green, to match his favorite colors.
- His cap is now blue.

### Level select after each level, and intro text fixes
- The "Chore Complete!" screen now has a LEVEL SELECT button (or press L). The cursor starts on the next level.
- Long CHORE lines on the level intro now wrap inside the panel, and the lines below move down to make room. The phone text bubble is a little taller so three-line messages stay inside it.

### New level: Game Room Glitch
- Level 22 is a video game room: put 31 game cartridges and controllers back on a game shelf (a CRT TV with an alien on screen, a console and cartridge slots). The room has an arcade cabinet, a big CRT playing a pixel game, a flashing HI-SCORE sign, a beanbag and twinkling pixel stars.
- Three new retro-arcade critters: `invader` (a flying pixel space alien), `chomper` (a yellow mouth-chomping ball) and `ghosty` (a cyan arcade ghost). They also appear in the Whole House.
- New song *Press Start to Clean!* (`chiptune`): an original NES-style tune with pulse-wave lead and echo, fast chord arpeggios, a triangle bass, noise drums, coin blings, a power-up sweep and a 1-UP jingle. It is also in the medley, which was re-recorded.
- The Whole House is now level 23 (32 items, 160 s). MP3s renumbered: `23-whole-house-medley.mp3` and `24-ending-jubilee.mp3`.
- Changed the Game Room pickups from cartridges and controllers to a variety of game controllers only. The shelf now shows spots for controllers instead of cartridge slots.

### Living room pillows
- Living Room Lego-Land now has you pick up throw pillows in ten colors and put them on a wide cream couch (as wide as the ending couch, with no pillows on it) instead of toys and a toy tote.

### New pet room song
- Replaced *Kibble & Cuddles* with *Wag Wag Woof Woof!*: a much sillier, happy and energetic chiptune at 168 BPM. It has a pulse-wave lead (a kazoo joins in the second half), boing bass, oom-pah stabs and 8-bit drums, and the pets answer the tune with pixel woofs, meows, bird tweets, a squeaky toy and a hamster-wheel spin. Its volume is set to the standard level. The pet room MP3 and the medley were re-recorded.
- Raised the pet room song volume by about 3 dB (gain 0.72 → 1.0, about −32 dB RMS) so it sounds a little louder than the standard level.

### New look for Mom and Uncle Pete
- The parents are now real sprites instead of plain boxes. Mom is very pretty, with long black hair and a purple dress. Uncle Pete is very handsome, with brown hair and a blue shirt.
- They look angry on the "Parents are home!" screen and now also appear, smiling, on the victory screen.
- Fixed Uncle Pete's angry face on the "Parents are home!" screen: his mouth now turns down in a frown, matching Mom.
- Made both parents look much madder on the "Parents are home!" screen (shared `parentMad` face): steep V eyebrows, squinting eyes, red cheeks, a big open frown with gritted teeth, a throbbing red anger mark and puffs of steam.
- The parents are now animated yelling on the "Parents are home!" screen. Their mouths flap open and shut with yellow shout lines, they shake a fist in the air (Mom on the left, Pete on the right), and they bounce and jitter in turn.
- Fixed the yelling animation: when a parent raises a fist, that arm is no longer also drawn hanging at their side, and the raised arm now joins at the shoulder.

### New Arts & Crafts song: ska-punk
- Arts & Crafts Chaos now plays *Paint the Town (Tie-Dye)!* (`punkska`, 184 BPM), a ska-punk song for rebels and hippies. The verse is bouncy ska with off-beat guitar skanks, a bubbling organ and a trumpet-and-sax horn section. The chorus is full punk, with distorted power chords on every eighth and pounding drums, plus a tambourine throughout and a big stop at the end.
- It replaces *Les Petits Peintres* in the level and in the Whole House medley. The old song is still in the code but unused. The arts & crafts MP3 and the medley were re-recorded.

## 2026-11-18 — Money Room Millions

- Added a 32-coin chore for the player, Isaac and Annie with a wide coin chest, vaults and gold-bar scenery.
- Added the original Roblox-style electronic song Coin Chest Tycoon and included it in the finale medley.
- Added coins to the Whole House item mix, raised its count to 33 and time to 163 seconds, and kept all existing level seeds unchanged.

## 2026-11-18 — Documentation audit

- Reconciled the README and design docs with all 24 levels, 33 finale items, current vehicle and sibling behavior, and every critter's level locations.
- Corrected length and timer guidance, noted the existing 2-second Race Track increase, and clarified recording normalization and medley coverage.
- Documented the current Sites play link and the separate publication workflow. No game behavior changed.

### Sad music on the fail screen
- The "Parents are home!" screen now plays *Grounded Until Forever* (`sad`), a slow, sad piano lament in A minor with soft strings and celesta "teardrops". It starts after the car honk and the lose jingle, and stops when you try again. Recorded as `music/26-fail-screen.mp3`.

### Garden weeds redrawn
- The Garden Glow-Up pickup is now a pulled-up dandelion clump: a flat rosette of toothed leaves, two yellow dandelions, a white puffball, and a clump of dirt with roots. It replaces the old weed sprite, which did not read clearly. The design was picked from eight previewed options.
- Fixed a bug introduced by the dandelion change: redrawing the weed accidentally deleted the drawings for pillows, game controllers, tires and pet toys. Those items were invisible in their levels (Living Room, Pet Room, Race Track, Game Room) and on the level select screen. All four are restored.

### Money Room: erudite classical music
- Replaced *Coin Chest Tycoon* with *Sonata for Compound Interest in D major* (`money`, 116 BPM), an original Classical-era chamber piece. It has a singing first violin with a second violin in thirds, harpsichord Alberti bass, a cello line, a trill on the leading tone and a perfect authentic cadence. Volume trim is 2.18 (about −37 dB RMS). The Money Room MP3 and the medley were re-recorded.

### Money Room: Vivaldi's Winter, 8-bit
- The Money Room now plays *Winter (8-Bit)*: the first movement of Antonio Vivaldi's "Winter" from *The Four Seasons* (public domain), arranged from memory as NES-style video game music. It has the shivering stacked chords, an icy trill, a storm burst, the repeated-note theme, solo-violin arpeggios, a plunging scale and a final F minor chord. It replaces the short-lived *Sonata for Compound Interest*. Trim 0.82 (about −35 dB RMS). The MP3 and the medley were re-recorded.
- Reordered *Winter (8-Bit)* to open on the solo-violin arpeggios, the most recognizable and most video-game-like part. Order: solo → storm theme → solo → shiver build-up → storm burst → plunging scale → final chord. The MP3 and the medley were re-recorded.

### Music room: Liszt and Chopin
- *Piano Practice (Mom Is Listening)* now runs: scales with a wrong note → Liszt's *La Campanella* (slow at first, with a missed high bell note, then faster) → Chopin's *Nocturne in B-flat minor, Op. 9 No. 1* (wide left-hand arpeggios, singing melody, a sparkling run) → Mountain King → jazz licks → Bach's C-major Prelude → Chopsticks → Ode to Joy, then it loops.
- Removed Für Elise, Twinkle, Jingle Bells, the spooky toccata and the pop tune to keep it from dragging. Both new pieces are public domain and were written from memory. The MP3 and the medley were re-recorded.
- Swapped *La Campanella* (it sounded bad) for Mozart's *Rondo alla Turca*: a fumbled false start, then the famous opening with a bouncy oom-pah left hand and a final A minor chord. Order now: scales → Rondo alla Turca → Chopin Nocturne → the rest. The MP3 and the medley were re-recorded.
