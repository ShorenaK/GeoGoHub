/*
  seed/seedDatabase.js

  This file runs all GeoGoHub seed scripts.

  Responsibilities:
  - Connect to MongoDB.
  - Seed users, applications, events, and RSVPs.
  - Close the process after seeding.

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import dotenv from 'dotenv';

import { connectDatabase } from '../db/database.js';
import { seedApplications } from './seedApplications.js';
import { seedEvents } from './seedEvents.js';
import { seedRsvps } from './seedRsvps.js';
import { seedUsers } from './seedUsers.js';

dotenv.config();

// Runs all seed files in order.
async function seedDatabase() {
  try {
    const db = await connectDatabase();

    await seedUsers(db);
    await seedApplications(db);
    await seedEvents(db);
    await seedRsvps(db);

    console.log('Database seeding completed.');
    process.exit(0);
  } catch (error) {
    console.error('Database seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();