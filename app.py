from flask import Flask, render_template, request
from pymongo import MongoClient
import json

app = Flask(__name__)

mongo = MongoClient("localhost")["db-name"]

def load_data():
   print(request.data)
   request_data = json.loads(str(request.data, encoding='utf-8'))
   # request_data = request.get_json()
   return request_data

@app.route('/')
def home():
   return render_template('try.html')

@app.route('/map')
def map():
    return render_template("my_map.html")

@app.route('/table')
def table():
   return render_template('table.html')

@app.route('/search_keyword', methods=["POST"])
def search_keyword():
   data = load_data()
   print("data", data)

   keywords = data["keyword"]

   # result = [r for r in mongo.collection_name.find({"keyword": keyword})]

   result = {"response": "Hellooooooo"}
   return json.dumps(result)
   

if __name__ == '__main__':
   app.run()