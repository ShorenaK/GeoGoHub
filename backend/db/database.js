/*
  db/database.js

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

import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

// connect envrimont
dotenv.config();

// Read MongoDB configuration from the .env file.
const mongoUri = process.env.MONGODB_URI;
const databaseName = process.env.DB_NAME;

// For debugging 
if (!mongoUri) {
  throw new Error('MONGODB_URI is missing from backend/.env');
}

if (!databaseName) {
  throw new Error('DB_NAME is missing from backend/.env');
}

// Create a MongoDB client instance.
const client = new MongoClient(mongoUri);

// Store the database connection once it has been established.
let database;

/**
 * Connects to MongoDB and returns the database instance.
 * If a connection already exists, the existing connection is reused.
 */
export async function connectDatabase() {
  if (database) {
    return database;
  }

  await client.connect();

  console.log('Connected to MongoDB');

  database = client.db(databaseName);

  return database;
}

/**
 * Returns the active database instance.
 * Throws an error if the application has not connected yet.
 */
export function getDatabase() {
  if (!database) {
    throw new Error('Database connection has not been established.');
  }

  return database;
}