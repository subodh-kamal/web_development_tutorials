The **`filter()`** method in JavaScript is used on **arrays** to create a new array containing only the elements that pass a certain condition (the callback function).

👉 In simple words:
It **filters out** the elements you don’t want, and keeps only those that satisfy the condition.

---

### Syntax

```js
array.filter(callback(element, index, array), thisArg);
```

* **callback** → function that runs for each element.
* **element** → current value being processed.
* **index** (optional) → position of the current element.
* **array** (optional) → the whole array `filter` was called on.
* **thisArg** (optional) → value to use as `this` inside the callback.

---

### Example 1: Filter numbers greater than 10

```js
const numbers = [5, 12, 8, 130, 44];

const result = numbers.filter(num => num > 10);

console.log(result); 
// [12, 130, 44]
```

---

### Example 2: Filter out even numbers

```js
const nums = [1, 2, 3, 4, 5, 6];

const evens = nums.filter(n => n % 2 === 0);

console.log(evens); 
// [2, 4, 6]
```

---

### Example 3: Filter objects

```js
const users = [
  { id: 1, name: "Subodh", active: true },
  { id: 2, name: "Kamal", active: false },
  { id: 3, name: "Ravi", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
// [
//   { id: 1, name: "Subodh", active: true },
//   { id: 3, name: "Ravi", active: true }
// ]
```

---

✅ **Key points:**

* `filter()` does **not** change the original array.
* Always returns a **new array**.
* If no elements match, it returns an **empty array**.

---