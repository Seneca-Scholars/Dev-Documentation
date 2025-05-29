---
title: Git Workflows & Use Cases
nav_order: 2
parent: Git
---

# Git Workflows & Use Cases

This guide outlines practical situations where you'd use key Git commands such as `branch`, `push`, `pull`, `merge`, and `rebase`.

---

## Creating a New Branch

**Use when:** You’re starting a new feature or fixing a bug.

```bash
git checkout -b feature/new-navbar
```
This keeps the main branch clean and separates work in progress.


## Pushing Changes

**Use when:** You’ve made local commits and want to back them up or share them.

```bash
git push origin feature/new-navbar
```
This publishes your branch to the remote (e.g. GitHub).

## Pulling Changes

**Use when:** You want to sync your branch with the remote before continuing

```bash
git pull origin main
```
This helps avoid merge conflicts later. Always pull before pushing.

## Pulling Changes

**Use when:** You want a cleaner commit history or need to integrate main changes into your feature branch before a merge.

```bash
git checkout feature/new-navbar
git fetch origin
git rebase origin/main
```
This rewrites history for a linear commit timeline. Great for avoiding "merge bubbles" in the graph.

## Handling Merge Conflicts

**Use when:** Git can't auto-resolve differences between branches.

Git will pause and prompt you to manually fix the conflicting files.

```bash
# After resolving conflicts
git add .
git rebase --continue  # or `git commit` if merging
```

