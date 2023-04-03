class Tracker {
  constructor() {
    this.url = ''
    this.xhr = new XMLHttpRequest()
  }
  send (data = {}) {
    this.xhr.open('POST', this.url, true)
    this.xhr.setRequestHeader('Content-Type', 'application/json')
    this.xhr.send(JSON.stringify(data))
  }
}

export default new Tracker()