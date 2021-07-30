# LTI Next Demo

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