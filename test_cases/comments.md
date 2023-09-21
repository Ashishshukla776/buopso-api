# Project name - Buopso-v2
## Test coverage of comments APIs

### Test cases of create comment
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createComments_01**|Test the functionality of create comments|Hit API "http://localhost:3000/tools/v2/comments",  method : "POST"||
|**Bu_createComments_02**|Query parameter -**noteId** : noteId to which the comment will be attached|**noteId** should be string and required|1. Pass the **noteId** as number/null <br> 2. Pass **noteId** blank|
|**Bu_createComments_03**|Request body -**body**|[body_test_data](utility.md#body_test_data)|[body_test_step](utility.md#body_test_step)|
|**Bu_createComments_04**|Request body -**attachments**|[attachments_test_data](utility.md#attachments_test_data)|[attachments_test_step](utility.md#attachments_test_step)|
|**Bu_createComments_05**|Request body -**id**:property of **attachments**|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_createComments_06**|Request body -**name**:property of **attachments**|[name_test_data](utility.md#name_test_data)|[name_test_step](utility.md#name_test_step)|
|**Bu_createComments_07**|Request body -**url**:property of **attachments**|[url_test_data](utility.md#url_test_data)|[url_test_step](utility.md#url_test_step)|
|**Bu_createComments_08**|Request body -**mimetype**:property of **attachments**|[mimetype_test_data](utility.md#mimetype_test_data)|[mimetype_test_step](utility.md#mimetype_test_step)|
|**Bu_createComments_09**|Request body -**source**:property of **attachments**|[source_test_data](utility.md#source_test_data)|[source_test_step](utility.md#source_test_step)|

### Test cases of update comment
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateComments_01**|Test the functionality of update comments|Hit API "http://localhost:3000/tools/v2/comments",  method : "PUT"||
|**Bu_updateComments_02**|Query parameter -**noteId** : noteId to which the comment will be attached|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_updateComments_03**|Request body -**id**|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_updateComments_04**|Request body -**body**|[body_test_data](utility.md#body_test_data)|[body_test_step](utility.md#body_test_step)|
|**Bu_updateComments_05**|Request body -**attachments**|[attachments_test_data](utility.md#attachments_test_data)|[attachments_test_step](utility.md#attachments_test_step)|
|**Bu_updateComments_06**|Request body -**id**:property of **attachments**|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_updateComments_07**|Request body -**name**:property of **attachments**|[name_test_data](utility.md#name_test_data)|[name_test_step](utility.md#name_test_step)|
|**Bu_updateComments_08**|Request body -**url**:property of **attachments**|[url_test_data](utility.md#url_test_data)|[url_test_step](utility.md#url_test_step)|
|**Bu_updateComments_09**|Request body -**mimetype**:property of **attachments**|[mimetype_test_data](utility.md#mimetype_test_data)|[mimetype_test_step](utility.md#mimetype_test_step)|
|**Bu_updateComments_10**|Request body -**source**:property of **attachments**|[source_test_data](utility.md#source_test_data)|[source_test_step](utility.md#source_test_step)|

### Test cases of get comments
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getComments_01**|Test the functionality of get comments|Hit API "http://localhost:3000/tools/v2/comments",  method : "GET"||
|**Bu_getComments_02**|Query parameter -**page**|[page_test_data](utility.md#page_test_data)|[page_test_step](utility.md#page_test_step)|
|**Bu_getComments_03**|Query parameter -**rows**|[row_test_data](utility.md#row_test_data)|[row_test_step](utility.md#row_test_step)|
|**Bu_getComment_04**|Query parameter -**noteId** : noteId to which the comment will be attached|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|

### Test cases of delete comments
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deleteComments_01**|Query parameter -**noteId** : noteId to which the comment will be attached|[id_test_data](utility.md#id_test_data)|[id_test_step](utility.md#id_test_step)|
|**Bu_deleteComments_02**|Request Body : **ids**|**ids** should be array[string] and required|Pass the **ids** as string/number/array[number]/null <br> 2. Pass **ids** field blank|

