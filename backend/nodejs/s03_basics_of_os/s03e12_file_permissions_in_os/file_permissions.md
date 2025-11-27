### There are 3 types of permissions:

- Read (r) -> 4
- Write (w) -> 2
- Execute (x) -> 1

Refer to timestamp: 42 to know about permission and then to 1:20:00 to know about git file permission.

- git tracks the file permissions too.
- command for git: git diff --summary (check this command on chatGPT)

### git file permissions:
1. 100644: Normal file with non-executable permissions.
2. 100755: Normal file with executable permissions.
3. 120000: Symbolic link.
4. 040000: Directory.