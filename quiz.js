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
    question: 'The difference between gross domestic product and net domestic product equals',
    answer: {
        1: 'Transfer payments',
        2: 'Indirect taxes',
        3: 'Subsidies',
        4: 'Depreciation cost'
    },
    correctAnswer: 'Depreciation cost'
}];
let random_quiz = [
    {}, {}, {}, {}, {}
]

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
    index = 0;
    quiz_rules_card.classList.add('quiz-rules-display');
    enter_btn.addEventListener('click', () => {
        quiz_rules_card.classList.remove('quiz-rules-display');
        enter_quiz(arr);
        quiz_timer(arr);
    });
}

// enter quiz
function enter_quiz(arr) {
    dashboard.style.display = 'none';
    onboard.style.display = 'flex';
    timer.style.display = 'flex';

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
        time = 15;
        if (e.innerText == arr[index - 1].correctAnswer) {
            e.style.backgroundColor = 'rgb(219, 255, 219)';
            score++;
            if (index < arr.length) {
                next_question(arr, index);
            } else {
                index = 0;
                display_res(score);
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
                index = 0;
                display_res(score);
            }
        }
    }))
}


// function next_question(id) {
function next_question(arr, index) {
    if (index >= arr.length) {
        index = 0;
        score = 0;
    } else {
        setTimeout(() => {
            enter_quiz(arr);
        }, 400);
    }
};


// display score card 
function display_res(score) {
    setTimeout(() => {
        html = `<div class="quiz-results quiz-rules">
    <p>YOUR SCORE</p>
    <p>${score} / ${pol_quiz.length}</p>
    <button id="btd" class="btn-style">Back to Dashboard</button>
    </div>`;
        onboard.innerHTML = html;
        back_to_dashboard();
        clearInterval(quizT);
        timer.style.display = 'none';
        score = 0;
    }, 1000);

};


// for going back to dashboard
function back_to_dashboard() {
    let back_btn1 = document.getElementById('btd');
    back_btn1.addEventListener('click', () => {
        onboard.style.display = 'none';
        dashboard.style.display = 'flex';
        index = 0;
        score = 0;
        window.location.reload();
    })

}


let quizT;

// add timer to quiz
function quiz_timer(arr) {
    quizT = setInterval(() => {
        if (index <= arr.length) {
            if (time >= 0) {
                timer.innerText = time;
                time--;
            } else {
                time = 15;
                const answeres = document.querySelectorAll('.answer');
                Array.from(answeres).forEach((e) => {
                    for (let i = 1; i < 5; i++) {
                        if (e.parentElement.children[i].innerText == arr[index - 1].correctAnswer) {
                            e.parentElement.children[i].style.backgroundColor = 'rgb(219, 255, 219)';
                        } else {}
                    }
                    if (index >= arr.length) {
                        display_res();
                    }
                })
                next_question(arr, index);
            }
        } else {
            timer.style.display = 'none';
            clearInterval(quizT);
        }

    }, 1000)
}




// for creating new quiz

// adding quiz title 
function add_title() {
    dashboard.style.display = 'none';
    onboard.style.display = 'flex';
    html = `<div class="custom">
    <input type="text" placeholder="Enter the title" class="title" id="title" style="border-radius: 2px;">
    <button class="btn-style" id="ques-btn">Next</button>
    </div>`;
    onboard.innerHTML = html;
    let title = document.getElementById('title');
    let add_ques = document.getElementById('ques-btn');
    add_ques.addEventListener('click', () => {
        if (title.value != '') {
            make_custom_quiz(index);
            create_new_quiz(title.value);
        } else {
            alert('ADD YOUR TITLE');
        }
    })

}

let newHtml = '';

// creating title for quiz
function create_new_quiz(title) {
    newHtml = `<div class="quiz-modules" onclick="enter(random_quiz)">
    <h2>${title}</h2>
    </div>`;
    dashboard.innerHTML += newHtml;
}

// adding quiz
function make_custom_quiz(index) {
    if (index <= 4) {
        html = `<div class="custom">
        <input type="text" placeholder="Question" class="newQuestion" style="border-radius: 2px;">
        <input type="text" placeholder="Correct_Answer 1" class="newAnswer" id="Correct_Answer" style="border-color: rgb(31, 195, 31);">
        <input type="text" placeholder="Answer 2" class="newAnswer" id="answer1">
        <input type="text" placeholder="Answer 3" class="newAnswer" id="answer2">
        <input type="text" placeholder="Answer 4" class="newAnswer" id="answer3">
        <button class="btn-style" id="next-btn">Next</button>
        </div>`;
        onboard.innerHTML = html;

        let next = document.getElementById('next-btn');
        next.addEventListener('click', () => {
            storeQUiz(index);
        })
    } else {
        html = `<div class="back_dashboard">
        <p>Your quiz has been successfuly created!</p>
        <button class="btn-style" id="btD">Back to dashboard</button>
        </div>`;
        onboard.innerHTML = html;
        back_to_dashboard1();
    }

}

// function to return to dashboard
function back_to_dashboard1() {
    let back_btn2 = document.getElementById('btD');
    let add_custom_quiz = document.getElementById('add_custom_quiz');
    back_btn2.addEventListener('click', () => {
        add_custom_quiz.style.display = 'none';
        onboard.style.display = 'none';
        dashboard.style.display = 'flex';
        index = 0;
    })
}

// function to store quiz
function storeQUiz(index) {
    let newQuestion = document.querySelector('.newQuestion'),
        newCorrectAnswer = document.querySelector('#Correct_Answer');
    let answer1 = document.getElementById('answer1'),
        answer2 = document.getElementById('answer2'),
        answer3 = document.getElementById('answer3');
    if (answer1.value && answer2.value && answer3.value && newCorrectAnswer.value && newQuestion.value != '') {
        random_quiz[index].question = newQuestion.value;
        random_quiz[index].answer = {
            1: answer1.value,
            2: answer2.value,
            3: answer3.value,
            4: newCorrectAnswer.value
        };
        random_quiz[index].correctAnswer = newCorrectAnswer.value;
        index++;
        make_custom_quiz(index);
    } else {
        alert('ADD YOUR QUESTION AND ANSWER');
    }
}