from flask import Flask, request, redirect
from pytrends.request import TrendReq
app = Flask(__name__)


# test method
@app.route("/", methods=['GET', 'POST'])
def hello():
   print("Hello")


# Flask stoff
if __name__ == "__main__":
    app.debug = True
    app.run()
