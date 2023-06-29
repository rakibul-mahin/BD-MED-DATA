const pup = require("puppeteer");
(async ()=> {
    const browser = await pup.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://medex.com.bd/brands/");

    let finalMedList = []

    const grabMedicine = await page.evaluate(()=>{
        const medicines = document.querySelectorAll('.row.data-row');
        let medList = []
        medicines.forEach((med)=>{
            const medInfo = med.querySelectorAll('div')
            const name = medInfo[0].innerText
            const img = medInfo[0].querySelector('img').getAttribute('src')
            const power = medInfo[1].innerText
            const type = medInfo[2].innerText
            const company = medInfo[3].innerText

            medList.push({img,name,power,type,company})
        })

        return medList
        
        
    })
    
    finalMedList.push(grabMedicine)
    console.log(finalMedList)
    await browser.close();
})()