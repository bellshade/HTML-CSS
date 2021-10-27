const openBtn = document.querySelector(".open-modal-btn");
const closeBtn = document.querySelector(".close-modal-btn");
const modalContainer = document.querySelector(".container-modal");

openBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});