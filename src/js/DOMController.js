

export class DOMController {

    #head = document.querySelector(".head")
    #thirdStage = document.querySelector(".s3")
    #secondStage = document.querySelector(".s2")
    #firstStageLeft = document.querySelector(".s1-l")
    #firstStageRight = document.querySelector(".s1-r")
    #launcher = document.querySelector(".launcher")
    #scene = document.querySelector(".scene")
    #rocketEngineAudio = document.querySelector(".rocket__engine__audio")
    #countdownAudio = document.querySelector(".countdown__audio")
    #s1Audio = document.querySelector(".s1__audio")
    #s2Audio = document.querySelector(".s2__audio")
    #s3Audio = document.querySelector(".s3__audio")
    #s4Audio = document.querySelector(".s4__audio")

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
                this.#s1Audio.play()
                this.#firstStageRight.style.transitionDuration = "10s"
                this.#firstStageRight.classList.remove("flame")
                this.#firstStageRight.style.transform = this.#getRandomSeparateTransform()
                this.#flyUp()
                return
            }
            if (elem.classList.contains("s2")) {
                this.#s2Audio.play()
                this.#thirdStage.classList.add("flame")
            }
            if (elem.classList.contains("s3")) {
                this.#s3Audio.play()
                this.#head.classList.add("horizontal-head", "flame")
            }
            if (elem.classList.contains("s4")) {
                this.#s4Audio.play()
            }
            this.#flyUp()
        }
    }

    launchRocket () {
        this.#countdownAudio.play()
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
                    this.#rocketEngineAudio.play()
                    setTimeout(() => {
                        this.#flyUp()
                    }, 2000)
                }, 1000)
                clearInterval(timer)
                return
            }
        }, 1000)
    }

    handleClickOnSpace () {
        this.#flyToRight()
    }

    #flyUp () {
        this.scenePosition.y += 100
        this.#scene.style.translate = `0 ${this.scenePosition.y}vh`
    }

    #flyToRight () {
        this.scenePosition.x -= 100
        if (this.scenePosition.x <= -900) return
        this.#scene.style.translate = `${this.scenePosition.x}vw ${this.scenePosition.y}vh`
    }

    #getRandomSeparateTransform () {
        const x = Math.floor(Math.random() * (25 - (-25) + 1)) + (-25)
        const y = Math.floor(Math.random() * (200 - 100 + 1)) + 100
        const rotate = Math.floor(Math.random() * (90 - (-90) + 1)) + (-90)
        return `translate(${x}vw, ${y}vh) rotate(${rotate}deg)`
    }
}