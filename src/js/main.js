import { DOMController } from "./DOMController"


let pointer = 0, isPossibleClick = true
const clickOrder = [ "s2", "s1-l", "s1-r", "s3", "head", "s4", "start", "s4", "s1-l", "s2", "s3" ]
const DOM = new DOMController()


window.addEventListener("click", (event) => {
    if (!isPossibleClick || !event.target.classList.contains(clickOrder[pointer])) {
        return
    }
    else if (event.target.parentNode.classList.contains("rocket")) {
        DOM.handleClickOnRocket(event.target)
        const isRocketLaunched = pointer > 5
        const timeFactor = isRocketLaunched ? 10 : 1
        setClickBlocking(100 * timeFactor)
    }
    else if (event.target.classList.contains("start")) {
        DOM.launchRocket()
        setClickBlocking(250)
    }
    pointer += 1
})


function setClickBlocking (time) {
    isPossibleClick = false
    setTimeout(() => {
        isPossibleClick = true
    }, time)
}