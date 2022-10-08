

const btnDarkMode = document.querySelector("#moon")
const body = document.querySelector("#body")

btnDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark")
})

