from flask import Flask, render_template
from config import owmkey # i made this config file myself, it just has my api keys

app = Flask(__name__)
    
@app.route("/")
def index():
    return render_template("index.html", owmkey=owmkey)
    print(owmkey)

if __name__ == "__main__":
    app.run(debug=True)