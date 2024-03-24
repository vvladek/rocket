let isPossibleClick = true

document.querySelector(".rocket").addEventListener("click", (event) => {
    if (isPossibleClick) {
        isPossibleClick = false
        event.target.style.transform = "none";
        setTimeout(() => {
            isPossibleClick = true
        }, 1000)
    }
})

document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".second__stage").classList.toggle("flame")
    document.querySelector(".first__stage__left").classList.toggle("flame")
    document.querySelector(".first__stage__right").classList.toggle("flame")
})