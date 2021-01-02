from flask import Flask, jsonify, request, render_template
from config import owmkey # i made this config file myself, it just has my api keys
import datetime


app = Flask(__name__)
    
@app.route("/")
def index():
    return render_template("index.html", owmkey=owmkey)
@app.route('/test')
def test():
    today = datetime.date.today()
    future = datetime.date(2021,2,1)
    diff = future - today
    return jsonify(result=diff.days)

if __name__ == "__main__":
    app.run(debug=True)