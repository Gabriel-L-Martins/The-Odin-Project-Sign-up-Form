function validatePasswords() {
    var passwordInput = document.getElementById('password').value;
    var confirmPasswordInput = document.getElementById('confirm-password').value;
    var passwordPattern = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (!passwordPattern.test(passwordInput)) {
        document.getElementById('password-message').style.display = 'block';
    } else {
        document.getElementById('password-message').style.display = 'none';
    }

    if (passwordInput !== confirmPasswordInput) {
        document.getElementById('confirm-password-message').style.display = 'block';
    } else {
        document.getElementById('confirm-password-message').style.display = 'none';
    }
}