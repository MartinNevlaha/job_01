const addCatButton = document.getElementById("backdropOpen");
const backdrop = document.querySelector(".backdrop");
const closeBacdrop = document.getElementById("closeBackdrop");

addCatButton.addEventListener("click", () => {
  backdrop.classList.add("open");
});

closeBacdrop.addEventListener("click", () => {
  backdrop.classList.remove("open");
});
