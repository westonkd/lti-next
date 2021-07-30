function loginRequest(msg, socket) {
  console.log('login request', msg)

  socket.emit('org.imsglobal.Lti.authRequest', {
    scope: 'openid',
    response_type: 'id_token',
    client_id: '1000000000001',
    redirect_uri: 'https://foo.bar', // Not really needed? the response just comes through the socket
    state: 'some-state',
    response_mode: 'uhm...socket?',
    nonce: 'some-uuid',
    prompt: 'none',
    login_hint: msg.login_hint
  })
}

module.exports = loginRequest;
