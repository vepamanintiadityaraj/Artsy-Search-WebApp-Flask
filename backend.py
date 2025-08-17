from flask import Flask, jsonify, send_from_directory
import requests
import json

app = Flask(__name__)

def get_token():
    url = "https://api.artsy.net/api/tokens/xapp_token"
    with open("credentials.json","r") as file:
        creds =json.load(file)
    response = requests.post(url, params = creds)
    print(response.json().get("token"))
    return response.json().get("token")
    

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/search/<string:aname>', methods=['GET'])
def search(aname):
    url="https://api.artsy.net/api/search"
    headers = {
        "X-XAPP-Token": get_token()
    }
    parameters={
        "q": aname,
        "type": "artist",
        "size" :"10"
    }
    print(parameters)
    try: 
        response = requests.get(url, headers=headers, params=parameters)
        return response.json()
    except Exception:
         print("Unable to Get the Artist List, Generate a new Token")
         return "Error",500
         

@app.route('/end/<string:id>', methods=['GET'])
def artist_details(id):
    url="https://api.artsy.net/api/artists/"+id
    headers = {
        "X-XAPP-Token": get_token()
    }
    try:
        response = requests.get(url, headers=headers)
        return response.json()
    except Exception:
         print("Unable to Get the Artist Details, Generate a new Token")
         return "Error",500


if __name__ == '__main__':
    app.run()
