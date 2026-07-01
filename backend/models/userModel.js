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

  const newUser = {
    ...userData,
    role: userData.role || 'member',
    membershipStatus: userData.membershipStatus || 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await db.collection(USERS_COLLECTION).insertOne(newUser);

  return {
    _id: result.insertedId,
    ...newUser,
  };
}

// Retrieves all users from MongoDB.
export async function getAllUsers() {
  const db = getDatabase();

  // TODO: Replace with pagination if the users collection grows significantly.
  const users = await db.collection(USERS_COLLECTION).find().toArray();

  return users;
}

// Retrieves one user by MongoDB _id.
export async function getUserById(userId) {
  const db = getDatabase();

  const objectId = new ObjectId(userId);

  const user = await db.collection(USERS_COLLECTION).findOne({
    _id: objectId,
  });

  return user;
}

// Updates an existing user.
export async function updateUser(userId, updatedData) {
  const db = getDatabase();

  const objectId = new ObjectId(userId);

  updatedData.updatedAt = new Date();

  const result = await db.collection(USERS_COLLECTION).updateOne(
    { _id: objectId },
    {
      $set: updatedData,
    },
  );

  return result;
}

// Deletes a user by MongoDB _id.
export async function deleteUser(userId) {
  const db = getDatabase();

  const objectId = new ObjectId(userId);

  const result = await db.collection(USERS_COLLECTION).deleteOne({
    _id: objectId,
  });

  return result;
}