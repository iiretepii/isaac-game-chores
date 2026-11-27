# Chore Rush!

## New: Chore Rush 3D

A separate, playable 3D fork lives in [`3d/`](3d/README.md). [Play the 3D version](https://isaac-game-chores-play.magneticlorikeet2.chatgpt.site/3d/) or [play the original](https://isaac-game-chores-play.magneticlorikeet2.chatgpt.site/). The original 2D game remains in the root `index.html`; the fork has its own files and develops independently.

The 3D edition has modeled rooms, furniture, riders, lighting and shadows, all 29 room choices, helping siblings, collectible chores and the original synthesized music. This first version adapts the game into open 3D rooms; it does not yet reproduce every 2D obstacle layout or unique enemy and item design.

**Beat the parents home!** A 90s-style side-scrolling platformer where you race through the house finishing chores before Mom and Uncle Pete pull into the driveway.

*A Belvoir Studios game. Made by Isaac & Pete.*

### ▶ [Play Chore Rush!](https://claude.ai/artifact/7bgXsM4dhpEVavZJgvo6ZJ)

[Owner's Sites play link](https://isaac-game-chores-play.magneticlorikeet2.chatgpt.site) (private). The two hosted copies are published separately; neither updates automatically when GitHub changes.

---

## How to Play

The original **2D game** is a single file, `index.html`. Open it in any modern web browser (Chrome, Edge, Firefox, Safari) on a computer, tablet or phone. No install or internet connection is needed, except to load the pixel font (it falls back to a plain font offline).

### Controls

| Action | Keyboard | Touch |
|---|---|---|
| Move | Arrow keys or A / D | ◀ ▶ buttons |
| Jump | Space, Up, W or Z (hold for a higher jump) | JUMP button |
| Double jump | Press jump again in mid-air | JUMP again |
| Duck | Down arrow or S | DUCK button |
| Start / continue | Enter or Space, or click | Tap the screen |
| Level select (title screen or after finishing a level) | L, then arrows + Enter | Tap LEVEL SELECT, then tap a level |
| Pause | P or Esc | Pause / Resume button |
| Mute | M | Mute / Unmute button |

On phones and tablets, the touch buttons support repeated Jump taps and holding movement while jumping. The game scales to fit portrait and landscape screens.

You ride a **bicycle** with spinning wheels and pedals, except on Race Track Rumble, where all three kids drive race cars, and MarioKart Toy Room, where you ride a Standard Kart, Isaac rides a Flame Rider with Hot Wheels and Annie rides a Sport Bike. Duck to squeeze under low spots, and use the double jump to clear wide gaps or reach high shelves.

On the title screen you can also open **Level Select** to jump straight to any of the 44 chores or the optional Training Room. After you finish a chore, the "Chore Complete!" screen also has a **Level Select** button (or press **L**) so you can jump to any level from there.

Browsers don't allow sound until you interact with the page, so the title screen asks you to **click or press any key for sound** first. After that, press Enter (or tap) to start.

### Goal of Each Level

1. Read the text message from Mom or Uncle Pete telling you the chore.
2. Collect every chore item scattered around the level. The counter in the top-left shows how many you have.
3. Bring them to the drop-off spot at the end of the level (it glows and says **HERE!** once you have everything).
4. Do it before the timer runs out.


### The Parents' Car

The bar at the top of the screen shows the parents' car driving toward the house. When the timer reaches 0 the car arrives, the parents yell (for example "YOU'RE GROUNDED UNTIL YOU'RE 40!") and you retry the level. In the last 15 seconds the screen flashes red and the music speeds up, and with 10 seconds left you hear a **HONK HONK!**

**Meet the parents:** Mom is very pretty, with long black hair and a purple dress. Uncle Pete is very handsome, with brown hair and a navy Chicago Bears #34 jersey with orange-and-white sleeve stripes. If they beat you home they stomp, shake their fists and yell while a sad piano song (*Grounded Until Forever*) plays, but they cheer for you on the victory screen.

### Hazards

- **Critters** walk, hop or fly around the levels. Jump on top of one to stomp it (+100 points). Running into one costs **5 seconds**.
- **LEGO bricks** on the floor cost 5 seconds if you step on them.
- **Falling into a gap** costs 5 seconds and puts you back on the last safe ground.

### Power-ups

Each 2D room has five optional bonus pickups: shield, speed and magnet plus two rotating powers from the eleven new types. Whole House also has three extra Ghost Bridge pickups spread through the room. You, Isaac, Annie, Daniel, Colin or Andrew can collect the unframed icons to power themselves up:

| Power-up | Effect | Lasts |
|---|---|---|
| Blue shield | Protects its collector from critter and LEGO hits; gaps still cost time | 10 seconds |
| Yellow lightning bolt | Makes its collector move or fly 1.5× faster | 8 seconds |
| Purple magnet | Pulls nearby chore items toward its collector, without pulling through solid walls | 10 seconds |
| Jump Boots | Higher jumps | 10 seconds |
| Feather Float | Slower falling | 10 seconds |
| Triple Jump | A third jump in midair | 10 seconds |
| Star | Defeats critters on contact and protects against LEGO hits | 8 seconds |
| Fire Aura | Defeats nearby critters with a clear path | 8 seconds |
| Ice Aura | Freezes nearby critters with a clear path | 8 seconds |
| Slow Aura | Slows nearby critters with a clear path | 10 seconds |
| Double Points | Doubles the collector’s chore and critter points | 10 seconds |
| Rescue Balloon | Catches one fall into a gap | Up to 12 seconds |
| Item Compass | Points toward remaining chores, then the drop-off | 12 seconds |
| Ghost Bridge | Invisible platforms let the collector cross gaps | 12 seconds |

Your active powers have countdowns beneath the HUD; helpers show their own countdowns below their names. Powered characters have effect markers; Ghost Bridge leaves the platforms invisible. Jump and falling powers affect grounded characters, including Andrew in vehicle rooms. Ghost Bridge creates personal one-way platforms over pits only while active; it does not protect anyone else. Different powers work together; another pickup refreshes that power’s timer. Timers pause with the game and reset on a retry or new room. Each bonus belongs only to the character who collects it; helper pickups do not activate your powers. The pickup message names the finder. Bonuses do not count as chores or need to be collected to finish.

### Sibling and Cousin Helpers

Isaac, Annie, and your cousins **Daniel, Colin and Andrew** join you on every level. All five appear beside you when the level begins.

- **Annie** (little sister) rides her skateboard in a pretty pink dress, holding a pink balloon ("I'll help all day! (for cookies)"). The balloon lets her **float a little** at the top of each jump and drift down more slowly.
- **Isaac** (big brother) wears a red shirt and a blue cap (red and blue are his favorite colors) and rides his **neon light-bike**: a sleek black futuristic bike with glowing red edges and disc wheels that leaves a glowing light trail behind it ("Vrrrm! Neon light-bike, baby!").

Daniel wears green with a yellow cap; Colin wears purple with a teal cap. Daniel drives a green monster truck; Colin rides a turquoise-and-purple surfboard and greets you immediately on every level’s intro with “Surfs Up!”. They keep those rides in ordinary rooms and menu lineups. In Race Track Rumble, Daniel, Colin and Andrew drive race cars with helmets; in MarioKart Toy Room they drive Standard Karts. All use the same 176 px/s speed and helper abilities. All five appear on the title, level-intro, chore-complete and final victory screens.

**Andrew** wears an orange shirt and pale-blue cap, with flapping white-and-blue wings, flying belly-down with his head up and his original face, outfit and wings. He flies over gaps and up to items, steers around solid obstacles, and helps collect at 33% time remaining or immediately in his Sky Room and throughout Whole House. He keeps his wings in ordinary rooms, and uses grounded vehicles in Race Track Rumble and MarioKart Toy Room.

When they show up, you greet them with a goofy speech bubble picked at random, like "HEY PAL!", "YOOO!", "LET HIM COOK!", "NO CAP, HI!", "BRO-TATO CHIP!" or "Sup Bro!".

**How they help:** In **The Whole House!!**, all five helpers collect items from the start and keep helping for the entire level, prioritizing chores over detours to hunt critters. **Isaac also collects immediately in Isaac’s Room, Annie collects immediately in Annie’s Room, Daniel in his Monster Jam room, and Colin in his Surf Shack, and Andrew in his Sky Room**, prioritizing their own chores. In other rooms, they ride behind you and sprint ahead to collect items when the clock gets low:

- **Annie, Colin and Andrew** start grabbing items when there's **33% of the time** left ("Turbo mode! I'll grab some!").
- **Isaac and Daniel** join in at **20%** ("Turbo mode! I'll grab some!").

**They’re all aces.** Annie, Isaac, Daniel, Colin and Andrew spot obstacles early, clear gaps and walls cleanly, go hunting for bad guys near you, and **zap any critter they touch** ("ZAP! +100").

Their vehicles follow the terrain, with these helper abilities:

- They ride along the ground, jump (and double jump) over gaps, walls, critters and LEGO bricks, and duck under low spots.
- They can **stomp critters** (+100 points), and other critter contact triggers their zap (+100). LEGO hits bounce them back, and falls return them to safe ground. **There's no time penalty for the siblings.**
- When they're collecting, they split up the work, prefer items with fewer nearby critters, and switch targets if they get stuck.
- Only you can carry everything to the drop-off spot.

### Scoring

- Chore item: +50 (+25 if a sibling grabs it)
- Stomping a critter: +100
- Finishing a level: +10 for every second left on the clock

---

## The Levels

Daniel’s Monster Jam Room is level 3, and Colin’s Surf Shack is level 4, Andrew’s Sky Room is level 5, Mom’s Room is level 6, and Uncle Pete’s Room is level 7. Each room keeps its own item count and timer. Difficulty follows the room's **position**: Level 1 is the easiest and every level is a little harder than the one before, up to the Whole House.

| # | Level | Chore | Items | Time | Critters | Music |
|---|---|---|---|---|---|---|
| 1 | **Isaac's Room** | Blocky toy dragons → pretend treasure chest with a matching dragon painted on the front | 10 | 94s | Blocky zombies, skeletons, spiders and hissing bush-blocks | Rock |
| 2 | **Annie's Room** | Dolls → castle doll house | 11 | 98s | A tabby cat, a husky and a Pomeranian | Fairy-tale princess waltz |
| 3 | **Daniel'S Monster Jam Room** | Park the toy monster trucks in the arena garage | 12 | 205s | roomba, chomper, rat | Stadium Stomp |
| 4 | **Colin'S Surf Shack** | Put the toy surfboards back on the surfboard rack | 13 | 208s | duck, squirrel, bubble | Surfs Up Shuffle |
| 5 | **Andrew's Sky Room** | Flying toys → toy hangar | 14 | 107s | Bees, bats, bubbles | Wings Above the House |
| 6 | **Mom'S Room** | Put the jewelry back in Mom's jewelry box | 15 | 211s | hamster, cat, bubble | Jewel Box Waltz |
| 7 | **Uncle Pete'S Room** | Put the Chicago Bears gear in Uncle Pete's locker | 16 | 214s | roomba, dog, turkey | Bears Cleanup Drive |
| 8 | **Kitchen Catastrophe** | Dirty dishes → dishwasher | 12 | 101s | Dust bunnies, cockroaches | Swing jazz |
| 9 | **Living Room Lego-Land** | Pillows in lots of colors → cream couch | 13 | 104s | Robot vacuums, cats | Bubblegum pop |
| 10 | **Backyard Bonanza** | Leaves → leaf bag | 14 | 107s | Dogs, bees | Boom-bap hip hop |
| 11 | **Garden Glow-Up** | Weeds (pulled-up dandelion clumps) → compost bin | 15 | 110s | Walking weeds | Beatles-style sing-along |
| 12 | **Pool Party Panic** | Soggy towels → towel basket | 16 | 113s | Ducks, geese, swans, squirrels | Silly splashy calypso |
| 13 | **Garage of Doom** | Smelly trash → dumpster | 17 | 116s | Rats, robot vacuums, bees | Funky techno |
| 14 | **Laundry Room Pee-Yew!** | Stinky underwear → washer | 18 | 119s | Soap bubbles, dust bunnies, cockroaches | German oom-pah polka |
| 15 | **Bathroom Blunder** | Runaway poops → toilet | 19 | 122s | Soap bubbles, cockroaches, spiders | Italian crooner waltz |
| 16 | **Home Office Havoc** | Old work papers → recycle bin | 20 | 125s | Ants, spiders, hamsters | Terrible elevator music |
| 17 | **Library Book Roundup** | Books → library shelf | 21 | 128s | Dust bunnies, spiders, hamsters | Inspirational strings and harp |
| 18 | **Music Room Mayhem** | Old piano scores → bookshelf | 22 | 131s | Cats, spiders, cockroaches | Kid practicing piano |
| 19 | **Arts & Crafts Chaos** | Paint buckets → shelves | 23 | 134s | Ants, cats, soap bubbles | Ska-punk for rebels and hippies |
| 20 | **Tech Room Trouble** | Robot parts → giant robot | 24 | 137s | Little lightning bolts | The silliest song ever |
| 21 | **Science Lab Scramble** | Test tubes → lab rack | 25 | 140s | Slime, soap bubbles, lightning bolts | Zany 90s science-TV funk |
| 22 | **Workout Room Workout** | Weights → weight rack | 26 | 143s | Rats, cats, dogs, dust mites | High-octane workout anthem |
| 23 | **The Spooky Basement** | Wet shirts → dryer | 27 | 146s | Spiders, rats, dust bunnies | Romantic movie-theme piano |
| 24 | **Attic of Antiques** | Holiday ornaments → old trunk | 28 | 149s | Bats, spiders, rats | Bach-style pipe organ |
| 25 | **Pet Room Pandemonium** | Squeaky pet toys (bones, balls, rubber mice) → pet toy basket | 29 | 152s | Hamsters, a tabby cat, a Pomeranian | Silly, happy chiptune with barking, meowing pets |
| 26 | **Race Track Rumble** | Racing tires → tire shelf (you, Isaac and Annie drive race cars here) | 30 | 154s | Robot vacuums, squirrels, geese | Isaac's Room rock song, very fast |
| 27 | **Game Room Glitch** | Game controllers (classic pads, rounded pads, arcade joysticks, twin-stick pads) → game shelf | 31 | 157s | Pixel space invaders, chompers, arcade ghosts | NES-style chiptune |
| 28 | **Money Room Millions** | Coins → coin chest | 32 | 160s | Hamsters, robot vacuums, slime | Vivaldi's "Winter" as 8-bit video game music |
| 29 | **MarioKart Toy Room** | Toy karts and bikes → display garage (you: Standard Kart; Isaac: Flame Rider with Hot Wheels; Annie: Sport Bike) | 33 | 163s | Robot vacuums, squirrels, arcade ghosts | Original orchestral racing fanfare |
| 30 | **Minecraft Block Room** | Toy diamond blocks → storage chest | 34 | 166s | Blocky zombies, skeletons, spiders, hissing bush-blocks | Original gentle piano and ambient music |
| 31 | **Roblox Avatar Roundup** | Toy Roblox avatars → display shelf | 35 | 169s | Robot vacuums, pixel space invaders, arcade ghosts | Original upbeat electronic obby-style music |
| 32 | **GTA V + VI Toy Room** | Toy sports cars and bikes → city garage | 36 | 172s | Robot vacuums, dogs, rats | Original sunset-city synth/funk radio groove |
| 33 | **Charging Room Chaos** | Charging cables → cable organizer | 37 | 175s | Lightning bolts, robot vacuums, ants | Original electronic dance music |
| 34 | **LEGO Builders Room** | LEGO bricks → LEGO storage bin | 20 | 180s | Roombas, slimes | Snap Together Stomp |
| 35 | **Halloween Haunt** | Put the carved pumpkins in the pumpkin bucket | 38 | 178s | bat, spider, ghosty | Original Spooky Sugar Shuffle |
| 36 | **Thanksgiving Feast** | Return the pie slices to the feast table | 39 | 181s | turkey | Original Harvest Home Hop |
| 37 | **Christmas Cheer** | Put the presents under the Christmas tree | 40 | 184s | roomba, cat, hamster | Festive Christmas carol medley |
| 38 | **Valentines Day Love** | Put the valentines in the heart mailbox | 41 | 187s | bubble, hamster, cat | Original Hearts Together |
| 39 | **St Patricks Day Luck** | Gather the shamrocks into the lucky pot | 42 | 190s | squirrel, hamster, weed | Original Lucky Clover Jig |
| 40 | **April Fools Day Pranks** | Put the prank toys back in the joke box | 43 | 193s | chomper, roomba, bubble | Original Whoops-a-Daisy |
| 41 | **Easter Egg Hunt** | Return the painted eggs to the Easter basket | 44 | 196s | hamster, squirrel, bee | Original Springtime Hop |
| 42 | **Mother'S Day Blooms** | Put the flower bouquets in Mom's vase | 45 | 199s | bee, hamster, squirrel | Bouquets for Mom |
| 43 | **Father'S Day Surprise** | Put the colorful ties on Dad's gift rack | 46 | 202s | roomba, dog, hamster | Dads Day Groove |
| 44 | **The Whole House!!** | Everything → dive on the living room’s cream couch with matching colorful pillows | 52 | 220s | All of them | Greatest-hits medley of iconic songs |

The basement is dark, with a pool of light that follows you around. At the pool, the floating platforms are striped lounge chairs and the gaps are the pool itself. In the music room, the floating platforms are piano keys. The arts & crafts room is covered in funny kid drawings: Uncle Pete's giant mustache, an eight-legged cat, a sun in sunglasses, a dinosaur eating a house, a potato "self portrait" and a cool dog on a skateboard.

---

## The Music

🎧 **Click any song name below to listen to it!** Each one opens and plays an MP3 recording right in your browser (the files live in the [`music/`](music/) folder).

In-game songs use individual volume trims, with the gentlest pieces playing a little softer. The MP3 recordings are separately peak-normalized for listening, so their relative loudness can differ from the game.

Inside the game itself, all the music is generated live in the browser with the Web Audio API (the game needs no audio files; the MP3s are recordings for listening). Every song is original except the public-domain classics in the piano practice track.

| Where | Song | What you hear |
|---|---|---|
| Title screen | [*Petite Valse du Matin*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/00-title.mp3) | Peaceful French-style waltz on piano, then flute |
| Isaac's Room | [*Radical Rock*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/01-isaacs-room.mp3) | Distorted power chords, lead guitar, bass, big rock drums with fills |
| Annie's Room | [*Once Upon a Tidy Room*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/02-annies-room.mp3) | Harp, strings, flute and celesta in a princess waltz |
| Daniel'S Monster Jam Room | [*Stadium Stomp*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/03-monsterjam.mp3) | Original monster-truck stadium rock |
| Colin'S Surf Shack | [*Surfs Up Shuffle*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/04-surfrock.mp3) | Original bright surf-rock-inspired synth groove |
| Andrew's Sky Room | [*Wings Above the House*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/05-skyhop.mp3) | Original airy synth melody |
| Mom's Room | [*Jewel Box Waltz*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/06-momwaltz.mp3) | Original gentle jewelry-box waltz |
| Uncle Pete's Room | [*Bears Cleanup Drive*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/07-bearsgroove.mp3) | Original Bears-inspired stadium synth groove |
| Kitchen | [*Cool Kitchen Jazz*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/08-kitchen.mp3) | Swing beat, walking bass, ride cymbal, electric piano, saxophone |
| Living Room | [*Poptastic Pop*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/09-living-room.mp3) | Four-on-the-floor beat, claps, synth bass, catchy synth hook |
| Backyard | [*Backyard Boom-Bap*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/10-backyard.mp3) | Deep kicks, crunchy snare, lo-fi keys, record scratches, vinyl crackle |
| Garden | [*Seashell Sunday*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/11-garden.mp3) | A cheerful late-60s, Beatles-style sing-along: jangly 12-string guitar strums, a walking bass, honky-tonk piano, simple backbeat drums, a whistled lead and underwater bubble gurgles |
| Pool | [*Cannonball Calypso*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/12-pool.mp3) | Super-silly splashy pool party: steel drums, bubbly boing bass, ukulele strums, congas, shaker, bubble pops, a rubber-duck squeak, slide whistle and a big CANNONBALL splash |
| Garage | [*Garage Funk-Techno*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/13-garage.mp3) | Dance beat, squelchy acid bass, cowbell, chord stabs |
| Laundry Room | [*Oompah Undies Polka*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/14-laundry-room.mp3) | Tuba, accordion, two trumpets, wah-wah trombone, slide whistle |
| Bathroom | [*Bathroom Amore*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/15-bathroom.mp3) | Bouncy, cheesy crooner waltz: crooning "ohhh" voice, mandolin, accordion oom-pah-pah, tambourine, castanets, a corny key change and a "ba-da-BING!" |
| Home Office | [*Muzak for Meetings (Vol. 3)*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/16-home-office.mp3) | Wobbly pan flute, sour notes, late vibraphone, elevator ding |
| Library | [*Where the Books Open Up*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/17-library.mp3) | An inspirational "discovering a new world" theme: running harp arpeggios, a soaring violin melody, warm cello and viola, celesta sparkles and a soft heartbeat drum that lifts the second half |
| Music Room | [*Piano Practice (Mom Is Listening)*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/18-music-room.mp3) | A kid practicing piano: scales with a wrong note, Mozart's *Rondo alla Turca* (a fumbled false start, then the opening with a bouncy oom-pah left hand), Chopin's dreamy *Nocturne Op. 9 No. 1* with a sparkling run, then *In the Hall of the Mountain King* (speeding up), swung jazz licks, Bach's C-major Prelude, Chopsticks and Ode to Joy, with page-turn pauses |
| Arts & Crafts | [*Paint the Town (Tie-Dye)!*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/19-arts-and-crafts.mp3) | Ska-punk for rebels and hippies: bouncy off-beat guitar skanks, a bubbling organ and a trumpet-and-sax horn section, then a full-on punk chorus with distorted power chords and pounding drums, a jangling tambourine throughout and a big stop at the end |
| Tech Room | [*Beep Boop Banana Boogie*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/20-tech-room.mp3) | Kazoo, boingy bass, chipmunk robot beeps, rubber-duck squeaks, clown horns, cuckoo clock, slide whistles, sad trombone and the occasional burp |
| Science Lab | [*Mad Science Slam*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/21-science-lab.mp3) | Zany 90s science-TV-style funk: punchy drum machine, slap bass, synth-brass stabs, a call-and-response hook, "HEY!" shouts, bubbling beakers, zaps and laser sweeps |
| Workout Room | [*Maximum Reps!!!*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/22-workout-room.mp3) | Pounding four-on-the-floor beat, rolling bass, supersaw synth riff, coach's whistle, "HEY!" shouts and a snare-roll build-up into a big drop |
| Basement | [*Nocturne in the Basement*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/23-basement.mp3) | Romantic film-score piano in the style of classic Italian movie themes: a simple, singing melody with long notes and big expressive leaps over flowing arpeggios, warm strings, and on the repeat the strings take the melody while the piano floats above |
| Attic | [*Little Fugue in the Attic*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/24-attic.mp3) | A four-voice pipe-organ fugue in D minor (about a minute): entries in alto, soprano, tenor and bass, three episodes, a middle entry, a low bass entry, a trill over a dominant pedal and a Picardy-third ending |
| Pet Room | [*Wag Wag Woof Woof!*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/25-pet-room.mp3) | A super-silly, bouncy video-game song: a pulse-wave lead with a kazoo joining in, boing bass, oom-pah chord stabs and 8-bit drums, while pixel dogs woof, cats meow, birds tweet, a squeaky toy squeaks and a hamster wheel spins |
| Race Track | [*Radical Race Rock*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/26-race-track.mp3) | Isaac's Room rock song at racing speed (240 BPM instead of 144), stretched to about a minute: the riff, a key change up, an engine-revving breakdown and a final lap a fourth higher |
| Game Room | [*Press Start to Clean!*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/27-game-room.mp3) | The most video-game video-game music possible: NES-style pulse-wave lead with vibrato and echo, lightning-fast chord arpeggios, a bouncing triangle bass, noise drums, coin blings, a power-up sweep and a 1-UP jingle |
| LEGO Builders Room | [*Snap Together Stomp*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/34-lego-room.mp3) | An original, bouncy building-block song: a bright xylophone melody, a funky bass and clicky "brick snap" percussion. In the middle the music builds like a tower, stacking one more note each bar, then the tune returns with a toy-piano sparkle and a final click-clack |
| Training Room | [*Press Start to Clean!*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/27-game-room.mp3) | Same song as the Game Room |
| Money Room | [*Winter (8-Bit) – Vivaldi*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/28-money-room.mp3) | Antonio Vivaldi's "Winter" from *The Four Seasons* (1725, public domain), first movement, arranged from memory as NES-style video game music. It opens on the famous solo-violin arpeggios, then the repeated-note storm theme, the solo again, the shivering stacked chords with an icy trill building into a storm burst, and a plunging scale, played on pulse waves with a triangle bass and 8-bit drums |
| MarioKart Toy Room | [*Castle Cup Celebration*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/29-kart-toy-room.mp3) | An original cheerful grand-prix fanfare with horns, dancing strings, harp, celesta and snare; not a recording or recreation of Royal Raceway |
| Minecraft Block Room | [*Lanterns in the Block Garden*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/30-minecraft-room.mp3) | Original spacious piano, soft ambient tones and little harp lights, with no drums; not a Minecraft soundtrack recording |
| Roblox Avatar Roundup | [*Checkpoint Champions*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/31-roblox-room.mp3) | Original upbeat obby/tycoon-style electronic music with bright plucks, synth chords, bass and dance drums; not a recording from Roblox |
| GTA V + VI Toy Room | [*Two Cities, One Sunset*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/32-gta-room.mp3) | Original sunset-driving synth/funk with electric piano, synth bass and saxophone; not a GTA soundtrack recording |
| Charging Room | [*Fully Charged*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/33-charging-room.mp3) | Original electronic dance track with bright arpeggios, synth chords, bass and a steady beat |
| Halloween Haunt | [*Spooky Sugar Shuffle*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/35-halloween.mp3) | Original holiday tune |
| Thanksgiving Feast | [*Harvest Home Hop*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/36-thanksgiving.mp3) | Original holiday tune |
| Christmas Cheer | [*A Very Merry Medley*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/37-christmas.mp3) | A fast, festive medley of public-domain carols: *Jingle Bells*, a calmer *Silent Night*, *Deck the Halls*, *We Wish You a Merry Christmas* (with galloping reindeer bells) and a big brassy *Joy to the World* finale. Sleigh bells run all the way through and harp sweeps link the songs |
| Valentines Day Love | [*Hearts Together*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/38-valentine.mp3) | Original holiday tune |
| St Patricks Day Luck | [*Lucky Clover Jig*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/39-stpatrick.mp3) | Original holiday tune |
| April Fools Day Pranks | [*Whoops-a-Daisy*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/40-aprilfools.mp3) | Original holiday tune |
| Easter Egg Hunt | [*Springtime Hop*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/41-easter.mp3) | Original holiday tune |
| Mother'S Day Blooms | [*Bouquets for Mom*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/42-mothersday.mp3) | Original gentle flower-day melody |
| Father'S Day Surprise | [*Dads Day Groove*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/43-fathersday.mp3) | Original upbeat family groove |
| Whole House | [*Greatest Hits Medley*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/44-whole-house-medley.mp3) | A short "greatest hits" of the game: four bars each of *Radical Rock* (Isaac's Room), *Once Upon a Tidy Room* (Annie's Room), *Paint the Town (Tie-Dye)!* (Arts & Crafts), *Wag Wag Woof Woof!* (Pet Room), *Radical Race Rock* (Race Track), *Press Start to Clean!* (Game Room), *Winter (8-Bit) – Vivaldi* (Money Room), *Snap Together Stomp* (LEGO Room) and *A Very Merry Medley* (Christmas), one at a time at each song's own tempo, with a record scratch between songs. The loop is about 54 seconds |
| Ending | [*Jubilee for a Job Well Done*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/45-ending-jubilee.mp3) | An upbeat, triumphant celebration of a job well done: big horn fanfare calls with tuba and bells, a marching jubilee tune on strings and horns with handclaps, tambourine and bell runs, a crowd cheer as the key lifts, and a huge final chord with one more cheer |
| Fail screen | [*Grounded Until Forever*](https://raw.githubusercontent.com/iiretepii/isaac-game-chores/main/music/46-fail-screen.mp3) | A slow, sad piano lament in A minor that plays when the parents beat you home: a lonely melody that keeps sighing downward, soft strings and a few celesta "teardrops" |

Sound effects include a slide whistle when you jump, a "boing" when you stomp, a car horn as the parents get close, a kazoo fanfare when you finish a level and a sad trombone when you get caught.

---

## Design Documents

For developers, the [`docs/`](docs/) folder holds the project's design documents: game design, level specs, characters and critters, audio, technical architecture, development workflow, backlog and changelog.

## How It's Built

The **2D game** (code, graphics, levels and synthesized music) lives in a single file, [`index.html`](index.html). It loads no image or sound files and uses no game engine or build step: open the file in a browser and it runs. The only thing loaded from the internet is the "Press Start 2P" pixel font, and the game falls back to a plain font without it.

### The Game Loop

- The game runs at a fixed **60 updates per second**. Each frame, the browser tells the game how much time has passed, and the game catches up in fixed 1/60-second steps. That keeps the physics the same on fast and slow computers.
- The game is always in one **state**: splash screen, title, level intro, playing, paused, level complete, caught by the parents, or the ending. Each state has its own update and drawing code.
- **Input** comes from the keyboard (arrows/WASD, Space, Enter, P, M) and, on phones and tablets, from on-screen touch buttons.

### Graphics

- Everything is drawn on a small **480×272-pixel canvas**, which is scaled up to fill the window with sharp, blocky pixels (no blurring), like an old game console.
- Every sprite (the player, siblings, critters, chore items, drop-off spots) is **drawn in code** out of tiny colored rectangles. Nothing is loaded from image files.
- To give sprites a crisp **dark outline**, each one is first drawn onto a hidden scratch canvas. A solid dark copy of its shape is then stamped one pixel up, down, left and right, and the sprite is drawn on top.
- **Floor tiles** for each room get a texture (speckles, grass, carpet fringe, checkerboard, paint splatters) that is generated once and reused.
- **Backgrounds** scroll slower than the foreground (parallax) to create a sense of depth. Each room has its own decorations: posters, furniture, a bubbling pool, a Tesla coil and more.
- **Effects** include shadows under characters, squash and stretch when landing, dust puffs, sparkles on items, a flashlight in the dark basement, and a light "old TV" filter with scan lines and darker corners.

### Physics and Controls

- The level is a grid of **16×16-pixel tiles**: solid ground, one-way platforms you can jump up through, and LEGO bricks.
- The player rides a bicycle drawn in code: the wheels' spokes spin and the pedals go around as you move. The player has gravity, acceleration and friction. A few tricks make jumping feel good:
  - **Variable jump height:** let go of jump early for a small hop.
  - **Coyote time:** you can still jump for a split second after running off a ledge.
  - **Jump buffering:** pressing jump just before landing still counts.
  - **Double jump:** one extra jump in mid-air.
  - **Ducking:** shrinks the player's hitbox to fit under low spots, and only stands back up when there's headroom.
- **Moving platforms** carry you along when you stand on them.
- Falling into a gap puts you back on the last safe ground and costs 5 seconds.

### Level Generation

- Levels aren't drawn by hand. A **level generator** builds each one from a list of building blocks: gaps, steps up and down, floating shelves, flat runs with critters or LEGO bricks, and gaps with moving platforms.
- A **difficulty curve** grows from the first level to the last: wider and more frequent pits, narrower landings, stepping stones, bigger climbs and long moving-platform pits. Every gap and climb stays within the jump physics (a single jump clears 7 tiles, a perfect double jump about 11), with at least a tile of margin, so every level can still be finished.
- It uses a **seeded random number generator**: the same number always produces the same "random" choices, so each level comes out identical every time you play.
- Chore items are spread **evenly** along the level, and the last stretch is always flat ground for the drop-off spot. Each level's settings (length, number of items, time limit, critter types and how many, gap size, LEGO bricks, moving platforms, theme and music) live in one list, which makes adding a new level quick.

### Critters and Siblings

- **Walking critters** patrol back and forth and turn around at walls, gaps and LEGO bricks. Dogs, huskies, Pomeranians, hamsters and squirrels also hop now and then.
- **Flying critters** (bees, bats, soap bubbles, lightning bolts) bob up and down along a short path.
- If you land on a critter from above, you stomp it. Any other touch knocks the player back and costs 5 seconds (siblings just bounce off, with no penalty).
- **Isaac, Annie, Daniel and Colin** obey solid walls, one-way platforms and moving platforms; Annie's balloon slows her descent. In the Whole House all five collect from the start, as does each helper in their own bedroom; otherwise they follow just behind the player until the time left drops to 33% (Annie and Colin) or 20% (Isaac and Daniel). When collecting, a helper AI chooses each sibling's next item, splitting the work and favoring items with fewer nearby critters. While riding, it looks ahead and decides when to jump (walls, gaps, critters, LEGO bricks), when to double jump (over a pit or up to a high item) and when to duck (low ceilings). If a sibling stops getting closer to its item, it gives up on that one for a few seconds and picks another.
- **Abilities:** all five helpers look further ahead, hunt critters near the player, and zap any critter they touch. Sibling bumps and falls never cost time.

### Music and Sound

- **All music and sound effects are synthesized live** in the browser with the Web Audio API. Every instrument (rock guitar, organ, piano, steel drums, kazoo, accordion, the crooner's "ohhh" voice and so on) is built from basic sound waves shaped by filters and volume envelopes.
- The rock guitars get their crunch from a **distortion** effect, and the echo on the piano, organ and strings comes from a **reverb** built from generated noise.
- A small **music sequencer** plans notes a fraction of a second ahead, so the timing stays steady even when the game is busy. Each song is a "style" with its own tempo, chords, melody and instruments. Some songs speed up and slow down slightly for a more human feel.
- The **Whole House medley** plays a short "greatest hits" of nine iconic songs from the game, one at a time: four bars of each, at that song's own tempo and volume, with a record scratch and cymbal crash between songs. The loop is about 54 seconds.
- The **attic fugue** was planned with a small helper script that picked chord notes for the inner voices and checked that no two voices move in parallel fifths or octaves. The finished notes are stored in the game as data.
- Browsers don't allow sound until the player interacts with the page, so the first click, tap or key press turns the sound on.

### The MP3 Recordings

- The MP3s in the [`music/`](music/) folder were made by running the game's own music code in a hidden browser. The browser renders each song into an audio file faster than real time, without playing it out loud, and the files were then converted to MP3. They capture the game's synthesized arrangements; normalization and the absence of live gameplay effects can make the listening experience differ.

Andrew rescues the player or any other helper who falls into a gap while he is present, except in Race Track Rumble and MarioKart Toy Room. In those two rooms he stays in his vehicle and cannot rescue anyone; normal fall rules and personal Rescue Balloon powers still apply. He swoops in with his wings and returns them to the last safe ground without a time penalty or using their Rescue Balloon. He can catch teammates during an ongoing rescue; he cannot rescue himself.

All five siblings and cousins jump in sync with the player on the title, level-complete and game-ending screens. The about-to-start lineup stays still.

Andrew moves twice as fast as before (352 px/s). He waits until a descending teammate is falling below the playable area, leaving jumps and moving-platform landings uninterrupted, reacts in the same update, and visibly carries the rescued character to safety over 1.8 seconds. Another fall can trigger a rescue immediately, even during his swoop.

During a rescue the passenger stays visible below Andrew, follows his slow return arc and cannot move or fall again until landing. Catching is immediate; only the carry back is slow. Pausing freezes the carry, and starting a room clears it.

### Training Room

Choose **Training Room (T)** on the title screen, press **T**, or pick it in Level Select. Practice moving, double jumping, ducking and power-ups, then collect six toys and deliver them to the chest. There is no time limit, no critters or LEGO hazards, and Andrew can rescue you over the two practice gaps. The family follows along while leaving the toys for you to collect. Completing training returns to the title; the original 44-room adventure keeps its order and ending. Training uses the existing *Press Start to Clean!* music.

Whoever Andrew rescues says **“W Andrew!”** in a speech bubble attached to that character during the carry and briefly after landing.

Sibling and cousin greetings, cleanup lines, power-up announcements and Andrew’s rescue calls appear in small speech bubbles attached to their speaker. Helpers **take turns**: only one helper bubble shows at a time, other lines wait in a short queue (stale lines are dropped), and each line shows for at most about 2 seconds. Bubbles are compact cream boxes in a small font with a thin outline, a tail, and a stripe in the speaker's color. A helper's pickup floats a small "+1" in their color. Family room introductions show a speech bubble beside the speaking character; parent phone messages stay in the intro panel.

After the rescued character says “W Andrew!”, Andrew replies **“Happy to help!”** in his own speech bubble. The reply follows after a short pause and pauses with the game.

### Crew artwork gallery

[Browse all saved crew images and the power-up guide](artwork/README.md), including real-life, Minecraft, Roblox, baby, superhero, villain and LEGO versions. Original PNGs and earlier variants are preserved in `artwork/`.

### LEGO Builders Room

Collect 20 colorful LEGO bricks and put them in the yellow-lidded storage bin. The room has a studded baseplate floor, building shelves and castle display, moving platforms, roombas and slimes, plus the existing upbeat *Press Start to Clean!* chiptune. It sits immediately after Charging Room Chaos; Training remains optional. Collectible bricks glow like other chores; floor LEGO hazards still need to be avoided.

The player has room-specific “YOU SAY” intro dialogue in Living Room, Library, Race Track Rumble, MarioKart Toy Room, Minecraft, LEGO Builders Room and Whole House. Their bubble and portrait alternate with the existing room message every four seconds, starting with the player.

During play, touch-friendly **Pause / Resume** and **Mute / Unmute** buttons appear in the upper-right corner. They also work with a mouse; P/Escape and M remain available. Pausing clears held movement, and tapping these controls does not trigger a jump or advance a screen. Labels and accessibility state follow keyboard changes too.
