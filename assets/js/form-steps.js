let step = document.getElementsByClassName('step');
let stepBlock = document.getElementsByClassName('steps-block');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('form-img');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('form-img');

form.onsubmit = () => {
    return false
}

let current_step = 0;
let stepCount = 3;
step[current_step].classList.add('d-block');
if (current_step == 0) {
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}


nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        //  step[previous_step].classList.remove('d-block');
        // step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }

});




submitBtn.addEventListener('click', () => {
    preloader.classList.add('d-block');

    const timer = ms => new Promise(res => setTimeout(res, ms));

    timer(3000)
        .then(() => {
            bodyElement.classList.add('loaded');
        }).then(() => {
            let current_step = 0;
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');

            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
            nextBtn.classList.remove('d-none');
            submitBtn.classList.add('d-none');
            nextBtn.classList.add('d-inline-block');

        }).then(() => {
            stepBlock[0].classList.add('d-none');
        })

});