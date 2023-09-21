# Project name - Buopso-v2
## Test coverage of view-config and options APIs

### Test cases of update config-list view
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateListViewConfig_01**|Test the functionality of update config-list view|Hit API "http://localhost:3000/fams/v2/views/list",  method : "POST"||
|**Bu_updateListViewConfig_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_updateListViewConfig_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_updateListViewConfig_04**|Request Body - **fields**, Here **fields** is selected field's ids|1. **fields** should be array[string]|1. Pass the **fields** as number/string/array[number]/null data type.|

### Test cases of get config-list view
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getListViewConfig_01**|Test the functionality of get config-list view|Hit API "http://localhost:3000/fams/v2/views/list",  method : "GET"||
|**Bu_getListViewConfig_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_getListViewConfig_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_getListViewConfig_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|

### Test cases of update config-kanban and card view
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateKanbantViewConfig_01**|Test the functionality of update config-kanban and card view|Hit API "http://localhost:3000/fams/v2/views/{view}",  method : "POST"||
|**Bu_updateKanbantViewConfig_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_updateKanbantViewConfig_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_updateKanbantViewConfig_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_updateKanbantViewConfig_05**|Path parameter -**view** <br> **view** are different but request/response are same for kanban and card|1. view should be string and required <br> 2. **view** should accept only kanban and card|1. Pass the **view** as number/null <br> 2. Left blank the **view** in path param <br> 3. Pass **view** except kanban and card|
|**Bu_updateKanbantViewConfig_06**|Request Body - **cardStyle**|1. **cardStyle** should bestring <br> 2. **cardStyle** should accept only default and compact|1. Pass the **cardStyle** as number/null data type. <br> 3. pass **view** except default and compact|
|**Bu_updateKanbantViewConfig_07**|Request Body - **footer** can hide & show|1. **footer** should be boolean and Default:false|1. Pass the **footer** as number/string/null data type.|
|**Bu_updateKanbantViewConfig_08**|Request Body - **fields**, Here **fields** is selected field's ids|1. **fields** should be array[string]|1. Pass the **fields** as number/string/array[number]/null data type.|
|**Bu_updateKanbantViewConfig_09**|Request Body - **icon** can hide/show Header Icon. applicable only in card view|1. **icon** should be boolean and Default:false <br> 2. **icon** should be applicable only with card view|1. Pass the **icon** as number/string/null data type <br> 2. Pass **icon** in the kanban view|

### Test cases of get config-kanban and card view
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateKanbantViewConfig_01**|Test the functionality of get config-kanban and card view|Hit API "http://localhost:3000/fams/v2/views/{view}",  method : "GET"||
|**Bu_updateKanbantViewConfig_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_updateKanbantViewConfig_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_updateKanbantViewConfig_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_updateKanbantViewConfig_05**|Path parameter -**view** <br> **view** are different but request/response are same for kanban and card|1. view should be string and required <br> 2. **view** should accept only kanban and card|1. Pass the **view** as number/null <br> 2. Left blank the **view** in path param <br> 3. Pass **view** except kanban and card|

### Test cases of create/update options
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createOptions_01**|Test the functionality of create/update options|Hit API "http://localhost:3000/fams/v2/options/{opt-id}/editor",  method : "PUT"||
|**Bu_createOptions_02**|Path parameter -**opt_id** <br> **opt_id** is optionsId Same as fieldId. List of options are saved against field.|1. opt_id should be string and required|1. Pass the **opt_id** as number/null <br> 2. Left blank the **opt_id** in path param|
|**Bu_createOptions_03**|Request Body - **add**|[add_test_data](utility.md#add_test_data)|[add_test_step](utility.md#add_test_step)|
|**Bu_createOptions_04**|Request Body : **id** is property of **add** and option_id:- it's mandatory here|[addId_test_data](utility.md#addid_test_data)|[addId_test_step](utility.md#addid_test_step)|
|**Bu_createOptions_05**|Request Body : **label** is property of **add** and label of option which is need to be displayed|[more info](utility.md#add-label_test_data)|[more info](utility.md#add-label_test_step)|
|**Bu_createOptions_06**|Request Body : **pos** is property of **add** and position of option|[add-pos_test_data](utility.md#add-pos_test_data)|[add-pos_test_step](utility.md#add-pos_test_step)|
|**Bu_createOptions_07**|Request Body : **color** is property of **add** and color passed in case of chip dropdown or any other options in which color is needed|[color_test_data](utility.md#color_test_data)|[color_test_step](utility.md#color_test_step)|
|**Bu_createOptions_08**|Request Body - **subLabel** is property of **add**|1. **subLabel** should be string|1. Pass the **subLabel** as number/null data type.|
|**Bu_createOptions_09**|Request Body : **edit**|[edit_test_data](utility.md#edit_test_data)|[edit_test_step](utility.md#edit_test_step)|
|**Bu_createOptions_10**|Request Body : **id** is property of **edit** and option_id:- it's mandatory here|[addId_test_data](utility.md#addid_test_data)|[addId_test_step](utility.md#addid_test_step)|
|**Bu_createOptions_11**|Request Body : **label** is property of **edit** and label of option which is need to be displayed|[add-label_test_data](utility.md#add-label_test_data)|[add-label_test_step](utility.md#add-label_test_step)|
|**Bu_createOptions_12**|Request Body : **pos** is property of **edit** and position of option|[add-pos_test_data](utility.md#add-pos_test_data)|[add-pos_test_step](utility.md#add-pos_test_step)|
|**Bu_createOptions_13**|Request Body : **color** is property of **edit** and color passed in case of chip dropdown or any other options in which color is needed|[color_test_data](utility.md#color_test_data)|[color_test_step](utility.md#color_test_step)|
|**Bu_createOptions_14**|Request Body - **subLabel** is property of **edit**|1. **subLabel** should be string|1. Pass the **subLabel** as number/null data type.|
|**Bu_createOptions_15**|Request Body : **delete**|[delete_test_data](utility.md#delete_test_data)|[delete_test_step](utility.md#delete_test_step)|

### Test cases of get options
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getOptions_01**|Test the functionality of get options|Hit API "http://localhost:3000/fams/v2/options/{opt-id}/editor",  method : "GET"||
|**Bu_getOptions_02**|Path parameter -**opt_id** <br> **opt_id** is optionsId Same as fieldId. List of options are saved against field.|1. opt_id should be string and required|1. Pass the **opt_id** as number/null <br> 2. Left blank the **opt_id** in path param|
|**Bu_getOptions_03**|Query parameter -**page**|[page_test_data](utility.md#page_test_data)|[page_test_step](utility.md#page_test_step)|
|**Bu_getOptions_04**|Query parameter -**rows**|[row_test_data](utility.md#row_test_data)|[row_test_step](utility.md#row_test_step)|
|**Bu_getOptions_05**|Query parameter -**search**|[search_test_data](utility.md#search_test_data)|[search_test_step](utility.md#search_test_step)|

### Test cases of get dropdown list
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getDropdown_01**|Test the functionality of get options|Hit API "http://localhost:3000/fams/v2/options/{opt-id}/editor",  method : "GET"||
|**Bu_getDropdown_02**|Path parameter -**field_id** <br> **field_id**  against which options are saved.|1. field_id should be string and required|1. Pass the **field_id** as number/null <br> 2. Left blank the **field_id** in path param|
|**Bu_getDropdown_03**|Query parameter -**page**|[page_test_data](utility.md#page_test_data)|[page_test_step](utility.md#page_test_step)|
|**Bu_getDropdown_04**|Query parameter -**rows**|[row_test_data](utility.md#row_test_data)|[row_test_step](utility.md#row_test_step)|
|**Bu_getDropdown_05**|Query parameter -**search**|[search_test_data](utility.md#search_test_data)|[search_test_step](utility.md#search_test_step)|
|**Bu_updateKanbantViewConfig_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_updateKanbantViewConfig_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|