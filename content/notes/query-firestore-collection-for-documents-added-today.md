---
date: 2020-12-18
title: How to query a Firestore collection for documents added today
summary: Get all documents added today from a Firestore collection
tags:
  - Firebase
  - Firestore
---

First we get today's date using `new Date()`. Then we set it to midnight of today and convert it to a timestamp.

**Note:** I had to add `+5` hours to get midnight in Eastern Time.

```jsx
function getStartOfToday() {
  const now = new Date();
  now.setHours(5, 0, 0, 0); // +5 hours for Eastern Time
  const timestamp = admin.firestore.Timestamp.fromDate(now);
  return timestamp;
}
```

As you can see below, with the `getStartOfToday` function we can run a Firestore query and ask for all documents that have a Timestamp greater than the beginning of today. This will return only the documents that have a timestamp from today. Woot! 🎊

```jsx

const snapshot = await admin.firestore().collection('notes').where('date', '>', getStartOfToday()).get();
const notes = snapshot.docs.map((doc) => doc.data());
```

This assumes that your `date` field is of type `Timestamp`. Check out the full snippet below:

```jsx
function getStartOfToday() {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // +5 hours for Eastern Time
  const timestamp = admin.firestore.Timestamp.fromDate(now);
  return timestamp;
}

const snapshot = await admin.firestore().collection('notes').where('date', '>', getStartOfToday()).get();
const notes = snapshot.docs.map((doc) => doc.data());
```
