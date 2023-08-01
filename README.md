# Google Analytics Data Export Server

This repository contains a simple Node.js server that uses the Google Analytics
Reporting API to export data about pageviews (impressions) and unique users.

## Overview

The server provides two endpoints:

- `/impressions`: Exports the total number of pageviews for the past 30 days.
- `/uniqueUsers`: Exports the total number of unique users for the past 30 days.

The exported data is saved as a JSON file in the server's directory.

## Prerequisites

To run the server, you will need:

- Node.js and npm installed on your machine.
- A Google Analytics account with access to the data you want to export.
- A Google Cloud project with the Google Analytics Reporting API enabled.
- OAuth 2.0 credentials (client ID and client secret) for your Google Cloud
  project.

## Setup

1. Clone this repository to your local machine:

     git clone https://github.com/yourusername/yourrepository.git
     cd yourrepository

2. Install the dependencies

     npm install

3. Replace 'YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET', and 'YOUR_VIEW_ID' in
server.js with your actual client ID, client secret, and Google Analytics
view ID.

4. Start the server

    node server.js

The server will start on port 3000. You can access the endpoints at
http://localhost:3000/impressions and http://localhost:3000/uniqueUsers.

## Docker
A Dockerfile is also included if you prefer to run the server in a Docker
container. To build the Docker image and run the container, use the following
commands:

    docker build -t my-nodejs-app .
    docker run -p 3000:3000 -d my-nodejs-app

This will start the server in a Docker container and map port 3000 from the
container to port 3000 on your host machine.

## Note

This is a basic example and doesn't include any error handling or data
validation, which you would want to add in a production application. Also,
obtaining the OAuth2 token is a separate process that involves redirecting the
user to a Google sign-in page. You can find more information on how to do this
in the [Google APIs Node.js Client's OAuth2 guide]
(https://github.com/googleapis/google-api-nodejs-client#oauth2-client).
