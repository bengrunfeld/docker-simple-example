# Docker Simple Example

This is a simple example of an app that uses Docker.

## Usage

There are two ways you can use this app:

### 1. Run all the commands yourself

    docker build -t my-image .
    docker run -p 4000:4000 --name my-app -d my-image
    docker ps

### 2. Just use docker-compose

    docker-compose up -d
