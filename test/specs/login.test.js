const loginPage = require('../pageobjects/login.page');

describe('Login Tests', () => {

    describe('Login with valid info', () => {
        beforeAll('Open browser', () => {
            loginPage.open();
            browser.pause(2000);
        })

        it('Should let login with valid information', () => {
            loginPage.email.waitForDisplayed();
            loginPage.email.waitForEnabled();
            loginPage.email.setValue('denisostoich@gmail.com');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('mypass1234');
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.valid).toBeDisplayed();
            expect(loginPage.valid).toHaveText('Email: denisostoich@gmail.com Password: mypass1234');
        } )
    })

    describe('Cant Login with invalid info', () => {
        beforeAll('Open browser', () => {
            loginPage.open();
            browser.pause(1000);
        })

        it('Should not let login with invalid email', () => {
            loginPage.email.waitForDisplayed();
            loginPage.email.waitForEnabled();
            loginPage.email.setValue('denisostoich@gmail');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('mypass1234')
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.errorEmail).toBeDisplayed();
            expect(loginPage.errorEmail).toHaveText('The email does not have a correct format.');
            expect(loginPage.valid).toBeDisplayed();
            expect(loginPage.valid).toHaveText('Complete the fields properly');
        })

        it('Should not let login with invalid password', () => {
            loginPage.mail.waitForDisplayed();
            loginPage.mail.waitForEnabled();
            loginPage.mail.setValue('denisostoich@gmail.com');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('pass')
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.errorPassword).toBeDisplayed();
            expect(loginPage.errorPassword).toHaveText('The password must contain at least 8 characters, made up of letters and numbers.');
            expect(loginPage.valid).toBeDisplayed();
            expect(loginPage.valid).toHaveText('Complete the fields properly');
        })

        it('Should not let login with invalid info', () => {
            loginPage.mail.waitForDisplayed();
            loginPage.mail.waitForEnabled();
            loginPage.mail.setValue('denisostoich');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('pass')
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.errorEmail).toBeDisplayed();
            expect(loginPage.errorEmail).toHaveText('The email does not have a correct format.');
            expect(loginPage.errorPassword).toBeDisplayed();
            expect(loginPage.errorPassword).toHaveText('The password must contain at least 8 characters, made up of letters and numbers.');
            expect(loginPage.valid).toBeDisplayed();
            expect(loginPage.valid).toHaveText('Complete the fields properly');
        });
    });

    describe('Redirects to register page', () => {
        beforeAll('Open browser', () => {
            loginPage.open();
            browser.pause(2000);
        });

        it('Link redirects to register page', () => {
            loginPage.registerLink.click();
            expect(browser).toHaveUrl('http://localhost:4000/register.html');
        })
    });

});