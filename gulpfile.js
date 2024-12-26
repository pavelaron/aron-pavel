const puppeteer = require('puppeteer')

async function generateCV () {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],

  })
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/cv', {waitUntil: 'networkidle2'})
  await page.evaluate(() => {
    const container = document.querySelector('.container-cv')

    container.classList.add('paper')
    container.innerHTML = document.querySelector('div.paper').innerHTML
  })

  await page.pdf({
    path: 'static/cv/cv-aron-pavel.pdf',
    format: 'A4',
    printBackground: true,
  })

  await browser.close()
}

exports.generateCV = generateCV
