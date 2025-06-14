const inputs = document.querySelectorAll(".code");

inputs.forEach((input, idx) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;

    if (value && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value) {
        input.value = ""; // Clear current input
      } else if (idx > 0) {
        inputs[idx - 1].focus();
        inputs[idx - 1].value = "";
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      inputs[idx - 1].focus();
    } else if (e.key === "ArrowRight" && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    }
  });

  input.addEventListener("paste", (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
    paste.split('').slice(0, 6).forEach((char, i) => {
      inputs[i].value = char;
    });
    if (paste.length > 0) {
      const nextIndex = Math.min(paste.length, inputs.length) - 1;
      inputs[nextIndex].focus();
    }
  });
});


