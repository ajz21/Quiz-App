const pol_quiz = {
    1: 'Winston Churchill',
    2: 'Unipolar',
    3: 'Israel',
    4: 'International Court of Justice (ICJ)',
    5: 'Greater Polarisation Of Wealth',
};
// const pol_quiz = ['Winston Churchill', 'Unipolar', 'Israel', 'International Court of Justice (ICJ)', 'Greater Polarisation Of Wealth', ]
const sport_quiz = [];

const answeres = document.querySelectorAll('.answer');


let index = 0;
// console.log(quiz_test.length);
// add timer to quiz
let timer = document.querySelector('#timer'),
    time = timer.innerText;
// console.log(timer.style.display);
// window.getComputedStyle(document.getElementById('test')).display;
// window.getComputedStyle(timer).display;
// console.log(getComputedStyle(timer).display);

// if (getComputedStyle(timer).display != 'none') {
//     setInterval(function quizTime() {
//         if (time >= 0) {
//             timer.innerText = time;
//             time--;
//         } else {
//             time = 10;
//             index++;
//             next_question();
//         }
//     }, 1000);
// }



// for sample quiz
let quiz_screen = document.getElementById('quiz-screen'),
    quiz_test = document.getElementsByClassName('quiz-test');
let quiz_rules_card = document.querySelector('.quiz-rules');
let enter_btn = document.querySelector('#enter-btn');

// show rules
function enter(id) {
    quiz_rules_card.classList.add('quiz-rules-display');
    enter_btn.addEventListener('click', () => {
        quiz_rules_card.classList.remove('quiz-rules-display');
        enter_quiz(id);
    });

}


// enter quiz
function enter_quiz(id) {
    // console.log(document.getElementById(id));
    let quiz_template = document.getElementById(id);
    // console.log(quiz_template);
    quiz_template.style.display = 'flex';
    timer.style.display = 'flex';
    // quizTime();
    // if (index > quiz_test.length) {
    // index = 0;
    // } else {
    // console.log(index < quiz_test.length);

    function quizTime() {
        if (time >= 0) {
            timer.innerText = time;
            time--;
        } else {
            time = 1;
            // index++;
            next_question();
        }
    }
    // setInterval(function quizTime() {
    //         console.log(index);
    //         if (index < quiz_test.length) {
    //             if (time >= 0) {
    //                 timer.innerText = time;
    //                 time--;
    //             } else {
    //                 time = 1;
    //                 index++;
    //                 next_question(id);
    //             }
    //         } else {
    // clearInterval(quizTime);
    // index = 0;
    // }
    if (index < quiz_test.length) {
        console.log('hello');
        setInterval(quizTime(), 1000)
    } else {
        clearInterval(quizTime);
    }

    // }
    // else {
    //     index = 0;
    // }
    // }
    is_answer();
}

// exit quiz 
function exit_quiz() {
    if (index > quiz_test.length) {

    }
};

// display score card 
function display_res() {};

// slide to next question 

console.log(quiz_test.length);
console.log(quiz_test);
// console.log(quiz_test.values());

// function next_question(id) {
function next_question() {
    // if (index < quiz_test.length) {
    setTimeout(() => {
        quiz_screen.style.transform = `translate(${(index) * -20}%)`;
        index++;
    }, 1200)

    // } else {
    //     let quiz_template = document.getElementById(id);
    //     timer.style.display = 'none';
    //     quiz_template.style.display = 'none';
    // }
};

// check the answer 
function is_answer() {
    Array.from(answeres).forEach(e => e.addEventListener('click', function() {
        // if(e.innerText == pol_quiz[])
        // console.log(quiz_test.indexOf(e));
        // console.log(Object.keys(pol_quiz)[Object.values(pol_quiz).indexOf(e)]);
        let arr = [...e.parentElement.id];
        // console.log(arr[arr.length - 1]);
        if (e.innerText == pol_quiz[arr[arr.length - 1]]) {
            e.style.backgroundColor = 'rgb(219, 255, 219)';
            // console.log('yes');
        } else {
            e.style.backgroundColor = 'rgb(256, 219, 219)';
            // console.log('no');
        }
        // console.log(e.parentElement.children);
        // console.log(e.parentElement.children[0].innerText);
        for (let i = 1; i < 5; i++) {
            if (e.parentElement.children[i].innerText == pol_quiz[arr[arr.length - 1]]) {
                e.parentElement.children[i].style.backgroundColor = 'rgb(219, 255, 219)';
            } else {}
        }
        // console.log(indexOf(e.parentElement))
        // pol_quiz.includes(e.innerText) ? e.style.backgroundColor = 'rgb(219, 255, 219)' : e.style.backgroundColor = 'rgb(256, 219, 219)'
        // console.log(e.parentElement.id);
        next_question()
    }));

};

// for creating new quiz

// adding quiz