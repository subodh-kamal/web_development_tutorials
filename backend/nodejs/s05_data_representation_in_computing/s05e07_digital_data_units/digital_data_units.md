There **are two parallel and officially defined unit systems for data measurement**: **SI** and **IEC**. The confusion arises because both are used in practice.

---

## 1. SI units (Decimal system)

Defined by the **International System of Units (SI)**.
They use **powers of 10**.

| Unit     | Symbol | Value                |
| -------- | ------ | -------------------- |
| kilobyte | kB     | (10^3 = 1,000) bytes |
| megabyte | MB     | (10^6) bytes         |
| gigabyte | GB     | (10^9) bytes         |
| terabyte | TB     | (10^{12}) bytes      |

### Where SI units are used

* Storage manufacturers (HDDs, SSDs, USB drives)
* Networking and data transfer rates
* Telecommunications

---

## 2. IEC units (Binary system)

Defined by the **International Electrotechnical Commission (IEC)**.
They use **powers of 2**.

| Unit     | Symbol | Value                  |
| -------- | ------ | ---------------------- |
| kibibyte | KiB    | (2^{10} = 1,024) bytes |
| mebibyte | MiB    | (2^{20}) bytes         |
| gibibyte | GiB    | (2^{30}) bytes         |
| tebibyte | TiB    | (2^{40}) bytes         |

### Where IEC units are used

* Operating systems
* Memory (RAM)
* Low-level computing and file systems

---

## 3. Why two systems exist

* Computers work naturally in **binary**
* Humans historically used **decimal prefixes**
* Mixing both caused confusion (e.g., 1 MB ≠ 1 MiB)

The IEC system was introduced (1998) to **remove ambiguity**.

---

## 4. Common source of confusion

| What people say   | What it often means            |
| ----------------- | ------------------------------ |
| “1 MB RAM”        | 1 MiB (1,048,576 bytes)        |
| “1 TB hard drive” | 1 TB (1,000,000,000,000 bytes) |

This is why a “1 TB” drive appears smaller in your OS.

---

## 5. Exam-ready summary

> Data storage uses **SI units** (kB, MB, GB) based on powers of 10 and **IEC units** (KiB, MiB, GiB) based on powers of 2. The IEC system was introduced to clearly distinguish binary-based measurements from decimal ones.

---

# Questions:

* Why Windows historically used the wrong labels
* How RAM and storage units differ
* Bit vs byte units in networking

---

Below is a **clear, structured continuation**, covering all three points in depth.

---

## 1. Why Windows historically used the “wrong” units

### What Windows did

For many years, Windows displayed:

* **GB, MB**
  but actually calculated using **powers of 2**.

Example:

* Windows showed **1 GB**
* Internally it meant **1 GiB = 1,073,741,824 bytes**

### Why this happened

* Early computers were entirely **binary-based**
* Engineers informally reused SI labels (KB, MB, GB) for binary sizes
* There was **no IEC standard** at that time

### What changed

* In **1998**, the **IEC introduced binary prefixes** (KiB, MiB, GiB)
* Linux and macOS gradually adopted them correctly
* Windows still mostly uses **binary values with decimal labels**, causing confusion

---

## 2. Why RAM and storage use different units

### RAM (Memory)

* Addressed directly by the CPU
* Naturally aligned to **powers of 2**
* Always measured in **binary units**

Example:

* 8 GB RAM
  → actually **8 GiB = 8 × 2³⁰ bytes**

### Storage (HDD / SSD)

* Marketed using **SI (decimal) units**
* Easier for consumers to understand larger numbers

Example:

* 1 TB SSD
  → **1,000,000,000,000 bytes**
* OS shows ~**931 GiB**

### Key difference summary

| Component  | Unit system  | Reason                |
| ---------- | ------------ | --------------------- |
| RAM        | IEC (binary) | CPU addressing        |
| Storage    | SI (decimal) | Marketing & standards |
| OS display | Mixed        | Historical legacy     |

---

## 3. Bit vs Byte (very important distinction)

### Definitions

* **Bit (b)** → smallest unit (0 or 1)
* **Byte (B)** → 8 bits

[
1\ \text{Byte} = 8\ \text{bits}
]

### Where bits are used

* Internet speed
* Networking
* Bandwidth

Examples:

* 100 Mbps → **megabits per second**
* 1 Gbps → gigabits per second

### Where bytes are used

* File size
* Storage
* Memory

Examples:

* 500 MB file
* 16 GB RAM

### Common confusion

* 100 Mbps internet
  ≠ 100 MB/s

Actual speed:
[
100 \div 8 = 12.5\ \text{MB/s}
]

---

## 4. Complete comparison table

| Context       | Unit system | Example       |
| ------------- | ----------- | ------------- |
| RAM           | IEC         | 16 GiB        |
| SSD/HDD       | SI          | 1 TB          |
| OS file size  | Mixed       | 931 GiB shown |
| Network speed | Bits (SI)   | 100 Mbps      |
| File download | Bytes       | 12.5 MB/s     |

---

## 5. One-line exam-ready conclusion

> Data measurement uses **SI units** for decimal-based storage and transmission, and **IEC units** for binary-based memory and computing, while bits and bytes are used differently depending on context.

---

# Questions:

* Explain **why SSDs feel smaller than advertised**
* Show **real CPU memory addressing**
* Explain **why base-2 dominates computing internally**

---

Below is a **clear, exam-ready and technically accurate explanation** of all three topics.

---

## 1. Why SSDs and HDDs feel “smaller” than advertised

### What manufacturers advertise

Storage companies use **SI (decimal) units**:

[
1\ \text{TB} = 10^{12} = 1,000,000,000,000\ \text{bytes}
]

### What operating systems use

Operating systems calculate storage using **binary (IEC) units**:

[
1\ \text{TiB} = 2^{40} = 1,099,511,627,776\ \text{bytes}
]

### Result

[
\frac{1,000,000,000,000}{1,099,511,627,776} \approx 0.91
]

So:

* A **1 TB drive** appears as **~931 GiB**
* No space is missing — it is a **unit mismatch**

### Additional loss

Some space is also used for:

* File system metadata
* Formatting and partitioning

---

## 2. How CPU memory addressing works (why binary is mandatory)

### Memory is addressed, not measured

The CPU accesses memory using **addresses**, not sizes.

Each address points to **1 byte**.

Example:

* 32-bit CPU → (2^{32}) addresses
* 64-bit CPU → (2^{64}) addresses

This means:

* Memory sizes naturally become **powers of 2**
* Non-binary sizes are impractical at the hardware level

### Example

If RAM were decimal:

* Addressing would require irregular boundaries
* Hardware logic would become complex and inefficient

Hence:

> RAM sizes are always binary-aligned (2ⁿ)

---

## 3. Why base-2 dominates computing internally

### Hardware reality

Transistors have **two stable states**:

* ON / OFF
* High / Low voltage

This maps directly to:

* 1 / 0
* True / False

### Advantages of base-2

* High reliability
* Noise tolerance
* Simple circuit design
* Predictable behavior

### Why not base-10 hardware?

A decimal system would require:

* 10 stable voltage levels
* Extremely precise control
* High error rates

This is why **ternary and decimal computers failed commercially**.

---

## 4. Why bases like 8, 16, 32 exist at all

These bases are **human-friendly views of binary**:

| Base | Bits per digit |
| ---- | -------------- |
| 2    | 1 bit          |
| 8    | 3 bits         |
| 16   | 4 bits         |
| 32   | 5 bits         |
| 64   | 6 bits         |

Example:

```
Binary: 11010110
Hex:    D6
```

Same data — easier to read.

---

## 5. One-page summary (perfect for exams)

* Storage devices use **SI units** (decimal), while operating systems use **IEC units** (binary), causing size differences.
* CPUs address memory using **binary addressing**, making RAM sizes powers of two.
* Computers use **base-2** because electronic hardware naturally supports two stable states.
* Bases like **8 and 16** exist to make binary data readable for humans.

---

# Additional Questions:

* Binary vs decimal **with circuit diagrams**
* Why networking still uses **bits**
* Why file systems reserve space internally

---

Below is a **clear, technical, and exam-ready explanation** of the remaining topics.

---

## 1. Why networking uses **bits**, not bytes

### Historical reason

Networking evolved from **telecommunications**, where data was transmitted as **electrical or optical signals**. These signals naturally represent **binary states**, i.e., **bits**.

* One signal change = one bit
* Counting bits reflects the **raw transmission capability** of a channel

---

### Engineering reason

Network hardware (NICs, routers, fiber optics) operates at the **bit level**:

* Clock cycles move **bits**, not bytes
* Error detection, modulation, and encoding all work on bits

So bandwidth is measured as:

* **bps, Kbps, Mbps, Gbps**

---

### Marketing reason

Bits produce **larger-looking numbers**, which are easier to advertise:

* 100 Mbps sounds faster than 12.5 MB/s
* (Even though they represent the same speed)

---

### Practical conversion

[
1\ \text{Byte} = 8\ \text{bits}
]

So:

* 100 Mbps ÷ 8 = **12.5 MB/s (maximum theoretical download speed)**

---

## 2. Why file systems reserve space internally

When you format a disk, the entire capacity is **not available for user files**.

### Why space is reserved

#### a) Metadata

File systems store:

* File names
* File permissions
* Timestamps
* File locations

This information must live **somewhere**.

---

#### b) File system structures

Examples:

* Inodes (Linux)
* Master File Table (NTFS)
* Allocation tables

These are essential for:

* Tracking files
* Preventing corruption
* Fast lookup

---

#### c) Reserved space for stability

Some file systems reserve space to:

* Prevent fragmentation
* Allow system processes to continue when disk is nearly full
* Avoid total file system collapse

Example:

* Linux ext4 reserves ~**5%** by default

---

## 3. Why a formatted disk is always smaller

### Example: 1 TB SSD

| Step              | Size                    |
| ----------------- | ----------------------- |
| Manufacturer size | 1,000,000,000,000 bytes |
| Binary conversion | ~931 GiB                |
| After formatting  | ~915–925 GiB            |

### Causes

1. SI vs IEC unit difference
2. File system metadata
3. Reserved system space

Nothing is “missing”.

---

## 4. Why files don’t always use their exact size

### Block allocation

Disks store data in **blocks** (e.g., 4 KB).

If a file is:

* 1 byte → it still occupies **1 full block**
* 4,001 bytes → occupies **2 blocks**

This causes **internal fragmentation**.

---

## 5. One-page exam summary

* Networks use **bits** because data transmission occurs at the bit level.
* Storage uses **bytes** because data is addressed and stored byte-wise.
* File systems reserve space for metadata, stability, and performance.
* Disk capacity appears smaller due to **unit differences and formatting overhead**.
* Binary systems dominate computing because hardware supports only two stable states.

---

# Search the below topics:

* Why **packet loss** happens
* How **TCP vs UDP** differ
* Why SSDs slow down when nearly full
* How file systems prevent corruption