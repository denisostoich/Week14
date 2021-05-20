const Page = require('./page');

class loginPage extends Page {
   
    get email () { return $('#emailInput') }
    get password () { return $('#passwordInput') }
    get errorEmail () { return $$('.formularioInput')[0] }
    get errorPassword () { return $$('.formularioInput')[1] }
    get loginBtn () { return $('input[type="submit"]') }
    get resetBtn () { return $('input[type="reset"]') }
    get valid() { return $('.data')}
    get registerLink () {return $('#link') }

    open () {
        return super.open('login');
    }

    submit () {
        this.loginBtn.click();
    }
    reset () {
        this.resetBtn.click();
    }
}

module.exports = new loginPage();