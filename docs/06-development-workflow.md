# 06 – Development Workflow

## Contributors and Branches

- **Contributors:** Pete O'Connell (owner), Claude (Claude Code) and Codex. AI changes arrive either as direct commits on a working branch or as pull requests.
- **Branches:** `main` is the published version; the README song links point at `main`. Claude works on `claude/adoring-cray-7vaqhn` and fast-forward merges to `main` when asked. Codex uses `codex/*` branches merged through pull requests.
- **Before starting work:** pull `main` so you build on the other contributors' latest changes.

## Making a Change

1. **Sync:** pull the latest `main` into your working branch.
2. **Change:** edit `index.html` (and the README and docs if the change affects them).
3. **Test:** follow the steps below.
4. **Record:** re-record any changed songs (see [04](04-audio.md)).
5. **Commit and push:** commit with a descriptive message, then push the working branch.
6. **Publish:** merge to `main` when the owner asks, and republish the shareable game link.

## Testing

There's no test framework. Testing is done by driving the game in headless Chromium with Playwright:
- **Load:** load `index.html` and fail on any `pageerror`.
- **Item counts:** for every level, check that `buildLevel(i).total === LEVELS[i].count`. If it's short, make the level longer.
- **Screenshots:** jump into a level with `startLevel(n); state='play'` and take screenshots (spawn test critters near the player to check sprites).
- **Music:** call each style's `play()` for a full loop to catch errors (the audio clock can be fake or offline).
- **Look at it:** check new art in a screenshot before shipping.

## Publishing

- **Game link:** the shareable game is a Claude artifact (https://claude.ai/artifact/7bgXsM4dhpEVavZJgvo6ZJ, "anyone with the link"). It's republished from `index.html` after changes.
- **Repo:** the GitHub repo is public. The README links each song to its raw MP3 on `main`, so it plays in the browser.

## Quick Checklists

- **New level:** see [02 – Levels](02-levels.md#checklist-adding-a-level).
- **New song:** see [04 – Audio](04-audio.md#checklist-adding-a-song).
- **New critter:** sprite in `drawEnemyRaw`, speed in `sp`, add it to levels and the Whole House, flying critters to the bee/bat/bubble/zap checks, hoppers to the hop check, then update [03](03-characters-and-critters.md).
- **Renaming or reordering levels:** the layout seed depends on the level index, recordings are numbered by level, and README tables are numbered. Update all three.
