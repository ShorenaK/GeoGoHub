/*
  seed/seedRsvps.js

  This file seeds the rsvps collection.

  Collection:
  - rsvps

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import rsvps from '../data/rsvps.json' with { type: 'json' };

const RSVPS_COLLECTION = 'rsvps';

// Inserts mock RSVPs into MongoDB.
export async function seedRsvps(db) {
  await db.collection(RSVPS_COLLECTION).deleteMany({});
  const result = await db.collection(RSVPS_COLLECTION).insertMany(rsvps);

  console.log(`Seeded ${result.insertedCount} RSVPs.`);
}