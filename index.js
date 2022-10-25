let openBtn = document.getElementById("subscribe");
let closeBtn = document.getElementById("close-btn");
let modalContainer = document.getElementById("modal-container");

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});
