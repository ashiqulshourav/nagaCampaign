// get input from the user
const username = document.querySelector('.step-1 input[name="username"]');
const button = document.querySelector('.steps button');

username.addEventListener('input', (e) => {
    if($('.input-box').hasClass('invalid')) {
        $('.input-box').removeClass('invalid');
    }
});

username.addEventListener('blur', (e) => {
    console.log(e.target.value, "blur event triggered");
  // check if the input is empty
    if (e.target.value != '') {
        $(e.target).parent().addClass('valid');
    } else {
        $(e.target).parent().removeClass('valid');
    }
});

button.addEventListener('click', (e) => {   
    e.preventDefault();

    // getting step number
    const stepNum = $('.step.active').data('step');

    if(stepNum == 1) {
        // check if the input is empty
        if (username.value != '') {
            $('.step.active').removeClass('active').next().addClass('active');  
            $('.steps button').text('Next');
        } else {
            $('.username-error').text('Username cannot be empty');
            $(username).parent().removeClass('valid');
            $(username).parent().addClass('invalid');
            $(username).focus();
        }
    }
});