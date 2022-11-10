const validate = function () {
    const username = document.getElementById('username-box');
    const password = document.getElementById('password-box');
    const email = document.getElementById('email-box');
    const phone = document.getElementById('phone-box');
    const age = document.getElementById('age-box');

    const usernameRegex = new RegExp(/\w/g);
    const passwordRegex = new RegExp(/^[\w\W]{5,9}$/g);
    const emailRegex = new RegExp(/^\w+\W*@(yahoo.com|gmail.com)$/g);
    const phoneRegex = new RegExp(/^[0-9]{10}$/g);
    const ageRegex = new RegExp(/^(1[89]|[2][0-9]|30)$/g);

    const usernameValue = username.value;
    const passwordValue = password.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const ageValue = age.value;

    if (usernameRegex.test(usernameValue) == false) {
        alert("Enter valid username");
        username.value = '';
        username.focus();
        return false;
    }
    if (passwordRegex.test(passwordValue) == false) {
        alert("Enter valid password");
        password.value = '';
        password.focus();
        return false;
    }
    if (emailRegex.test(emailValue) == false) {
        alert("Enter valid email");
        email.value = '';
        email.focus();
        return false;
    }
    if (phoneRegex.test(phoneValue) == false) {
        alert("Enter valid phone number");
        phone.value = '';
        phone.focus();
        return false;
    }
    if (ageRegex.test(ageValue) == false) {
        alert("Enter a valid age");
        age.value = '';
        age.focus();
        return false;
    }
    // return true;
}