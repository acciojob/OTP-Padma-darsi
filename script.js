
const inputs = document.querySelectorAll('#otp input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    const value = input.value;
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = '';
        }
      }
    }
  });

  // Optional: Only allow digits
  input.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  });
});
