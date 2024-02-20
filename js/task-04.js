function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    input: document.querySelector("#controls input"),
    createBtn: document.querySelector("[data-create]"),
    destroyBtn: document.querySelector("[data-destroy]"),
    boxesContainer: document.getElementById("boxes"),
  };

  refs.createBtn.addEventListener("click", () => createBoxes(refs.input.value));
  refs.destroyBtn.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    const boxes = [];
    let initialSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${initialSize}px`;
      box.style.height = `${initialSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.marginTop = "10px";
      initialSize += 10;
      boxes.push(box);
    }

    refs.boxesContainer.append(...boxes);
  }

  function destroyBoxes() {
    refs.boxesContainer.innerHTML = "";
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }
});
