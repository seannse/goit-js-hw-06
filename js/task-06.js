const textInput = document.querySelector("input#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
    return;
  }

  textInput.classList.add("valid");
  textInput.classList.remove("invalid");
});
