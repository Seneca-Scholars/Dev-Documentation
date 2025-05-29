---
title: Git
nav_order: 4
has_children: true
---

# Git Overview

Git is a distributed version control system used to track changes in source code during software development.

## Why Use Git?

- Tracks history of code changes
- Enables team collaboration
- Supports branching and merging
- Works both locally and remotely (e.g. GitHub, GitLab)

## Basic Concepts

| Concept | Description |
|--------|-------------|
| Repository | A directory that contains your project and its history |
| Commit     | A snapshot of your changes |
| Branch     | A pointer to a specific commit |
| Merge      | Combines changes from different branches |
| Remote     | A version of your repository hosted elsewhere (like GitHub) |

## Essential Commands

```bash
git init               # Start a new Git repo
git clone <url>        # Download an existing repo
git status             # Show current changes
git add <file>         # Stage changes
git commit -m "msg"    # Save a snapshot
git push               # Send changes to remote
git pull               # Get latest from remote

```
