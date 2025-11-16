Bash defines **four main prompt strings**, each used in a different situation.

# ✅ **Bash Prompt Strings**

### **1. `PS1` — Primary prompt**

Shown for normal commands.

```
$
```

### **2. `PS2` — Secondary prompt**

Shown when a command is incomplete (e.g., an unclosed quote).

```
>
```

### **3. `PS3` — Select prompt**

Used only by the `select` command in bash scripts.

```
#?
```

### **4. `PS4` — Execution trace prompt**

Used when running bash with debugging (`set -x`).

```
+ command
```

---

# ✔ Summary

| Prompt  | Purpose                                 |
| ------- | --------------------------------------- |
| **PS1** | Main shell prompt                       |
| **PS2** | Continuation prompt                     |
| **PS3** | Prompt for `select` loops               |
| **PS4** | Prompt for execution tracing (`set -x`) |

There are **4** built-in prompt strings in bash.