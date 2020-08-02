# Docker Simple Example

This is a simple example of an app that uses Docker.

## Usage

There are two ways you can use this app:

### 1. Run all the commands yourself

    docker build -t my-image .
    docker run -p 4000:4000 --name my-app -d my-image

### 2. Just use docker-compose

    docker-compose up -d

### Check that everything is up and working

First, make sure that the process is running properly:

    docker ps

You should see it there.

Then navigate to `localhost:4000` in your browser and you should see the expected output.
