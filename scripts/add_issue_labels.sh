#!/bin/bash

echo -n "Github Username: "
read USER

echo -n "Password: "
read PASS

echo -n "Repo (e.g. cyclejs/core); "
read REPO

REPO_USER=$(echo "$REPO" | cut -f1 -d /)
REPO_NAME=$(echo "$REPO" | cut -f2 -d /)

# Delete default labels
curl -u "$USER:$PASS" -i -X DELETE "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels/bug"
curl -u "$USER:$PASS" -i -X DELETE "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels/duplicate"
curl -u "$USER:$PASS" -i -X DELETE "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels/enhancement"
curl -u "$USER:$PASS" -i -X DELETE "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels/help%20wanted"
curl -u "$USER:$PASS" -i -X DELETE "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels/invalid"
curl -u "$USER:$PASS" -i -X DELETE "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels/question"
curl -u "$USER:$PASS" -i -X DELETE "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels/wontfix"

# Create new labels
## Issue types
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Type: Discussion", "color": "ffff00"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Type: Bug", "color": "ff0000"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Type: Feature Suggestion", "color": "bbdefb"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Type: Breaking Suggestion", "color": "76ff03"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"

## Statuses
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Status: Help Wanted", "color": "2e7d32"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Status: In Progress", "color": "f50057"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"

## Weights (Urgency)
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Weight: 1 - Maybe", "color": "eeeeee"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Weight: 2 - Could", "color": "aaaaaa"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Weight: 3 - Should", "color": "777777"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Weight: 4 - Must", "color": "000000"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"

## Resolutions
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Resolution: Cannot Reproduce", "color": "7b1fa2"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Resolution: Duplicate Issue", "color": "7b1fa2"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Resolution: Bug Fixed", "color": "7b1fa2"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Resolution: Invalid", "color": "7b1fa2"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
curl -u "$USER:$PASS" -i -X POST -d '{"name": "Resolution: Works As Expected", "color": "7b1fa2"}' "https://api.github.com/repos/$REPO_USER/$REPO_NAME/labels"
