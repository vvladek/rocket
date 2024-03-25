

export class AppState {

    constructor (schedule) {
        this.schedule = schedule
        this.isPossibleClick = true
        this.pointer = 0
        this.currentEvent = this.schedule[0]
    }

    finishEvent () {
        this.isPossibleClick = false
        setTimeout(() => {
            this.pointer += 1
            this.currentEvent = this.schedule[this.pointer]
            this.isPossibleClick = true
        }, this.currentEvent.timeout)
    }
}