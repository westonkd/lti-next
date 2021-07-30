# LTI Next Demo
Do I really think this is the next LTI? Probably not, but it does get
some ideas brewing!

## Concepts
This tool illustrates the potential of using websockets with LTI flows.

It has dummy handlers to simulate the entire OIDC 3rd party initiated login
request of webooks (with some questions to research)

After the OIDC flow completes, the tool sends it's initial UI to the platform.

The platform then sends events to the tool over the open socket whenever
UI events occur. The tool listens for those events, updates state, then
sends the UI back to the platform.

Platform  <-- messages over a web socket --> Tool

This flow puts quite adds quite a bit of complexity to the tool. It may
be worth exploring having a relay in between the platform and tool that
handles some of the complexity:

Platform <-- messages over websocket --> Relay <-- messages over websocket --> Tool

## Building
First, `cp docker-compose.override.yml.example docker-compose.override.yml`

This project leverages Docker BuildKit to speed image build time.

See https://docs.docker.com/develop/develop-images/build_enhancements/

To build the application, run
```
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```

## Running
After building, run

```
docker-compose up
```

The docker-compose override is optimized for use with Linux + Traefik (sorry).
You may need to update it if you use dinghy, etc.

However you run docker containers for local dev, this app must be available
at http://lti-next.docker/ to work with the corresponding Canvas commit.
