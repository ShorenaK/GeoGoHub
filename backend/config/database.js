/*
  config/database.js

  This file manages the MongoDB database connection for GeoGoHub.

  Responsibilities:
  - Load MongoDB connection settings from environment variables.
  - Connect to the MongoDB server.
  - Export the database instance.
  - Reuse a single database connection throughout the application.

  Database:
  - MongoDB (Native Node.js Driver)

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { MongoClient } from 'mongodb';