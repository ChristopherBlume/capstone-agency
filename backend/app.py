import os
from flask import Flask, jsonify
# from models import setup_db
from flask_cors import CORS

app = Flask(__name__)
# setup_db(app)
CORS(app)

@app.route('/')
def home():
  return 'Hello'

