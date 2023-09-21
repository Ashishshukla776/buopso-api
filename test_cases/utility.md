
### asset_test_data
Request - Query parameter -**Asset_name**
 1. **Asset_name** should be String and required.
 2. **Asset_name** should accept only lead,approval,customer,company,deal,task,meeting
 

### asset_test_step
1. pass the **Asset_name** as number/null data type. 
2. Pass the **Asset_name** as blank to check required or not.
3. pass the **Asset_name** except lead,approval,customercompany,deal,task,meeting

### module_test_data
Request - Query parameter - module_name
1. module_name should be String and required
2. module name should accept only one,lms,cnf,crm,pms

### module_test_step
1. pass the **module_name** as number/null data type.
2. Pass the module name blank to check required or not.
3. pass the **module_name** except one,lms,cnf,crm,pms

### catId_test_data
Request - Query parameter : **catId** 
1. **catId** should be String and required
2. **catId** should be valid/correct

### catId_test_step
1. pass the **catId** as number/null data type.
2. Pass the **catId** blank to check required or not.
3. pass the invalid **catId**

### page_test_data
Request - Query parameter :**page**
1. page should be number and defauld rows =1

### page_test_step
1. pass the page as string/null data type.

### row_test_data
Request - Query parameter -**rows** 
 1. rows should be Number and defauld rows =25
   
### row_test_step
1. pass the rows as String/null data type

### search_test_data
Request - Query parameter -**search**
1. **search** should be String

### search_test_step
1. pass the **search** as number/null data type

### form_test_data
 Request Body : **form** 
1. **form** should be object and required

### form_test_step
1. pass the **form** as number/string/null data type.
1. Pass the **form** blank to check required or not.

### label_test_data
 Request Body : **label** 
1. **label** should be object and required

### label_test_step
1. pass the **label** as number/string/null data type.
2. Pass the **label** blank to check required or not.

### width_test_data
1. **width** should be number
2. **width** should accept only 500,600,700 and defauld 500 

### width_test_step
1. Pass the **width** as string/null data type 
2. Pass **width** except 500,600 and 700

### padding_test_data
1. **padding** should be array[number]
2. **padding** should <= 4 items
 
### padding_test_step
1. Pass the **padding** as string/number/array[string]/null data type
2. Pass **padding** >= 4 items

### containers_test_data
1. 1. **containers** should be array[object]
2. 1. **containers** should be required
 
### containers_test_step
1. pass the **containers** as number/string/null data type.
2. Pass the **containers** blank to check required or not.
  
### id_test_data     
1. **id** should be string
2. **id** should be required
 
### id_test_step
1. pass the **id** as number/null data type.
2. Pass the **id** blank to check required or not.
   
### cols_test_data
1. **cols** should be number
2.  **cols** should >= 1 and <= 3 and defauld 1
 
### cols_test_step
1. pass the **cols** as string/null data type.
2. Pass **cols** >= 4

### spacing_test_data
1. **spacing** should be number
2.  **spacing** should >=8 and defauld 8
 
### spacing_test_step
1. pass the **spacing** as string/null data type.
2. Pass **spacing** >= 1 items and <= 3 items

### fields_test_data
1. **fields** should be array[string]
2.  **fields** should >=8 and defauld 8
 
### [fields_test_step]
1. pass the **fields** as string/number/array[number]/null data type.
2. Pass **fields** >= 4 items
   
### fields_1_test_data
1. **fields** should be object
2. **fields** should required
 
### [fields_1_test_step]
1. pass the **fields** as string/number/null data type.
2. Pass **fields** blank to check required or not
   
### field-id_test_data
1. **field-id** should be object
 
### [field-id_test_step]
1. pass the **field-id** as string/number/null data type.

### fields_record_id_test_data
1. **id** should be string
2. **id** should required
 
### [fields_record_id_test_step]
1. pass the **id** as number/null data type.
2. Pass **id** blank to check required or not

### label_1_test_data
1. **label** should be string
2. **label** should required
 
### [label_1_test_step]
1. pass the **label** as number/null data type.
2. Pass **label** blank to check required or not

### prop_test_data
1. **prop** should be string
2. **prop** should required
 
### [prop_test_step]
1. pass the **prop** as number/null data type.
2. Pass **prop** blank to check required or not

### placeholder_test_data
1. **placeholder** should be string
 
### [placeholder_test_step]
1. pass the **placeholder** as number/null data type

### required_test_data
1. **required** should be boolean
 
### [required_test_step]
1. pass the **required** as  number/string/null data type

### options_test_data
1. **options** should be object
 
### [options_test_step]
1. pass the **options** as  number/string/null data type

### add_test_data
1. **add** should be array[object]
2. **add** should required
 
### [add_test_step]
1. pass the **add** as number/string/null data type.
2. Pass **add** blank to check required or not

### addId_test_data
1. **id** should be string
2. **id** will required(applicable in create custom form with edit field and create/update option)
3. **id** should valid (edit)
 
### [addId_test_step]
1. pass the **id** as number/null data type.
2. Pass **id** blank to check required or not(applicable only in edit)
3. Pass invalid **id** (applicable only in edit)

### add-label_test_data
1. **label** should be string
2. **label** will required (not applicable only in edit)
 
### [add-label_test_step]
1. pass the **label** as number/null data type.
2. Pass **label** blank to check required or not(not applicable in create custom form with edit field)

### add-pos_test_data
1. **pos** should be string
2. **pos** will required (not applicable in create custom form with edit field)
 
### [add-pos_test_step]
1. pass the **pos** as number/null data type.
2. Pass **pos** blank to check required or not(not applicable in create custom form with edit field)

### color_test_data
1. **color** should be string
 
### [color_test_step]
1. pass the **color** as number/null data type.

### edit_test_data
1. **edit** should be array[object]
2. **edit** should required
3. **Note** : **edit** array[object] contain same value of **add** but only **id** will be required
### [edit_test_step]
1. pass the **edit** as number/string/null data type.
2. Pass **edit** blank to check required or not

### delete_test_data
1. **delete** should be array[string]
2. **delete** should required

### [delete_test_step]
1. pass the **delete** as number/string/null data type.
2. Pass **delete** blank to check required or not

### newCreated_test_data
1. **newCreated** should be boolean
2. **newCreated** should be Default false

### [newCreated_test_step]
1. pass the **newCreated** as number/string/null data type.
2. Pass **newCreated** blank to check required or not

### formId_test_data
1. **form_id** should be string
2. **form_id** should be required
3. **form_id** should be valid

### [formId_test_step]
1. pass the **form_id** as number/null data type.
2. Pass **form_id** blank to check required or not
3. Pass invalid **form_id**

### body_test_data
1. **body** should be string
2. **body** should be required

### body_test_step
1. Pass the **body** as number/null data type
2. **body** field left blank

### attachments_test_data
1. **attachments** should be array[Attachment]
2. **attachments** should be required

### attachments_test_step
1. Pass the **attachments** as string/number/null data type
2. **attachments** field left blank

### name_test_data
1. **name** should be string
2. **name** should be required

### name_test_step
1. Pass the **name** as number/null data type
2. **name** field left blank

### url_test_data
1. **url** should be string
2. **url** should be required

### url_test_step
1. Pass the **url** as number/null data type
2. **url** field left blank

### mimetype_test_data
1. **mimetype** should be string
2. **mimetype** should be required

### mimetype_test_step
1. Pass the **mimetype** as number/null data type
2. **mimetype** field left blank

### sizee_test_data
1. **sizee** should be string
2. **sizee** should be required

### sizee_test_step
1. Pass the **sizee** as number/null data type
2. **sizee** field left blank

### source_test_data
1. **source** should be string
2. **source** should accept only direct and drive

### source_test_step
1. Pass the **source** as number/null data type
2. Pass the **source** except direct and drive

### associations_test_data
1. **associations** should be required

### associations_test_step
1. Pass the **associations** field blank 

### actorName_test_data
1. **actorName** should be array[string]

### actorName_test_step
1. Pass the **actorName** as number/string/null data type 




 