#!/bin/sh

echo "Waiting for MongoDB to start..."
./wait-for db:27017 

echo "Populate the MongoDB database..."
npm run db:up 

echo "Starting the server..."
npm start

