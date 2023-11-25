

------

**File:** /home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@title`:** Login
- **`@type`:** Class
- **`@name`:** Login
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** yes
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@title`:** Login.method
- **`@type`:** Class property
- **`@name`:** method
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** no
- **`@value`:** "use" 
- **`@description`:** Defines the method by which `express` will mount the controller. Defaults to `"use"` but it is safer `"post"`.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@title`:** Login.route
- **`@type`:** Class property
- **`@name`:** route
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** no
- **`@value`:** "/Login" 
- **`@description`:** Defines the route by which `express` will mount the controller. Defaults to `"/Login"`.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@title`:** Login.priority
- **`@type`:** Class property
- **`@name`:** priority
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** no
- **`@value`:** 4000
- **`@description`:** Defines the priority by which `express` will mount the controller. Defaults to 4000.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@title`:** Login.getMiddleware
- **`@type`:** Class method
- **`@name`:** getMiddleware
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** no
- **`@value`:** a function that returns an empty array 
- **`@description`:** Returns the set of middlewares to be mounted before accessing the controller. Defaults to an empty array.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@title`:** Login.dispatch
- **`@type`:** Class method
- **`@name`:** dispatch
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** no
- **`@value`:** a function 
- **`@description`:** Follows these steps:

   - gets `nombre` and `contrasenya` by the `request`
   - gets active session, if any
   - if so, it returns its token
   - if not, it creates a new active session
   - and returns its token

- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

**File:** /home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@type`:** Class
- **`@name`:** ProgressVotation
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** yes
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.method
- **`@type`:** Class property
- **`@name`:** method
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** "use" 
- **`@description`:** Defines the method by which `express` will mount the controller. Defaults to `"use"` but it is safer `"post"`.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.route
- **`@type`:** Class property
- **`@name`:** route
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** "^/ProgressVotation$" 
- **`@description`:** Defines the route by which `express` will mount the controller. Set to "^/ProgressVotation$".
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.priority
- **`@type`:** Class property
- **`@name`:** priority
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** "^/ProgressVotation$" 
- **`@description`:** Defines the priority by which `express` will mount the controller. Set to 5000.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.getMiddleware
- **`@type`:** Class method
- **`@name`:** getMiddleware
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@description`:** Defines the middlewares used by `express` while mounting the controller. This function by default returns an empty array.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.progressSteps
- **`@type`:** Class property
- **`@name`:** progressSteps
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@description`:** Defines the steps followed by any votation. By default, it contains 9 elements:

   - "1. Presentation",
   - "2. Problems/open",
   - "3. Problems/classification",
   - "4. Solutions/open",
   - "5. Solutions/classification",
   - "6. Implementations/open",
   - "7. Implementations/classification",
   - "8. Changes/application",
   - "9. Historical"

- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.dispatch
- **`@type`:** Class method
- **`@name`:** dispatch
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@parameter`:** `request` - an Object, `response` - an Object, `next` - a Function
- **`@returns`:** anything
- **`@description`:** Per order, follows these procedures:

  - prepares the `data`
  - calls `this.formatParameters(data)`
  - calls `this.validateParameters(data)`
  - calls `this.updateData(data)`
  - calls `this.executeQuery(data)`

- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.formatParameters
- **`@type`:** Class method
- **`@name`:** formatParameters
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@async`:** yes
- **`@parameter`:** `data` - an Object
- **`@returns`:** anything
- **`@description`:** Sets `data.parameters.id_votacion` from `request` and `id_votacion`.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.validateParameters
- **`@type`:** Class method
- **`@name`:** validateParameters
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@async`:** yes
- **`@parameter`:** `data` - an Object
- **`@returns`:** anything
- **`@description`:** Follows these steps:

  - Queries database by `votacion` where `id` equals `data.parameters.id_votacion`.
  - Sets that votacion to `parameters.votacion`.

- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@title`:** ProgressVotation.updateData
- **`@type`:** Class method
- **`@name`:** updateData
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@async`:** yes
- **`@parameter`:** `data` - an Object
- **`@returns`:** anything
- **`@description`:** Follows these steps:

  - If `votacion.estado` equals "2. Problems/open" then it calls `this.migrateClassifiedProblems`.
  - If `votacion.estado` equals "4. Solutions/open" then it calls `this.migrateClassifiedSolutions`.
  - If `votacion.estado` equals "6. Implementations/open" then it calls `this.migrateClassifiedImplementations`.
  - If `votacion.estado` equals "8. Changes/application" then it calls `this.migrateChanges`.

- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js