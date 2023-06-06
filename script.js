const buttons = document.querySelectorAll(".keyboard");

function activeKey(event) {
  for (let i = 0; i < buttons.length; i = i + 1) {
    buttons[i].classList.remove("active");
  }

  let key = event.key;
  console.log(event.key);

  if (key === " ") {
    key = "space";
  } else if (key === "Control") {
    key = "ctrl";
  } else if (key === "Alt") {
    key = "alt";
  } else if (key === "Enter") {
    key = "enter";
  }

  let button = document.querySelector(`.keyboard[data="${key}"]`);
  button.classList.add("active");
}

document.querySelector(".in").addEventListener("keydown", activeKey);
