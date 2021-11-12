const pol_quiz = [{
        question: 'Who was the Prime Minister of U.K during WWII ?',
        answer: {
            1: 'Margaret Thatcher',
            2: 'Clement Attlee',
            3: 'William Ewart Gladstone',
            4: 'Winston Churchill'
        },
        correctAnswer: 'Winston Churchill'
    }, {
        question: 'Since the end of the Cold War, the world is said to be as?',
        answer: {
            1: 'Unipolar',
            2: 'Bipolar',
            3: 'Regional',
            4: 'Conservative'
        },
        correctAnswer: 'Unipolar'
    }, {
        question: 'Which of the following are not a nuclear state?',
        answer: {
            1: 'India',
            2: 'Usa',
            3: 'Pakistan',
            4: 'Israel'
        },
        correctAnswer: 'Israel'
    }, {
        question: 'The global spread of capitalism after the Cold War led to',
        answer: {
            1: 'Greater Equality',
            2: 'More Justice',
            3: 'Greater Polarisation Of Wealth',
            4: 'More Injustice'
        },
        correctAnswer: 'Greater Polarisation Of Wealth'
    }, {
        question: 'Which of these is the chief court of the UN?',
        answer: {
            1: 'Permanent Court of International Justice (PCIJ)',
            2: 'International Criminal Court (ICC)',
            3: 'International Court of Justice (ICJ)',
            4: 'European Court of Justice (ECJ)'
        },
        correctAnswer: 'International Court of Justice (ICJ)'
    }]
    // console.log(pol_quiz[0].question);
const sport_quiz = [];


let index = 0;
let score = 0;
// console.log(quiz_test.length);
// add timer to quiz
let timer = document.querySelector('#timer'),
    time = timer.innerText;


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

let quiz_modules = document.getElementsByClassName('quiz-modules'),
    quiz_conatiner = document.querySelector('.quiz-container');
// enter quiz
let html = '';

function enter_quiz(id) {
    console.log(id);

    html = `<div class="quiz-test">
    <p class="question">${index + 1}. ${pol_quiz[index].question}</p>
    <p class="answer">${pol_quiz[index].answer[1]}</p>
    <p class="answer">${pol_quiz[index].answer[2]}</p>
    <p class="answer">${pol_quiz[index].answer[3]}</p>
    <p class="answer">${pol_quiz[index].answer[4]}</p>
</div>`;

    // for (let i = 0; i < quiz_modules.length; i++) {
    //     // console.log(3);
    //     console.log(i);
    //     quiz_modules[i].style.display = 'none';
    //     // console.log('hello');
    // }
    quiz_conatiner.innerHTML = html;
    is_answer(index);
    index++;
}
// console.log(document.getElementById(id));
//     let quiz_template = document.getElementById(id);
//     // console.log(quiz_template);
//     quiz_template.style.display = 'flex';
//     timer.style.display = 'flex';
//     let quizTime = setInterval(() => {
//         if (index < quiz_test.length) {
//             console.log('hello');
//             if (time >= 0) {
//                 timer.innerText = time;
//                 time--;
//             } else {
//                 time = 3;
//                 index++;
//                 next_question(id);
//             }
//         } else {
//             clearInterval(quizTime);
//             index = 0;
//         }

//     }, 1000);
//     // }
//     console.log(index);
//     is_answer(id);
// }

// // exit quiz 
// function exit_quiz() {
//     if (index > quiz_test.length) {

//     }
// };

// display score card 
function display_res() {};

// slide to next question 

// console.log(quiz_test.length);
// console.log(quiz_test);
// console.log(quiz_test.values());

// function next_question(id) {
function next_question(index) {
    if (index >= pol_quiz.length) {
        index = 0;
    } else {
        setTimeout(() => {
            enter_quiz(index);
        }, 1500);

    }
    // if (index < quiz_test.length) {
    //     setTimeout(() => {
    //         quiz_screen.style.transform = `translate(${(index) * -20}%)`;
    //         // index++;
    //     }, 1200)
    // } else {
    //     let quiz_template = document.getElementById(id);
    //     timer.style.display = 'none';
    //     quiz_template.style.display = 'none';
    //     // index = 0;
    // }
    // console.log(index);
};


// check the answer 
function is_answer(index) {
    const answeres = document.querySelectorAll('.answer');
    console.log(index);
    Array.from(answeres).forEach(e => e.addEventListener('click', function() {
        if (e.innerText == pol_quiz[index].correctAnswer) {
            e.style.backgroundColor = 'rgb(219, 255, 219)';
            score++;
            if (index != pol_quiz.length - 1) {
                next_question(index);
            } else {}
        } else {
            e.style.backgroundColor = 'rgb(256, 219, 219)';
            if (index != pol_quiz.length - 1) {
                next_question(index);
            } else {}
        }
    }))
}
// function is_answer(id) {
//     Array.from(answeres).forEach(e => e.addEventListener('click', function() {
//         // if(e.innerText == pol_quiz[])
//         // console.log(quiz_test.indexOf(e));
//         // console.log(Object.keys(pol_quiz)[Object.values(pol_quiz).indexOf(e)]);
//         let arr = [...e.parentElement.id];
//         // console.log(arr[arr.length - 1]);
//         if (e.innerText == pol_quiz[arr[arr.length - 1]]) {
//             e.style.backgroundColor = 'rgb(219, 255, 219)';
//             // console.log('yes');
//         } else {
//             e.style.backgroundColor = 'rgb(256, 219, 219)';
//             // console.log('no');
//         }
//         // console.log(e.parentElement.children);
//         // console.log(e.parentElement.children[0].innerText);
//         for (let i = 1; i < 5; i++) {
//             if (e.parentElement.children[i].innerText == pol_quiz[arr[arr.length - 1]]) {
//                 e.parentElement.children[i].style.backgroundColor = 'rgb(219, 255, 219)';
//             } else {}
//         }
//         console.log(index);
//         // console.log(indexOf(e.parentElement))
//         // pol_quiz.includes(e.innerText) ? e.style.backgroundColor = 'rgb(219, 255, 219)' : e.style.backgroundColor = 'rgb(256, 219, 219)'
//         // console.log(e.parentElement.id);
//         next_question(id)
//     }));

// };

// for creating new quiz

// adding quiz