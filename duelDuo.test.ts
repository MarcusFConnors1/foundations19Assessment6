
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Clicking draw will show possible robots", async () => {
    await driver.findElement(By.xpath('//button[@id="draw"]')).click()
    let botButt = await driver.findElement(By.xpath('//button[@class="bot-btn"]'))
    const disp = await botButt.isDisplayed()
    expect(disp).toBe(true)
})

test("Clicking on a bot will add it to your team", async () => {
    //this test will just build off the last one, as it already clicked draw
    await driver.findElement(By.xpath('//button[@id="draw"]')).click()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const urDuoTitle = await driver.findElement(By.xpath('//h2[@id="your-duo-header"]'))
    expect(await urDuoTitle.isDisplayed()).toBe(true)
})

test("Dueling works", async () => {
    await driver.findElement(By.xpath('//button[@id="draw"]')).click()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.findElement(By.id('duel')).click()
    await driver.sleep(2000)
    const result = await driver.findElement(By.id('results'))
    const res = await result.isDisplayed()
    expect(res).toBe(true)
})