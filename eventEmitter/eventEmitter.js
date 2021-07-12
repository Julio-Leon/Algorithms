class EventEmitter {
    constructor () {
        this.events = {}
    }
    on (eventName, callBackFn) {
        if (!this.events[eventName]) {
            this.events[eventName] = [callBackFn]
        } else {
            this.events[eventName] = [...this.events[eventName], callBackFn]
        }
    }
    emit (eventName, data) {
        if (!this.events[eventName]) return
        this.events[eventName].forEach((eventFunction) => eventFunction(data))
    }
    removeListener (eventName, callBackFn) {
        this.events[eventName] = this.events[eventName].filter(eventFunction => eventFunction !== callBackFn)
    }
}

let superbowl = new EventEmitter()
const cheer = function (eventData) {
  console.log('RAAAAAHHHH!!!! Go ' + eventData.scoringTeam)
}
const jeer = function (eventData) {
  console.log('BOOOOOO ' + eventData.scoringTeam)
}
superbowl.on('touchdown', cheer)
superbowl.on('touchdown', jeer)
superbowl.emit('touchdown', { scoringTeam: 'Patriots' })
superbowl.removeListener('touchdown', jeer)
superbowl.emit('touchdown', { scoringTeam: 'Seahawks' });
console.log(superbowl)