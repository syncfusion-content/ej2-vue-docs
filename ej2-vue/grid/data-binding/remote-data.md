---
layout: post
title: Remote data in Vue Grid component | Syncfusion
description: Learn here all about Remote data in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Remote data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Remote data in Vue Grid component

To bind remote data to grid component, assign service data as an instance of `DataManager` to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property. To interact with remote data source,  provide the endpoint `url`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/remote-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/remote-cs2" %}

> By default, `DataManager` uses `ODataAdaptor` for remote data-binding.

## OData adaptor - Binding OData service

[OData](http://www.odata.org/documentation/odata-version-3-0/) is a standardized protocol for creating and consuming data. You can retrieve data from OData service using DataManager. You can refer to the following code example of remote data binding using OData service.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/remote-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/remote-cs3" %}

## OData v4 adaptor - Binding OData v4 service

The ODataV4 is an improved version of OData protocols, and the `DataManager` can also retrieve and consume OData v4 services. For more details on OData v4 services, refer to the [odata documentation](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData v4 service, use the `ODataV4Adaptor`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/remote-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/remote-cs4" %}

## Web API Adaptor

You can use `WebApiAdaptor` to bind grid with Web API created using OData endpoint.

```
<template>
    <div id="app">
        <ejs-grid :dataSource="data">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      data: new DataManager({
        url: 'api/Orders',
        adaptor: new WebApiAdaptor(),
        crossDomain: true
      })
    };
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

The response object should contain properties `Items` and `Count` whose values are a collection of entities and the total count of the entities respectively.

The sample response object should look like below.

```
{
    Items: [{..}, {..}, {..}, ...],
    Count: 830
}
```

## Remote save adaptor

You may need to perform all Grid Actions in client-side except the CRUD operations, that should be interacted with server-side to persist data. It can be achieved in Grid by using `RemoteSaveAdaptor`.

Datasource must be set to `json` property and set `RemoteSaveAdaptor` to the `adaptor` property. CRUD operations can be mapped to server-side using `updateUrl`, `insertUrl`, `removeUrl`, `batchUrl`, `crudUrl` properties.

You can use the following code example to use `RemoteSaveAdaptor` in Grid.

```
<template>
    <div id="app">
        <ejs-grid :dataSource="dataSource" :editSettings='editSettings' :toolbar='toolbar'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DataManager, RemoteSaveAdaptor } from "@syncfusion/ej2-data";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default Vue.extend({
  data() {
    return {
      dataSource: new DataManager({
        json: data,
        adaptor: new RemoteSaveAdaptor,
        insertUrl: '/Home/Insert',
        updateUrl: '/Home/Update',
        removeUrl: '/Home/Delete'
      }),
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

The following code example describes the CRUD operations handled at server-side.

```
    public ActionResult Update(OrdersDetails value)
    {
        ...
        return Json(value);
    }
    public ActionResult Insert(OrdersDetails value)
    {
        ...
        return Json(value);
    }
    public ActionResult Delete(int key)
    {
        ...
        return Json(data);
    }
```

## Custom adaptor

You can create your own adaptor by extending the built-in adaptors. For the sake of demonstrating custom adaptor approach, we are going to see how to add a serial number for the records by overriding the built-in response processing using the `processResponse` method of the `ODataAdaptor`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/remote-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/remote-cs5" %}

## Offline mode

On remote data binding, all grid actions such as paging, sorting, editing, grouping, filtering, etc, will be processed on server-side. To avoid post back for every action, set the grid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the `offline` property of `DataManager`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/databind/remote-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/databind/remote-cs6" %}