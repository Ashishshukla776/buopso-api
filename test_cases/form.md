# Project name - Buopso-v2
## Test coverage of form APIs

### Test cases of create custom form
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createForms_01**|Test the functionality of create custom form <br>  complex property and form of custom type|Hit API "http://localhost:3000/fams/v2/forms",  method : "POST"||
|**Bu_createForms_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_createForms_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_createForms_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_createForms_05**|Request body -**form**|[form_test_data](utility.md)|[form_test_step](utility.md)|
|**Bu_createForms_06**|Request Body : **label** is property of **form** |[label_test_data](utility.md)|[label_test_step](utility.md)|
|**Bu_createForms_07**|Request Body : **width** is property of **form** |[width_test_data](utility.md)|[width_test_step](utility.md)| 
|**Bu_createForms_08**|Request Body : **padding** is property of **form** |[padding_test_data](utility.md)|[padding_test_step](utility.md)| 
|**Bu_createForms_09**|Request body -**containers**|[containers_test_data](utility.md)|[containers_test_step](utility.md)|
|**Bu_createForms_10**|Request Body : **id** is property of **containers** |[id_test_data](utility.md)|[id_test_step](utility.md)|
|**Bu_createForms_11**|Request Body : **cols** is property of **containers** |[cols_test_data](utility.md)|[cols_test_step](utility.md)|
|**Bu_createForms_12**|Request Body : **spacing** is property of **containers** |[spacing_test_data](utility.md)|[spacing_test_step](utility.md)|
|**Bu_createForms_13**|Request Body : **fields** is property of **containers** and Array of property-id |[fields_test_data](utility.md)|[fields_test_step](utility.md)|
|**Bu_createForms_14**|Request Body : **fields**|[fields_1_test_data](utility.md)|[fields_1_test_step](utility.md)|
|**Bu_createForms_15**|Request Body : **field_id** is property of **fields**|[field-id_test_data](utility.md)|[field-id_test_step](utility.md)|
|**Bu_createForms_16**|Request Body : **id** is property of **field_id**|[fields_record_id_test_data](utility.md)|[fields_record_id_test_step](utility.md)|
|**Bu_createForms_17**|Request Body : **label** is property of **field_label**|[label_1_test_data](utility.md)|[label_1_test_step](utility.md)|
|**Bu_createForms_18**|Request Body : **prop** is property of **field_id**|[prop_test_data](utility.md)|[prop_test_step](utility.md)|
|**Bu_createForms_19**|Request Body : **placeholder** is placeholdererty of **field_id**|[placeholder_test_data](utility.md)|[placeholder_test_step](utility.md)|
|**Bu_createForms_20**|Request Body : **required** is property of **field_id**|[required_test_data](utility.md)|[required_test_step](utility.md)|
|**Bu_createForms_21**|Request Body : **options** is property of **field_id**|[options_test_data](utility.md)|[options_test_step](utility.md)|
|**Bu_createForms_22**|Request Body : **add** is property of **options**|[add_test_data](utility.md)|[add_test_step](utility.md)|
|**Bu_createForms_23**|Request Body : **id** is property of **add** and option_id:- it's not mandatory here|[options_test_data](utility.md)|[options_test_step](utility.md)|
|**Bu_createForms_24**|Request Body : **label** is property of **add** and label of option which is need to be displayed|[add-label_test_data](utility.md)|[add-label_test_step](utility.md)|
|**Bu_createForms_25**|Request Body : **pos** is property of **add** and position of option|[add-pos_test_data](utility.md)|[add-pos_test_step](utility.md)|
|**Bu_createForms_26**|Request Body : **color** is property of **add** and color passed in case of chip dropdown or any other options in which color is needed|[color_test_data](utility.md)|[color_test_step](utility.md)|
|**Bu_createForms_27**|Request Body : **edit** is property of **options**|[edit_test_data](utility.md)|[edit_test_step](utility.md)|
|**Bu_createForms_28**|Request Body : **id** is property of **edit** and option_id:- it's not mandatory here|[addId_test_data](utility.md)|[addId_test_step](utility.md)|
|**Bu_createForms_29**|Request Body : **label** is property of **edit** and label of option which is need to be displayed|[add-label_test_data](utility.md)|[add-label_test_step](utility.md)|
|**Bu_createForms_30**|Request Body : **pos** is property of **edit** and position of option|[add-pos_test_data](utility.md)|[add-pos_test_step](utility.md)|
|**Bu_createForms_31**|Request Body : **color** is property of **edit** and color passed in case of chip dropdown or any other options in which color is needed|[color_test_data](utility.md)|[color_test_step](utility.md)|
|**Bu_createForms_32**|Request Body : **delete** is property of **options**|[delete_test_data](utility.md)|[delete_test_step](utility.md)|
|**Bu_createForms_33**|Request Body : **newCreated** is property of **field_id** and When new property is attached to form it should pass true|[newCreated_test_data](utility.md)|[newCreated_test_step](utility.md)|

### Test cases of update custom form
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateForms_01**|Test the functionality of create custom form <br>  complex property and form of custom type|Hit API "http://localhost:3000/fams/v2/forms",  method : "PATCH"||
|**Bu_updateForms_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_updateForms_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_updateForms_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_updateForms_05**|Request body -**form**|[form_test_data](utility.md)|[form_test_step](utility.md)|
|**Bu_updateForms_06**|Request Body : **label** is property of **form** |[label_test_data](utility.md)|[label_test_step](utility.md)|
|**Bu_updateForms_07**|Request Body : **width** is property of **form** |[width_test_data](utility.md)|[width_test_step](utility.md)| 
|**Bu_updateForms_08**|Request Body : **padding** is property of **form** |[padding_test_data](utility.md)|[padding_test_step](utility.md)| 
|**Bu_updateForms_09**|Request body -**containers**|[containers_test_data](utility.md)|[containers_test_step](utility.md)|
|**Bu_updateForms_10**|Request Body : **id** is property of **containers** |[id_test_data](utility.md)|[id_test_step](utility.md)|
|**Bu_updateForms_11**|Request Body : **cols** is property of **containers** |[cols_test_data](utility.md)|[cols_test_step](utility.md)|
|**Bu_updateForms_12**|Request Body : **spacing** is property of **containers** |[spacing_test_data](utility.md)|[spacing_test_step](utility.md)|
|**Bu_updateForms_13**|Request Body : **fields** is property of **containers** and Array of property-id |[fields_test_data](utility.md)|[fields_test_step](utility.md)|
|**Bu_updateForms_14**|Request Body : **fields**|[fields_1_test_data](utility.md)|[fields_1_test_step](utility.md)|
|**Bu_updateForms_15**|Request Body : **field_id** is property of **fields**|[field-id_test_data](utility.md)|[field-id_test_step](utility.md)|
|**Bu_updateForms_16**|Request Body : **id** is property of **field_id**|[fields_record_id_test_data](utility.md)|[fields_record_id_test_step](utility.md)|
|**Bu_updateForms_17**|Request Body : **label** is property of **field_label**|[label_1_test_data](utility.md)|[label_1_test_step](utility.md)|
|**Bu_updateForms_18**|Request Body : **prop** is property of **field_id**|[prop_test_data](utility.md)|[prop_test_step](utility.md)|
|**Bu_updateForms_19**|Request Body : **placeholder** is placeholdererty of **field_id**|[placeholder_test_data](utility.md)|[placeholder_test_step](utility.md)|
|**Bu_updateForms_20**|Request Body : **required** is property of **field_id**|[required_test_data](utility.md)|[required_test_step](utility.md)|
|**Bu_updateForms_21**|Request Body : **options** is property of **field_id**|[options_test_data](utility.md)|[options_test_step](utility.md)|
|**Bu_updateForms_22**|Request Body : **add** is property of **options**|[add_test_data](utility.md)|[add_test_step](utility.md)|
|**Bu_updateForms_23**|Request Body : **id** is property of **add** and option_id:- it's not mandatory here|[options_test_data](utility.md)|[options_test_step](utility.md)|
|**Bu_updateForms_24**|Request Body : **label** is property of **add** and label of option which is need to be displayed|[add-label_test_data](utility.md)|[add-label_test_step](utility.md)|
|**Bu_updateForms_25**|Request Body : **pos** is property of **add** and position of option|[add-pos_test_data](utility.md)|[add-pos_test_step](utility.md)|
|**Bu_updateForms_26**|Request Body : **color** is property of **add** and color passed in case of chip dropdown or any other options in which color is needed|[color_test_data](utility.md)|[color_test_step](utility.md)|
|**Bu_updateForms_27**|Request Body : **edit** is property of **options**|[edit_test_data](utility.md)|[edit_test_step](utility.md)|
|**Bu_updateForms_28**|Request Body : **id** is property of **edit** and option_id:- it's not mandatory here|[addId_test_data](utility.md)|[addId_test_step](utility.md)|
|**Bu_updateForms_29**|Request Body : **label** is property of **edit** and label of option which is need to be displayed|[add-label_test_data](utility.md)|[add-label_test_step](utility.md)|
|**Bu_updateForms_30**|Request Body : **pos** is property of **edit** and position of option|[add-pos_test_data](utility.md)|[add-pos_test_step](utility.md)|
|**Bu_updateForms_31**|Request Body : **color** is property of **edit** and color passed in case of chip dropdown or any other options in which color is needed|[color_test_data](utility.md)|[color_test_step](utility.md)|
|**Bu_updateForms_32**|Request Body : **delete** is property of **options**|[delete_test_data](utility.md)|[delete_test_step](utility.md)|
|**Bu_updateForms_33**|Path Parameter : **form_id**|[formId_test_data](utility.md)|[formId_test_step](utility.md)|

### Test cases of get custom form
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getForms_01**|Test the functionality of get custom form|Hit API "http://localhost:3000/fams/v2/forms/{form_id}",  method : "GET"||
|**Bu_getForms_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_getForms_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_getForms_04**|Query parameter -**catId** <br> **catId** is Category_id(Pipeline id)|[catId_test_data](utility.md)|[catId_test_step](utility.md)|
|**Bu_getForms_05**|Query parameter -**fieldIds** <br> **fieldIds** will be comma separated fields in case of custom records data|**fieldIds** should be string|Pass **fieldIds** as number/null|
|**Bu_getForms_06**|Path Parameter : **form_id**|[formId_test_data](utility.md)|[formId_test_step](utility.md)|

### Test cases of delete custom form
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deleteForms_01**|Test the functionality of delete custom form|Hit API "http://localhost:3000/fams/v2/forms",  method : "DELETE"||
|**Bu_deleteForms_02**|Request Body -**id**|**id** should be array[string]|Pass the **id** as array[number]/string/number/null|

### Test cases of create custom form records
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_createFormRecords_01**|Test the functionality of createcustom record against asset|Hit API "http://localhost:3000/fams/v2/forms/{form-id}/records",  method : "POST"||
|**Bu_createFormRecords_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_createFormRecords_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_createFormRecords_04**|Query parameter -**assetId** <br> **assetId** is asset_record_id|**assetId** should be string, required and valid|1. Pass **assetId** as number/null <br> 2. Left blank **assetId** in query param <br> 3. Pass invalid **assetId**|
|**Bu_createFormRecords_05**|Request Body -**field_id**|**field_id** should be string|Pass **field_id** as number/null|
|**Bu_createFormRecords_06**|Path Parameter : **form_id**|[formId_test_data](utility.md)|[formId_test_step](utility.md)|

### Test cases of update custom form records
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_updateFormRecord_01**|Test the functionality of update custom record against asset|Hit API "http://localhost:3000/fams/v2/forms/{form-id}/records",  method : "PATCH"||
|**Bu_updateFormRecord_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_updateFormRecord_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_updateFormRecord_04**|Query parameter -**assetId** <br> **assetId** is asset_record_id|**assetId** should be string, required and valid|1. Pass **assetId** as number/null <br> 2. Left blank **assetId** in query param <br> 3. Pass invalid **assetId**|
|**Bu_updateFormRecord_05**|Request Body -**field_id**|**field_id** should be string|Pass **field_id** as number/null|
|**Bu_updateFormRecord_06**|Request Body -**id**|**id** should be string and required|1. Pass **fieldIds** as number/null <br> 2. Left blank **id** in request body|
|**Bu_updateFormRecord_07**|Path Parameter : **form_id**|[formId_test_data](utility.md)|[formId_test_step](utility.md)|

### Test cases of get custom form records
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_getFormRecord_01**|Test the functionality of get custom record against asset|Hit API "http://localhost:3000/fams/v2/forms/{form-id}/records",  method : "GET"||
|**Bu_getFormRecord_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_getFormRecord_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_getFormRecord_04**|Query parameter -**assetId** <br> **assetId** is asset_record_id|**assetId** should be string, required and valid|1. Pass **assetId** as number/null <br> 2. Left blank **assetId** in query param <br> 3. Pass invalid **assetId**|
|**Bu_getFormRecord_05**|Query parameter -**page**|[page_test_data](utility.md)|[page_test_step](utility.md)|
|**Bu_getFormRecord_06**|Query parameter -**rows**|[row_test_data](utility.md)|[row_test_step](utility.md)|
|**Bu_getFormRecord_07**|Path Parameter : **form_id**|[formId_test_data](utility.md)|[formId_test_step](utility.md)|

### Test cases of delete custom form records
TC_id|Description|Test data|Test step|
|:---|:----------|:--------|:--------|
|**Bu_deleteFormRecord_01**|Test the functionality of delete custom record against asset|Hit API "http://localhost:3000/fams/v2/forms/{form-id}/records",  method : "DELETE"||
|**Bu_deleteFormRecord_02**|Query parameter -**Asset_name**|[asset_test_data](utility.md)|[asset_test_step](utility.md)|
|**Bu_deleteFormRecord_03**|Query parameter -**module_name**|[module_test_data](utility.md)|[module_test_step](utility.md)|
|**Bu_deleteFormRecord_04**|Query parameter -**assetId** <br> **assetId** is asset_record_id|**assetId** should be string, required and valid|1. Pass **assetId** as number/null <br> 2. Left blank **assetId** in query param <br> 3. Pass invalid **assetId**|

|**Bu_deleteFormRecord_05**|Request Body -**id**|**id** should be array[string] and required|1. Pass **fieldIds** as /string/array[number]number/null <br> 2. Left blank **id** in request body|
|**Bu_deleteFormRecord_06**|Path Parameter : **form_id**|[formId_test_data](utility.md)|[formId_test_step](utility.md)|

