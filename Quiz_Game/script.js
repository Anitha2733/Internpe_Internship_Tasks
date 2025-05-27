const questions = [
    {
        question: "Which planet is known as red planet?",
        answers: ["Venus", "Mars", "Earth", "Jupiter"],
        correct: 1
    },
    {
        question: "What is 9 + 9?",
        answers: ["8", "2", "18", "6"],
        correct: 2
    },
    {
        question: "What is the capital of korea?",
        answers: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.forEach((button, index) => {
        button.innerText = question.answers[index];
        button.dataset.answer = index;
    });
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswer = parseInt(selectedButton.dataset.answer);
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    answerButtons.forEach(button => {
        button.style.display = 'none';
    });
}

startQuiz();
