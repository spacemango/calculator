// QUERY SELECTORS
const input = document.querySelector('#input');
const inputPrev = document.querySelector('#input-prev');

// Buttons
const buttons = document.querySelectorAll('button');
const btn0 = document.querySelectorAll('#btn-0');
const btn1 = document.querySelectorAll('#btn-1');
const btn2 = document.querySelectorAll('#btn-2');
const btn3 = document.querySelectorAll('#btn-3');
const btn4 = document.querySelectorAll('#btn-4');
const btn5 = document.querySelectorAll('#btn-5');
const btn6 = document.querySelectorAll('#btn-6');
const btn7 = document.querySelectorAll('#btn-7');
const btn8 = document.querySelectorAll('#btn-8');
const btn9 = document.querySelectorAll('#btn-9');

buttons.forEach(button => {
   button.addEventListener('click', (e) => {

      let inputContent = e.target.textContent;
      console.log(inputContent);
      if (inputContent === 0) {
         input.innerHTML = '';
      }
      input.textContent += inputContent;
   });
});

const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

const operations = (op) => {
   switch (op) {
      case '×':
         multiply();;
         break;
      case '÷':
         divide();
         break;
      case '−':
         subtract();
         break;
      case '+':
         add();
         break;
   }
};