const arrowDown = document.querySelectorAll('.button-down');

const answer = document.querySelectorAll('.answer');

arrowDown.addEventListener('click', function() {
  answer.classList.toggle('show');
});