---
date: 2020-12-18
title: How to query a Firestore collection for documents added today
summary: Get all documents added today from a Firestore collection
tags:
  - Firebase
  - Firestore
---

First we get today's date using `new Date()` and then we set it to the very beginning of the day.

```jsx
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);
```

Once you have `startOfToday`, you can run a Firestore query and ask for all documents that have a Timestamp greater than the beginning of today. This will return only the documents that have a timestamp from today. Woot! 🎊

```jsx

const snapshot = await admin.firestore().collection('notes').where('date', '>', startOfDay).get();
const notes = snapshot.docs.map((doc) => doc.data());
```

This assume that your `date` field is of type `Timestamp`. Check out the full snippet below:

```jsx
const startOfDay = new Date();
startOfDay.setHours(0, 0, 0, 0);

const snapshot = await admin.firestore().collection('notes').where('date', '>', startOfDay).get();
const notes = snapshot.docs.map((doc) => doc.data());
```
