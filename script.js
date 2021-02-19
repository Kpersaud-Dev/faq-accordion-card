const arrows = document.querySelectorAll('.arrow');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

// Show Answers

questions.forEach(question => 
  question.addEventListener('click', () => {
    // Animate Arrow
    question.firstElementChild.nextElementSibling.classList.toggle('active');
    //Show Answer
    question.nextElementSibling.classList.toggle('active');
    // Make question bold
    question.firstElementChild.classList.toggle('bold');
  }));

