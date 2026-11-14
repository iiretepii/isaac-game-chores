# Chore Rush!

**Beat the parents home!** A 90s-style side-scrolling platformer where you race through the house finishing chores before Mom and Uncle Pete pull into the driveway.

*A Belvoir Studios game. Made by Isaac Helton & Pete O'Connell.*

### ▶ [Play Chore Rush!](https://claude.ai/artifact/7bgXsM4dhpEVavZJgvo6ZJ)

---

## How to play

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

### Goal of each level

1. Read the text message from Mom or Uncle Pete telling you the chore.
2. Collect every chore item scattered around the level. The counter in the top-left shows how many you have.
3. Bring them to the drop-off spot at the end of the level (it glows and says **HERE!** once you have everything).
4. Do it before the timer runs out.

### The parents' car

The bar at the top of the screen shows the parents' car driving toward the house. When the timer reaches 0 the car arrives, the parents yell (for example "YOU'RE GROUNDED UNTIL YOU'RE 40!") and you retry the level. In the last 15 seconds the screen flashes red and the music speeds up, and with 10 seconds left you hear a **HONK HONK!**

### Hazards

- **Critters** walk, hop or fly around the levels. Jump on top of one to stomp it (+100 points). Running into one costs **5 seconds**.
- **LEGO bricks** on the floor cost 5 seconds if you step on them.
- **Falling into a gap** costs 5 seconds and puts you back on the last safe ground.

### Sibling helpers

When you're running out of time, your siblings show up to help:

- **Little Sis** arrives on a skateboard when **20%** of the time is left ("I'll help! (for a cookie)").
- **Big Bro** joins at **10%** ("Ugh, fine. Move over.").

They fly to the nearest items and collect them for you. You still have to reach the drop-off spot yourself.

### Scoring

- Chore item: +50 (+25 if a sibling grabs it)
- Stomping a critter: +100
- Finishing a level: +10 for every second left on the clock

---

## The levels

Each level is longer, with more items, critters and gaps than the one before. Later levels add LEGO bricks and moving platforms. Every level has its own room, chore and music style.

| # | Level | Chore | Items | Time | Critters | Music |
|---|---|---|---|---|---|---|
| 1 | **Isaac's Room** | Blocky toy dragons → toy chest | 10 | 82s | Blocky zombies, skeletons, spiders and hissing bush-blocks | Rock |
| 2 | **Annie's Room** | Dolls → castle doll house | 11 | 84s | A tabby cat, a husky and a Pomeranian | Fairy-tale princess waltz |
| 3 | **Kitchen Catastrophe** | Dirty dishes → dishwasher | 12 | 87s | Dust bunnies, cockroaches | Swing jazz |
| 4 | **Living Room Lego-Land** | Toys → plastic toy tote | 13 | 89s | Robot vacuums, cats | Bubblegum pop |
| 5 | **Backyard Bonanza** | Leaves → leaf bag | 14 | 91s | Dogs, bees | Boom-bap hip hop |
| 6 | **Garage of Doom** | Trash → trash can | 15 | 93s | Rats, robot vacuums, bees | Funky techno |
| 7 | **Laundry Room Pee-Yew!** | Stinky underwear → washer | 16 | 95s | Soap bubbles, dust bunnies, cockroaches | German oom-pah polka |
| 8 | **Bathroom Blunder** | Runaway poops → toilet | 17 | 99s | Soap bubbles, cockroaches, spiders | Italian crooner waltz |
| 9 | **Home Office Havoc** | Old work papers → recycle bin | 18 | 101s | Ants, spiders, hamsters | Terrible elevator music |
| 10 | **Music Room Mayhem** | Old piano scores → bookshelf | 19 | 103s | Cats, spiders, cockroaches | Kid practicing piano |
| 11 | **Arts & Crafts Chaos** | Paint buckets → shelves | 20 | 107s | Ants, cats, soap bubbles | Lively French impressionist |
| 12 | **Tech Room Trouble** | Robot parts → robot workbench | 21 | 111s | Little lightning bolts | The silliest song ever |
| 13 | **The Spooky Basement** | Wet shirts → dryer | 22 | 115s | Spiders, rats, dust bunnies | Chopin-style piano nocturne |
| 14 | **Attic of Antiques** | Holiday ornaments → old trunk | 23 | 121s | Bats, spiders, rats | Bach-style pipe organ |
| 15 | **The Whole House!!** | Everything → dive on the couch | 24 | 140s | All of them | Medley of every style |

The basement is dark, with a pool of light that follows you around. In the music room, the floating platforms are piano keys. The arts & crafts room is covered in funny kid drawings: Uncle Pete's giant mustache, an eight-legged cat, a sun in sunglasses, a dinosaur eating a house, a potato "self portrait" and a cool dog on a skateboard.

---

## The music

🎧 **Click any song name below to listen to it!** Each one opens an MP3 recording from the [`music/`](music/) folder that you can play or download.

Inside the game itself, all the music is generated live in the browser with the Web Audio API (the game needs no audio files; the MP3s are recordings for listening). Every song is original except the public-domain classics in the piano practice track.

| Where | Song | What you hear |
|---|---|---|
| Title screen | [*Petite Valse du Matin*](music/00-title.mp3) | Peaceful French-style waltz on piano, then flute |
| Isaac's Room | [*Radical Rock*](music/01-isaacs-room.mp3) | Distorted power chords, lead guitar, bass, big rock drums with fills |
| Annie's Room | [*Once Upon a Tidy Room*](music/02-annies-room.mp3) | Harp, strings, flute and celesta in a princess waltz |
| Kitchen | [*Cool Kitchen Jazz*](music/03-kitchen.mp3) | Swing beat, walking bass, ride cymbal, electric piano, saxophone |
| Living Room | [*Poptastic Pop*](music/04-living-room.mp3) | Four-on-the-floor beat, claps, synth bass, catchy synth hook |
| Backyard | [*Backyard Boom-Bap*](music/05-backyard.mp3) | Deep kicks, crunchy snare, lo-fi keys, record scratches, vinyl crackle |
| Garage | [*Garage Funk-Techno*](music/06-garage.mp3) | Dance beat, squelchy acid bass, cowbell, chord stabs |
| Laundry Room | [*Oompah Undies Polka*](music/07-laundry-room.mp3) | Tuba, accordion, two trumpets, wah-wah trombone, slide whistle |
| Bathroom | [*Bathroom Amore*](music/08-bathroom.mp3) | Bouncy, cheesy crooner waltz: crooning "ohhh" voice, mandolin, accordion oom-pah-pah, tambourine, castanets, a corny key change and a "ba-da-BING!" |
| Home Office | [*Muzak for Meetings (Vol. 3)*](music/09-home-office.mp3) | Wobbly pan flute, sour notes, late vibraphone, elevator ding |
| Music Room | [*Piano Practice (Mom Is Listening)*](music/10-music-room.mp3) | Scales with mistakes, Für Elise, Twinkle, Mountain King, jazz, Jingle Bells, Bach, a spooky toccata, pop, Chopsticks, Ode to Joy |
| Arts & Crafts | [*Les Petits Peintres*](music/11-arts-and-crafts.mp3) | Faster French impressionist piece: rippling piano, flute, sliding chords, whole-tone harp sweeps |
| Tech Room | [*Beep Boop Banana Boogie*](music/12-tech-room.mp3) | Kazoo, boingy bass, chipmunk robot beeps, rubber-duck squeaks, clown horns, cuckoo clock, slide whistles, sad trombone and the occasional burp |
| Basement | [*Nocturne in the Basement*](music/13-basement.mp3) | Romantic piano with rolling left hand and rubato |
| Attic | [*Little Fugue in the Attic*](music/14-attic.mp3) | A four-voice pipe-organ fugue in D minor (about a minute): entries in alto, soprano, tenor and bass, three episodes, a middle entry, a low bass entry, a trill over a dominant pedal and a Picardy-third ending |
| Whole House | [*Medley of every style*](music/15-whole-house-medley.mp3) | Switches style every four bars with a record scratch |
| Ending | [*Medley of every style*](music/15-whole-house-medley.mp3) | Same medley as the Whole House |

Sound effects include a slide whistle when you jump, a "boing" when you stomp, a car horn as the parents get close, a kazoo fanfare when you finish a level and a sad trombone when you get caught.

---

## How it's built

Everything (code, graphics and music) lives in `index.html`:

- **Graphics** are drawn pixel by pixel on a 480×272 canvas, scaled up to fit the screen. Sprites get an automatic dark outline. The screen has a light old-TV look (scan lines and darker corners).
- **Levels** are generated from a fixed seed, so each level is the same every time you play. The generator keeps every gap and ledge within jumping distance.
- **Music** is a small sequencer with a different set of synthesized instruments for each style.
