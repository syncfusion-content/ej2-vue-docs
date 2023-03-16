---
layout: post
title: Persisting data in server in Vue Grid component | Syncfusion
description: Learn here all about Persisting data in server in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Persisting data in server 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Persisting data in server in Vue Grid component

Edited data can be persisted in the database using the RESTful web services.

All the CRUD operations in the grid are done through [`DataManager`](../../data).
The [`DataManager`](../../data) has an option to bind all the CRUD related data in server-side.

> For your information, the ODataAdaptor persists data in the server as per OData protocol.

In the below section, we have explained how to get the edited data details on the server-side using the
[`UrlAdaptor`](../../data/adaptors/#url-adaptor).

## Using URL adaptor

You can use the [`UrlAdaptor`](../../data/adaptors/#url-adaptor) of [`DataManager`](../../data) when binding data source from remote data.
In the initial load of grid, data are fetched from remote data and bound to the grid using **url** property of [`DataManager`](../../data).
You can map The CRUD operation in grid can be mapped to server-side Controller actions using the properties
**insertUrl**, **removeUrl**, **updateUrl**, **crudUrl** and **batchUrl**.

To learn about Server side CRUD operation with UrlAdaptor, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=X4UlR-Q_AtI" %}

The following code example describes the above behavior.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: new DataManager({
        url: "Home/DataSource",
        updateUrl: "Home/Update",
        insertUrl: "Home/Insert",
        removeUrl: "Home/Delete",
        adaptor: new UrlAdaptor
    }),
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true },
      customerIDRules: { required: true, minLength: 3 }
    };
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

```

Also, when using the [`UrlAdaptor`](../../data/adaptors/#url-adaptor), you need to return the data as JSON from the controller action and the JSON object must contain
a property as **result** with dataSource as its value and one more property **count** with the dataSource total records count as its value.

The following code example describes the above behavior.

```ts
public ActionResult DataSource(DataManager dm)
{
    var DataSource = OrderRepository.GetAllRecords();
    DataResult result = new DataResult();
    result.result = DataSource.Skip(dm.Skip).Take(dm.Take).ToList();
    result.count = result.result.Count;
    return Json(result, JsonRequestBehavior.AllowGet);
}

public class DataResult
{
    public List<EditableOrder> result { get; set; }
    public int count { get; set; }
}

```

### Insert record

Using the **insertUrl** property, you can specify the controller action mapping URL to perform insert operation on the server-side.

The following code example describes the above behavior.

```ts
public ActionResult Insert(EditableOrder value)
{
    //Insert record in database
}

```

The newly added record details are bound to the **value** parameter. Please refer to the following screenshot.

![Insert](../images/insert.jpg)

### Update record

Using the **updateUrl** property, the controller action mapping URL can be specified to perform save/update operation on the server-side.

The following code example describes the previous behavior.

```ts
public ActionResult Update(EditableOrder value)
{
    //Update record in database
}

```

The updated record details are bound to the **value** parameter. Please refer to the following screenshot.

![Update](../images/update.jpg)

### Delete record

Using the **removeUrl** property, the controller action mapping URL can be specified to perform delete operation on the server-side.

The following code example describes the previous behavior.

```ts
public ActionResult Delete(int key)
{
    //Delete record in database
}

```

The deleted record primary key value is bound to the **key** parameter. Please refer to the following screenshot.

![Delete](../images/delete.jpg)

### CRUD URL

Using the **crudUrl** property, the controller action mapping URL can be specified to perform all the CRUD operation at server-side using
a single method instead of specifying separate controller action method for CRUD (insert, update and delete) operations.

The action parameter of **crudUrl** is used to get the corresponding CRUD action.

The following code example describes the above behavior.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: new DataManager({
            url: "Home/DataSource",
            crudUrl: "Home/CrudUpdate",
            adaptor: new UrlAdaptor
        }),
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true },
      customerIDRules: { required: true, minLength: 3 }
    };
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

```

```ts
public ActionResult CrudUpdate(EditableOrder value, string action)
{
    if(action == "update"){
        //Update record in database
    }
    else if (action == "insert")
    {
        //Insert record in database
    }
    else
    {
        //Delete record in database
    }
}

```

Please refer to the following screenshot to know about the action parameter.

![CRUD Update](../images/crudupdate.jpg)

> If you specify **insertUrl** along with **crudUrl**, then while adding **insertUrl** only will be invoked.

### Batch URL

The **batchUrl** property supports only for batch editing mode.
You can specify the controller action mapping URL to perform batch operation on the server-side.

The following code example describes the above behavior.

```
<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: new DataManager({
            url: "Home/DataSource",
            batchUrl: "Home/BatchUpdate",
            adaptor: new UrlAdaptor
        });
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true },
      customerIDRules: { required: true, minLength: 3 }
    };
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

```

```ts
public ActionResult BatchUpdate(string action, List<EditableOrder> added, List<EditableOrder> changed, List<EditableOrder> deleted, int? key)
{
//Save the batch changes in database
}
```

![Batch](../images/batch.jpg)