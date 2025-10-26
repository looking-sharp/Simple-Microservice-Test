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

Each of the services 1 and 2 look basically the same:
```python
from flask import Flask, jsonify, redirect, url_for     #type: ignore
from flask_cors import CORS                             #type: ignore

app = Flask(__name__)
CORS(app, origins=["http://127.0.0.1:5000"])            # Allow cross referencing from port 5000 (main)

@app.route("/")
def connect():
    return jsonify({"message": "Service X is connected"}), 200

@app.route('/ping')
def ping():
    return jsonify({"message": "Hello from Service X!"})
```
The important part here is the CORS part. If you don't use that set that up it won't allow for cross referencing meaning you'll be unable to make a request to that service.

The other two parts that are important for this project are the Dockerfile and the requirements.txt file.

The Dockerfile tells the docker-composer how to compile the microservice, and also installs all the requirements listed in requirements.txt onto the image. Each microservice including the main program (in this case /server) needs to have both of these files, with the Dockerfile's WORKDIR set to the directory name.

```bash
WORKDIR /my-microservice-directory
```

Finally the docker-compose.yml file allows Docker to build and run all the microservices at the same time using only one command. Each of the services is listed out with imortant information like where to find the Dockerfile, the image name, the ports, and the flask enviorement settings. 

## How do I ping the microservices?

There are many ways to go about actually using your microservices. In this example since it was a web based application, I just used the fetch command in javascript.

```javascript 
ping1.addEventListener('click', () => {
    fetch("http://127.0.0.1:5001/ping")
        .then(response => response.json())
        .then(data => {
            ping1Message.textContent = data.message;
        })
        .catch(response => {
            ping1Message.textContent = "FAILED";
        });
});
```

But there are may ways to do this, including using python requests to get the responses. 