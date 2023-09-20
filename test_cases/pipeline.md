# Project name - Buopso-v2
## Test coverage of Pipeline APIs

### Test cases of create pipiline
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createPipe_01**|Test the functionality of create pipeline|Hit API "http://localhost:3000/fams/v2/pipelines",  method : "POST"||
|**Bu_createPipe_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_createPipe_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_createPipe_04**|Request Body|**lebel** should be string and required|1. Pass the **lebel** as number/null data type. <br> 2. Pass the **lebel** blank to check required or not|
|**Bu_createPipe_05**|Request Body|**stages** should be array[object] and required|1. Pass the **stages** as number/null/string/array[string and number] data type. <br> 2. Pass the **stages** blank to check required or not|
|**Bu_createPipe_06**|Request Body|**lebel** should be string and required|1. Pass the **lebel** as number/null data type. <br> 2. Pass the **lebel** blank to check required or not|
|**Bu_createPipe_07**|Request Body|**winChance** should be string and required|1. Pass the **winChance** as number/null data type. <br> 2. Pass the **winChance** blank to check required or not|
|**Bu_createPipe_08**|Request Body|**pos** should be number and required|1. Pass the **pos** as string/null data type. <br> 2. Pass the **pos** blank to check required or not|
|**Bu_createPipe_09**|Request Body|**color** should be string and required|1. Pass the **color** as number/null data type. <br> 2. Pass the **color** blank to check required or not|

### Test cases of rename/reorder pipiline
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_renamePipe_01**|Test the functionality of rename/reorder pipeline|Hit API "http://localhost:3000/fams/v2/pipelines", method : "PATCH"||
|**Bu_renamePipe_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_renamePipe_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_renamePipe_04**|Request Body|**id** should be string and required|1. Pass the **id** as number/null data type. <br> 2. Pass the **id** blank to check required or not|
|**Bu_renamePipe_05**|Request Body|**lebel** should be string and required|1. Pass the **lebel** as number/null data type.|
|**Bu_renamePipe_06**|Request Body|**pos** should be number and required|1. Pass the **pos** as string/null data type.|

### Test cases of get pipiline
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getPipe_01**|Test the functionality of get pipeline|Hit API "http://localhost:3000/fams/v2/pipelines", method : "GET"||
|**Bu_getPipe_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_getPipe_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_getPipe_04**|Query parameter -**page**|[page_test_data](utility.md)|[page_test_step](utility.md)|
|**Bu_getPipe_05**|Query parameter -**rows**|[row_test_data](utility.md)|[row_test_step](utility.md)|
|**Bu_getPipe_06**|Query parameter -**search**|[search_test_data](utility.md)|[search_test_step](utility.md)|
|**Bu_getPipe_07**|Query parameter -**showCount**|Request - Query parameter -**showCount** <br> 1. showCount should be boolean |1. pass the showCount as Number/String/null data type|

### Test cases to Check if user has access to pipeline
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_accessPipe_01**|Test the functionality to Check user has access to pipeline|Hit API "http://localhost:3000/fams/v2/pipelines/exists", method : "POST"||
|**Bu_accessPipe_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_accessPipe_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_accessPipe_04**|Query parameter -**pipeline_id**|Request - Query parameter -**pipeline_id** <br> 1. **pipeline_id** should be String and required <br> 2. **pipeline_id** should be valid/correct|1. pass the **pipeline_id** as Number/null data type. <br> 2. Pass the **pipeline_id** blank to check required or not. <br> 3. Pass the invalid **pipeline_id**|

### Test cases of get pipeline if exist
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getPipeExist_01**|Test the functionality of get pipeline if exist|Hit API "http://localhost:3000/fams/v2/pipelines/exists", method : "GET"||
|**Bu_getPipeExist_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_getPipeExist_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_getPipeExist_04**|Query parameter -**pipeline_name(label)**|Request - Query parameter -**pipeline_name(label)** <br> 1. **pipeline_name(label)** should be String<br> 2. **pipeline_name(label)** should be valid/correct|1. pass the **pipeline_name(label)** as Number/null data type. <br> 2. Pass the invalid **pipeline_name(label)**|

### Test cases of delete pipeline
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deletePipe_01**|Test the functionality to Check user has access to pipeline|Hit API "http://localhost:3000/fams/v2/pipelines/exists", method : "POST"||
|**Bu_deletePipe_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_deletePipe_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_deletePipe_04**|Query parameter -**pipeline_id**|Request - Query parameter -**pipeline_id** <br> 1. **pipeline_id** should be array[string]  <br> 2. **pipeline_id** should be valid/correct|1. pass the **pipeline_id** as Number/String/array[number]/null data type. <br> 2. Pass the invalid **pipeline_id**|