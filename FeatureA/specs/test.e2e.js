import LoginPage from '../pageobjects/login.page.js'
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        let flashAlert = await SecurePage.flashAlert
        await expect(await flashAlert.isDisplayed()).toBe(true)
        await expect(await flashAlert.getText()).toContain(
            'You logged into a secure area!')
    })
})

