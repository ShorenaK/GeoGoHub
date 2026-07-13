/*
  seed/seedEvents.js

  This file seeds the events collection.

  Collection:
  - events

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

import events from '../data/events.json' with { type: 'json' };

const EVENTS_COLLECTION = 'events';

// Inserts mock events into MongoDB.
export async function seedEvents(db) {
  await db.collection(EVENTS_COLLECTION).deleteMany({});
  const result = await db.collection(EVENTS_COLLECTION).insertMany(events);

  console.log(`Seeded ${result.insertedCount} events.`);
}
