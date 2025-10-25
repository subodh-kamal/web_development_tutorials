

# ✅ What it does:
## The for...of loop allows you to iterate over iterable objects, such as:

   - Arrays

   - Strings

   - Maps

   - Sets

   - NodeLists

   - etc.

🔍 Example:

```javascript
const arr = [10, 20, 30];

for (const value of arr) {
console.log(value);
}
// Output: 10, 20, 30
```

## ✅ Key Points:

   - Introduced in ES6.

   - Works only on iterable objects (unlike for...in, which works on enumerable properties of objects).

   - Safer than for...in when working with arrays.      