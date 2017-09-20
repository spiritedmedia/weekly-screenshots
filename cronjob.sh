#!/bin/bash

# Run this screenshot script once a week
# add to this users crontab via crontab -e

# Run the screnshot script at 4:30am every Wednesday
# 15 4 * * 3 /var/www/weekly-screenshot.localhost/weekly-screenshots/cronjob.sh > /dev/null 2>&1

cd /var/www/weekly-screenshot.localhost/weekly-screenshots

# Run the scripts
/usr/bin/php screenshot.php billy-penn
/usr/bin/php screenshot.php the-incline
/usr/bin/php screenshot.php denverite

# Add everything and commit

git add -A
git commit -m "Screenshots added for $(date +%F)"
git push origin master --force
