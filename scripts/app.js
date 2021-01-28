const addCatButton = document.getElementById("backdropOpen");
const backdrop = document.querySelector(".backdrop");

addCatButton.addEventListener("click", () => {
    backdrop.classList.add("open");
});

backdrop.addEventListener("click", () => {
    backdrop.classList.remove("open");
})
