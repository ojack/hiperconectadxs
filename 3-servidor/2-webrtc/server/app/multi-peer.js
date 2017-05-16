var io = require('socket.io-client'),
    SimplePeer = require('simple-peer'),
    extend = require('extend')

var events = require('events').EventEmitter;
var inherits = require('inherits')



var MultiPeer = function(options){
  this.signaller = io(options.server)
 // this.stream = options.stream || null
  this._peerOptions = options.peerOptions || {}
  this._room = options.room
  this.peers = {}

  this.signaller.on('peers', this._connectToPeers.bind(this))
  this.signaller.on('signal', this._handleSignal.bind(this))

  this.signaller.emit('join', this._room)


}

inherits(MultiPeer, events)

MultiPeer.prototype.send = function(data){
  Object.keys(this.peers).forEach(function(id) {
    this.peers[id].send(data)
  }, this)
}

MultiPeer.prototype._connectToPeers = function(peers){
  peers.forEach(function(id){
    var options = extend({initiator: true}, this._peerOptions)
    this.peers[id] = new SimplePeer(options)
    this._attachPeerEvents(this.peers[id], id)
  }.bind(this))
}

MultiPeer.prototype._handleSignal = function(data){
  //if there is currently no peer object for a peer id, that peer is initiating a new connection.
  if (!this.peers[data.id]) {
    var options = extend({}, this._peerOptions)
    this.peers[data.id] = new SimplePeer(options)
    this._attachPeerEvents(this.peers[data.id], data.id)
  }
  this.peers[data.id].signal(data.signal)
}

MultiPeer.prototype._attachPeerEvents = function(p, _id){
  p.on('signal', function (id, signal) {
      console.log("peer signal sending over sockets", id, signal)
      //console.log('SIGNAL', JSON.stringify(data))
     // hub.broadcast('hiper', data)
      this.signaller.emit('signal', {id: id, signal: signal})
       //document.querySelector('#outgoing').textContent = JSON.stringify(data)
    }.bind(this, _id))

    p.on('stream', function (id, stream) {
      console.log("received a stream", stream)
      this.emit('new stream', id, stream)
    }.bind(this, _id))

    p.on('connect', function () {
      console.log('CONNECT')
      p.send('whatever' + Math.random())
    })

     p.on('close', function(id){
        console.log("CLOSED")
        delete(this.peers[id])
        this.emit('close', id)
      }.bind(this, _id))
}

module.exports = MultiPeer


