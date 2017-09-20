'use strict';

const puppeteer = require('puppeteer');

// The URL to screenshot
const theURL = process.argv[2];
// The path of where the image should be saved as determined by the PHP script
const thePath = process.argv[3];

(async() => {

    // On the server we need to run in no-sandbox mode which could be bad
    // See https://github.com/GoogleChrome/puppeteer/issues/290#issuecomment-327233672
    const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();

    // Desktop
    await page.setViewport({
        width: 1440,
        height: 1024,
        deviceScaleFactor: 1,
    });

    await page.goto(theURL, {
        timeout: 90000,
        waitUntil: 'networkidle',
        networkIdleTimeout: 2000,
    });

    await page.screenshot({
        path: thePath + '-desktop.jpg',
        fullPage: true,
        type: 'jpeg',
    });

    // Mobile
    await page.setViewport({
        width: 320,
        height: 480,
        deviceScaleFactor: 1,
        isMobile: true,
        hasTouch: true,
    });

    // Set iPhone 7 user agent to trigger mobile ads
    await page.setUserAgent( 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1' );

    await page.reload({
        timeout: 90000,
        waitUntil: 'networkidle',
        networkIdleTimeout: 2000,
    });

    await page.screenshot({
        path: thePath + '-mobile.jpg',
        fullPage: true,
        type: 'jpeg',
    });

    browser.close();

})();
