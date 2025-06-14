// get input from the user
const username = document.querySelector('.step-1 input[name="username"]');
const button = document.querySelector('.steps button');

username.addEventListener('input', (e) => {
    if($('.input-box').hasClass('invalid')) {
        $('.input-box').removeClass('invalid');
    }
});

username.addEventListener('blur', (e) => {
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
    const stepNum = $('.step.active').data('step') || 1;

    if(stepNum == 1) {
        // check if the input is empty
        if (username.value != '') {
            if(username.value.length < 3) {
                $('.username-error').text('Please enter a username with at least 3 characters');
                $(username).parent().removeClass('valid');
                $(username).parent().addClass('invalid');
                $(username).focus();
            } else {
                $('.step.active').removeClass('active').next().addClass('active');  
                $('.steps button').text('Ok');
            }
            
        } else {
            $('.username-error').text('Username cannot be empty');
            $(username).parent().removeClass('valid');
            $(username).parent().addClass('invalid');
            $(username).focus();
        }
    }

    // if(stepNum == 2) {

    // }
});

// Naga Animation
const nagaImg = document.querySelector('.naga-anim img');

for(let i = 0; i < 10; i++) {
    const randomNaga = Math.floor(Math.random() * 10) + .1; // Random number between 1 and 10
    console.log(randomNaga);
    const clone = nagaImg.cloneNode(true);
    clone.style.animationDelay = `${randomNaga * 0.5}s`;
    document.querySelector('.naga-anim').appendChild(clone);
}