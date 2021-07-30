# LTI Next Demo

## Building
This project leverages Docker BuildKit to speed image build time.

See https://docs.docker.com/develop/develop-images/build_enhancements/

To build the application, run
```
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```