import { AppState } from "./AppState"
import { DOMController } from "./DOMController"


const audio = document.querySelector(".sw")
audio.volume = 0.5


const state = new AppState()
const DOM = new DOMController()


window.addEventListener("click", e => {
    if (!state.isPossibleClick || !e.target.classList.contains(state.curr)) {
        return
    }
    else if (e.target.parentNode.classList.contains("rocket")) {
        DOM.handleClickOnRocket(e.target)
    }
    else if (e.target.classList.contains("start")) {
        DOM.launchRocket()
    }
    else if (e.target.parentNode.classList.contains("horizontal")) {
        DOM.handleClickOnSpace()
    }
    state.finishEvent()
})