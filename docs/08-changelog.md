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
- Docs now use the in-game title *Winter (8-Bit) – Vivaldi* exactly.

### Progressive difficulty
- Rebuilt the level generator around a difficulty curve from Level 1 to the Whole House. The widest pit grows from 3 tiles to 10, and over 7 tiles needs a well-timed double jump. Pits get more frequent with narrower landings and higher or lower landings, stepping-stone pillars appear from about Level 7, climbs grow to 5 tiles, and shelves and flat runs get shorter.
- Moving platforms no longer speed up with each level (they used to reach about 180 px/s). They now move slowly and steadily (42–60 px/s), but their pits widen to 12–14 tiles late in the game, so you have to ride them.
- Each level's `gap` value now follows the curve (3 → 10). Layouts changed; seeds are the same.
- A physics check confirms every pit and climb in all 24 levels can be cleared, with at least a tile of margin on a perfect double jump. Every level still has its full item count. Example from the check: Levels 1–9 need no double jumps; the Science Lab needs 2, the Game Room 8, the Money Room 6 and the Whole House 5.
- Fixed the drop-off floating over a pit in Arts & Crafts, Workout Room and Pet Room. A long final obstacle could run past the end of the level and cover the flat end zone. The last 16 tiles are now always forced flat, and stepping stones do not start near the end. A check confirms the drop-off sits on solid ground in all 24 levels.

## 2026-11-22 — MarioKart Toy Room

- Added 33 toy pickups (17 karts, 16 bikes), a display garage, castle murals, trophies and checkered flags. The player, Isaac and Annie can collect both types.
- Added Castle Cup Celebration, an original orchestral racing tune, plus its MP3 and an updated medley. The requested Royal Raceway track is not included.
- Added both toys to the Whole House mix; the finale is now level 25 with 34 items and 166 seconds. Fixed the difficulty denominator at the prior 24-level ramp so adding the room preserves existing terrain.

## 2026-11-22 — Minecraft Block Room

- Added 34 toy diamond blocks for the player, Isaac and Annie to return to a wooden storage chest, with grass/dirt blocks, a crafting table, square trees, ore and a torch. Reuses the blocky critters.
- Added Lanterns in the Block Garden, an original gentle piano/ambient piece (not a Minecraft recording), its MP3 and the updated finale medley.
- Added diamond blocks to the Whole House mix; the finale is now level 26 with 35 items and 169 seconds. Existing terrain layouts remain unchanged.

## 2026-11-22 — Roblox Avatar Roundup

- Added 35 toy avatars for the player, Isaac and Annie to collect and return to a display shelf, with four figure variants, miniature obby platforms and checkpoint flags.
- Added Checkpoint Champions, an original upbeat electronic track (not audio from Roblox), its MP3 and the updated finale medley.
- Added toy avatars to the Whole House mix; the finale is now level 27 with 36 items and 172 seconds. Existing terrain layouts remain unchanged.

- Visual follow-up: made the room more recognizably Roblox with classic yellow/blue/green noobs, red-capped Guests, builders, studded gray baseplates, rainbow obby stairs, neon-green checkpoints and tilted-square Roblox toy signs.

## 2026-11-22 — GTA V + VI Toy Room

- Added 36 toy vehicle pickups (18 sports cars, 18 bikes) for the player, Isaac and Annie to return to a neon display garage, with a sunset skyline, palms and Los Santos/Vice City toy-room signs.
- Added Two Cities, One Sunset, an original synth/funk radio groove (not GTA soundtrack audio), its MP3 and the updated finale medley.
- Added both toys to the Whole House mix; the finale is now level 28 with 37 items and 175 seconds. Existing terrain layouts remain unchanged.

- Visual follow-up: GTA V/VI cover-collage-style toy posters, a Vinewood hillside sign, Los Santos freeway signage, a Vice City Art Deco/Ocean Drive hotel, a pier wheel, larger palm silhouettes and asphalt road markings. Music and gameplay rules are unchanged.

## 2026-11-22 — Full-time Whole House helpers

- Isaac and Annie now enter collection mode from the start of the Whole House and stay in it throughout the level. They prioritize chores over hunting detours, while retaining contact zaps and stomps.
- Other rooms retain Annie's 33% and Isaac's 20% timer thresholds. Updated arrival lines avoid low-time warnings at the start of the finale.

## 2026-11-23 — Repository and documentation verification

- Confirmed all game source and 31 MP3 recordings are tracked on GitHub and the playable Site source matches `index.html`. Validated all 28 item counts, level settings, critter locations, music registry values and local/recording links.
- Updated the documentation audit date, clarified fixed seeds versus index-based difficulty, documented full-time Whole House AI in the architecture notes, and aligned publishing instructions with the owner's direct-to-main preference.
- Corrected rendering and themed-toy-room descriptions. No game behavior changed.

## 2026-11-23 — Charging Room Chaos

- Added 37 coiled charging cables for the player, Isaac and Annie to return to a cable organizer, with four cable colors, USB-style plugs, battery displays, a charging desk and wall hooks.
- Added Fully Charged, an original electronic track, its MP3 and the updated finale medley.
- Added charging cables to the Whole House mix; the finale is now level 29 with 38 items and 178 seconds. Full-time finale helpers and all previous terrain layouts are preserved.

## 2026-11-24 — MarioKart room rides

- In MarioKart Toy Room, the player now drives a red Standard Kart, Isaac a blue Biddybuggy-style kart, and Annie a pink Sport Bike, all drawn as pixel-art versions of MarioKart 8 Deluxe vehicles.
- Rides appear during intro, gameplay, pause and chore-complete scenes. Wheel animation, direction changes, ducking, jumps, damage flashes and Annie's balloon are retained; the light-bike trail is hidden in this room. Other rooms and all music are unchanged.

## 2026-11-24 — Isaac’s Flame Rider

- Isaac now rides a Flame Rider with Hot Wheels in MarioKart Toy Room: a chopper silhouette, raised handlebars, silver fork and exhaust, flame-painted tank, and chunky flame-colored wheels with spinning spokes.
- The player’s Standard Kart, Annie’s Sport Bike, and existing controls and physics are retained.

## 2026-11-24 — Independent 3D fork

- Added `3d/` as a separate playable Three.js game; retained the original game source unchanged.
- Added modeled characters, furniture, collectibles, perspective lighting/shadows, 29 room choices, helping siblings, shared collection/delivery, time doubling, hazards, double jump, duck, pause and touch controls.
- Reused snapshots of the existing level data and synthesized music; documented the simplified first-version scope in `3d/README.md` and `09-3d-fork.md`.

## 2026-11-24 — Whole House cream couch

- The 2D Whole House ending couch now reuses the living room’s cream sofa artwork, with red, yellow and blue pillows drawn by the same colorful-pillow sprite used for living-room pickups.
- Existing Whole House pillow pickups, item mix, couch hitbox and completion behavior are retained. The separate 3D fork is unchanged.

## 2026-11-25 — Clean your own room

- Isaac now collects from the start and throughout Isaac’s Room; Annie does the same in Annie’s Room. Bedroom owners prioritize chores over critter hunting.
- The other sibling keeps their normal timer threshold; both still help throughout the Whole House. The 3D fork is unchanged.

## 2026-11-25 — Isaac’s pretend treasure chest

- Replaced the 2D Isaac’s Room toy chest art with a pretend wooden treasure chest, raised lid, gold-colored straps and keyhole.
- A dragon peeks out using the exact same green, purple-winged collectible dragon renderer. Drop-off size and completion behavior remain unchanged; the HERE label clears the lid.

## 2026-11-25 — Painted dragon chest

- Moved Isaac’s treasure-chest dragon onto the outside front panel as a static painted emblem, using the collectible’s green dragon and purple wings. Closed the lid and moved the keyhole beside the painting.
- Collectible dragons keep their existing animation; gameplay and the 3D fork are unchanged.

## 2026-11-25 — Documentation audit

- Verified current 2D room tables and links, bedroom helpers, MarioKart rides, cream finale couch and painted-dragon chest.
- Clarified the 2D/3D directory split, added the 3D fork to the design-doc index and workflow, and retained the 3D browser-verification limitation.

## 2026-11-25 — Simultaneous Whole House mashup

- Replaced sequential medley playback in the 2D Whole House with three level tracks playing simultaneously, rotating four-bar groups at 128 BPM.
- Included all 28 level songs, including the previously omitted Race Track Rumble arrangement, with isolated instrument buses and reduced layer volumes.
- Updated the listening MP3 and audio documentation; individual room songs and the 3D fork’s snapshot remain separate.

## 2026-11-25 — Uncle Pete’s Bears jersey

- Uncle Pete now wears a navy Chicago Bears #34 jersey with orange trim, an orange C chest patch, white numbers and orange-and-white sleeve stripes on both the angry parents screen and happy victory screen.
- His face, pants and animations are retained; the separate 3D fork is unchanged.

## 2026-11-25 — Seven holiday rooms

- Added Halloween, Thanksgiving, Christmas, Valentine’s Day, St Patrick’s Day, April Fools Day and Easter as 2D levels 29–35, with distinct themes, collectibles, decorated return spots and original songs.
- Expanded Level Select to fit 36 choices; the Whole House finale is level 36 with 45 pickups and 199 seconds, and includes all holiday items and all 35 level songs in its mashup.
- Added seven song recordings, re-recorded/renumbered the finale mashup and moved ending/fail recordings to 37/38. Existing rooms’ settings and the 29-room 3D snapshot are retained.

## 2026-11-25 — Holiday critters and pumpkins

- Thanksgiving now has turkey critters, with fan tails, blue heads and red wattles; they use normal walking, collision and stomp rules. Turkeys are also included in Whole House.
- Halloween pickups, decorations and the pumpkin-bucket display now use glowing carved pumpkins rather than candy; the finale item mix matches. Music and the 3D fork are unchanged.

## 2026-11-25 — Mother’s Day and Father’s Day

- Added Mother’s Day Blooms (level 36): collect flower bouquets into Mom’s vase, with floral decorations and the original song Bouquets for Mom.
- Added Father’s Day Surprise (level 37): collect colorful ties onto Dad’s gift rack, with a gift-table backdrop and the original Dads Day Groove.
- The finale is now level 38 with 47 pickups and 205 seconds, both new item types and all 37 level songs in its mashup. Re-recorded and renumbered the finale MP3 and ending/fail recordings. Existing rooms and the 3D fork are retained.

## 2026-11-25 — Cousins Daniel and Colin

- Added Daniel (green/yellow) and Colin (purple/teal) as playable-session helpers with the same shared collection, physics, duck/double-jump and critter abilities as Isaac and Annie. All four help throughout Whole House; ordinary rush thresholds are Daniel 20% and Colin 33%.
- Added both cousins to the title, level-intro, chore-complete and ending lineups, with Daniel on a monster truck and Colin on a surfboard in every room. Colin says “Surfs Up!”.
- Moved helper-specific settings into data so cousins do not inherit Isaac’s bedroom assignment or light-bike trail. The 3D fork is unchanged.

## 2026-11-25 — Colin’s immediate greeting

- Colin says “Surfs Up!” immediately on every level intro, including retries and level-select starts. His greeting repeats when gameplay begins and takes priority over first-frame helper rush announcements.

## 2026-11-25 — Daniel’s and Colin’s rooms

- Added Daniel’s Monster Jam Room (level 38): collect toy monster trucks into an arena garage, with dirt ramps, checkered flags and the original Stadium Stomp synth-rock song.
- Added Colin’s Surf Shack (level 39): collect toy surfboards onto the rack, with waves, board displays and the original Surfs Up Shuffle song.
- Each cousin collects immediately in his own room. The finale is level 40 with 49 items, 211 seconds, both cousin toy types and all 39 level songs in its mashup. Added/renumbered song recordings and updated docs; the 3D fork is unchanged.

## 2026-11-25 — Cousin rooms third and fourth

- Moved Daniel’s Monster Jam Room to level 3 and Colin’s Surf Shack to level 4, immediately after Isaac’s and Annie’s rooms.
- Preserved each room’s layout, item count, timer and critter speed using a stable `difficultyIndex`; room counts and timers no longer increase in menu order.
- Renumbered listening-song files and level/critters tables, reordered the mashup to follow level order, and re-recorded it. The 3D fork is unchanged.

## 2026-11-25 — Prevent Jump-button zoom

- Prevented native double-tap zoom and long-press gestures on 2D touch controls, including Safari, with explicit non-passive touch-event cancellation.
- Added pointer capture, cancellation/blur cleanup and a touch-only fallback so repeated jumps and simultaneous movement remain responsive.

## 2026-11-25 — Mom’s and Uncle Pete’s rooms, regression pass

- Added Mom’s Room fifth: collect necklaces, rings and earrings into her jewelry box, with a vanity, mirror and Jewel Box Waltz.
- Added Uncle Pete’s Room sixth: collect Bears jerseys, footballs and caps into his locker, with Bears decor and Bears Cleanup Drive.
- Preserved Daniel and Colin as third/fourth and existing room difficulty. Finale is now level 42 with 51 items and 217 seconds, including both new item types and all 41 level songs.
- Fixed portrait phone canvas clipping by allowing downscaling. Updated recordings, references and design tables; the independent 3D fork is unchanged.

## 2026-11-25 — Cousin pickup counts

- Reduced Daniel’s level-3 room to 12 toy monster trucks and Colin’s level-4 room to 13 toy surfboards.
- Kept their timers, terrain settings, music and helper behavior unchanged; updated the README and design tables.

## 2026-11-25 — Andrew’s wings

- Added cousin Andrew as a fifth helper, wearing animated white-and-blue wings and an orange shirt. He flies over gaps and up to pickups while respecting solid obstacles.
- Andrew joins every level, collects at 33% time remaining or immediately throughout Whole House, and shares item reservations, scoring and critter interactions.
- Added Andrew to title, intro, chore-complete and ending lineups. Existing ground rides and the separate 3D fork are retained.

- Andrew’s flying sprite now uses a belly-down pose, with arms stretched forward and feet trailing behind; direction mirrors the pose. Flight behavior is retained.

## 2026-11-25 — Andrew’s Sky Room fifth

- Added Andrew’s Sky Room as level 5 with 14 toy planes, helicopters and kites to return to a toy hangar, cloud decorations and Wings Above the House, an original airy synth song. Andrew helps immediately in his own room.
- Moved Mom’s Room to sixth and Uncle Pete’s to seventh while preserving existing room settings and layouts. Finale is level 43 with 52 items, 220 seconds and all 42 level songs.
- Andrew keeps the original face, palette and wings; his original character sprite is rotated belly-down. Updated music numbering and the mashup recording.

## 2026-11-25 — Andrew flies with his head up

- Kept Andrew’s body belly-down and drew his original face/head upright, looking forward in both flight directions. His outfit, wings and flying behavior are retained.

### Steady difficulty climb restored
- After the new rooms were added, each room kept its own difficulty, so Daniel's, Colin's, Mom's and Uncle Pete's rooms (Levels 3, 4, 6 and 7) had 10-tile double-jump gaps right after the easy kids' rooms. Every room's `difficultyIndex` and `gap` now follow its position: 0 and 3 tiles on Level 1, rising to 23 and 10 tiles on the Whole House. Item counts and time limits are unchanged.
- The item-spot fallback now packs spots more tightly when needed, so the Whole House gets all 52 items (it had 51).
- Checks: every pit and climb in all 43 levels can be cleared, every level has its full item count, and every drop-off sits on solid ground.
- Docs: the MarioKart and GTA rows now name the real item keys (`kartbike`, `citytoys`).

## 2026-11-25 — Cousin racing vehicles

- Fixed personal rides taking priority over race cars and karts. Daniel, Colin and Andrew now get race cars and helmets in Race Track Rumble and Standard Karts in MarioKart Toy Room.
- Andrew uses ground movement in both vehicle rooms. Ordinary-room monster truck, surfboard and winged flight are retained. Race vehicles also remain visible when paused.

## 2026-11-25 — Andrew’s connected flying pose

- Moved Andrew’s upright head closer to his flying body and added a neck and shirt collar overlapping the chin and shoulder, so the pose remains connected in both directions. The original face, outfit and wings are retained.

## 2026-11-26 — Room owners introduce their chores

- Replaced Isaac’s, Annie’s, Daniel’s and Colin’s intro-card dialogue with the owner’s exact requested lines, including Annie’s Barbie dolls and toy Barbie doll castle wording.
- Added an optional `introSize` setting so the longer messages fit the card; gameplay and Colin’s immediate “Surfs Up!” greeting are retained.

## 2026-11-26 — Sharper intro dialogue

- Restored the four owner messages to the pixel font’s 8 px size, widened the message card and removed dialogue text shadows for clearer letters. The exact requested wording is retained.

## 2026-11-26 — Owners offer to help

- Appended “Oh, and I’ll help you” to the about-to-start messages for Isaac, Annie, Daniel, Colin and Andrew, preserving the rest of their dialogue.

### Christmas medley
- Christmas Cheer now plays *A Very Merry Medley* (160 BPM, about 67 s): Jingle Bells, Silent Night (slower and calmer), Deck the Halls, We Wish You a Merry Christmas (in place of the copyrighted *Rudolph*) and a Joy to the World finale, with sleigh bells throughout and harp sweeps between songs. It replaces *Tinsel Time*.
- The melodies and harmonies were checked three ways. On paper: bar lengths, chord counts and beat notes against chords. In playback: all 390 bass and chord notes match the written chord at the melody step they sound on, and all 140 melody notes start exactly on their written step.
- Volume trim 1.95 (about −34.5 dB RMS). Re-recorded `music/36-christmas.mp3` and the Whole House mashup `music/43-whole-house-medley.mp3`.

## 2026-11-26 — Help offer limited to four rooms

- Kept “Oh, and I’ll help you” in Isaac’s, Annie’s, Daniel’s and Colin’s intro messages only; restored Andrew’s original intro ending.

## 2026-11-26 — Collectible power-ups

- Added optional shield, speed and magnet pickups to every 2D room, with distinct pixel icons, player effects and HUD countdowns.
- Shield blocks critter/LEGO damage for 10 seconds, speed boosts player movement 1.5× for 8 seconds, and magnet draws nearby chores along clear paths for 10 seconds. Powers stack by type, refresh and reset on retries/new rooms.
- Bonus placement preserves room RNG and chore counts. Normal collection, helper behavior, music and the separate 3D fork are retained.

## 2026-11-26 — Unframed team power-up pickups

- Removed square frames and dark backplates from shield, speed and magnet icons.
- Isaac, Annie, Daniel, Colin and Andrew can now collect bonuses by contact and activate the player’s power. Feedback appears at the finder and names them; simultaneous contact still claims each pickup only once.

## 2026-11-26 — Parent-room pickup counts

- Corrected Mom’s level-6 room to 15 jewelry pieces and Uncle Pete’s level-7 room to 16 Bears gear items, matching their early-game positions. Other room settings and the Whole House mix are retained.

## 2026-11-26 — Power-ups belong to their collector

- Gave the player and each helper separate power timers. A sibling/cousin pickup no longer powers up the player.
- Shields protect their owner; speed boosts ground movement and Andrew’s flight; magnets pull chores toward their owner and count helper collections only once.
- Added effects and countdowns on the powered helper while retaining the player’s own HUD. Pause, expiry and level reset apply independently to all characters.

## 2026-11-26 — Eleven more personal power-ups

- Added Jump Boots, Feather Float, Triple Jump, Star, Fire Aura, Ice Aura, Slow Aura, Double Points, Rescue Balloon and Item Compass.
- Added Ghost Bridge: its collector gets invisible one-way platforms over gaps for 12 seconds. Other characters and critters do not receive platforms.
- Every room now has five unframed bonuses: the original three plus two rotating extras. All five helpers can collect every kind, with independent ownership, timers and effects.
- Updated the timer HUD and helper status labels for multiple simultaneous powers. Original terrain, chores, music and the separate 3D game are retained.

## 2026-11-26 — Whole House Ghost Bridges

- Added three extra Ghost Bridge pickups spread through Whole House, keeping the existing five bonuses. Each bridge still belongs only to its collector and lasts 12 seconds.
