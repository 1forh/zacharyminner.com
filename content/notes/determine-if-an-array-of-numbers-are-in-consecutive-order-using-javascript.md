---
date: 2020-12-19
title: How do I check whether or not an array of numbers are in consecutive order using JavaScript?
summary: Quick explaination of how to determine if an array of numbers are in consecutive order
tags:
  - JavaScript
---

```
const inOrder = [3, 4, 5, 6, 7, 8];
const outOfOrder = [14, 34, 2, 3, 10, 18];

function checkIfInOrder(numbers) {
  return !!numbers.reduce((accumulator, currentValue) => (accumulator ? (accumulator + 1 === currentValue ? currentValue : false) : false));
}

console.log(checkIfInOrder(inOrder)); // true
console.log(checkIfInOrder(outOfOrder)); // false
```

### Helpful Links

[MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
