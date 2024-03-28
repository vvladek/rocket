

export class DOMController {

    #rocket = document.querySelector(".rocket")
    #emergencyStage = document.querySelector(".s4")
    #head = document.querySelector(".head")
    #thirdStage = document.querySelector(".s3")
    #secondStage = document.querySelector(".s2")
    #firstStageLeft = document.querySelector(".s1-l")
    #firstStageRight = document.querySelector(".s1-r")
    #launcher = document.querySelector(".launcher")
    #scene = document.querySelector(".scene")

    constructor () {
        this.scenePosition = { x: 0, y: 0 }
    }


    handleClickOnRocket (elem) {
        if (!elem.classList.contains("prepared")) {
            elem.classList.add("prepared")
            if (elem.classList.contains("s4")) {
                this.#launcher.classList.add("visible-launcher")
            }
        } else {

        }
    }

    launchRocket () {
        const title = this.#launcher.children[1]
        this.#launcher.children[0].classList.add("hidden-button")
        const timer = setInterval(() => {
            title.textContent = Number(title.textContent) - 1
            if (title.textContent < 0) {
                title.textContent = "LIFTOFF"
                setTimeout(() => {
                    this.#secondStage.classList.add("flame")
                    this.#firstStageLeft.classList.add("flame")
                    this.#firstStageRight.classList.add("flame")
                    this.#launcher.style.scale = "0"
                    this.#flyUp()
                }, 100)
                clearInterval(timer)
                return
            }
        }, 100)
    }

    #flyUp () {
        this.scenePosition.y += 100
        this.#scene.style.translate = `0 ${this.scenePosition.y}vh`
    }
}