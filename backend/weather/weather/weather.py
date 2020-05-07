from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route("/weather", methods=['POST'])
def weather():
    val = request.get_json()['zipcode']
    response = requests.get(
      url="http://api.openweathermap.org/data/2.5/weather?appid=f2de1bd8049702e88264b0a4d0cb0f97&units=Imperial&zip="+val+""
    )
    return jsonify({ "response" : response.json()})
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8082)




