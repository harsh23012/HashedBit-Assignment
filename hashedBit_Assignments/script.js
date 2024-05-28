var modal = document.querySelector(".modal");

var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.querySelector(".close-modal");

var closeFooterBtn = document.querySelector(".modal-footer button:first-child");
var saveFooterBtn = document.querySelector(".modal-footer button:last-child");

openModalBtn.onclick = function () {
  modal.style.display = "block";
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

closeFooterBtn.onclick = function () {
  modal.style.display = "none";
};

saveFooterBtn.onclick = function () {
  alert("Changes have been saved!");
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
