function expandBox(radio) {
  document.querySelectorAll(".radio-box").forEach((box) => {
    box.classList.remove("expanded");
  });

  let parentBox = radio.closest(".radio-box");

  parentBox.classList.add("expanded");
}
