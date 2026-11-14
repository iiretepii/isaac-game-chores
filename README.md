# Chore Rush!

**Beat the parents home!** A 90s-style side-scrolling platformer where you race through the house finishing chores before Mom and Uncle Pete pull into the driveway.

*A Belvoir Studios game. Made by Isaac Helton & Pete O'Connell.*

### ▶ [Play Chore Rush!](https://claude.ai/artifact/7bgXsM4dhpEVavZJgvo6ZJ)

---

## How to Play

The whole game is a single file, `index.html`. Open it in any modern web browser (Chrome, Edge, Firefox, Safari) on a computer, tablet or phone. No install or internet connection is needed, except to load the pixel font (it falls back to a plain font offline).

### Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move | Arrow keys or A / D | ◀ ▶ buttons |
| Jump | Space, Up, W or Z (hold for a higher jump) | JUMP button |
| Start / continue | Enter or Space, or click | Tap the screen |
| Pause | P or Esc | — |
| Mute | M | — |

Browsers don't allow sound until you interact with the page, so the title screen asks you to **click or press any key for sound** first. After that, press Enter (or tap) to start.

### Goal of Each Level

1. Read the text message from Mom or Uncle Pete telling you the chore.
2. Collect every chore item scattered around the level. The counter in the top-left shows how many you have.
3. Bring them to the drop-off spot at the end of the level (it glows and says **HERE!** once you have everything).
4. Do it before the timer runs out.

### The Parents' Car

The bar at the top of the screen shows the parents' car driving toward the house. When the timer reaches 0 the car arrives, the parents yell (for example "YOU'RE GROUNDED UNTIL YOU'RE 40!") and you retry the level. In the last 15 seconds the screen flashes red and the music speeds up, and with 10 seconds left you hear a **HONK HONK!**

### Hazards

- **Critters** walk, hop or fly around the levels. Jump on top of one to stomp it (+100 points). Running into one costs **5 seconds**.
- **LEGO bricks** on the floor cost 5 seconds if you step on them.
- **Falling into a gap** costs 5 seconds and puts you back on the last safe ground.

### Sibling Helpers

Your siblings help you with chores for the **entire game**, on every level:

- **Little Sis** rolls in on her skateboard right after the level starts ("I'll help all day! (for cookies)").
- **Big Bro** zooms in a few seconds later on his **neon light-bike**: a sleek black futuristic bike with glowing red edges and disc wheels that leaves a glowing light trail behind it ("Vrrrm! Neon light-bike, baby!").

They fly to the nearest items and collect them for you, taking a short victory break after each one, so you still need to do your share. Only you can carry everything to the drop-off spot.

### Scoring

- Chore item: +50 (+25 if a sibling grabs it)
- Stomping a critter: +100
- Finishing a level: +10 for every second left on the clock

---

## The Levels

Each level is longer, with more items, critters and gaps than the one before. Later levels add LEGO bricks and moving platforms. Every level has its own room, chore and music style.

| # | Level | Chore | Items | Time | Critters | Music |
|---|---|---|---|---|---|---|
| 1 | **Isaac's Room** | Blocky toy dragons → toy chest | 10 | 82s | Blocky zombies, skeletons, spiders and hissing bush-blocks | Rock |
| 2 | **Annie's Room** | Dolls → castle doll house | 11 | 84s | A tabby cat, a husky and a Pomeranian | Fairy-tale princess waltz |
| 3 | **Kitchen Catastrophe** | Dirty dishes → dishwasher | 12 | 87s | Dust bunnies, cockroaches | Swing jazz |
| 4 | **Living Room Lego-Land** | Toys → plastic toy tote | 13 | 89s | Robot vacuums, cats | Bubblegum pop |
| 5 | **Backyard Bonanza** | Leaves → leaf bag | 14 | 91s | Dogs, bees | Boom-bap hip hop |
| 6 | **Pool Party Panic** | Soggy towels → towel basket | 15 | 93s | Ducks, geese, swans, squirrels | Silly splashy calypso |
| 7 | **Garage of Doom** | Trash → trash can | 16 | 96s | Rats, robot vacuums, bees | Funky techno |
| 8 | **Laundry Room Pee-Yew!** | Stinky underwear → washer | 17 | 98s | Soap bubbles, dust bunnies, cockroaches | German oom-pah polka |
| 9 | **Bathroom Blunder** | Runaway poops → toilet | 18 | 102s | Soap bubbles, cockroaches, spiders | Italian crooner waltz |
| 10 | **Home Office Havoc** | Old work papers → recycle bin | 19 | 104s | Ants, spiders, hamsters | Terrible elevator music |
| 11 | **Music Room Mayhem** | Old piano scores → bookshelf | 20 | 106s | Cats, spiders, cockroaches | Kid practicing piano |
| 12 | **Arts & Crafts Chaos** | Paint buckets → shelves | 21 | 110s | Ants, cats, soap bubbles | Lively French impressionist |
| 13 | **Tech Room Trouble** | Robot parts → robot workbench | 22 | 114s | Little lightning bolts | The silliest song ever |
| 14 | **Workout Room Workout** | Weights → weight rack | 23 | 117s | Rats, cats, dogs, dust mites | High-octane workout anthem |
| 15 | **The Spooky Basement** | Wet shirts → dryer | 24 | 121s | Spiders, rats, dust bunnies | Romantic movie-theme piano |
| 16 | **Attic of Antiques** | Holiday ornaments → old trunk | 25 | 127s | Bats, spiders, rats | Bach-style pipe organ |
| 17 | **The Whole House!!** | Everything → dive on the couch | 26 | 146s | All of them | Medley of every style |

The basement is dark, with a pool of light that follows you around. At the pool, the floating platforms are striped lounge chairs and the gaps are the pool itself. In the music room, the floating platforms are piano keys. The arts & crafts room is covered in funny kid drawings: Uncle Pete's giant mustache, an eight-legged cat, a sun in sunglasses, a dinosaur eating a house, a potato "self portrait" and a cool dog on a skateboard.

---

## The Music

🎧 **Click any song name below to listen to it!** Each one opens and plays an MP3 recording right in your browser (the files live in the [`music/`](music/) folder).

Inside the game itself, all the music is generated live in the browser with the Web Audio API (the game needs no audio files; the MP3s are recordings for listening). Every song is original except the public-domain classics in the piano practice track.

| Where | Song | What you hear |
|---|---|---|
| Title screen | [*Petite Valse du Matin*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/00-title.mp3) | Peaceful French-style waltz on piano, then flute |
| Isaac's Room | [*Radical Rock*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/01-isaacs-room.mp3) | Distorted power chords, lead guitar, bass, big rock drums with fills |
| Annie's Room | [*Once Upon a Tidy Room*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/02-annies-room.mp3) | Harp, strings, flute and celesta in a princess waltz |
| Kitchen | [*Cool Kitchen Jazz*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/03-kitchen.mp3) | Swing beat, walking bass, ride cymbal, electric piano, saxophone |
| Living Room | [*Poptastic Pop*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/04-living-room.mp3) | Four-on-the-floor beat, claps, synth bass, catchy synth hook |
| Backyard | [*Backyard Boom-Bap*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/05-backyard.mp3) | Deep kicks, crunchy snare, lo-fi keys, record scratches, vinyl crackle |
| Pool | [*Cannonball Calypso*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/06-pool.mp3) | Super-silly splashy pool party: steel drums, bubbly boing bass, ukulele strums, congas, shaker, bubble pops, a rubber-duck squeak, slide whistle and a big CANNONBALL splash |
| Garage | [*Garage Funk-Techno*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/07-garage.mp3) | Dance beat, squelchy acid bass, cowbell, chord stabs |
| Laundry Room | [*Oompah Undies Polka*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/08-laundry-room.mp3) | Tuba, accordion, two trumpets, wah-wah trombone, slide whistle |
| Bathroom | [*Bathroom Amore*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/09-bathroom.mp3) | Bouncy, cheesy crooner waltz: crooning "ohhh" voice, mandolin, accordion oom-pah-pah, tambourine, castanets, a corny key change and a "ba-da-BING!" |
| Home Office | [*Muzak for Meetings (Vol. 3)*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/10-home-office.mp3) | Wobbly pan flute, sour notes, late vibraphone, elevator ding |
| Music Room | [*Piano Practice (Mom Is Listening)*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/11-music-room.mp3) | Scales with mistakes, Für Elise, Twinkle, Mountain King, jazz, Jingle Bells, Bach, a spooky toccata, pop, Chopsticks, Ode to Joy |
| Arts & Crafts | [*Les Petits Peintres*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/12-arts-and-crafts.mp3) | Faster French impressionist piece: rippling piano, flute, sliding chords, whole-tone harp sweeps |
| Tech Room | [*Beep Boop Banana Boogie*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/13-tech-room.mp3) | Kazoo, boingy bass, chipmunk robot beeps, rubber-duck squeaks, clown horns, cuckoo clock, slide whistles, sad trombone and the occasional burp |
| Workout Room | [*Maximum Reps!!!*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/14-workout-room.mp3) | Pounding four-on-the-floor beat, rolling bass, supersaw synth riff, coach's whistle, "HEY!" shouts and a snare-roll build-up into a big drop |
| Basement | [*Nocturne in the Basement*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/15-basement.mp3) | Romantic film-score piano in the style of classic Italian movie themes: a simple, singing melody with long notes and big expressive leaps over flowing arpeggios, warm strings, and on the repeat the strings take the melody while the piano floats above |
| Attic | [*Little Fugue in the Attic*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/16-attic.mp3) | A four-voice pipe-organ fugue in D minor (about a minute): entries in alto, soprano, tenor and bass, three episodes, a middle entry, a low bass entry, a trill over a dominant pedal and a Picardy-third ending |
| Whole House | [*Medley of Every Style*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/17-whole-house-medley.mp3) | Switches style every four bars with a record scratch |
| Ending | [*Medley of Every Style*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/17-whole-house-medley.mp3) | Same medley as the Whole House |

Sound effects include a slide whistle when you jump, a "boing" when you stomp, a car horn as the parents get close, a kazoo fanfare when you finish a level and a sad trombone when you get caught.

---

## How It's Built

Everything (code, graphics and music) lives in `index.html`:

- **Graphics** are drawn pixel by pixel on a 480×272 canvas, scaled up to fit the screen. Sprites get an automatic dark outline. The screen has a light old-TV look (scan lines and darker corners).
- **Levels** are generated from a fixed seed, so each level is the same every time you play. The generator keeps every gap and ledge within jumping distance.
- **Music** is a small sequencer with a different set of synthesized instruments for each style.
