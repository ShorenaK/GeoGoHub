/*
  models/userModel.js

  This file handles MongoDB operations for GeoGoHub users.

  Responsibilities:
  - Create new users.
  - Read users.
  - Update users.
  - Delete users.

  Collection:
  - users

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import { ObjectId } from 'mongodb';
import { getDatabase } from '../db/database.js';

const USERS_COLLECTION = 'users';

// Creates a new user in MongoDB.
export async function createUser(userData) {
  const db = getDatabase();

}

// Retrieves all users from MongoDB.
export async function getAllUsers() {

}

// Retrieves one user by MongoDB _id.
export async function getUserById(userId) {

}

// Updates an existing user.
export async function updateUser(userId, updatedData) {
 
}

// Deletes a user by MongoDB _id.
export async function deleteUser(userId) {

}