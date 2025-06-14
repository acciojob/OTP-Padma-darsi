const inputs = document.querySelectorAll(".code");

inputs.forEach((input, idx) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "") {
      if (idx > 0) {
        inputs[idx - 1].focus();
        inputs[idx - 1].value = "";
      }
    }
  });
});
