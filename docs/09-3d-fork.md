# 09 – 3D Fork

The independent 3D game lives in `3d/`. The root 2D game is retained as an independent edition, and the existing play URL continues to open it. The new game is available at `/3d/` on the same Site.

See [the fork README](../3d/README.md) for controls, architecture, validation and first-version limitations. The fork uses vendored Three.js, modeled geometry, perspective camera, soft shadows, seeded room pickups, helping companions, a shared bag and a return zone. It snapshots the original level definitions and synthesizer so both editions can evolve independently. Music arrangements are unchanged; the only audio integration changes are module exports and a low-time tempo bridge.

The first release adapts all 29 chores to open 3D rooms. It retains item counts, timers, double-time pickups, basic critter stomping and five-second hazard penalties. It does not claim parity with original platform layouts, all enemy behaviors, detailed per-room scenery or every vehicle model. Future work should add those within `3d/` without changing the original edition.
