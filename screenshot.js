/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const puppeteer = require('puppeteer');

var theURL = process.argv[2];
var thePath = process.argv[3];

(async() => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({
		width: 1440,
		height: 1024,
		deviceScaleFactor: 1,
	});
	await page.goto(theURL, {
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
