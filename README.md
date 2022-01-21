# Insurance_clients_api
serves two api's.


## POST Enpoint
For posting reports.

`post: URL/incidents`



body:
```javascript
{
      "client_id": "2",
      "incident_desc": "control records for the average summer weather",
      "city": "London",
      "country": "UK"
 }
```
### Response
```json
{
  message: "Incident added successfully."
}
```
[https://insurance-appi.herokuapp.com/incidents](https://insurance-appi.herokuapp.com/incidents)




## GET Endpoint
A get endpoint which list all incidents.

`get: URL/incidents
`


### Sample response:
```javascript
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
```
[https://insurance-appi.herokuapp.com/incidents](https://insurance-appi.herokuapp.com/incidents)
