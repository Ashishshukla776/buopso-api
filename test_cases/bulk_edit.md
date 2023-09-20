# Project name - Buopso-v2
## Test coverage of bulk-edit APIs

### Test cases of bulk asset select
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_selectAll_01**|Test the functionality of bulk action when user select all assets.|Hit API "http://localhost:3000/fams/v2/bulk-action/select",  method : "POST"||
|**Bu_selectAll_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_selectAll_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_selectAll_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_selectAll_05**|Query parameter -**aid** <br> **aid** support sub-actor|Request - Query parameter -**aid**  <br> 1. **aid** should be String <br> 2. **aid** should accept only user,import,export,property,propertyGroup|1. pass the **aid** as number/null data type. <br> 2. Pass the **aid** except user,import,export,property,propertyGroup|
|**Bu_selectAll_06**|Query parameter -**search**|[search_test_data](utility.md)|[search_test_step](utility.md)|
|**Bu_selectAll_07**|Request Body - **id**, Here **id** is filter_id(field), in case of color tag filter, filter_id is color-tag|1. **id** should be string<br> 2. **id** should be valid |1. Pass the **id** as number/null data type. <br> 2. Pass invalid **id**|
|**Bu_selectAll_08**|Request Body - **opr**, Here **opr** is operation_id and can be null in case of filter type is dropdown|1. **opr** should be string <br> 2. **opr** should accept only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|1. Pass the **opr** as number/null data type. <br> 2. Pass **opr** except only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|
|**Bu_selectAll_09**|Request Body - **values**|1. **values** should be array[string or number]|1. Pass the **values** as number/string/null data type.|

### Test cases of bulk assign
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_bulkAssign_01**|Test the functionality of bulk assign and assets are distributed in selected owners equally.|Hit API "http://localhost:3000/fams/v2/bulk-action/assign", method : "POST"||
|**Bu_bulkAssign_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_bulkAssign_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_bulkAssign_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_bulkAssign_05**|Query parameter -**aid** <br> **aid** support sub-actor|Request - Query parameter -**aid**  <br> 1. **aid** should be String <br> 2. **aid** should accept only user,import,export,property,propertyGroup|1. pass the **aid** as number/null data type. <br> 2. Pass the **aid** except user,import,export,property,propertyGroup|
|**Bu_bulkAssign_07**|Request Body - **selectionId**, Here **selectionId** is filter_id and will be skipped If passed records|1. **selectionId** can be string or null<br> 2. **selectionId** should be required <br> 3. **selectionId**  should be valid |1. Pass the **selectionId** as number data type. <br> 2. Pass the **selectionId** blank to check required or not <br> 3. Pass invalid **selectionId**|
|**Bu_bulkAssign_08**|Request Body - **records**, Here **records** is selected assets ids and It is ignored if selectionId is not null|1. **records** should be array[string]|1. Pass the **records** as string/number/array[number]/null data type.|
|**Bu_bulkAssign_09**|Request Body - **target**|1. **target** should be object and required|1. Pass the **target** as number/string/null data type. <br> 2. Pass the **target** blank to check required or not|
|**Bu_bulkAssign_10**|Request Body - **teams** : property of **target**|1. **teams** should be array[string] or string|1. Pass the **teams** as number/array[number]/null data type.|
|**Bu_bulkAssign_11**|Request Body - **users** : property of **target**|1. **users** should be array[string] or string|1. Pass the **users** as number/array[number]/null data type.|
|**Bu_bulkAssign_11**|Request Body - **exclude** : If selectionId is passed then only exclude will be considered|1. **exclude** should be array[string]|1. Pass the **exclude** as number/string/array[number]/null data type.|
 
### Test cases of get assignee list
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getAssignList_01**|Test the functionality of get assignee list of team and owners to which assets can be assigned.|Hit API "http://localhost:3000/fams/v2/bulk-action/assign", method : "GET"||
|**Bu_getAssignList_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_getAssignList_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_getAssignList_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_getAssignList_05**|Query parameter -**aid** <br> **aid** support sub-actor|Request - Query parameter -**aid**  <br> 1. **aid** should be String <br> 2. **aid** should accept only user,import,export,property,propertyGroup|1. pass the **aid** as number/null data type. <br> 2. Pass the **aid** except user,import,export,property,propertyGroup|

### Test cases of update assets properties
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateAssetProp_01**|Test the functionality of update assets properties|Hit API "http://localhost:3000/fams/v2/bulk-action/edit", method : "POST"||
|**Bu_updateAssetProp_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_updateAssetProp_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_updateAssetProp_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_updateAssetProp_05**|Query parameter -**aid** <br> **aid** support sub-actor|Request - Query parameter -**aid**  <br> 1. **aid** should be String <br> 2. **aid** should accept only user,import,export,property,propertyGroup|1. pass the **aid** as number/null data type. <br> 2. Pass the **aid** except user,import,export,property,propertyGroup|
|**Bu_updateAssetProp_07**|Request Body - **selectionId**, Here **selectionId** is filter_id and will be skipped If passed records|1. **selectionId** can be string or null<br> 2. **selectionId** should be required <br> 3. **selectionId**  should be valid |1. Pass the **selectionId** as number data type. <br> 2. Pass the **selectionId** blank to check required or not <br> 3. Pass invalid **selectionId**|
|**Bu_updateAssetProp_08**|Request Body - **records**, Here **records** is selected assets ids and It is ignored if selectionId is not null|1. **records** should be array[string]|1. Pass the **records** as string/number/array[number]/null data type.|
|**Bu_updateAssetProp_09**|Request Body - **target**|1. **target** should be object and required|1. Pass the **target** as number/string/null data type. <br> 2. Pass the **target** blank to check required or not|
|**Bu_updateAssetProp_10**|Request Body - **fieldId** is property of **target** and target_property_id|1. **fieldId** should be string|1. Pass the **fieldId** as number/null data type.|
|**Bu_updateAssetProp_11**|Request Body - **values** is property of **target** and selected item_id|1. **values** should be array[string] or string|1. Pass the **values** as number/array[number]/null data type.|
|**Bu_updateAssetProp_11**|Request Body - **exclude** : If selectionId is passed then only exclude will be considered|1. **exclude** should be array[string]|1. Pass the **exclude** as number/string/array[number]/null data type.|
|**Bu_updateAssetProp_12**|Request Body - **persist** : In multi-selectable properties user may want to insert new values without replacing old value <br> 1. **true**: keep old values along with new values. <br> 2. **false** : replace old values with new value. <br>**Note** - It will be implemented later|1. **persist** should be boolean and default false|1. Pass the **persist** as number/string/null data type. <br> 2. it should be return bydefault false|

### Test cases of get bulk edit properties
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getBulkEdit_01**|Test the functionality of get bulk edit|Hit API "http://localhost:3000/fams/v2/bulk-action/edit", method : "GET"||
|**Bu_getBulkEdit_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_getBulkEdit_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_getBulkEdit_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_getBulkEdit_05**|Query parameter -**aid** <br> **aid** support sub-actor and optional aid in query param is send to indicate that action need to be performed on aid not on asset|Request - Query parameter -**aid**  <br> 1. **aid** should be String <br> 2. **aid** should accept only user,import,export,property,propertyGroup|1. pass the **aid** as number/null data type. <br> 2. Pass the **aid** except user,import,export,property,propertyGroup|

### Test cases of bulk delete
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_bulkDelete_01**|Test the functionality of bulk delete <br> Tester query to developer :- Why we are using POST method for DELETE|Hit API "http://localhost:3000/fams/v2/bulk-action/delete", method : "POST"||
|**Bu_bulkDelete_02**|Query parameter -**opt** <br> **opt** property delete options. Only used while deleting properties.|Request - Query parameter -**opt**  <br> 1. **opt** should be String <br> 2. **opt** should be accept only soft and hard and default false|1. pass the **opt** as number/null data type. <br> 2. Pass the **opt** except soft and hard|
|**Bu_bulkDelete_03**|Query parameter -**aid** <br> **aid** support sub-actor|Request - Query parameter -**aid**  <br> 1. **aid** should be String <br> 2. **aid** should accept only user,import,export,property,propertyGroup|1. pass the **aid** as number/null data type. <br> 2. Pass the **aid** except user,import,export,property,propertyGroup|
|**Bu_bulkDelete_04**|Request Body - **selectionId**|1. **selectionId** can be string or null<br> 2. **selectionId**  should be valid |1. Pass the **selectionId** as number data type. <br> 2. Pass invalid **selectionId**|
|**Bu_bulkDelete_05**|Request Body - **records**|1. **records** should be array[string]|1. Pass the **records** as string/number/array[number]/null data type.|
|**Bu_bulkDelete_6**|Request Body - **exclude**|1. **exclude** should be array[string]|1. Pass the **exclude** as number/string/array[number]/null data type.|

### Test cases of get combined pipelines & stages
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getCombPipe_01**|Test the functionality of get combined pipelines & stages <br> This endpoint's url is send in bulk-update-properties's pipeline. Response is used to generate pipeline/stage dropdown in bulk action's edit property|Hit API "http://localhost:3000/fams/v2/bulk-action/edit/pipeline", method : "GET"||

### Test cases of update records (common actions)
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_commonUpdate_01**|Test the functionality to perform common bulk actions <br> Bulk actions id's are pre-defined|Hit API "http://localhost:3000/fams/v2/bulk-action/{bulk-action-id}", method : "POST"||
|**Bu_commonUpdate_02**|Path parameter -**bulk_action_id** : Common bulk actions|Request - Path parameter -**bulk_action_id**  <br> 1. **bulk_action_id** should be String and required <br> 2. **bulk_action_id** should be accept only delete, markDown and reInvite|1. pass the **bulk_action_id** as number/null data type. <br> 2. Pass the **bulk_action_id** blank to check required or not <br> 3. Pass the **bulk_action_id** except delete, markDown and reInvite|
|**Bu_commonUpdate_03**|Query parameter -**aid** <br> **aid** support sub-actor|Request - Query parameter -**aid**  <br> 1. **aid** should be String <br> 2. **aid** should accept only user,import,export,property,propertyGroup|1. pass the **aid** as number/null data type. <br> 2. Pass the **aid** except user,import,export,property,propertyGroup|
|**Bu_commonUpdate_04**|Request Body - **selectionId**|1. **selectionId** can be string or null and required <br> 2. **selectionId**  should be valid |1. Pass the **selectionId** as number data type. <2>  Pass the **selectionId** blank to check required or not<br> 3. Pass invalid **selectionId**|
|**Bu_commonUpdate_05**|Request Body - **records** : asset Ids, which property need to be updated. Passed only if few records are selected. If all records are selected then selectionId is passed|1. **records** should be array[string]|1. Pass the **records** as string/number/array[number]/null data type.|
|**Bu_commonUpdate_6**|Request Body - **exclude** : If selectionId is passed in body then only exclude will be considered.|1. **exclude** should be array[string]|1. Pass the **exclude** as number/string/array[number]/null data type.|