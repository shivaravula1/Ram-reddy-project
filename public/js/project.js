function validate() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;
    var error_message = document.getElementById('error_message');

    error_message.innerHTML = '';

    if (name.trim() == '' || address.trim() == '' || age.trim() == '' || phone.trim() == '' || email.trim() == '' || comments.trim() == '') {
        error_message.innerHTML = 'All fields are required';
        return false;
    }

    if (isNaN(age) || age < 1 || age > 100) {
        error_message.innerHTML = 'Please enter a valid age between 1 and 100';
        return false;
    }

    if (!isValidPhoneNumber(phone)) {
        error_message.innerHTML = 'Please enter a valid phone number';
        return false;
    }

    if (!isValidEmail(email)) {
        error_message.innerHTML = 'Please enter a valid email address';
        return false;
    }
else{
    return emvalidate();
}
function emvalidate(){
    alert("Thankyou for your response and Click ok to win exciting prices");
  }
    
}

function isValidPhoneNumber(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isValidEmail(email) {
    var emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}
