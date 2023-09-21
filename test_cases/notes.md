# Project name - Buopso-v2
## Test coverage of notes APIs

### Test cases of create note
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createNote_01**|Test the functionality of create note. Every note must be associated with one or more than one actors|Hit API "http://localhost:3000/tools/v2/notes",  method : "POST"||
|**Bu_createNote_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_createNote_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_createNote_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_createNote_05**|Request body -**body**|[body_test_data](utility.md#body_test_data)|[body_test_step](utility.md#body_test_step)|
|**Bu_createNote_06**|Request body -**attachments**|[attachments_test_data](utility.md#attachments_test_data)|[attachments_test_step](utility.md#attachments_test_step)|
|**Bu_createNote_07**|Request body -**id**:property of attachments|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_createNote_08**|Request body -**name**:property of attachments|[name_test_data](utility.md#name_test_data)|[name_test_step](utility.md#name_test_step)|
|**Bu_createNote_09**|Request body -**url**:property of attachments|[url_test_data](utility.md#url_test_data)|[url_test_step](utility.md#url_test_step)|
|**Bu_createNote_10**|Request body -**mimetype**:property of attachments|[mimetype_test_data](utility.md#mimetype_test_data)|[mimetype_test_step](utility.md#mimetype_test_step)|
|**Bu_createNote_11**|Request body -**source**:property of attachments|[source_test_data](utility.md#source_test_data)|[source_test_step](utility.md#source_test_step)|
|**Bu_createNote_12**|Request body -**associations** : Create/Update associations <br> Example:{"lead":["lead-id-1","lead-id-2"],"deal":["deal-id-1","deal-id-2"]}|[**associations**_test_data](utility.md#associations_test_data)|[**associations**_test_step](utility.md#associations_test_step)|
|**Bu_createNote_13**|Request body -**actorName**:property of associations|[actorName_test_data](utility.md#actorName_test_data)|[actorName_test_step](utility.md#actorName_test_data)|

### Test cases of update note
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateNote_01**|Test the functionality of update note.|Hit API "http://localhost:3000/tools/v2/notes",  method : "PUT"||
|**Bu_updateNote_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_updateNote_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_updateNote_04**|Request body -**body**|[body_test_data](utility.md#body_test_data)|[body_test_step](utility.md#body_test_step)|
|**Bu_updateNote_05**|Request body -**id**|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_updateNote_06**|Request body -**attachments**|[attachments_test_data](utility.md#attachments_test_data)|[attachments_test_step](utility.md#attachments_test_step)|
|**Bu_updateNote_07**|Request body -**id**:property of attachments|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_updateNote_08**|Request body -**name**:property of attachments|[name_test_data](utility.md#name_test_data)|[name_test_step](utility.md#name_test_step)|
|**Bu_updateNote_09**|Request body -**url**:property of attachments|[url_test_data](utility.md#url_test_data)|[url_test_step](utility.md#url_test_step)|
|**Bu_updateNote_10**|Request body -**mimetype**:property of attachments|[mimetype_test_data](utility.md#mimetype_test_data)|[mimetype_test_step](utility.md#mimetype_test_step)|
|**Bu_updateNote_11**|Request body -**source**:property of attachments|[source_test_data](utility.md#source_test_data)|[source_test_step](utility.md#source_test_step)|
|**Bu_updateNote_12**|Request body -**associations** : Create/Update associations <br> Example:{"lead":["lead-id-1","lead-id-2"],"deal":["deal-id-1","deal-id-2"]}|[**associations**_test_data](utility.md#associations_test_data)|[**associations**_test_step](utility.md#associations_test_step)|
|**Bu_updateNote_13**|Request body -**actorName**:property of associations|[actorName_test_data](utility.md#actorName_test_data)|[actorName_test_step](utility.md#actorName_test_data)|

### Test cases of get note
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getNote_01**|Test the functionality of get note|Hit API "http://localhost:3000/tools/v2/notes",  method : "GET"||
|**Bu_getNote_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_getNote_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_getNote_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_getNote_05**|Query parameter -**assetId** <br> **assetId** is asset_record_id|**assetId** should be string, required and valid|1. Pass **assetId** as number/null <br> 2. Left blank **assetId** in query param <br> 3. Pass invalid **assetId**|
|**Bu_getNote_06**|Query parameter -**page**|[page_test_data](utility.md#page_test_data)|[page_test_step](utility.md#page_test_step)|
|**Bu_getNote_07**|Query parameter -**rows**|[row_test_data](utility.md#row_test_data)|[row_test_step](utility.md#row_test_step)|
|**Bu_getNote_08**|Query parameter -**search**|[search_test_data](utility.md#search_test_data)|[search_test_step](utility.md#search_test_step)|

### Test cases of delete note
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deleteNote_01**|Test the functionality of delete note|Hit API "http://localhost:3000/tools/v2/notes",  method : "DELETE"||
|**Bu_deleteNote_02**|Request Body : **ids**|**ids** should be array[string] and required|Pass the **ids** as string/number/array[number]/null <br> 2. Pass **ids** field blank|

### Test cases of like
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_link_01**|Test the functionality of like post/comment/notes etc|Hit API "http://localhost:3000/tools/v2/like/{tool}/{tool-id}",  method : "POST"||
|**Bu_link_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_link_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_link_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_link_05**|Path parameter -**tool** <br> **tool**  which can be liked/disliked|**tool** should be string and required<br> 2. **tool** should accept only note and comment|1. Pass **tool** as number/null <br> 2. Left blank **tool** in path param <br> 3. Pass **tool** except note and comment|
|**Bu_link_06**|Path parameter -**tool_id**|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_link_07**|Request Body -**like**|**like** should be boolean and required|1. Pass **like** as string/number/null <br> 2. Left blank **like** in request body|

### Test cases of pin
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_pin_01**|Test the functionality of pin note(any tool)|Hit API "http://localhost:3000/tools/v2   /pin/{tool}",  method : "POST"||
|**Bu_pin_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md#asset_test_data)|[asset_test_step](utility.md#asset_test_step)|
|**Bu_pin_03**|Query parameter -**module_name**|[module_test_data](utility.md#module_test_data)|[module_test_step](utility.md#module_test_step)|
|**Bu_pin_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md#catid_test_data)|[catId_test_step](utility.md#catid_test_step)|
|**Bu_pin_05**|Path parameter -**tool** <br> **tool**  which can be liked/disliked|**tool** should be string and required<br> 2. **tool** should accept only note|1. Pass **tool** as number/null <br> 2. Left blank **tool** in path param <br> 3. Pass **tool** except note|
|**Bu_pin_06**|Request body -**id** is **tool_id** here|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_pin_07**|Request Body -**pin**|**pin** should be boolean and required|1. Pass **pin** as string/number/null <br> 2. Left blank **pin** in request body|