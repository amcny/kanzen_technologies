const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.codedale.tech/', { waitUntil: 'networkidle2' });
  
  // Scroll to services
  await page.evaluate(() => {
    document.querySelector('#services').scrollIntoView();
  });
  
  try {
    // Wait for the skeleton to disappear
    await page.waitForSelector('.animate-pulse', { hidden: true, timeout: 10000 });
  } catch (e) {
    console.log("Timeout waiting for skeleton to hide");
  }
  
  const html = await page.$eval('#services', el => el.outerHTML);
  console.log(html.substring(0, 5000));
  await browser.close();
})();
