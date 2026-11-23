# 06 – Development Workflow

## Contributors and Branches

- **Contributors:** Pete (owner), Claude (Claude Code) and Codex. AI changes arrive either as direct commits on a working branch or as pull requests.
- **Branches:** `main` is the published version; the README song links point at `main`. Claude works on `claude/adoring-cray-7vaqhn` and fast-forward merges to `main` when asked. Codex commits directly to `main` at the owner's request; create a pull request only when asked.
- **Before starting work:** pull `main` so you build on the other contributors' latest changes.

## Making a Change

1. **Sync:** check for local changes, then pull the latest `main` without overwriting unfinished work.
2. **Change:** edit `index.html` (and the README and docs if the change affects them).
3. **Test:** follow the steps below.
4. **Record:** re-record any changed songs (see [04](04-audio.md)).
5. **Commit and push:** the owner has requested direct commits to `main`; commit the code, relevant docs and recordings together, then push. Use a feature branch or pull request only when requested.
6. **Publish:** update the existing Sites play link from the intended source revision and verify deployment. A GitHub push alone does not republish the game.

## Testing

There's no test framework. Testing is done by driving the game in headless Chromium with Playwright:
- **Load:** load `index.html` and fail on any `pageerror`.
- **Item counts:** for every level, check that `buildLevel(i).total === LEVELS[i].count`. If it's short, make the level longer.
- **Screenshots:** jump into a level with `startLevel(n); state='play'` and take screenshots (spawn test critters near the player to check sprites).
- **Music:** call each style's `play()` for a full loop to catch errors (the audio clock can be fake or offline).
- **Look at it:** check new art in a screenshot before shipping.

## Publishing

- **Current play link:** https://isaac-game-chores-play.magneticlorikeet2.chatgpt.site. Sites publication is separate from the GitHub merge: update the existing Site from the intended source revision and verify deployment.
- **Alternate artifact:** https://claude.ai/artifact/7bgXsM4dhpEVavZJgvo6ZJ. This is a separate publication; do not assume either hosted copy updates automatically when `main` changes.
- **Repo:** the GitHub repo is public. The README links each song to its raw MP3 on `main`, so it plays in the browser.

## Quick Checklists

- **New level:** see [02 – Levels](02-levels.md#checklist-adding-a-level).
- **New song:** see [04 – Audio](04-audio.md#checklist-adding-a-song).
- **New critter:** sprite in `drawEnemyRaw`, speed in `sp`, add it to levels and the Whole House, flying critters to the bee/bat/bubble/zap/invader checks, hoppers to the hop check, then update [03](03-characters-and-critters.md).
- **Renaming or reordering levels:** keep seeds unique and remember that difficulty still depends on the level index (capped at 1 after index 23). Recheck affected layouts, renumber recordings, and update the README and design tables.
