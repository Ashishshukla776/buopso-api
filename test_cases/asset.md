# Project name - Buopso-v2
## Test coverage of asset APIs

### Test cases of create asset
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createAsset_01**|Test the functionality of create asset|Hit API "http://localhost:3000/fams/v2/records",  method : "POST"||
|**Bu_createAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_createAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_createAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_createAsset_05**|Request Body|1. **fieldId** should be string <br> 2. **fieldId** key can generate dynamically |1. Pass the **fieldId** as number/null data type.|

### Test cases for change stage of asset/Reorder(Kanban)
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createAsset_01**|Test the functionality of change stage of asset|Hit API "http://localhost:3000/fams/v2/records/kanban/stage",  method : "PATCH"||
|**Bu_chngStgAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_chngStgAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_chngStgAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_chngStgAsset_05**|Request Body - **id**, Here **id** is asset_id|1. **id** should be string and required <br> 2. **id** should be valid |1. Pass the **id** as number/null data type. <br> 2. Pass invalid **id**|
|**Bu_chngStgAsset_06**|Request Body - **source**, Here **source** is Source stage_id|1. **source** should be string and required <br> 2. **source** should be valid |1. Pass the **source** as number/null data type. <br> 2. Pass invalid **source**|
|**Bu_chngStgAsset_07**|Request Body - **target**, Here **target** is target stage_id|1. **target** should be string and required <br> 2. **target** should be valid |1. Pass the **target** as number/null data type. <br> 2. Pass invalid **target**|
|**Bu_chngStgAsset_08**|Request Body - **pos**, Here **pos** is asset's new position|1. **pos** should be number and required <br> 2. **pos** should be valid |1. Pass the **pos** as string/null data type. <br> 2. Pass invalid **pos**|
**Bu_chngStgAsset_09**|Request Body - **fields**, Here **fields** is  present when target stage has Won winChance|1. **fields** should be object and and contain field_id|1. Pass the **fields** as string/number/null data type.|
|**Bu_chngStgAsset_10**|Request Body - **field_id**|1. **field_id** should be string|1. Pass the **field_id** as number/null data type.|

### Test cases of get asset-grid view
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_gridViewAsset_01**|Test the functionality of get asset-grid view|Hit API "http://localhost:3000/fams/v2/records/grid",  method : "POST"||
|**Bu_gridViewAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_gridViewAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_gridViewAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_gridViewAsset_05**|Query parameter -**page**|[page_test_data](utility.md)|[page_test_step](utility.md)|
|**Bu_gridViewAsset_06**|Query parameter -**rows**|[row_test_data](utility.md)|[row_test_step](utility.md)|
|**Bu_gridViewAsset_07**|Query parameter -**search**|[search_test_data](utility.md)|[search_test_step](utility.md)|
|**Bu_gridViewAsset_08**|Request Body - **id**, Here **id** is filter_id(field), in case of color tag filter, filter_id is color-tag|1. **id** should be string<br> 2. **id** should be valid |1. Pass the **id** as number/null data type. <br> 2. Pass invalid **id**|
|**Bu_gridViewAsset_09**|Request Body - **opr**, Here **opr** is operation_id and can be null in case of filter type is dropdown|1. **opr** should be string <br> 2. **opr** should accept only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|1. Pass the **opr** as number/null data type. <br> 2. Pass **opr** except only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|
|**Bu_gridViewAsset_10**|Request Body - **values**|1. **values** should be array[string or number]|1. Pass the **values** as number/string/null data type.|

### Test cases of get asset-card view
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_cardViewAsset_01**|Test the functionality of get asset-card view|Hit API "http://localhost:3000/fams/v2/records/card",  method : "POST"||
|**Bu_cardViewAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_cardViewAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_cardViewAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_cardViewAsset_05**|Query parameter -**page**|[page_test_data](utility.md)|[page_test_step](utility.md)|
|**Bu_cardViewAsset_06**|Query parameter -**rows**|[row_test_data](utility.md)|[row_test_step](utility.md)|
|**Bu_cardViewAsset_07**|Query parameter -**search**|[search_test_data](utility.md)|[search_test_step](utility.md)|
|**Bu_cardViewAsset_08**|Request Body - **id**, Here **id** is filter_id(field), in case of color tag filter, filter_id is color-tag|1. **id** should be string<br> 2. **id** should be valid |1. Pass the **id** as number/null data type. <br> 2. Pass invalid **id**|
|**Bu_cardViewAsset_09**|Request Body - **opr**, Here **opr** is operation_id and can be null in case of filter type is dropdown|1. **opr** should be string <br> 2. **opr** should accept only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|1. Pass the **opr** as number/null data type. <br> 2. Pass **opr** except only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|
|**Bu_cardViewAsset_10**|Request Body - **values**|1. **values** should be array[string or number]|1. Pass the **values** as number/string/null data type.|

### Test cases of get asset-kanban view
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_kanbanViewAsset_01**|Test the functionality of get asset-kanban view|Hit API "http://localhost:3000/fams/v2/records/kanban",  method : "POST"||
|**Bu_kanbanViewAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_kanbanViewAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_kanbanViewAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_kanbanViewAsset_05**|Query parameter -**page**|[page_test_data](utility.md)|[page_test_step](utility.md)|
|**Bu_kanbanViewAsset_06**|Query parameter -**rows**|[row_test_data](utility.md)|[row_test_step](utility.md)|
|**Bu_kanbanViewAsset_07**|Query parameter -**search**|[search_test_data](utility.md)|[search_test_step](utility.md)|
|**Bu_kanbanViewAsset_08**|Request Body - **id**, Here **id** is filter_id(field), in case of color tag filter, filter_id is color-tag|1. **id** should be string<br> 2. **id** should be valid |1. Pass the **id** as number/null data type. <br> 2. Pass invalid **id**|
|**Bu_kanbanViewAsset_09**|Request Body - **opr**, Here **opr** is operation_id and can be null in case of filter type is dropdown|1. **opr** should be string <br> 2. **opr** should accept only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|1. Pass the **opr** as number/null data type. <br> 2. Pass **opr** except only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|
|**Bu_kanbanViewAsset_10**|Request Body - **values**|1. **values** should be array[string or number]|1. Pass the **values** as number/string/null data type.|

### Test cases of get asset of stage(kanban)
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_specificViewAsset_01**|Test the functionality of get assets on a specific stage.<br>API used in kanban view component. <br> First page is retrieved in the Kanban view endpoint and when a user tries to load more cards. This endpoint is used|Hit API "http://localhost:3000/fams/v2/records/kanban/stage",  method : "POST"||
|**Bu_specificViewAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_specificViewAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_specificViewAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_specificViewAsset_05**|Query parameter -**page**|[page_test_data](utility.md)|[page_test_step](utility.md)|
|**Bu_specificViewAsset_06**|Query parameter -**rows**|[row_test_data](utility.md)|[row_test_step](utility.md)|
|**Bu_specificViewAsset_07**|Query parameter -**search**|[search_test_data](utility.md)|[search_test_step](utility.md)|
|**Bu_specificViewAsset_08**|Query parameter -**id**, Here **id** is stage_id|Request - Query parameter -**search** <br> 1. **id** should be String and required |1. pass the **id** as number/null data type <br> 2. Pass the **id** blank to check required or not|
|**Bu_specificViewAsset_09**|Request Body - **id**, Here **id** is filter_id(field), in case of color tag filter, filter_id is color-tag|1. **id** should be string<br> 2. **id** should be valid |1. Pass the **id** as number/null data type. <br> 2. Pass invalid **id**|
|**Bu_specificViewAsset_10**|Request Body - **opr**, Here **opr** is operation_id and can be null in case of filter type is dropdown|1. **opr** should be string <br> 2. **opr** should accept only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|1. Pass the **opr** as number/null data type. <br> 2. Pass **opr** except only ct,dc,sw,ew,eq,ne,gt,lt,le,dy,wk,mt,qt,yr,cu,null|
|**Bu_specificViewAsset_11**|Request Body - **values**|1. **values** should be array[string or number]|1. Pass the **values** as number/string/null data type.|

### Test cases of delete asset
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deleteAsset_01**|Test the functionality of create asset <br> User can delete multiple asset in list view <br> User can single asset in kanban and list view|Hit API "http://localhost:3000/fams/v2/records",  method : "DELETE"|1. Check the fuctionality of multiple delete asset in list view <br> 2. Multiple delete functionality should work only with list view|
|**Bu_deleteAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_deleteAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_deleteAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_deleteAsset_05**|Query parameter - **filterId** returned in select endpoint.|1. **filterId** should be string |1. Pass the **filterId** as number/null data type.|
|**Bu_deleteAsset_06**|Query parameter - **ids**  is asset_id.|1. **ids** should be array |1. Pass the **ids** as string/number/null data type.|

### Test cases of update asset-detail
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateAsset_01**|Test the functionality of update asset-detail|Hit API "http://localhost:3000/fams/v2/records/{asset-record-id}",  method : "PATCH"||
|**Bu_updateAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_updateAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_updateAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_updateAsset_05**|Request Body|1. **fieldId** should be string <br> 2. **fieldId** key can generate dynamically |1. Pass the **fieldId** as number/null data type.|
|**Bu_updateAsset_06**|Path parameter : **asset_record_id**|1. **asset_record_id** should be string and required<br> 2. **asset_record_id** should be valid/correct |1. Pass the **asset_record_id** as number/null data type. <br> 2. Pass **asset_record_id** blank to check required or not <br> 3. Pass invalid **asset_record_id**|

### Test cases of fetch asset-detail
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateAsset_01**|Test the functionality of fetch asset-detail|Hit API "http://localhost:3000/fams/v2/records/{asset-record-id}",  method : "GET"||
|**Bu_updateAsset_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_updateAsset_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_updateAsset_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_updateAsset_05**|Path parameter : **asset_record_id**|1. **asset_record_id** should be string and required<br> 2. **asset_record_id** should be valid/correct |1. Pass the **asset_record_id** as number/null data type. <br> 2. Pass **asset_record_id** blank to check required or not <br> 3. Pass invalid **asset_record_id**|