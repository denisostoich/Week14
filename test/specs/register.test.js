const registerPage = require('../pageobjects/register.page');

describe ('Register Tests', () => {

    describe ('Valid registration', () => {
        beforeAll("Open browser", () =>{
            registerPage.open();
            browser.pause(2000);
        });

        it('Register with valid info', () => {
            registerPage.email.waitForDisplayed();
            registerPage.email.waitForEnabled();
            registerPage.email.setValue('denisostoich@gmail.com');
            registerPage.fullName.waitForDisplayed();
            registerPage.fullName.waitForEnabled();
            registerPage.fullName.setValue('Denis Ostoich');
            registerPage.password.waitForDisplayed();
            registerPage.password.waitForEnabled();
            registerPage.password.setValue('mypass1234');
            registerPage.confirmPassword.waitForDisplayed();
            registerPage.confirmPassword.waitForEnabled();
            registerPage.confirmPassword.setValue('mypass1234');
            registerPage.registerBtn.waitForDisplayed();
            registerPage.registerBtn.waitForEnabled();
            registerPage.submit();
            expect(registerPage.valid).toBeDisplayed();
            expect(registerPage.valid).toHaveText('Email: denisostoich@gmail.com Full Name: Denis Ostoich Password: mypass1234');
        });
    })

        describe ('Cant register with invalid info', () => {
            beforeAll("Open browser", () =>{
                registerPage.open();
                browser.pause(2000);
            })

            it('Register with invalid name', () => {
                registerPage.email.waitForDisplayed();
                registerPage.email.waitForEnabled();
                registerPage.email.setValue('denisostoich@gmail.com');
                registerPage.fullName.waitForDisplayed();
                registerPage.fullName.waitForEnabled();
                registerPage.fullName.setValue('ab1');
                registerPage.password.waitForDisplayed();
                registerPage.password.waitForEnabled();
                registerPage.password.setValue('mypass1234');
                registerPage.confirmPassword.waitForDisplayed();
                registerPage.confirmPassword.waitForEnabled();
                registerPage.confirmPassword.setValue('mypass1234');
                registerPage.registerBtn.waitForDisplayed();
                registerPage.registerBtn.waitForEnabled();
                registerPage.submit();
                expect(registerPage.errorFullName).toBeDisplayed();
                expect(registerPage.errorFullName).toHaveText('The full name must have more than 6 letters and at least one space in between.');
                expect(registerPage.valid).toBeDisplayed();
                expect(registerPage.valid).toHaveText('Complete the fields properly');
            })

            it('Register with invalid email', () => {
                registerPage.email.waitForDisplayed();
                registerPage.email.waitForEnabled();
                registerPage.email.setValue('denisostoich@gmail');
                registerPage.fullName.waitForDisplayed();
                registerPage.fullName.waitForEnabled();
                registerPage.fullName.setValue('Denis Ostoich');
                registerPage.password.waitForDisplayed();
                registerPage.password.waitForEnabled();
                registerPage.password.setValue('mypass1234');
                registerPage.confirmPassword.waitForDisplayed();
                registerPage.confirmPassword.waitForEnabled();
                registerPage.confirmPassword.setValue('mypass1234');
                registerPage.registerBtn.waitForDisplayed();
                registerPage.registerBtn.waitForEnabled();
                registerPage.submit();
                expect(registerPage.errorEmail).toBeDisplayed();
                expect(registerPage.errorEmail).toHaveText('The email does not have a correct format.');
                expect(registerPage.valid).toBeDisplayed();
                expect(registerPage.valid).toHaveText('Complete the fields properly');
            })

            it('Register with invalid password', () => {
                registerPage.email.waitForDisplayed();
                registerPage.email.waitForEnabled();
                registerPage.email.setValue('denisostoich@gmail.com');
                registerPage.fullName.waitForDisplayed();
                registerPage.fullName.waitForEnabled();
                registerPage.fullName.setValue('Denis Ostoich');
                registerPage.password.waitForDisplayed();
                registerPage.password.waitForEnabled();
                registerPage.password.setValue('mypass');
                registerPage.confirmPassword.waitForDisplayed();
                registerPage.confirmPassword.waitForEnabled();
                registerPage.confirmPassword.setValue('mypass');
                registerPage.registerBtn.waitForDisplayed();
                registerPage.registerBtn.waitForEnabled();
                registerPage.submit();
                expect(registerPage.errorPassword).toBeDisplayed();
                expect(registerPage.errorPassword).toHaveText('The password must contain at least 8 characters, made up of letters and numbers.');
                expect(registerPage.valid).toBeDisplayed();
                expect(registerPage.valid).toHaveText('Complete the fields properly');
            })

            it('Register with no matching password', () => {
                registerPage.email.waitForDisplayed();
                registerPage.email.waitForEnabled();
                registerPage.email.setValue('denisostoich@gmail.com');
                registerPage.fullName.waitForDisplayed();
                registerPage.fullName.waitForEnabled();
                registerPage.fullName.setValue('Denis Ostoich');
                registerPage.password.waitForDisplayed();
                registerPage.password.waitForEnabled();
                registerPage.password.setValue('mypass1234');
                registerPage.confirmPassword.waitForDisplayed();
                registerPage.confirmPassword.waitForEnabled();
                registerPage.confirmPassword.setValue('mypass1234');
                registerPage.registerBtn.waitForDisplayed();
                registerPage.registerBtn.waitForEnabled();
                registerPage.submit();
                expect(registerPage.errorConfirmPassword).toBeDisplayed();
                expect(registerPage.errorConfirmPassword).toHaveText("Passwords don't match");
                expect(registerPage.valid).toBeDisplayed();
                expect(registerPage.valid).toHaveText('Complete the fields properly');
            })

            it('Register with all invalid info', () => {
                registerPage.email.waitForDisplayed();
                registerPage.email.waitForEnabled();
                registerPage.email.setValue('denisostoich@');
                registerPage.fullName.waitForDisplayed();
                registerPage.fullName.waitForEnabled();
                registerPage.fullName.setValue('Denis');
                registerPage.password.waitForDisplayed();
                registerPage.password.waitForEnabled();
                registerPage.password.setValue('my');
                registerPage.confirmPassword.waitForDisplayed();
                registerPage.confirmPassword.waitForEnabled();
                registerPage.confirmPassword.setValue('pass');
                registerPage.registerBtn.waitForDisplayed();
                registerPage.registerBtn.waitForEnabled();
                registerPage.submit();
                expect(registerPage.errorFullName).toBeDisplayed();
                expect(registerPage.errorFullName).toHaveText('The full name must have more than 6 letters and at least one space in between.');
                expect(registerPage.errorEmail).toBeDisplayed();
                expect(registerPage.errorEmail).toHaveText('The email does not have a correct format.');
                expect(registerPage.errorPassword).toBeDisplayed();
                expect(registerPage.errorPassword).toHaveText('The password must contain at least 8 characters, made up of letters and numbers.');
                expect(registerPage.errorConfirmPassword).toBeDisplayed();
                expect(registerPage.errorConfirmPassword).toHaveText("Both passwords must be the same.");
                expect(registerPage.valid).toBeDisplayed();
                expect(registerPage.valid).toHaveText('Complete the fields properly');
            })
    })

    describe ('Redirects to Login Page', () => {
        beforeAll("Open browser", () =>{
            registerPage.open();
            browser.pause(2000);
        });

        it('Link redirects to login page', () => {
            registerPage.loginLink.waitForDisplayed();
            registerPage.loginLink.waitForEnabled();
            registerPage.loginLink.click();
            expect(browser).toHaveUrl('http://localhost:4000/login.html');
        });
    })

})


