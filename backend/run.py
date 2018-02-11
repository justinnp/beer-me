# https://beer-us.herokuapp.com/
from flask import Flask, request
import bs4 as bs
from urllib.request import Request, urlopen
app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def hello():
    return "Hello"

# test method
@app.route("/search", methods=['GET', 'POST'])
def beer_me(data):
    print(data)
    return "Hello"


# Flask stoff
if __name__ == "__main__":
    app.debug = True
    app.run()
