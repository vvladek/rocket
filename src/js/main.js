import { AppState } from "./appState"
import { eventSchedule } from "./eventSchedule"
import { DOMController } from "./DOMController"


const state = new AppState(eventSchedule)
const DOM = new DOMController()


window.addEventListener("click", (event) => {
    if (!state.isPossibleClick) return
    if (event.target.classList.contains("second__stage")) {
        if (state.currentEvent.name === "prepare-second-stage") {
            DOM.prepareStageForLaunch(event.target)
            state.finishEvent()
        }
    }
    else if (event.target.classList.contains("first__stage__left")) {
        if (state.currentEvent.name === "prepare-first-stage-left") {
            DOM.prepareStageForLaunch(event.target)
            state.finishEvent()
        }
    }
    else if (event.target.classList.contains("first__stage__right")) {
        if (state.currentEvent.name === "prepare-first-stage-right") {
            DOM.prepareStageForLaunch(event.target)
            state.finishEvent()
        }
    }
    else if (event.target.classList.contains("third__stage")) {
        if (state.currentEvent.name === "prepare-third-stage") {
            DOM.prepareStageForLaunch(event.target)
            state.finishEvent()
        }
    }
    else if (event.target.classList.contains("head")) {
        if (state.currentEvent.name === "prepare-head") {
            DOM.prepareStageForLaunch(event.target)
            state.finishEvent()
        }
    }
    else if (event.target.classList.contains("emergency__stage")) {
        if (state.currentEvent.name === "prepare-emergency-stage") {
            DOM.prepareStageForLaunch(event.target)
            DOM.showStartCountDownButton()
            state.finishEvent()
        }
    }
    else if (event.target.classList.contains("start__countdown")) {
        if (state.currentEvent.name === "start-countdown") {
            DOM.go()
        }
    }
})