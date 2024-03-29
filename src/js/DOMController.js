

export class DOMController {

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
            elem.style.transitionDuration = "10s"
            elem.style.transform = this.#getRandomSeparateTransform()
            elem.classList.remove("flame")
            if (elem.classList.contains("s1-l")) {
                this.#firstStageRight.style.transitionDuration = "10s"
                this.#firstStageRight.classList.remove("flame")
                this.#firstStageRight.style.transform = this.#getRandomSeparateTransform()
                this.#flyUp()
                return
            }
            if (elem.classList.contains("s2")) {
                this.#thirdStage.classList.add("flame")
            }
            if (elem.classList.contains("s3")) {
                this.#head.classList.add("horizontal-head", "flame")
            }
            this.#flyUp()
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
                    setTimeout(() => {
                        this.#flyUp()
                    }, 200)
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

    #flyToRight () {
        this.scenePosition.x += 100
        this.#scene.style.translate = `${this.scenePosition.x}vw 0`
    }

    #getRandomSeparateTransform () {
        const x = Math.floor(Math.random() * (25 - (-25) + 1)) + (-25)
        const y = Math.floor(Math.random() * (200 - 100 + 1)) + 100
        const rotate = Math.floor(Math.random() * (90 - (-90) + 1)) + (-90)
        return `translate(${x}vw, ${y}vh) rotate(${rotate}deg)`
    }
}