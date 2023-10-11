
### winChance_test_data
1. **winChance** should be number and required
```json
{
    "add": [{
        "id": "9cf47536-7404-4fd6-b8f0-7a521cddf77d",
        "label": "Ball",
        "winChance": "Won",
        "color": "#ec3eda",
        "pos": "21223",
        "dispo": true
    }]
}
```

### winChance_expected_result
```json
{
    "success": false,
    "message": "winChance should be string OR Invalid input",
    "result": ""
}

{
    "success": false,
    "message": "winChance is required",
    "result": ""
}
```

### winChance_actual_result
1. **winChance** is accepting string/number/null
2. **winChance** is accepting blank value
```json
{
    "success": true,
    "message": "Request successful.",
    "result": [{
        "label": "Ball",
        "winChance": "Won",
        "color": "#ec3eda",
        "pos": "21223",
        "dispo": true,
        "_id": "65264bdeb8d77f9c734c0e3f"
    }]
}
```

### color_test_data
1. **color** should be number and required
```json
{
    "add": [{
        "id": "9cf47536-7404-4fd6-b8f0-7a521cddf77d",
        "label": "Ball",
        "color": "Won",
        "color": "#ec3eda",
        "pos": "21223",
        "dispo": true
    }]
}
```

### color_expected_result
```json
{
    "success": false,
    "message": "color should be string OR Invalid input",
    "result": ""
}

{
    "success": false,
    "message": "color is required",
    "result": ""
}
```

### color_actual_result
1. **color** is accepting string/number/null
2. **color** is accepting blank value
```json
{
    "success": true,
    "message": "Request successful.",
    "result": [{
        "label": "Ball",
        "winChance": "Won",
        "color": "#ec3eda",
        "pos": "21223",
        "dispo": true,
        "_id": "65264bdeb8d77f9c734c0e3f"
    }]
}
```

### pos_test_data
1. **pos** should be number and required
```json
{
    "add": [{
        "id": "9cf47536-7404-4fd6-b8f0-7a521cddf77d",
        "label": "Ball",
        "winChance": "Won",
        "color": "#ec3eda",
        "pos": "21223",
        "dispo": true
    }]
}
```

### pos_expected_result
```json
{
    "success": false,
    "message": "pos should be number OR Invalid input",
    "result": ""
}
```

### pos_actual_result
1. **dispo** is accepting string/number/null
```json
{
    "success": true,
    "message": "Request successful.",
    "result": [{
        "label": "Ball",
        "winChance": "Won",
        "color": "#ec3eda",
        "pos": "21223",
        "dispo": true,
        "_id": "65264bdeb8d77f9c734c0e3f"
    }]
}
```


### dispo_test_data
1. **dispo** should be boolean and required
```json
{
    "add": [{
        "id": "9cf47536-7404-4fd6-b8f0-7a521cddf77d",
        "label": "Call",
        "winChance": "Won",
        "color": "#ec3eda",
        "pos": 10,
        "dispo":"21223"
    }]
}
```

### dispo_expected_result
```json
{
    "success": false,
    "message": "dispo should be boolean OR Invalid input",
    "result": ""
}
```

### dispo_actual_result
1. **dispo** is accepting string/number/null
```json
{
    "success": true,
    "message": "Request successful.",
    "result": [{
        "label": "Call",
        "winChance": "Won",
        "color": "#ec3eda",
        "pos": 10,
        "dispo": "21223",
        "_id": "65264bdeb8d77f9c734c0e3f"
    }]
}
```




 