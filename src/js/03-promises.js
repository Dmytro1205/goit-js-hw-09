const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let currentDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += Number(step.value);
  }
  event.target.reset();
}
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
