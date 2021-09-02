---
date: 2021-05-17
title: How to run Pub/Sub Firebase functions when using the Firebase emulators
summary: Test pub/sub functions locally with Firebase emulators and Firebase shell
tags:
  - Firebase
---

Once you have the emulators running, in a separate terminal window run this command:

```bash
firebase functions:shell
```

Then you can run any Pub/Sub (cron) function you want by typing out the function name and hitting enter.

```bash
(i) functions: Connected to running firestore emulator at localhost:8080, calls to this service will affect the emulator
firebase > myFunction()

```

[Solution source](https://firebase.google.com/docs/functions/local-shell7)
