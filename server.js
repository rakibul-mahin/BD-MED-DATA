const pup = require("puppeteer");
(async () => {
  const browser = await pup.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://medex.com.bd/brands/");

  const grabMedicine = await page.evaluate(() => {
    const div = document.querySelectorAll(".col-xs-12.col-sm-6.col-lg-4");
    let allLinks = [];
    div.forEach((eachDiv) => {
      const link = eachDiv.querySelectorAll("a");
      link.forEach((a) => {
        allLinks.push(a.getAttribute("href"));
      });
    });
    return allLinks;
  });

  let allLinks = grabMedicine;
  allLinks.forEach(async (eachLink) => {
    console.log(eachLink);
  });
  await browser.close();
})();
