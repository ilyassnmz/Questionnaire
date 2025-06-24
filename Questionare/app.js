const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const successMessage = document.querySelector('#successMessage');
const successMessage1 = document.querySelector('#successMessage1');
const successMessage2 = document.querySelector('#successMessage2');
const successMessage3 = document.querySelector('#successMessage3');
const successMessage4 = document.querySelector('#successMessage4');
const button = document.querySelector('.btn');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  const messages = {
    0: "Yazılımcılık bu değil dostum 😅",
    25: "Bir yerlerden başlamışsın, güzel!",
    50: "Yolun yarısı, devam et!",
    75: "Neredeyse tam bir yazılımcısın!",
    100: "Sen bu işin ehli olmuşsun! 👑"
  };

  if (messages.hasOwnProperty(score)) {
    successMessage.textContent = messages[score];
    successMessage.classList.remove('d-none');
    button.setAttribute('disabled', '');
  }

  result.classList.remove('d-none');

  let puan = 0;
  const bastir = setInterval(() => {
    result.querySelector('span').textContent = `${puan}%`;
    if (puan === score) {
      clearInterval(bastir);
    } else {
      puan++;
    }
  }, 2);
});
