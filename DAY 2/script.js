const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            display.value = '';
        } else if (button.textContent === 'Del') {
            display.value = display.value.slice(0, -1);
        } else if (button.textContent === 'sin') {
            display.value = Math.sin(parseFloat(display.value));
        } else if (button.textContent === 'cos') {
            display.value = Math.cos(parseFloat(display.value));
        } else if (button.textContent === 'tan') {
            display.value = Math.tan(parseFloat(display.value));
        } else if (button.textContent === 'log') {
            display.value = Math.log10(parseFloat(display.value));
        } else if (button.textContent === 'ln') {
            display.value = Math.log(parseFloat(display.value));
        } else if (button.textContent === '√') {
            display.value = Math.sqrt(parseFloat(display.value));
        } else if (button.textContent === 'x²') {
            display.value = Math.pow(parseFloat(display.value), 2);
        } else {
            display.value += button.textContent;
        }
    });
});
