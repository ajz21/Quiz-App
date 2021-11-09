const pol_quiz = [];
const sport_quiz = [];

// add timer to quiz
let timer = document.querySelector('.timer'),
    time = timer.innerText;
setInterval(function quizTime() {
    if (time >= 0) {
        timer.innerText = time;
        time--;
    } else {
        time = 10
    }
}, 1000);

// for sample quiz

// enter quiz
function enter_quiz() {};

// exit quiz 
function exit_quiz() {};

// display score card 
function display_res() {};

// slide to next question 
function next_question() {};

// check the answer 
function is_answer() {};

// for creating new quiz

// adding quiz