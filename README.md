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
  client_id	2
incident_desc	"a hot weather experienced 65%"
city	"London"
country	"UK"
weather_report	
dt	1642664705
id	2643743
cod	200
sys	
id	2019646
type	2
sunset	1642696071
country	"GB"
sunrise	1642665284
base	"stations"
main	
temp	274.27
humidity	87
pressure	1034
temp_max	276.01
temp_min	271.07
feels_like	270.92
name	"London"
wind	
deg	290
speed	3.09
coord	
lat	51.5085
lon	-0.1257
clouds	
all	6
weather	
0	
id	800
icon	"01n"
main	"Clear"
description	"clear sky"
timezone	0
visibility	10000
}
