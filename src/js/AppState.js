

export class AppState {

    pointer = 0
    isPossibleClick = true
    clickOrder = [
        "s2","s1-l","s1-r","s3","head","s4","start","s4","s1-l","s2","s3",
        "sun","mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"
    ]
    curr = this.clickOrder[0]


    finishEvent () {
        this.isPossibleClick = false
        const time = this.curr === "start" ? 25000 : this.pointer > 5 ? 10000 : 1000
        this.pointer += 1
        this.curr = this.clickOrder[this.pointer]
        setTimeout(() => {
            this.isPossibleClick = true
        }, time)
    }
}