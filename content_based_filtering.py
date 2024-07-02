import sys
import json

def content_based_recommendation(title, data):
    
    recommendations = [movie for movie in data if title.lower() in movie['title'].lower()]
    return recommendations

if __name__ == "__main__":
    title = sys.argv[1]
    data = json.loads(sys.argv[2])
    recommendations = content_based_recommendation(title, data)
    print(json.dumps(recommendations))
