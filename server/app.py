from flask import Flask, jsonify, redirect, url_for, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template("index.html")
