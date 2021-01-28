const addCatButton = document.getElementById("backdropOpen");
const backdrop = document.querySelector(".backdrop");
const closeBacdrop = document.getElementById("closeBackdrop");
const items = document.querySelectorAll(".gallery_content_item");

addCatButton.addEventListener("click", () => {
  backdrop.classList.add("open");
});

closeBacdrop.addEventListener("click", () => {
  backdrop.classList.remove("open");
});

items.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("hovered");
    })
    item.addEventListener("mouseout", () => {
        item.classList.remove("hovered");
    })
})
