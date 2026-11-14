# Chore Rush!

**Beat the parents home!** A 90s-style side-scrolling platformer where you race through the house finishing chores before Mom and Uncle Pete pull into the driveway.

*Made by Isaac Helton & Pete O'Connell.*

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
| 1 | **Isaac's Room** | Toy dragons → toy chest | 6 | 70s | Dust bunnies | Rock |
| 2 | **Annie's Room** | Dolls → doll house | 7 | 72s | Dust bunnies, cats | Fairy-tale princess waltz |
| 3 | **Kitchen Catastrophe** | Dirty dishes → sink | 8 | 75s | Dust bunnies, cockroaches | Swing jazz |
| 4 | **Living Room Lego-Land** | Toys → toy box | 10 | 80s | Robot vacuums, cats | Bubblegum pop |
| 5 | **Backyard Bonanza** | Leaves → leaf bag | 12 | 85s | Dogs, bees | Boom-bap hip hop |
| 6 | **Garage of Doom** | Trash → trash can | 14 | 90s | Rats, robot vacuums, bees | Funky techno |
| 7 | **Laundry Room Pee-Yew!** | Stinky underwear → washer | 15 | 92s | Soap bubbles, dust bunnies, cockroaches | German oom-pah polka |
| 8 | **Bathroom Blunder** | Runaway poops → toilet | 16 | 96s | Soap bubbles, cockroaches, spiders | Italian crooner waltz |
| 9 | **Home Office Havoc** | Old work papers → shredder | 17 | 98s | Ants, spiders, hamsters | Terrible elevator music |
| 10 | **Music Room Mayhem** | Old piano scores → bookshelf | 18 | 100s | Cats, spiders, cockroaches | Kid practicing piano |
| 11 | **Arts & Crafts Chaos** | Markers → marker cup | 19 | 104s | Ants, cats, soap bubbles | Lively French impressionist |
| 12 | **The Spooky Basement** | Wet shirts → dryer | 20 | 108s | Spiders, rats, dust bunnies | Chopin-style piano nocturne |
| 13 | **Attic of Antiques** | Holiday ornaments → old trunk | 21 | 114s | Bats, spiders, rats | Bach-style pipe organ |
| 14 | **The Whole House!!** | Everything → dive on the couch | 26 | 134s | All of them | Medley of every style |

The basement is dark, with a pool of light that follows you around. In the music room, the floating platforms are piano keys. The arts & crafts room is covered in funny kid drawings: Uncle Pete's giant mustache, an eight-legged cat, a sun in sunglasses, a dinosaur eating a house, a potato "self portrait" and a cool dog on a skateboard.

---

## The music

All the music is generated live in the browser with the Web Audio API. There are no audio files. Every song is original except the public-domain classics in the piano practice track.

| Where | Song | What you hear |
|---|---|---|
| Title screen | *Petite Valse du Matin* | Peaceful French-style waltz on piano, then flute |
| Isaac's Room | *Radical Rock* | Distorted power chords, lead guitar, bass, big rock drums with fills |
| Annie's Room | *Once Upon a Tidy Room* | Harp, strings, flute and celesta in a princess waltz |
| Kitchen | *Cool Kitchen Jazz* | Swing beat, walking bass, ride cymbal, electric piano, saxophone |
| Living Room | *Poptastic Pop* | Four-on-the-floor beat, claps, synth bass, catchy synth hook |
| Backyard | *Backyard Boom-Bap* | Deep kicks, crunchy snare, lo-fi keys, record scratches, vinyl crackle |
| Garage | *Garage Funk-Techno* | Dance beat, squelchy acid bass, cowbell, chord stabs |
| Laundry Room | *Oompah Undies Polka* | Tuba, accordion, two trumpets, wah-wah trombone, slide whistle |
| Bathroom | *Bathroom Amore* | Crooning "ohhh" voice, mandolin, accordion, strings, brushed drums |
| Home Office | *Muzak for Meetings (Vol. 3)* | Wobbly pan flute, sour notes, late vibraphone, elevator ding |
| Music Room | *Piano Practice (Mom Is Listening)* | Scales with mistakes, Für Elise, Twinkle, Mountain King, jazz, Jingle Bells, Bach, a spooky toccata, pop, Chopsticks, Ode to Joy |
| Arts & Crafts | *Les Petits Peintres* | Faster French impressionist piece: rippling piano, flute, sliding chords, whole-tone harp sweeps |
| Basement | *Nocturne in the Basement* | Romantic piano with rolling left hand and rubato |
| Attic | *Attic Organ Fugue* | Baroque pipe organ in D minor with pedal bass |
| Whole House | Medley | Switches style every four bars with a record scratch |
| Ending | Medley | — |

Sound effects include a slide whistle when you jump, a "boing" when you stomp, a car horn as the parents get close, a kazoo fanfare when you finish a level and a sad trombone when you get caught.

---

## How it's built

Everything (code, graphics and music) lives in `index.html`:

- **Graphics** are drawn pixel by pixel on a 480×272 canvas, scaled up to fit the screen. Sprites get an automatic dark outline. The screen has a light old-TV look (scan lines and darker corners).
- **Levels** are generated from a fixed seed, so each level is the same every time you play. The generator keeps every gap and ledge within jumping distance.
- **Music** is a small sequencer with a different set of synthesized instruments for each style.
