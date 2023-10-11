# Project name - Buopso-v2
## Test coverage of create stage

### Test cases of create stage
TC_id|Description|Test data|Test step|expecte result|Actual result|status|
|:---|:----------|:--------|:--------|--------------|-------------|------|
|**Bu_createStage_01**|Test the functionality of create and update stage|Hit API "http://localhost:3000/fams/v2/stages",  method : "POST"||
|**Bu_createStage_02**|Query parameter -**Asset_name**|[asset_test_data](/test_cases/utility.md#asset_test_data)|[asset_test_step](/test_cases/utility.md#asset_test_step)|
|**Bu_createStage_03**|Query parameter -**module_name**|[module_test_data](/test_cases/utility.md#module_test_data)|[module_test_step](/test_cases/utility.md#module_test_step)|
|**Bu_createStage_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](/test_cases/utility.md#catid_test_data)|[catId_test_step](/test_cases/utility.md#catid_test_step)|
|**Bu_createStage_05**|Request Body : **add**|1. **add** should be array[object]|1. Pass the **add** as number/string/array[string or number]/null data type.|
|**Bu_createStage_06**|Request Body : **id**,property of **add**|1. **id** should be string and required|1. Pass the **id** as number/null data type. <br> 2. Pass **id** blank to check reuired or not|
|**Bu_createStage_07**|Request Body : **label**,property of **add**|1. **label** should be string and required|1. Pass the **label** as number/null data type. <br> 2. Pass **label** blank to check reuired or not|
|**Bu_createStage_07**|Request Body : **winChance**,property of **add**|[winChance_test_data](utility.md#winChance_test_data)|1. Pass the **winChance** as number/null data type. <br> 2. Pass **winChance** blank to check reuired or not|[winChance_expected_result](utility.md#winChance_expected_result)|[winChance_actual_result](utility.md#winChance_actual_result)|**FAIL**|
|**Bu_createStage_07**|Request Body : **color**,property of **add**|[color_test_data](utility.md#color_test_data)|1. Pass the **color** as number/null data type. <br> 2. Pass **color** blank to check reuired or not|[color_expected_result](utility.md#color_expected_result)|[color_actual_result](utility.md#color_actual_result)|**FAIL**|
|**Bu_createStage_07**|Request Body : **pos**,property of **add**|[pos_test_data](utility.md#pos_test_data)|1. Pass the **pos** as string/null data type. <br> 2. Pass **pos** blank to check reuired or not|[pos_expected_result](utility.md#pos_expected_result)|[pos_actual_result](utility.md#pos_actual_result)|**FAIL**|
|**Bu_createStage_07**|Request Body : **dispo**,property of **add**|[dispo_test_data](utility.md#dispo_test_data)|1. Pass the **dispo** as string/number/null data type. <br> 2. Pass **dispo** blank to check reuired or not|[dispo_expected_result](utility.md#dispo_expected_result)|[dispo_actual_result](utility.md#dispo_actual_result)|**FAIL**|
|**Bu_createStage_08**|Request Body : **edit**|1. **edit** should be array[object]|1. Pass the **edit** as number/string/array[string or number]/null data type.|
|**Bu_createStage_09**|Request Body : **id**,property of **edit**|1. **id** should be string and required|1. Pass the **id** as number/null data type. <br> 2. Pass **id** blank to check reuired or not|
|**Bu_createStage_10**|Request Body : **label**,property of **edit**|1. **label** should be string|1. Pass the **label** as number/null data type.|
|**Bu_createStage_11**|Request Body : **winChance**,property of **edit**|1. **winChance** should be string|1. Pass the **winChance** as number/null data type.|
|**Bu_createStage_12**|Request Body : **color**,property of **edit**|1. **color** should be string|1. Pass the **color** as number/null data type.|
|**Bu_createStage_13**|Request Body : **pos**,property of **edit**|1. **pos** should be number|1. Pass the **pos** as string/null data type.|
|**Bu_createStage_14**|Request Body : **dispo**,property of **edit**|1. **dispo** should be boolean|1. Pass the **dispo** as string/number/null data type.|
