function checkValue(value, length) {
    if (value.length >= length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const reg = /\S+@\S+\.\S+/;
    const testEmail = reg.test(email);
    return testEmail;
}