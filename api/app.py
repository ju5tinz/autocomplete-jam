from flask import Flask, request
from flask_cors import CORS
from queryData import queryData

app = Flask(__name__)
CORS(app)

@app.route("/autocomplete")
def autocomplete():
  NUM_COMPLETES = 10

  queryText = request.args.get("query")

  autocompleteRes = []
  
  currCompletes = 0
  for elem in queryData.items():
    if currCompletes == NUM_COMPLETES:
      break
    if elem[0].startswith(queryText):
      autocompleteRes.append(elem[0])
      currCompletes += 1

  return {
    "data": autocompleteRes
  }