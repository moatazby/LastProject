// script.js
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit-btn");

const questions = [
    {
        question: "1. What is Cristiano Ronaldo's full name?",
        answers: ["Cristiano Ronaldo dos Santos Aveiro", "Cristiano Luis Ronaldo", "Cristiano Ronaldo de Lima", "Cristiano Ronaldo Pereira"],
        correctAnswer: "Cristiano Ronaldo dos Santos Aveiro"
    },
    {
        question: "2. In which year did Cristiano Ronaldo win his first Ballon d'Or?",
        answers: ["2007", "2008", "2009", "2010"],
        correctAnswer: "2008"
    },
    {
        question: "3. Which club did Cristiano Ronaldo join after leaving Manchester United?",
        answers: ["Real Madrid", "Barcelona", "Bayern Munich", "Juventus"],
        correctAnswer: "Real Madrid"
    },
    {
        question: "4. What country is Cristiano Ronaldo from?",
        answers: ["Brazil", "Portugal", "Spain", "Argentina"],
        correctAnswer: "Portugal"
    },
    {
        question: "5. How many times has Cristiano Ronaldo won the UEFA Champions League?",
        answers: ["2", "4", "5", "7"],
        correctAnswer: "5"
    },
    {
        question: "6. What was the first club Cristiano Ronaldo played for professionally?",
        answers: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus"],
        correctAnswer: "Sporting CP"
    },
    {
        question: "7. In which year did Cristiano Ronaldo join Manchester United?",
        answers: ["2002", "2003", "2004", "2006"],
        correctAnswer: "2003"
    },
    {
        question: "8. How many FIFA World Cup titles has Cristiano Ronaldo won with Portugal?",
        answers: ["1", "2", "3", "0"],
        correctAnswer: "0"
    },
    {
        question: "9. What is the nickname often used for Cristiano Ronaldo?",
        answers: ["CR7", "CR9", "C-Ron", "The Magician"],
        correctAnswer: "CR7"
    },
    {
        question: "10. How many Ballon d'Or titles has Cristiano Ronaldo won in total (up to 2021)?",
        answers: ["3", "4", "5", "7"],
        correctAnswer: "5"
    },
];

function showQuestions() {
    const output = [];
    questions.forEach((question, questionIndex) => {
        const answers = [];
        question.answers.forEach((answer, index) => {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionIndex}" value="${answer}">
                    ${answer}
                </label>`
            );
        });

        output.push(
            `<div class="question">${question.question}</div>
            <div class="answers">${answers.join("")}</div>`
        );
    });
    quizContainer.innerHTML = output.join("");
}

function checkAnswers() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let score = 0;

    questions.forEach((question, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        const selectedInput = answerContainer.querySelector(`input[name="question${questionIndex}"]:checked`);
        const userAnswer = selectedInput ? selectedInput.value : undefined;

        if (userAnswer === question.correctAnswer) {
            score++;
            answerContainer.style.color = "#4CAF50";
        } else {
            answerContainer.style.color = "#f44336";
            const correctInput = answerContainer.querySelector(`input[value="${question.correctAnswer}"]`);
            if (correctInput) {
                correctInput.parentElement.style.color = "#4CAF50";
            }
        }
    });

    resultContainer.textContent = `You scored ${score} out of ${questions.length} correct!`;
    resultContainer.classList.add("show");
}

submitButton.addEventListener("click", checkAnswers);
showQuestions();
