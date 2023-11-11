#!/bin/sh

echo "Waiting for MongoDB to start..."
./wait-for mongo:27017 

echo "Populate the MongoDB database..."
npm run db:up 

echo "uninstall and install the current bcrypt modules because differences between Mac and Linux"
npm uninstall bcrypt
npm install bcrypt

echo "Starting the server..."
npm start

