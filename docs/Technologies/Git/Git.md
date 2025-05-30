---
title: Git
parent: Technologies
has_children: true
---

# Git Overview

## What is Git?
Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work together on the same codebase while maintaining a complete history of changes.

### Key Features
- Distributed version control
- Branching and merging
- Staging area
- Data integrity
- Speed and performance
- Free and open source

## Basic Git Commands

### Configuration
```bash
# Set user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# View configuration
git config --list
```

### Basic Operations
```bash
# Initialize a new repository
git init

# Clone a repository
git clone <repository-url>

# Check status
git status

# Add files to staging
git add <file>
git add .

# Commit changes
git commit -m "Commit message"

# Push changes
git push origin <branch>

# Pull changes
git pull origin <branch>
```

### Branching
```bash
# Create new branch
git branch <branch-name>

# Delete branch locally
git branch -D <branch-name>

# Switch to branch
git checkout <branch-name>

# Create and switch to new branch
git checkout -b <branch-name>

# Merge branch
git merge <branch-name>
```

## Best Practices

### Git Workflow
1. Use meaningful commit messages
2. Create feature branches for new features
3. Keep commits atomic and focused
4. Regularly pull from the main branch
5. Review code before merging
6. Use .gitignore for unnecessary files

### Security
1. Never commit sensitive data
2. Use SSH keys for authentication
3. Enable two-factor authentication
4. Regularly update Git
5. Use signed commits for important changes

### Collaboration
1. Follow a consistent branching strategy
2. Use pull/merge requests for code review
3. Document changes in commit messages
4. Keep the main branch stable
5. Use issue tracking for feature requests and bugs

## Common Git Workflows

### Git Flow
- Main branches: master and develop
- Supporting branches: feature, release, hotfix
- Strict branching model
- Suitable for larger teams

### GitHub Flow
- Simple branching model
- Master branch always deployable
- Feature branches for new work
- Pull requests for review
- Suitable for smaller teams

### GitLab Flow
- Environment branches
- Production branch
- Feature branches
- Release branches
- Suitable for continuous delivery