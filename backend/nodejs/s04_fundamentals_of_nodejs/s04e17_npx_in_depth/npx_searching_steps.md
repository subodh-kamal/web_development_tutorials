- What npx does?
 -> Searches for a file and executes it. That file can be any file.


npm root -g (ChatGPT to know more about this command) -> To check the location of globally installed packages.

## npx searching steps:

### Step-1
- Searches for package.json in current working directory.
- Searches for the "name" key in the package.json file.
- Searches for the "bin" key in the package.json file. (bin means binary)

### Step-2
- Searches for node_modules/.bin/hello file in current working directory. And executes this file.

### Step-3
- Searches for hello/vite/tailwind in global npm folder and executes this file.

### Step-4
- Searches for hello package in npx-cache folder.
- and then executes it.

### Step-5
- Searches for hello package in npm registery.
- Prompts to install the package if found.
- Downloads and installs if we agree and then executes it.