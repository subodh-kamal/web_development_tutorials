`alert()` in JavaScript **does not return any useful value**.
Its return value is **`undefined`**.

### ✔ Example

```js
let result = alert("Hello!");
console.log(result); // undefined
```

### Why?

`alert()` is a **blocking browser API** that simply shows a popup and pauses execution.
It’s meant only for displaying a message, not returning data.

If you want to get a return value from a popup, you would use:

* `confirm()` → returns **true/false**
* `prompt()` → returns **user input or null**

// ------------------------------------------------------------------------------------------------------------------------

Here are the examples for `confirm()` and `prompt()` in JavaScript:

---

## ✅ **1. `confirm()` — returns `true` or `false`**

`confirm()` shows a dialog with **OK** and **Cancel**.

### ✔ Example

```js
let answer = confirm("Are you sure?");

if (answer === true) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}
```

### **Return values**

* **OK → `true`**
* **Cancel → `false`**

---

## ✅ **2. `prompt()` — returns user input or `null`**

`prompt()` shows a dialog with an input box.

### ✔ Example

```js
let name = prompt("Enter your name:");

if (name !== null) {
  console.log("User typed:", name);
} else {
  console.log("User cancelled");
}
```

### **Return values**

* **User types something → string**
* **User clicks Cancel → `null`**

---

// ----------------------------------------------------------------------------------------------------------------------

Here are the **clear differences** between `alert()`, `confirm()`, and `prompt()` in JavaScript:

---

# ✅ **1. alert()**

### ✔ Purpose

Show a simple message.

### ✔ UI

Just **OK** button.

### ✔ Return value

`undefined`

### ✔ Example

```js
alert("Hello!");
```

---

# ✅ **2. confirm()**

### ✔ Purpose

Ask a **yes/no** type question.

### ✔ UI

**OK** and **Cancel**

### ✔ Return values

* OK → `true`
* Cancel → `false`

### ✔ Example

```js
let result = confirm("Do you want to continue?");
console.log(result); // true or false
```

---

# ✅ **3. prompt()**

### ✔ Purpose

Ask the user to type input.

### ✔ UI

Text input + OK + Cancel

### ✔ Return values

* User typed something → a **string**
* User clicked Cancel → `null`

### ✔ Example

```js
let name = prompt("What is your name?");
console.log(name); // "John" or null
```

---

# 📌 **Summary Table**

| Function    | Purpose        | Buttons     | Return Value     |
| ----------- | -------------- | ----------- | ---------------- |
| `alert()`   | Show a message | OK          | `undefined`      |
| `confirm()` | Ask yes/no     | OK + Cancel | `true` / `false` |
| `prompt()`  | Get text input | OK + Cancel | string / `null`  |

---

// ----------------------------------------------------------------------------------------------------------------------

Here is a **full working demo** that shows `alert()`, `confirm()`, and `prompt()` in action on a real webpage.
You can copy this into an `index.html` file and open it in your browser.

---

# ✅ **Complete Demo Code (HTML + JS)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Alert, Confirm & Prompt Demo</title>
</head>
<body>

  <h2>JavaScript Popup Demo</h2>

  <button onclick="showAlert()">Show Alert</button>
  <button onclick="showConfirm()">Show Confirm</button>
  <button onclick="showPrompt()">Show Prompt</button>

  <p id="output"></p>

  <script>
    function showAlert() {
      alert("This is an alert message!");
      document.getElementById("output").innerText = "Alert was shown (returns undefined).";
    }

    function showConfirm() {
      let result = confirm("Are you sure?");
      if (result) {
        document.getElementById("output").innerText = "You clicked OK (true).";
      } else {
        document.getElementById("output").innerText = "You clicked Cancel (false).";
      }
    }

    function showPrompt() {
      let name = prompt("What is your name?");
      if (name !== null) {
        document.getElementById("output").innerText = "You typed: " + name;
      } else {
        document.getElementById("output").innerText = "You cancelled the prompt (null).";
      }
    }
  </script>

</body>
</html>
```

---

# 🚀 What this demo does

* **"Show Alert"** → displays a plain message
* **"Show Confirm"** → returns true/false depending on OK or Cancel
* **"Show Prompt"** → lets the user type something and returns the input or null
* Output is shown in the `<p id="output"></p>` element

---

If you want more clarification then do chatGPT.