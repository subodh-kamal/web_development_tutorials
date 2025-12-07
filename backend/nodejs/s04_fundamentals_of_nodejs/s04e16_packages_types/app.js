/* 
- 1. Library package -> axios
- 2. CLI package -> vite | starts with the help of npx | We usually install    these packages as devDependencies(development dependencies). Example of CLI packages: vite, tsc(typescript compiler), cra(create-react-app), etc.
- Generally, Library packages belongs to dependencies and CLI packages belongs to devDependencies but not all the time.

- 3. LOCAL PACKAGES: Those packages which are installed inside node_modules folder are called local packages.

- 4. GLOBAL PACKAGES: -g flag | If we install any package as global package then we do not need to use npx command. We can directly use the package name. Like: vite

*/

import axios from 'axios'

console.log(axios);