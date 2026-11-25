# 04 – Audio

All music and sound effects are synthesized live with the Web Audio API. The game uses no audio files; the MP3s in `music/` are recordings for listening.

## Music Style Registry

Each entry in `STYLES` is `{name, bpm, spb, bar, bars, play(step, time, stepDuration)}`:
- `spb` is steps per beat.
- `bar` is steps per bar.
- `bars` is the loop length in bars.
- Optional `rub(step)` stretches step lengths for rubato.

| Key | Song | BPM | Steps/beat | Steps/bar | Bars | Used in | Recording |
|---|---|---|---|---|---|---|---|
| `french` | *Petite Valse Du Matin* | 66 | 1 | 3 | 16 | Title screen | `music/00-title.mp3` |
| `rock` | *Radical Rock* | 144 | 2 | 8 | 8 | Isaac's Room | `music/01-isaacs-room.mp3` |
| `princess` | *Once Upon A Tidy Room* | 150 | 2 | 6 | 16 | Annie's Room | `music/02-annies-room.mp3` |
| `monsterjam` | *Stadium Stomp* (original) | 148 | 4 | 16 | 16 | Daniel'S Monster Jam Room | `music/03-monsterjam.mp3` |
| `surfrock` | *Surfs Up Shuffle* (original) | 136 | 4 | 16 | 16 | Colin'S Surf Shack | `music/04-surfrock.mp3` |
| `momwaltz` | *Jewel Box Waltz* (original) | 100 | 4 | 12 | 16 | Mom's Room | `music/05-momwaltz.mp3` |
| `bearsgroove` | *Bears Cleanup Drive* (original) | 144 | 4 | 16 | 16 | Uncle Pete's Room | `music/06-bearsgroove.mp3` |
| `jazz` | *Cool Kitchen Jazz* | 150 | 2 | 8 | 8 | Kitchen Catastrophe | `music/07-kitchen.mp3` |
| `pop` | *Poptastic Pop* | 118 | 2 | 8 | 8 | Living Room Lego-Land | `music/08-living-room.mp3` |
| `hiphop` | *Backyard Boom-Bap* | 90 | 4 | 16 | 4 | Backyard Bonanza | `music/09-backyard.mp3` |
| `french2` | *Les Petits Peintres* (no longer used by a level) | 112 | 2 | 8 | 16 | — | — |
| `garden` | *Seashell Sunday* | 104 | 2 | 8 | 16 | Garden Glow-Up | `music/10-garden.mp3` |
| `pool` | *Cannonball Calypso* | 128 | 4 | 16 | 16 | Pool Party Panic | `music/11-pool.mp3` |
| `techno` | *Garage Funk-Techno* | 126 | 4 | 16 | 4 | Garage of Doom | `music/12-garage.mp3` |
| `polka` | *Oompah Undies Polka* | 132 | 2 | 4 | 16 | Laundry Room Pee-Yew! | `music/13-laundry-room.mp3` |
| `crooner` | *Bathroom Amore* | 228 | 2 | 6 | 16 | Bathroom Blunder | `music/14-bathroom.mp3` |
| `muzak` | *Muzak For Meetings (Vol. 3)* | 104 | 2 | 8 | 8 | Home Office Havoc | `music/15-home-office.mp3` |
| `library` | *Where the Books Open Up* | 108 | 2 | 8 | 16 | Library Book Roundup | `music/16-library.mp3` |
| `practice` | *Piano Practice (Mom Is Listening)* | 100 | 4 | 16 | 49 | Music Room Mayhem | `music/17-music-room.mp3` |
| `punkska` | *Paint the Town (Tie-Dye)!* | 184 | 2 | 8 | 16 | Arts & Crafts Chaos | `music/18-arts-and-crafts.mp3` |
| `silly` | *Beep Boop Banana Boogie* | 150 | 2 | 8 | 8 | Tech Room Trouble | `music/19-tech-room.mp3` |
| `science` | *Mad Science Slam* | 112 | 4 | 16 | 16 | Science Lab Scramble | `music/20-science-lab.mp3` |
| `workout` | *Maximum Reps!!!* | 140 | 4 | 16 | 8 | Workout Room Workout | `music/21-workout-room.mp3` |
| `romantic` | *Nocturne In The Basement* | 66 | 4 | 16 | 32 | The Spooky Basement | `music/22-basement.mp3` |
| `baroque` | *Little Fugue in the Attic* | 84 | 4 | 16 | 20 | Attic of Antiques | `music/23-attic.mp3` |
| `pets` | *Wag Wag Woof Woof!* | 168 | 4 | 16 | 16 | Pet Room Pandemonium | `music/24-pet-room.mp3` |
| `racerock` | *Radical Race Rock* | 240 | 2 | 8 | 32 | Race Track Rumble | `music/25-race-track.mp3` |
| `chiptune` | *Press Start to Clean!* | 150 | 4 | 16 | 16 | Game Room Glitch | `music/26-game-room.mp3` |
| `money` | *Winter (8-Bit) – Vivaldi* | 116 | 4 | 16 | 16 | Money Room Millions | `music/27-money-room.mp3` |
| `grandprix` | *Castle Cup Celebration* (original) | 144 | 2 | 8 | 16 | MarioKart Toy Room | `music/28-kart-toy-room.mp3` |
| `blockgarden` | *Lanterns in the Block Garden* (original) | 72 | 2 | 8 | 8 | Minecraft Block Room | `music/29-minecraft-room.mp3` |
| `obby` | *Checkpoint Champions* (original) | 132 | 4 | 16 | 16 | Roblox Avatar Roundup | `music/30-roblox-room.mp3` |
| `cityradio` | *Two Cities, One Sunset* (original) | 108 | 4 | 16 | 16 | GTA V + VI Toy Room | `music/31-gta-room.mp3` |
| `charging` | *Fully Charged* (original) | 128 | 4 | 16 | 16 | Charging Room Chaos | `music/32-charging-room.mp3` |
| `halloween` | *Spooky Sugar Shuffle* (original) | 112 | 4 | 16 | 16 | Halloween Haunt | `music/33-halloween.mp3` |
| `thanksgiving` | *Harvest Home Hop* (original) | 106 | 4 | 16 | 16 | Thanksgiving Feast | `music/34-thanksgiving.mp3` |
| `christmas` | *Tinsel Time* (original) | 132 | 4 | 16 | 16 | Christmas Cheer | `music/35-christmas.mp3` |
| `valentine` | *Hearts Together* (original) | 96 | 4 | 16 | 16 | Valentines Day Love | `music/36-valentine.mp3` |
| `stpatrick` | *Lucky Clover Jig* (original) | 144 | 4 | 16 | 16 | St Patricks Day Luck | `music/37-stpatrick.mp3` |
| `aprilfools` | *Whoops-a-Daisy* (original) | 138 | 4 | 16 | 16 | April Fools Day Pranks | `music/38-aprilfools.mp3` |
| `easter` | *Springtime Hop* (original) | 120 | 4 | 16 | 16 | Easter Egg Hunt | `music/39-easter.mp3` |
| `mothersday` | *Bouquets for Mom* (original) | 96 | 4 | 16 | 16 | Mother'S Day Blooms | `music/40-mothersday.mp3` |
| `fathersday` | *Dads Day Groove* (original) | 124 | 4 | 16 | 16 | Father'S Day Surprise | `music/41-fathersday.mp3` |
| `mix` | *Medley of Every Style* | — | — | — | — | The Whole House!! | `music/42-whole-house-medley.mp3` |
| `finale` | *Jubilee for a Job Well Done* | 148 | 2 | 8 | 24 | Ending screen | `music/43-ending-jubilee.mp3` |
| `sad` | *Grounded Until Forever* | 66 | 2 | 8 | 8 | "Parents are home!" fail screen (starts about 3 s after the honk and the lose jingle) | `music/44-fail-screen.mp3` |

## Volume Leveling

Each style has a `gain` trim (the `STYLE_GAIN` table) so that every song plays at about −35 dB RMS. The gentle pieces are set a little quieter: title and basement −38, music room and attic −37, library −37, fail screen −38. Money Room uses a 0.82 trim (about −35 dB RMS). The pet room song (about −32) and the ending fanfare (about −31) are set a little louder so the victory song stands out. For individual songs, the scheduler sets the music volume to `MUSIC_BASE × gain`. The mashup applies each trim inside its isolated layer bus, divided by three. After writing or changing a song, re-measure its loudness and update its trim.

## The Medley

`MIX` includes all 41 level songs in room order, including Race Track Rumble’s `racerock` arrangement. The Whole House music is a simultaneous mashup: three level tracks play together at a shared 128 BPM, with a new group every four 4/4 bars (7.5 seconds). Fourteen groups cover every level song before the groups repeat; the final group wraps to the first song to keep three simultaneous layers.

Each layer keeps its instrument arrangement and per-song gain trim, scaled to one third. Independent guitar/reverb buses prevent one layer’s instruments from taking another layer’s volume. Notes align to the shared beat; the original time signatures and rubato are adapted for the mashup. Individual rooms keep their original songs and tempos. Title, victory and fail-screen songs are not level tracks and remain separate. The last-15-seconds speedup still applies.

**Rule:** add every new level song to `MIX`, including alternate arrangements, and re-record the mashup. The 3D fork retains its separate audio snapshot unless explicitly updated.

## Instruments

All instruments are synthesis helpers in `index.html`:
- **Keyboards:** `piano`, `organ` (additive harmonics), `epiano` (FM), `harp`, `celesta`, `vibes`, `accordion`.
- **Brass and wind:** `horn` (warm horn section), `clarinet`, `trumpet`, `trombone` (slides), `tuba`, `sax`, `flute`, `panFlute`.
- **Leads and synths:** `kazoo`, `softLead`, `leadGtr` / `gtrNote` (waveshaper distortion), `popLead`, `pluck`, `supersaw`, `steelPan`, `robotBeep`, `croonVoice` (formant "ohhh"), `strings`, `mandolin`.
- **Basses:** `subBass`, `synthBass`, `acid`, `walkBass`, `boingBass`, `bubbleBass`.
- **Drums:** `kick`, `kick808`, `snare`, `hat`, `clap`, `ride`, `brush`, `crash`, `tom`, `cowbell`, `rKick`, `rSnare`, `rCrash`, `rTom`, `conga`, `rimshot`, `shaker`.
- **Effects and gags:** `scratch`, `squeak`, `clownHorn`, `cuckoo`, `slideUp`, `slideDown`, `bonk`, `burp`, `bubble`, `splash`, `whistle`, `hey`, `elevatorDing`.

Shared reverb comes from a convolver with a generated noise impulse (`reverb()`).

## Sound Effects (`SFX`)

| Effect | Sound |
|---|---|
| `jump` | Slide whistle up |
| `boing` | Stomp |
| `collect` | Arpeggio |
| `hurt` | Hurt sound |
| `fall` | Slide whistle down |
| `honk` | Car horn |
| `nope` | Not done yet |
| `win` | Kazoo fanfare |
| `lose` | Sad trombone |

## Recording MP3s

The recordings are made by running the game's code in headless Chromium:
1. **Swap the audio context:** replace `AC` with an `OfflineAudioContext`, and reset `revIn`, `gtrBus`, `leadBus`, `noiseBuf`, `master`, `musicGain` and `sfxGain` to nodes on that context.
2. **Schedule the song:** call each style's `play()` across one loop. Short loops repeat until the file is at least about 40 s long. For the mashup, call `playMashupTick` for `Math.ceil(MIX.length / 3) * MASHUP_TICKS` ticks at `60 / MASHUP_BPM / 4` seconds per tick. This records all simultaneous layers through one full group rotation.
3. **Render:** render to WAV and normalize the peak to 90%. Gentle songs (title, basement, attic, music room, library) therefore sound louder than they do in the game.
4. **Convert:** encode as a 96 kbps MP3 with `ffmpeg`.

Files are numbered in level order (`00-title`, `01-…` through the medley). Inserting a level means renumbering the later files and updating the README links.

## Checklist: Adding a Song

1. **Write the style:** add a `STYLES` entry with a `play()` that only schedules notes at time `t`, with no game-state side effects except reading `state` and `timeLeft`.
2. **Wire it up:** add it to `MIX`, and set the level's `music` field.
3. **Record:** record the song MP3 and re-record the medley.
4. **Document:** update the README music table and this registry.

The toy-room track is an original orchestral racing fanfare, not the Royal Raceway composition or recording. Its 0.9 gain trim measures about −41 dB RMS over the rendered loop.

Minecraft Block Room uses an original sparse piano/ambient piece, with harp accents and no percussion. The 3.0 gain trim puts the rendered loop near −38 dB RMS; it is not a Minecraft soundtrack recording.

Roblox Avatar Roundup uses an original electronic dance track, Checkpoint Champions, with an obby/tycoon feel. It does not use audio from Roblox games. Its 0.85 volume trim measures about −36.4 dB RMS over the rendered loop.

GTA V + VI Toy Room uses an original synth/funk radio groove with electric piano, synth bass, saxophone and a soft synth lead. It does not include GTA recordings. The 1.6 volume trim measures near −35.3 dB RMS over the rendered loop.

Charging Room Chaos uses Fully Charged, an original electronic dance track with plucked arpeggios, synth lead, pads and a steady beat. Its 1.0 volume trim measures about −35.9 dB RMS over the rendered loop.

The seven holiday songs use 8.0 gain trims: measured in-game RMS is about −35.4 to −33.7 dB, with April Fools slightly louder for its prank accents. They are original synth arrangements. The 2D mashup now covers 41 songs in fourteen groups (105 seconds per group rotation).

Mother’s Day and Father’s Day use original synth arrangements with 8.0 gain trims, measured at about −34.9 and −35.9 dB RMS respectively.

Daniel’s room uses an original stadium-rock synth arrangement; Colin’s uses an original bright surf-rock-inspired synth groove. Both have independent 8.0 gain trims and appear in the 2D mashup.

Mom’s room uses a gentle original 3/4 synth waltz; Uncle Pete’s room uses an original stadium-style synth groove. Both have independent 8.0 gain trims and are included in the Whole House mashup.

The new Mom’s Room and Uncle Pete’s Room recordings measured approximately −35.8 and −35.6 dB RMS in-game before listening-file normalization.
