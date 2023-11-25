

------

**File:** /home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@type`:** Class
- **`@name`:** Login
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** yes
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/Login.js

------

- **`@type`:** Class property
- **`@name`:** method
- **`@file`:** /src/Controllers/Login.js
- **`@module`:** no
- **`@value`:** "use" 
- **`@description`:** Defines the method by which `express` will mount the controller. Defaults to `"use"` but it is safer `"post"`.
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

- **`@type`:** Class property
- **`@name`:** method
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** "use" 
- **`@description`:** Defines the method by which `express` will mount the controller. Defaults to `"use"` but it is safer `"post"`.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@type`:** Class property
- **`@name`:** route
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** "^/ProgressVotation$" 
- **`@description`:** Defines the route by which `express` will mount the controller. Set to "^/ProgressVotation$".
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@type`:** Class property
- **`@name`:** priority
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** "^/ProgressVotation$" 
- **`@description`:** Defines the priority by which `express` will mount the controller. Set to 5000.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

- **`@type`:** Class method
- **`@name`:** getMiddleware
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@description`:** Defines the middlewares used by `express` while mounting the controller. This function by default returns an empty array.
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js

------

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

- **`@type`:** Class method
- **`@name`:** dispatch
- **`@file`:** /src/Controllers/ProgressVotation.js
- **`@module`:** no
- **`@value`:** a function
- **`@parameter`:** `request` - an Object, `response` - an Object, `next` - a Function
- **`@returns`:** anything
- **`@description`:** Per order, follows these procedures:

  - prepares the data
  - `this.formatParameters(data)`
  - `this.validateParameters(data)`
  - `this.updateData(data)`
  - `this.executeQuery(data)`
- **`file`:**/home/carlos/Software/Nodejs/democracia-directa-minimal-3/src/Controllers/ProgressVotation.js