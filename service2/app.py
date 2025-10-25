from flask import Flask, jsonify, redirect, url_for     #type: ignore
from flask_cors import CORS                             #type: ignore

app = Flask(__name__)
CORS(app, origins=["http://127.0.0.1:5000"])            # Allow cross referencing from port 5000 (main)

@app.route("/")
def connect():
    return jsonify({"message": "Service 2 is connected"}), 200

@app.route('/ping')
def ping():
    return jsonify({"message": "Hello from Service 2!"})