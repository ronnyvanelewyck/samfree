#!/bin/sh

echo "Waiting for MongoDB to start..."
./wait-for db:27017 

echo "Populate the databse..."
npm run db:up 

echo "Starting the server..."
node app.js

