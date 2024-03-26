

export class DOMController {
    #secondStage = document.querySelector(".second__stage")
    #firstStageLeft = document.querySelector(".first__stage__left")
    #firstStageRight = document.querySelector(".first__stage__right")
    #thirdStage = document.querySelector(".third__stage")
    #head = document.querySelector(".head")
    #emergencyStage = document.querySelector(".emergency__stage")
    #launcher = document.querySelector(".launcher")
    #launcherButton = document.querySelector(".launcher button")
    #countdown = document.querySelector(".launcher h1")

    prepareStageForLaunch (stage) {
        stage.style.transform = "none"
    }

    showLauncher () {
        this.#launcher.classList.add("show")
    }

    startCountdown () {
        let counter = 10
        setTimeout(() => {
            let timer = setInterval(() => {
                counter -= 1
                this.#countdown.textContent = counter
            if (counter < 1) clearInterval(timer)
            }, 300)
        }, 1000)
    }

    go () {
        this.#secondStage.classList.add("flame")
        this.#firstStageLeft.classList.add("flame")
        this.#firstStageRight.classList.add("flame")
    }
}