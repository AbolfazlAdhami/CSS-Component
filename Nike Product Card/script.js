const Container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

color2.addEventListener("click", () => {
        Container.classList.add("change");
});
color1.addEventListener("click", () => {
        Container.classList.remove("change");
});
