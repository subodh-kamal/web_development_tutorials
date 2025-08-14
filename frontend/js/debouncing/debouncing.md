**Debouncing** in JavaScript is **a technique used to limit how often a function runs** — it makes sure the function only executes after a certain delay has passed without being called again.

It’s often used to improve performance for events that fire rapidly, like:

- scroll

- resize

- input (typing)

- mousemove

## How it works

1. You wrap your function in a debouncer.

2. Each time the event happens, the timer resets.

3. The function runs only if the event stops firing for a set delay.

**Example — Without Debounce**
```javascript
window.addEventListener("resize", () => {
  console.log("Resized");
});
```

If you resize the window, `"Resized"` logs dozens of times per second — wasteful.

**Example — With Debounce**
```javascript
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resized after stop");
}, 500));
```

**What happens:**

- Every `resize` cancels the old timer (`clearTimeout`).

- If you stop resizing for **500ms**, the function finally runs.

**Common Uses**

- Search boxes → wait until typing stops before sending an API request.

- Window resizing → avoid constant layout recalculations.

- Button clicks → prevent accidental double-submissions.