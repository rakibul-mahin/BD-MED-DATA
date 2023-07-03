const pup = require("puppeteer");

(async () => {
  const browser = await pup.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://medex.com.bd/brands/");

  const grabMedicine = await page.evaluate(async () => {
    const div = document.querySelectorAll(".col-xs-12.col-sm-6.col-lg-4");
    let allLinks = [];
    for (const eachDiv of div) {
      const link = eachDiv.querySelectorAll("a");
      for (const a of link) {
        allLinks.push(a.getAttribute("href"));
        await a.click();
      }
    }
    return allLinks;
  });

  let allLinks = grabMedicine;

  //   await browser.close();
})();
