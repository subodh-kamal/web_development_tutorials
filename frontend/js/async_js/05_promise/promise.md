A **Promise** in JavaScript is an object that represents the **eventual completion or failure** of an asynchronous operation.

It is like a *container for a future value* — something that will be available **later**, not immediately.

---

# ✅ **Why Promises?**

JavaScript runs code **synchronously**, but many tasks (like fetching data, reading files, timers) take time.

Promises help you handle those tasks **without blocking** the rest of the code.

---

# ✅ **States of a Promise**

A Promise has **3 states**:

1. **pending** → initial state (still working)
2. **fulfilled** → operation completed successfully (`resolve()` called)
3. **rejected** → operation failed (`reject()` called)

---

# ✅ Basic Example

```js
let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

myPromise.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.log(error);
});
```

### Output:

```
Task completed!
```

---

# ✅ **How `.then()` and `.catch()` work**

* `.then()` runs when the promise is **fulfilled**
* `.catch()` runs when the promise is **rejected**

---

# 🔁 Example with Delay (using setTimeout)

```js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

getData().then(console.log);
```

Output after 2 seconds:

```
Data received
```

---

# ⚡ async/await (Modern way)

```js
async function fetchData() {
  const result = await getData();
  console.log(result);
}
fetchData();
```

---