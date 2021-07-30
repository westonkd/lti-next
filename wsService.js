var loginRequest = require('./ws/loginRequest');
var authResponse = require('./ws/authResponse');
var uiEvent = require('./ws/uiEvent');

function wsService(io) {
  // WS
  io.on('connection', (socket) => {
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('org.imsglobal.Lti.loginRequest', (msg) => {loginRequest(msg, socket)});
    socket.on('org.imsglobal.Lti.authResponse', (msg) => {authResponse(msg, socket)});
    socket.on('org.imsglobal.Lti.uiEvent', (msg) => {uiEvent(msg, socket)})
  });
}

module.exports = wsService