function main() {
        const toggle = document.querySelector(".toggle");
        toggle.addEventListener("click", () => {
                const body = document.querySelector("body");
                const icon = toggle.querySelector("i.bx");

                if (icon.className == "bx bxs-sun") {
                        icon.classList.remove("bxs-sun");
                        icon.classList.add("bxs-moon");
                        body.classList.add("dark");
                } else {
                        icon.classList.remove("bxs-moon");
                        icon.classList.add("bxs-sun");
                        body.classList.remove("dark");
                }
        });
}

document.addEventListener("DOMContentLoaded", main());
