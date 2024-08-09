const quizData = [
    {
        question: "Which of the following is used to dynamically allocate memory in C?",
        options: [
            "alloc()",
            "malloc()",
            "memory()",
            "allocmem()"
        ],
        correct: 1,
    },
    {
        question: "Which of the following is the correct way to create an object of the class MyClass in Java?",
        options: [
            "MyClass obj = new MyClass();",
            "MyClass obj = MyClass();",
            "MyClass obj = class MyClass();",
            "MyClass obj = MyClass.new();",
        ],
        correct: 0,
    },
    {
        question: "Which method must be implemented by all threads in Java?",
        options: [
            "start()",
            "execute()",
            "init()",
            "run()",
        ],
        correct: 3,
    },
    {
        question: "Which of the following HTML tags is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<hyperlink>",
        ],
        correct: 1,
    },
    {
        question: "Which of the following HTTP methods is used to update data on the server?",
        options: [
            "GET",
            "POST",
            "PUT",
            "DELETE",
        ],
        correct: 2,
    },
];

const questionElement = document.getElementById("question");
const option1 = document.getElementById("option_1");
const option2 = document.getElementById("option_2");
const option3 = document.getElementById("option_3");
const option4 = document.getElementById("option_4");
const submitButton = document.getElementById("btnsbt");
const answerElements = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.options[0];
    option2.innerText = currentQuizData.options[1];
    option3.innerText = currentQuizData.options[2];
    option4.innerText = currentQuizData.options[3];
};

const getSelected = () => {
    let answer;
    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
};

const deselectAnswers = () => {
    answerElements.forEach(answerElement => {
        answerElement.checked = false;
    });
};

const showResults = () => {
    document.querySelector('.quiz-section').innerHTML = `
        <div class="results-section">
            <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
            <p>Congratulations on completing the quiz!</p>
            <button onclick="location.reload()">Play Again</button>
        </div>
    `;
};

submitButton.addEventListener("click", () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        const answerIndex = Array.from(answerElements).findIndex(
            (answer) => answer.id === selectedAnswer
        );

        if (answerIndex === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }
});

loadQuiz();
