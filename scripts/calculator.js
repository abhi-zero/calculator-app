document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelector(".buttons-section");
  const display = document.getElementById("calculator-display");
  buttons.addEventListener("click", (event) => {
    const clickedButton = event.target.closest(".buttons").dataset.id;
    if (
      clickedButton !== "equal" &&
      clickedButton !== "allClear" &&
      clickedButton !== "clear"
    ) {
      addValueToDisplay(clickedButton);
    }

    if (clickedButton === "equal") {
      calculator();
      return;
    } else if (clickedButton === "clear") {
      clearOneCharacter();
      return;
    } else if (clickedButton === "allClear") {
      clearDisplay();
      return;
    }
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key;

    const num = event.getModifierState("NumLock");
    if (num) {
      if (
        (key !== "Enter" &&
          key !== "Backspace" &&
          key !== "Delete" &&
          !isNaN(key)) ||
        key == "+" ||
        key == "-" ||
        key == "*" ||
        key == "/" ||
        key == "."
      ) {
        addValueToDisplay(key);
      }
      if (key === "Enter") {
        calculator();
      } else if (key === "Backspace") {
        clearOneCharacter();
      } else if (key === "Delete") {
        clearDisplay();
      }
    }
  });

  function clearOneCharacter() {
    display.value = display.value.slice(0, -1);
  }

  function addValueToDisplay(input) {
    display.value += input;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculator() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
});
