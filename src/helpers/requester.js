const Requester = function() {

}

Requester.prototype.get = function(url, callback) {
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.addEventListener('load', function(){
    if(this.status !== 200) {
      console.log(`Get request failed to: ${url}`);
      return
    }

    const jsonString = this.responseText
    const result = JSON.parse(jsonString)
    callback(result)
  })
  request.send()
}

module.exports = new Requester();
