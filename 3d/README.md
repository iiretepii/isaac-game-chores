# Chore Rush 3D

An independent 3D adaptation of Chore Rush, in the same repository. The original `../index.html` is retained without edits. This folder can evolve separately.

[Play 3D](https://isaac-game-chores-play.magneticlorikeet2.chatgpt.site/3d/) · [Play the original](https://isaac-game-chores-play.magneticlorikeet2.chatgpt.site/)

## Play

Use WASD or arrow keys to move on the floor, Space to jump/double-jump, C to duck, and P to pause. Phones and tablets have touch controls. Choose any of the 29 rooms on the title screen. Walk into items to collect them; walk into the gold return ring to put the shared bag away. Isaac and Annie help throughout. Each pickup doubles the remaining time. Critter and LEGO hits cost five seconds; jumping onto a critter defeats it temporarily. Finish every chore before time expires.

## Development

Serve the repository with any static HTTP server and open `/3d/`. ES modules require HTTP; opening this index directly as a local file is unsupported. There is no build step. WebGL is required. Three.js 0.170.0 is vendored in `vendor/`, with its MIT license, so rendering does not depend on a CDN. Fonts have a system fallback.

- `game.js`: independent Three.js renderer, 3D character/item models, room construction, controls, companion behavior, physics, chores and UI.
- `levels.js`: snapshot of the original's 29 level definitions; changes here do not affect the original.
- `audio.js`: snapshot of the original Web Audio music engine, with module exports and a low-time bridge. Songs and arrangements are retained. Audio starts after a user gesture.
- `index.html`, `style.css`: independent responsive game interface.

## First-version scope

This is a playable 3D foundation, not a complete visual port. Rooms share an open floor plan, shelves, couch, table and return chest, with some themed props and modeled collectible variants. Remaining items and critters use simplified models. Original scrolling platform layouts, gaps, moving platforms, full room-specific furniture and the full set of enemy behaviors are not ported yet. Siblings have automatic collection and basic hazard hopping; the player's double jump and duck are implemented. All vehicle designs are simplified original models.

## Validation

Syntax checks and a Node simulation using real Three.js geometry verify all 29 room counts, character construction, collection/time doubling, delivery, victory, timeout, companion collection, double jump and pause. This session's Cloud browser controls were unavailable, so rendered appearance and device performance still need browser testing.
