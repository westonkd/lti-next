const actions = {
  buttonClick: (event) => `
    <h1>WS LTI Tool</h1>
    <button data-lti-click="some_action">test</button>
    <div>You clicked a button! Good job.</div>
  `
}

function uiEvent(msg, socket) {
  console.log('UI Event', msg)

  // If this was a real application, we could update server-side state, etc.
  // Instead of using html strings like this, we could use an HTML template
  // engine.

  // Update the UI based on the event sent from the platform
  socket.emit('org.imsglobal.Lti.updateUI', {
    html: actions[msg.action](msg.event)
  })
}

module.exports = uiEvent;
