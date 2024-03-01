const answers = {
  q1: 'B',
  q2: 'D',
  q3: 'D'
};

const checkAnswer = (questionName, correctValue) => {
  const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
  if (selectedOption) {
    if (selectedOption.value === correctValue) {
      selectedOption.parentElement.classList.add('correct-answer');
    } else {
      selectedOption.parentElement.classList.add('incorrect-answer');
    }
  }
};

const checkAnswers = () => {
  Object.entries(answers).forEach(([questionName, correctValue]) => {
    checkAnswer(questionName, correctValue);
  });
};

const updateProgress = () => {
  let score = 0;
  Object.entries(answers).forEach(([questionName, correctValue]) => {
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    if (selectedOption && selectedOption.value === correctValue) {
      score++;
    }
  });
  const progressBarInner = document.getElementById('progress-bar-inner');
  progressBarInner.style.width = `${(score / Object.keys(answers).length) * 100}%`;
  const progressText = document.getElementById('progress-text');
  progressText.innerText = `${score} out of ${Object.keys(answers).length} questions answered`;
};

document.getElementById('Submit').addEventListener('click', () => {
  checkAnswers();
  updateProgress();
});