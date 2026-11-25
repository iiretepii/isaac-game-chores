# Chore Rush! Design Documents

These documents describe how *Chore Rush!* is designed and built, so that anyone (a person or an AI coding assistant) can keep developing it consistently. The top-level [`README.md`](../README.md) is the player-facing overview; these docs are the working reference for developers.

| Doc | What it covers |
|---|---|
| [01 – Game Design](01-game-design.md) | Vision, design pillars, core loop, rules, controls, scoring, difficulty and content guidelines |
| [02 – Levels](02-levels.md) | Every level's settings, the difficulty curve, the level data format and the checklist for adding a level |
| [03 – Characters and Critters](03-characters-and-critters.md) | The player, Isaac and Annie, every critter, chore items and drop-off spots |
| [04 – Audio](04-audio.md) | The music style registry, the medley, sound effects, MP3 recordings and how to add a song |
| [05 – Technical Architecture](05-technical-architecture.md) | How `index.html` is organized, the main data structures, game loop, physics, rendering, level generation and audio engine |
| [06 – Development Workflow](06-development-workflow.md) | Branches, merging, testing, publishing, and checklists for common changes |
| [07 – Backlog and Known Issues](07-backlog-and-known-issues.md) | Open bugs, inconsistencies and ideas |
| [08 – Changelog](08-changelog.md) | History of the project, grouped by milestone |
| [09 – Independent 3D Fork](09-3d-fork.md) | Separate game directory, controls, architecture, current scope and verification limits |

Docs 01–08 describe the original **2D game**. Doc 09 describes the separate **3D fork**, whose behavior and current limitations differ from the 2D edition.

## Keeping These Docs Current

- **Same change, same commit:** when a change alters something these docs describe (a level, critter, song, rule or constant), update the matching doc in the same commit.
- **The code is the source of truth:** the level, critter and music tables were checked against `index.html` on 2026-11-25, covering all 29 levels and 32 recordings, MarioKart rides, bedroom and Whole House helpers, the cream finale couch, the painted-dragon treasure chest, and the separate 3D fork. If a doc and the code disagree, trust the code and fix the doc.
- **Where to log things:** add new problems to [07 – Backlog and Known Issues](07-backlog-and-known-issues.md), and record finished work in [08 – Changelog](08-changelog.md).
