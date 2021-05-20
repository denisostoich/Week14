const Page = require('./page');

class registerPage extends Page {
   
    get email () { return $('#emailInput') }
    get fullName () { return $('#fullNameInput') }
    get password () { return $('#passwordInput') }
    get confirmPassword () { return $('#confirmPasswordInput') }
    get errorEmail () { return $$('.formularioInput')[0] }
    get errorFullName () { return $$('.formularioInput')[1] }
    get errorPassword () { return $$('.formularioInput')[2] }
    get errorConfirmPassword () { return $$('.formularioInput')[3] }
    get registerBtn () { return $('input[type="submit"]') }
    get resetBtn () { return $('input[type="reset"]') }
    get valid() { return $('.data')}
    get loginLink () {return $('#link') }
    
    open () {
        return super.open('register');
    }

    submit () {
        this.registerBtn.click();
    }
    reset () {
        this.resetBtn.click();
    }
}

module.exports = new registerPage();