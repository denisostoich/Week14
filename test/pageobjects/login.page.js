import * as Page from './page';

class LoginPage extends Page {
   
    get email () { return $('#emailInput') }
    get password () { return $('#passwordInput') }
    get loginBtn () { return $('button[type="submit"]') }
    get resetBtn () { return $('button[type="reset"]') }
    

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

export default new LoginPage();
