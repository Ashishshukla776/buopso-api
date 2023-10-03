# Project name - Buopso-v2
## Test coverage of auth APIs

### Test cases of register user(root)
TC_id|Description|Test data|Test step|Request Body|Response Body|
|:---|:----------|:--------|:--------|:-----------|:------------|
|**Bu_createRootUser_01**|Test the functionality of register user|Hit API "http://localhost:3000/auth/v1/register",  method : "POST"||
|**Bu_createRootUser_02**|Request Body : **firstName**|1. **firstName** should be string and required|1. Pass the **firstName** as number/null data type. <br> 2. Pass the blank **firstName** field|
|**Bu_createRootUser_03**|Request Body : **lastName**|1. **lastName** should be string and required|1. Pass the **lastName** as number/null data type. <br> 2. Pass the blank **lastName** field|
|**Bu_createRootUser_03**|Request Body : **email**|1. **email** should be string and required <br> 2. email should be valid email <br> 3. email should be case in-sensitive|1. Pass the **email** as number/null data type. <br> 2. Pass the blank **email** field <br> 3. Pass invalid **email** <br> 4. Pass the **email** in combination of lowercase and upercase|

### Test cases of login
TC_id|Description|Test data|Test step|Request Body|Response Body|
|:---|:----------|:--------|:--------|:-----------|:------------|
|**Bu_createRootUser_01**|Test the functionality of login|Hit API "http://localhost:3000/auth/v1/login",  method : "POST"||
|**Bu_createRootUser_02**|Request Body :  **userId** |1. **userId** should be string and required|1. Pass the **userId** as number/null data type. <br> 2. Pass the blank **userId** field|
|**Bu_createRootUser_03**|Request Body : **device**|1. **device** should be string and required|1. Pass the **device** as number/null data type. <br> 2. Pass the blank **device** field|
|**Bu_createRootUser_03**|Request Body : **password**|1. **password** should be string and required <br> 2. password should be valid password|1. Pass the **password** as number/null data type. <br> 2. Pass the blank **password** field <br> 3. Pass invalid **password**|
|**Bu_createRootUser_03**|Request Body : **force** is used to overwrite existing session (if any)|1. **force** should be boolean and required|1. Pass the **force** as number/null data type. <br> 2. Pass the blank **force** field|