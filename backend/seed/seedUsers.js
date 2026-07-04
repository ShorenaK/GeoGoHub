/*
  seed/seedUsers.js

  This file seeds the users collection.

  Collection:
  - users

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import users from '../data/users.json' with { type: 'json' };

const USERS_COLLECTION = 'users';

// Inserts mock users into MongoDB.
export async function seedUsers(db) {
  await db.collection(USERS_COLLECTION).deleteMany({});
  const result = await db.collection(USERS_COLLECTION).insertMany(users);

  console.log(`Seeded ${result.insertedCount} users.`);
}