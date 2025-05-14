# 📘 Git Commands Cheat Sheet

## 🔧 Basic Git Setup

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list
```

## creating / clone repo

```bash


git init                            # Initialize a new Git repository
git clone <repository-url>         # Clone an existing repository
```
## working files

```bash
 git status                         # Check status of files
git add <file>                     # Add a specific file
git add .                          # Add all changes
git restore <file>                 # Discard changes in a file
git restore --staged <file>        # Unstage a file

```


## commit changes
    
```bash 
git commit -m "Commit message"     # Commit with message
git commit -am "Message"           # Add & commit tracked files

```bash

## branching


git branch                         # List all branches
git branch <branch-name>           # Create a new branch
git checkout <branch-name>         # Switch to a branch
git checkout -b <branch-name>      # Create and switch to a branch
git merge <branch-name>            # Merge a branch into current branch
git branch -d <branch-name>        # Delete a branch

```


## pull and push

```bash

git push                           # Push changes
git push origin <branch>           # Push to a specific branch
git pull                           # Pull latest changes

log and history
git log                            # View commit logs
git log --oneline                  # Compact log
git show <commit-id>               # Show details of a commit

```


## rest and revert

```bash

git reset --hard                   # Reset all changes
git reset <file>                   # Unstage a file
git reset --soft <commit-id>       # Keep changes, reset to commit
git revert <commit-id>             # Create a new commit to undo a commit
```

 ## stashing change
 ```bash

git stash                          # Save changes for later
git stash list                     # View stashed changes
git stash apply                    # Re-apply last stash
git stash pop                      # Apply and delete stash
```

## clean untrack files
```bash

git clean -f                       # Remove untracked files
git clean -fd                      # Remove untracked files and directories

```

## remote repositories

```bash

git remote -v                      # Show remotes
git remote add origin <url>        # Add a remote
git remote remove origin           # Remove a remote

```

## tagging

```bash

git tag                            # List tags
git tag <tagname>                  # Create a tag
git push origin <tagname>          # Push a tag
```

## rust

```bash


If you'd like, I can export this as a downloadable `.md` file for you. Want me to do that?
```


