/*
  seed/seedRsvps.js

  This file seeds the rsvps collection.

  Responsibilities:
  - Retrieve existing users and events.
  - Create RSVP records connected to valid users and events.
  - Insert realistic RSVP data into MongoDB.

  Collection:
  - rsvps

  Author: Shorena K. Anzhilov
  Course: CS 5610 Web Development
  Project: GeoGoHub
*/

const RSVPS_COLLECTION = 'rsvps';
const USERS_COLLECTION = 'users';
const EVENTS_COLLECTION = 'events';

const RSVP_COUNT = 250;
const RSVP_STATUSES = ['going', 'maybe', 'not going'];

// Return one random item from an array.
function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Create a random date between two dates.
function getRandomDate(startDate, endDate) {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const randomTime = startTime + Math.random() * (endTime - startTime);

  return new Date(randomTime);
}

// Insert mock RSVPs connected to real users and events.
export async function seedRsvps(db) {
  const users = await db.collection(USERS_COLLECTION).find().toArray();
  const events = await db.collection(EVENTS_COLLECTION).find().toArray();

  if (users.length === 0) {
    throw new Error('Cannot seed RSVPs because the users collection is empty.');
  }

  if (events.length === 0) {
    throw new Error('Cannot seed RSVPs because the events collection is empty.');
  }

  const rsvps = [];
  const usedUserEventPairs = new Set();

  while (rsvps.length < RSVP_COUNT && usedUserEventPairs.size < users.length * events.length) {
    const user = getRandomItem(users);
    const event = getRandomItem(events);
    const pairKey = `${user._id.toString()}-${event._id.toString()}`;

    // Prevent duplicate RSVPs for the same user and event.
    if (usedUserEventPairs.has(pairKey)) {
      continue;
    }

    usedUserEventPairs.add(pairKey);

    const createdAt = getRandomDate(new Date('2025-07-14'), new Date());

    const updatedAt = getRandomDate(createdAt, new Date());

    rsvps.push({
      userId: user._id,
      eventId: event._id,
      status: getRandomItem(RSVP_STATUSES),
      createdAt,
      updatedAt,
    });
  }

  await db.collection(RSVPS_COLLECTION).deleteMany({});

  const result = await db.collection(RSVPS_COLLECTION).insertMany(rsvps);

  console.log(`Seeded ${result.insertedCount} RSVPs.`);
}
