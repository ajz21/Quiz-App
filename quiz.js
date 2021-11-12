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
const econ_quiz = [{
    question: 'In economic theory the term "ceteris paribus" is used to indicate',
    answer: {
        1: ' Demand and supply are equal',
        2: 'MR = MC',
        3: 'Price are increasing',
        4: 'Other things being equal'
    },
    correctAnswer: 'Other things being equal'
}, {
    question: ' Which of the following is not a central problem of an economy',
    answer: {
        1: 'What to produce',
        2: 'How to produce',
        3: 'For whom to produce',
        4: 'Where to produce'
    },
    correctAnswer: 'Where to produce'
}, {
    question: 'Who is known as the father of modern economics?',
    answer: {
        1: 'Thomas Robert Malthus',
        2: 'Francois Quesnay',
        3: 'Adam Smith',
        4: 'David Ricardo'
    },
    correctAnswer: 'Adam Smith'
}, {
    question: 'If nominal GDP is equal to real GDP, then',
    answer: {
        1: 'The GDP deflator is equal to zero',
        2: 'The GDP deflator is equal to one',
        3: 'The GDP deflator is less than one',
        4: 'None of the above'
    },
    correctAnswer: 'The GDP deflator is equal to one'
}, {
    question: 'The National Income is equal to',
    answer: {
        1: 'Net National Product + Taxes',
        2: 'Net National Product – Indirect Taxes + Subsidies',
        3: 'Net National Product – Direct Taxes + Subsidies',
        4: 'Gross National Product — Subsidies + Taxes'
    },
    correctAnswer: 'Net National Product – Indirect Taxes + Subsidies'
}];


let index = 0;
let score = 0;
let html = '';
let dashboard = document.getElementById('dashboard'),
    onboard = document.getElementById('onboard'),
    quiz_screen = document.getElementById('quiz-screen'),
    quiz_test = document.getElementsByClassName('quiz-test'),
    quiz_rules_card = document.querySelector('.quiz-rules'),
    enter_btn = document.querySelector('#enter-btn'),
    timer = document.querySelector('#timer'),
    time = timer.innerText,
    quiz_modules = document.getElementsByClassName('quiz-modules'),
    quiz_conatiner = document.querySelector('.quiz-container');




// for sample quiz

// show rules
function enter(arr) {
    quiz_rules_card.classList.add('quiz-rules-display');
    enter_btn.addEventListener('click', () => {
        quiz_rules_card.classList.remove('quiz-rules-display');
        enter_quiz(arr);
    });
}

// enter quiz
function enter_quiz(arr) {
    dashboard.style.display = 'none';
    onboard.style.display = 'block';
    html = `<div class="quiz-test">
    <p class="question">${index + 1}. ${arr[index].question}</p>
    <p class="answer">${arr[index].answer[1]}</p>
    <p class="answer">${arr[index].answer[2]}</p>
    <p class="answer">${arr[index].answer[3]}</p>
    <p class="answer">${arr[index].answer[4]}</p>
    </div>`;
    onboard.innerHTML = html;
    index++;
    is_answer(arr, index);
}


// check the answer 
function is_answer(arr, index) {
    const answeres = document.querySelectorAll('.answer');
    Array.from(answeres).forEach(e => e.addEventListener('click', function() {
        if (e.innerText == arr[index - 1].correctAnswer) {
            e.style.backgroundColor = 'rgb(219, 255, 219)';
            score++;
            if (index < arr.length) {
                next_question(arr, index);
            } else {
                display_res();
            }
        } else {
            e.style.backgroundColor = 'rgb(256, 219, 219)';
            for (let i = 1; i < 5; i++) {
                if (e.parentElement.children[i].innerText == arr[index - 1].correctAnswer) {
                    e.parentElement.children[i].style.backgroundColor = 'rgb(219, 255, 219)';
                } else {}
            }
            if (index < arr.length) {
                next_question(arr, index);
            } else {
                display_res();
            }
        }
    }))
}


// function next_question(id) {
function next_question(arr, index) {
    if (index >= arr.length) {
        index = 0;
    } else {
        setTimeout(() => {
            enter_quiz(arr);
        }, 400);
    }
};


// display score card 
function display_res() {
    setTimeout(() => {
        html = `<div class="quiz-results quiz-rules">
    <p>YOUR SCORE</p>
    <p>${score} / ${pol_quiz.length}</p>
    <button id="btd">Back to Dashboard</button>
    </div>`;
        onboard.innerHTML = html;
        back_to_dashboard();
        score = 0;
        index = 0;
    }, 1000);

};


// for going back to dashboard
function back_to_dashboard() {
    let back_btn = document.getElementById('btd');
    back_btn.addEventListener('click', () => {
        onboard.style.display = 'none';
        dashboard.style.display = 'flex';
    })
}


// add timer to quiz
function quiz_timer() {

}


// for creating new quiz

// adding quiz