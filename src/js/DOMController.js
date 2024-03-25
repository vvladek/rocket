

export class DOMController {
    #secondStage = document.querySelector(".second__stage")
    #firstStageLeft = document.querySelector(".first__stage__left")
    #firstStageRight = document.querySelector(".first__stage__right")
    #thirdStage = document.querySelector(".third__stage")
    #head = document.querySelector(".head")
    #emergencyStage = document.querySelector(".emergency__stage")
    #startCountdown = document.querySelector(".start__countdown")

    prepareStageForLaunch (stage) {
        stage.style.transform = "none"
    }

    showStartCountDownButton () {
        this.#startCountdown.classList.add("show__start__countdown")
    }

    go () {
        this.#secondStage.classList.add("flame")
        this.#firstStageLeft.classList.add("flame")
        this.#firstStageRight.classList.add("flame")
    }
}