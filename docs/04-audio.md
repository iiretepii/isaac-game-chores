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
| `garden` | *Seashell Sunday* | 104 | 2 | 8 | 16 | Garden Glow-Up | `music/06-garden.mp3` |
| `library` | *Marginalia for Four Strings* | 60 | 4 | 16 | 14 | Library Book Roundup | `music/12-library.mp3` |
| `science` | *Mad Science Slam* | 112 | 4 | 16 | 16 | Science Lab Scramble | `music/16-science-lab.mp3` |
| `rock` | *Radical Rock* | 144 | 2 | 8 | 8 | Isaac's Room | `music/01-isaacs-room.mp3` |
| `jazz` | *Cool Kitchen Jazz* | 150 | 2 | 8 | 8 | Kitchen Catastrophe | `music/03-kitchen.mp3` |
| `pop` | *Poptastic Pop* | 118 | 2 | 8 | 8 | Living Room Lego-Land | `music/04-living-room.mp3` |
| `hiphop` | *Backyard Boom-Bap* | 90 | 4 | 16 | 4 | Backyard Bonanza | `music/05-backyard.mp3` |
| `techno` | *Garage Funk-Techno* | 126 | 4 | 16 | 4 | Garage of Doom | `music/08-garage.mp3` |
| `princess` | *Once Upon A Tidy Room* | 150 | 2 | 6 | 16 | Annie's Room | `music/02-annies-room.mp3` |
| `french2` | *Les Petits Peintres* | 112 | 2 | 8 | 16 | Arts & Crafts Chaos | `music/14-arts-and-crafts.mp3` |
| `workout` | *Maximum Reps!!!* | 140 | 4 | 16 | 8 | Workout Room Workout | `music/17-workout-room.mp3` |
| `pool` | *Cannonball Calypso* | 128 | 4 | 16 | 16 | Pool Party Panic | `music/07-pool.mp3` |
| `silly` | *Beep Boop Banana Boogie* | 150 | 2 | 8 | 8 | Tech Room Trouble | `music/15-tech-room.mp3` |
| `practice` | *Piano Practice (Mom Is Listening)* | 100 | 4 | 16 | 67 | Music Room Mayhem | `music/13-music-room.mp3` |
| `muzak` | *Muzak For Meetings (Vol. 3)* | 104 | 2 | 8 | 8 | Home Office Havoc | `music/11-home-office.mp3` |
| `crooner` | *Bathroom Amore* | 228 | 2 | 6 | 16 | Bathroom Blunder | `music/10-bathroom.mp3` |
| `polka` | *Oompah Undies Polka* | 132 | 2 | 4 | 16 | Laundry Room Pee-Yew! | `music/09-laundry-room.mp3` |
| `romantic` | *Nocturne In The Basement* | 66 | 4 | 16 | 32 | The Spooky Basement | `music/18-basement.mp3` |
| `baroque` | *Little Fugue In The Attic* | 84 | 4 | 16 | 20 | Attic of Antiques | `music/19-attic.mp3` |
| `french` | *Petite Valse Du Matin* | 66 | 1 | 3 | 16 | Title screen | `music/00-title.mp3` |
| `mix` | *Medley of Every Style* | — | — | — | — | The Whole House!!, Ending | `music/20-whole-house-medley.mp3` |

## Volume Leveling

Each style has a `gain` trim (the `STYLE_GAIN` table) so that every song plays at about −35 dB RMS. The gentle pieces are set a little quieter: title and basement −38, music room and attic −37, library −40. The scheduler sets the music volume to `MUSIC_BASE × gain` whenever the style changes, including between medley segments. After writing or changing a song, re-measure its loudness and update its trim.

## The Medley

`MIX` lists the styles in order: rock, princess, jazz, pop, hiphop, garden, pool, techno, polka, crooner, muzak, library, practice, french2, silly, science, workout, romantic, baroque. The medley plays 4 bars of each, with a record scratch and crash between them, then loops.

**Rule:** every new level song must be added to `MIX`.

## Instruments

All instruments are synthesis helpers in `index.html`:
- **Keyboards:** `piano`, `organ` (additive harmonics), `epiano` (FM), `harp`, `celesta`, `vibes`, `accordion`.
- **Brass and wind:** `trumpet`, `trombone` (slides), `tuba`, `sax`, `flute`, `panFlute`.
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
2. **Schedule the song:** call each style's `play()` across one loop. Short loops repeat until the file is at least about 40 s long. The medley plays four bars of each style in `MIX`.
3. **Render:** render to WAV and normalize the peak to 90%. Quiet songs (like the library) therefore sound louder than they do in the game.
4. **Convert:** encode as a 96 kbps MP3 with `ffmpeg`.

Files are numbered in level order (`00-title`, `01-…` through the medley). Inserting a level means renumbering the later files and updating the README links.

## Checklist: Adding a Song

1. **Write the style:** add a `STYLES` entry with a `play()` that only schedules notes at time `t`, with no game-state side effects except reading `state` and `timeLeft`.
2. **Wire it up:** add it to `MIX`, and set the level's `music` field.
3. **Record:** record the song MP3 and re-record the medley.
4. **Document:** update the README music table and this registry.
