# Insurance_clients_api
1. serve two api's one for posting reports which has the body:

{
  "client_id": "2",
  "incident_desc": "control records for the average summer weather",
  "city": "London",
  "country": "UK"
}
# Enpoints
post: URL/incidents

# Response
{
  message: "Incident added successfully."
}


2. A get endpoint which list all incidents.
# Endpoint
get: URL/incidents


# Sample response:
{
        "client_id": 3,
        "incident_desc": "results from analysis indications",
        "city": "Miami",
        "country": "US",
        "weather_report": {
            "dt": 1642721328,
            "id": 4164138,
            "cod": 200,
            "sys": {
                "id": 2009435,
                "type": 2,
                "sunset": 1642719296,
                "country": "US",
                "sunrise": 1642680499
            },
            "base": "stations",
            "main": {
                "temp": 296.19,
                "humidity": 89,
                "pressure": 1017,
                "temp_max": 297.59,
                "temp_min": 294.26,
                "feels_like": 296.87
            },
            "name": "Miami",
            "wind": {
                "deg": 130,
                "gust": 4.47,
                "speed": 1.34
            },
            "coord": {
                "lat": 25.7743,
                "lon": -80.1937
            },
            "clouds": {
                "all": 75
            },
            "weather": [
                {
                    "id": 701,
                    "icon": "50n",
                    "main": "Mist",
                    "description": "mist"
                }
            ],
            "timezone": -18000,
            "visibility": 10000
        }
    }
