# Project name - Buopso-v2
## Test coverage of association APIs

### Test cases of create association
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createAssociatn_01**|Test the functionality of create association <br> Used to create association between two assets|Hit API "http://localhost:3000/fams/v2/associations/{asc-asset-name}",  method : "POST"||
|**Bu_createAssociatn_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_createAssociatn_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_createAssociatn_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_createAssociatn_05**|Query parameter -**assetId**|Request - Query parameter -**assetId** <br> 1. **assetId** should be String and required <br> 2. **assetId** should be valid/correct|1. pass the **assetId** as number/null data type. <br> 2. Pass the **assetId** blank to check required or not. <br> 3. pass the invalid **assetId**|
|**Bu_createAssociatn_06**|Request Body : **cat_id**|1. **cat_id** should be array[string]|1. Pass the **cat_id** as number/string/array[number]/null data type.|
|**Bu_createAssociatn_07**|Path parameter : **asc_asset_name** is asset_name|1. **asc_asset_name** should be string and required <br> 2. **asc_asset_name** should be valid asset_name|1. Pass the **asc_asset_name** as number/null data type. <br> 2. Pass **asc_asset_name** blank to check required or not <br> 3. Pass invalid **asc_asset_name**|

### Test cases of get associated records
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getAssociated_01**|Test the functionality of get associated records|Hit API "http://localhost:3000/fams/v2/associations/{asc-asset-name}",  method : "GET"||
|**Bu_getAssociated_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_getAssociated_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_getAssociated_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_getAssociated_05**|Query parameter -**assetId**|Request - Query parameter -**assetId** <br> 1. **assetId** should be String and required <br> 2. **assetId** should be valid/correct|1. pass the **assetId** as number/null data type. <br> 2. Pass the **assetId** blank to check required or not. <br> 3. pass the invalid **assetId**
|**Bu_getAssociated_06**|Path parameter : **asc_asset_name** is asset_name|1. **asc_asset_name** should be string and required <br> 2. **asc_asset_name** should be valid asset_name|1. Pass the **asc_asset_name** as number/null data type. <br> 2. Pass **asc_asset_name** blank to check required or not <br> 3. Pass invalid **asc_asset_name**|

### Test cases of get associables records
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getAssociables_01**|Test the functionality of get associables records <br> 1. If catId is not passed in case where pipeline is working than it will return pipeline for the current asc asset name, otherwise it will return assets records<br> 2. If asc asset is customer then it doesn't require catId But if asc asset is lead/deal then it want catId to get records<br> 3.  If catId is passed then it will return directly assets-recoords|Hit API "http://localhost:3000/fams/v2/associations/associables/{asc-asset-name}",  method : "GET"||
|**Bu_getAssociables_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_getAssociables_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_getAssociables_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_getAssociables_05**|Query parameter -**assetId**|Request - Query parameter -**assetId** <br> 1. **assetId** should be String and required <br> 2. **assetId** should be valid/correct|1. pass the **assetId** as number/null data type. <br> 2. Pass the **assetId** blank to check required or not. <br> 3. pass the invalid **assetId**
|**Bu_getAssociables_06**|Path parameter : **asc_asset_name** is asset_name|1. **asc_asset_name** should be string and required <br> 2. **asc_asset_name** should be valid asset_name|1. Pass the **asc_asset_name** as number/null data type. <br> 2. Pass **asc_asset_name** blank to check required or not <br> 3. Pass invalid **asc_asset_name**|

### Test cases of delete association
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deleteAssociatn_01**|Test the functionality of delete association between two assets<br> Used to create association between two assets|Hit API "http://localhost:3000/fams/v2/associations/{asc-asset-name}",  method : "DELETE"||
|**Bu_deleteAssociatn_02**|Request Body : **cat_id**|1. **cat_id** should be array[string]|1. Pass the **cat_id** as number/string/array[number]/null data type.|
|**Bu_deleteAssociatn_03**|Path parameter : **asc_asset_name** is asset_name|1. **asc_asset_name** should be string and required <br> 2. **asc_asset_name** should be valid asset_name|1. Pass the **asc_asset_name** as number/null data type. <br> 2. Pass **asc_asset_name** blank to check required or not <br> 3. Pass invalid **asc_asset_name**|