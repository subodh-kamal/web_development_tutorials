# 🔁 for...in loop — Overview:
- Used to iterate over the enumerable properties (keys) of an object.

- Works on objects, not arrays (though you can use it on arrays, it’s not recommended).

## ✅ Example:
```javascript
const person = {
  name: "Subodh",
  age: 27
};

for (let key in person) {
  console.log(key);        // "name", "age"
  console.log(person[key]); // "Subodh", 27
}
```

## ⚠️ Don’t use for...in for arrays:
```javascript
const arr = [10, 20, 30];

for (let i in arr) {
  console.log(i);     // "0", "1", "2" (indexes as strings)
  console.log(arr[i]); // 10, 20, 30
}
```

- for...in iterates over keys, not values.

- Better to use for, forEach, or for...of for arrays.
