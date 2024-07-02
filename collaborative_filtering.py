import sys
import json

def collaborative_recommendation(user_id, data):
    
    recommendations = data[:5]  
    return recommendations

if __name__ == "__main__":
    user_id = sys.argv[1]
    data = json.loads(sys.argv[2])
    recommendations = collaborative_recommendation(user_id, data)
    print(json.dumps(recommendations))
