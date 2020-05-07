from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route("/news", methods=['POST'])
def news():
    response = requests.get(
     url="https://newsapi.org/v2/everything?qInTitle=Boston&sortBy=publishedAt&language=en&apiKey=94df834a472a4a69b74524fef5f765db"
    )
    return jsonify({ "response" : response.json()})
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081)
