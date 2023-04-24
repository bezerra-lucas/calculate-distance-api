# Distance Calculator

This is a simple distance calculator that uses Bing Maps API to calculate the distance between two addresses. It is built with Node.js and Express.js.

| ***Please note that all input addresses should be formatted as following: `street, number neighborhood, city - state, zipcode`***


## Installation

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file in the root directory and add your Bing Maps API key:

```
BING_MAPS_API_KEY=<your_api_key>
```

## Usage

Start the server:

```
npm start
```

The server will be running on port 3001 or the port specified in your environment variable `PORT`.

Make a POST request to `/calculate-distance` with the following JSON body:

```json
{
  "startAddress": "<start_address>",
  "destinationAddress": "<destination_address>"
}
```

The server will respond with the calculated distance:

```json
{
  "distance": <distance_in_miles>
}
```