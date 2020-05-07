from flask import Flask, request, jsonify

app = Flask(__name__)

import requests

@app.route("/events", methods=['POST'])
def events():
    response = requests.get(
    url="https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0",
    params={
      "postalCode":  request.get_json()['zipcode'],
    }
)
    return jsonify({ "response" : response.json()})



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8083)



