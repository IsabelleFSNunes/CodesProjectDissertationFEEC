# Django API

**This document is a guide for interacting with the application's backend API.**

-----

### **Table of Contents**

- [Structure](#url-structure)
    - [API Endpoints](#api-endpoints)
    - [Front-end Views](#front-end-views)
    - [Admin Route](#admin-route)
- [Request Example (with curl)](#request-example-with-curl)
- [Requirements](https://www.google.com/search?q=%23requirements)
- [Execution](https://www.google.com/search?q=%23execution)

-----

## URL Structure

The application's URLs are defined in the `urls.py` file and are divided into routes for administration, front-end views, and API endpoints.

### API Endpoints

These are the main endpoints that your application, such as the front-end, will consume.

  * `/diffuse/`: Returns a list of diffuse data.
  * `/ghi_sedes_munic/`: Returns Global Horizontal Irradiance (GHI) data for municipal headquarters.
  * `/nearby_cities/`: Returns data for the nearest cities based on a geographic coordinate.
  * `/extracting_data/`: Endpoint for extracting data from nearby cities.
  * `/abacuses/`: Provides data related to the application's abacuses.
  * `/initializing/`: Used for initializing application data.

-----

### Front-end Views

These routes are designed to render HTML pages and are not meant to be consumed directly by other APIs.

  * `/index/`: Main route for the application's home page.
  * `/home/`: Route for the application's "home" page.
  * `/phase1/`: Route for the application's "phase 1."

-----

### Admin Route

  * `/admin/`: Provides access to the standard Django administration panel. This is where you can manage database models, users, and other site configurations.

-----

## Request Example (with `curl`)

To interact with an endpoint that expects data in JSON format, such as `nearby_cities/`, you can use a `curl` command in your terminal. This is useful for testing and debugging.

```bash
curl -X POST \
  http://localhost:8000/api/nearby_cities/ \
  -H 'Content-Type: application/json' \
  -d '{
    "POI_coordinate": {
        "lat": -23.5505,
        "lon": -46.6333
    },
    "Number_of_nearest_cities": 5
}'
```