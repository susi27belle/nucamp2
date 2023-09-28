const questionDiv = document.getElementById('question'); 
const answerDiv = document.getElementById('answer'); 
const feedbackDiv = document.getElementById('feedback'); 
let currentQuestion = null; 

function getTriviaQuestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Code to fetch random trivia will go here
    }, 1000); // Delay of 1 second
  });
}

const index = Math.floor(Math.random() * questions.length);
const question = questions[index];

function displayQuestion(triviaQuestion) {
  // Update the questionDiv with the trivia question text
  questionDiv.textContent = triviaQuestion.question;
  // Clear the answerDiv for user's input
  answerDiv.value = '';
  // Clear the feedbackDiv
  feedbackDiv.textContent = '';
}

document.getElementById('questionBtn').addEventListener('click', () => {
  // Call getTriviaQuestion to fetch a new question
  getTriviaQuestion()
    .then((question) => {
      // Update currentQuestion and display the question
      currentQuestion = question;
      displayQuestion(currentQuestion);
    })
    .catch((error) => {
      // Handle errors here (e.g., display an error message)
      console.error(error);
    });
});

document.getElementById('answerBtn').addEventListener('click', () => {
  // Retrieve the user's input from answerDiv
  const userAnswer = answerDiv.value.trim().toLowerCase();

  // Check if the user's answer matches the correct answer
  if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
    // Display a correct answer message
    feedbackDiv.textContent = 'Correct!';
  } else {
    
    feedbackDiv.textContent = 'Incorrect. Try again.';
  }
});


