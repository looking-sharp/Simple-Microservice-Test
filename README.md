# Sample Microservice Program
This is a simple microservice platform used to demonstrate how you can easily create and deploy microservices using Docker and Flask (for HTTP requests)

## Installation Requirements
Make sure you have [docker desktop](https://www.docker.com/products/docker-desktop/) installed on your computer and that yu're signed in. If you try and run this without it, you'll get an error like:

```bash 
unable to get image 'simple-microservice-test-service1': error during connect: Get "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/v1.51/images/simple-microservice-test-service1/json": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified
```

You don't need pip for this project, all instilations are done during image creation.

## Usage

To use this project, simply clone it in your computer and and have it open in your terminal. From there, you just need to type:

```bash
docker-compose up --build
```

And you should see the container being built. If you enter your docker desktop, you should also see these images being created under containers as "simple-microservice-test"

From there, all you need to do is go to "http://127.0.0.1:5000/" to access the home page, where you can ping service1 and service2. 

## How it Works