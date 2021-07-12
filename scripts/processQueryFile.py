import urllib.request
import json

url = "http://www.cim.mcgill.ca/~dudek/206/Logs/AOL-user-ct-collection/user-ct-test-collection-01.txt"

with urllib.request.urlopen(url) as response:
  rawData = response.read().decode("utf-8")

queryData = {}
for line in rawData.splitlines()[1:-1]:
  queryText = line.split("\t")[1]
  if queryText not in queryData:
    queryData[queryText] = 1
  else:
    queryData[queryText] += 1

queryData = dict(sorted(queryData.items(), key=lambda item: item[1], reverse=True))

with open("../api/queryData.json", "w") as file:
  file.write(json.dumps(queryData, indent=2))

  