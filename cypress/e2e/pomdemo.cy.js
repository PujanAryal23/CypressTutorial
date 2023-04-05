import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', () => {

    it('Login Test 1', () => {
        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    })

    it.skip('Login Test 2', () => {
        loginPage.enterUserName('Admin')
        loginPage.enterPassword('admißn123')
        loginPage.clickLogin()
    })
})

