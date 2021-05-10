import * as Page from './page';

class RegisterPage extends Page {
   
    get email () { return $('#emailInput') }
    get fullName () { return $('#fullNameInput') }
    get password () { return $('#passwordInput') }
    get confirmPassword () { return $('#confirmPasswordInput') }
    get registerBtn () { return $('button[type="submit"]') }
    get resetBtn () { return $('button[type="reset"]') }

    open () {
        return super.open('register');
    }

    register () {
        this.registerBtn.click();
    }
    reset () {
        this.resetBtn.click();
    }
}

export default RegisterPage();
