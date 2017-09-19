#!/bin/bash

# Run this screenshot script once a week
# add to this users crontab via crontab -e
# 0 */1 * * * php /var/www/weekly-screenshot.localhost/weekly-screenshots/cronjob.sh >>/var/www/weekly-screenshot.localhost/weekly-screenshots/cron.log 2>&1

# Run the script
php screenshot.php

# Add everything and commit
git add -A
git commit -m "Screenshots added."
git push origin master --force
