# Project name - Buopso-v2
## Test coverage of stage, get_owners and get_filter_list APIs

### Test cases of create stage
TC_id|Description|Test data|Test step|expecte result|Actual result|
|:---|:----------|:--------|:--------|--------------|-------------|
|**Bu_createStage_01**|Test the functionality of create and update stage|Hit API "http://localhost:3000/fams/v2/stages",  method : "POST"||
|**Bu_createStage_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_createStage_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_createStage_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_createStage_05**|Request Body : **add**|1. **add** should be array[object]|1. Pass the **add** as number/string/array[string or number]/null data type.|
|**Bu_createStage_06**|Request Body : **id**,property of **add**|1. **id** should be string and required|1. Pass the **id** as number/null data type. <br> 2. Pass **id** blank to check reuired or not|
|**Bu_createStage_07**|Request Body : **label**,property of **add**|1. **label** should be string and required|1. Pass the **label** as number/null data type. <br> 2. Pass **label** blank to check reuired or not|
|**Bu_createStage_07**|Request Body : **winChance**,property of **add**|1. **winChance** should be string and required|1. Pass the **winChance** as number/null data type. <br> 2. Pass **winChance** blank to check reuired or not|
|**Bu_createStage_07**|Request Body : **color**,property of **add**|1. **color** should be string and required|1. Pass the **color** as number/null data type. <br> 2. Pass **color** blank to check reuired or not|
|**Bu_createStage_07**|Request Body : **pos**,property of **add**|1. **pos** should be number and required|1. Pass the **pos** as string/null data type. <br> 2. Pass **pos** blank to check reuired or not|
|**Bu_createStage_07**|Request Body : **dispo**,property of **add**|[dispo_test_data](utility.md#dispo_test_data)|1. Pass the **dispo** as string/number/null data type. <br> 2. Pass **dispo** blank to check reuired or not|[dispo_expected_result](utility.md#dispo_expected_result)|[dispo_actual_result](utility.md#dispo_actual_result)|
|**Bu_createStage_08**|Request Body : **edit**|1. **edit** should be array[object]|1. Pass the **edit** as number/string/array[string or number]/null data type.|
|**Bu_createStage_09**|Request Body : **id**,property of **edit**|1. **id** should be string and required|1. Pass the **id** as number/null data type. <br> 2. Pass **id** blank to check reuired or not|
|**Bu_createStage_10**|Request Body : **label**,property of **edit**|1. **label** should be string|1. Pass the **label** as number/null data type.|
|**Bu_createStage_11**|Request Body : **winChance**,property of **edit**|1. **winChance** should be string|1. Pass the **winChance** as number/null data type.|
|**Bu_createStage_12**|Request Body : **color**,property of **edit**|1. **color** should be string|1. Pass the **color** as number/null data type.|
|**Bu_createStage_13**|Request Body : **pos**,property of **edit**|1. **pos** should be number|1. Pass the **pos** as string/null data type.|
|**Bu_createStage_14**|Request Body : **dispo**,property of **edit**|1. **dispo** should be boolean|1. Pass the **dispo** as string/number/null data type.|

### Test cases of get stage
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getStage_01**|Test the functionality of get stage|Hit API "http://localhost:3000/fams/v2/stages",  method : "GET"||
|**Bu_getStage_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_getStage_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_getStage_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_getStage_05**|Query parameter -**page**|[page_test_data](utility.md#page_test_data)|[page_test_step](utility.md#page_test_step)|
|**Bu_getStage_06**|Query parameter -**rows**|[row_test_data](utility.md#row_test_data)|[row_test_step](utility.md#row_test_step)|
|**Bu_getStage_07**|Query parameter -**search**|[search_test_data](utility.md#search_test_data)|[search_test_step](utility.md#search_test_step)|
|**Bu_getStage_08**|Query parameter -**showCount**, Default :false|Request - Query parameter -**showCount** <br> 1. **showCount** should be boolean |1. pass the **showCount** as number/string/null data type|
|**Bu_getStage_09**|Query parameter -**showDisposition** : It is used in setting to show the selected fields for stage disposition|Request - Query parameter -**showDisposition** <br> 1. **showDisposition** should be boolean |1. pass the **showDisposition** as number/string/null data type|

### Test cases for stage exists or not
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_stageExists_01**|Test the functionality of get stage exists|Hit API "http://localhost:3000/fams/v2/stages/exists",  method : "GET"||
|**Bu_stageExists_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_stageExists_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_stageExists_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_stageExists_05**|Query parameter -**label**|Request - Query parameter -**label** <br> 1. **label** should be string and required|1. pass the **label** as number/null data type. <br> 2. Pass **label** blank to check required or not|

### Test cases of delete stage
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deleteStage_01**|Test the functionality of delete stage|Hit API "http://localhost:3000/fams/v2/stages",  method : "DELETE"||
|**Bu_deleteStage_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_deleteStage_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_deleteStage_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_deleteStage_05**|Request body :**id** is StageId user want to delete|1. **id** should be string and required <br> 2. **id** should be valid|1. pass the **id** as number/null data type. <br> 2. Pass **id** blank to check required or not <br> 3. Pass invalid **id**|
|**Bu_deleteStage_05**|Request body :**target** is PipelineId in which existing assets to be moved in.|1. **target** should be string <br> 2. **target** should be valid|1. pass the **target** as number/null data type. <br> 2. Pass invalid **target**|

### Test cases of get owners
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getOwners_01**|Test the functionality of get owners|Hit API "http://localhost:3000/fams/v2/owners/{owner-view-id}",  method : "GET"||
|**Bu_getOwners_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_getOwners_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_getOwners_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_getOwners_05**|Query parameter -**page**|Request - Query parameter -**page** <br> 1. page should be number and defauld rows =1|1. pass the page as string/null data type.|
|**Bu_getOwners_06**|Query parameter -**rows**|Request - Query parameter -**rows** <br> 1. rows should be Number and defauld rows =25 |1. pass the rows as String/null data type|
|**Bu_getOwners_07**|Query parameter -**search**|Request - Query parameter -**search** <br> 1. **search** should be String |1. pass the **search** as number/null data type|
|**Bu_getOwners_08**|Path parameter -**owner_view_id** : View Id for owner-list. These views are applicable on owners only.|Request - Path parameter -**owner_view_id** <br> 1. **owner_view_id** should be string and required <br> 2. **owner_view_id** should be accept only create-actor,property-list, actor-filter|1. pass the **owner_view_id** as number/null data type  <br> 2. Pass the **owner_view_id** blank to check required or not <br> 3. Pass the **owner_view_id** except create-actor,property-list, actor-filter|

### Test cases of get filter list
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getFilterList_01**|Test the functionality of get filter list <br> **Note** - Assuming a company will create 50-200 fields max therefore for time being we are not implementing pagination in this endpoint. If required in future we will implement it later|Hit API "http://localhost:3000/fams/v2/filters",  method : "GET"||
|**Bu_getFilterList_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_getFilterList_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_getFilterList_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|

