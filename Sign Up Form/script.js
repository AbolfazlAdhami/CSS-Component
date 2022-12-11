const container = document.querySelector(".container");

const btn = container.querySelector(".green-bg button");

btn.addEventListener("click", () => {
        container.classList.toggle("active");
});
