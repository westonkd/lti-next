function authResponse(msg, socket) {
  console.log('auth response', msg)

  // TODO validate id token + state (see notes in Canvas about state in this weird flow)
  if (true) {
    socket.emit('org.imsglobal.Lti.updateUI', {
      html: `
        <h1>WS LTI Tool</h1>
        <button data-lti-click="buttonClick">
          test
        </button>
      ` // Button click actions are handled in uiEvent.js!
    })
  }
}

module.exports = authResponse;
