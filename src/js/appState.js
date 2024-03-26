

export class AppState {

    constructor (schedule) {
        this.schedule = schedule
        this.isPossibleClick = true
        this.pointer = 5
        this.currentEvent = this.schedule[5]
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