---
layout: post
title: Data binding in Vue Pivotview component | Syncfusion
description: Learn here all about Data binding in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Data binding in Vue Pivotview component

## JSON

For JSON data binding, the `type` property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) needs to be set as `JSON`. By default, the default value is assumed as `JSON`.

### Binding JSON data via local

In-order to bind local JSON data to the pivot table user can assign the local variable holding the JSON data to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs19/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs19" %}

Using local variable, the JSON data can also be bound to the pivot table using [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) option with the help of `JsonAdaptor`. Here the instance of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) holding JSON data is assigned to [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings). The use of [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/dataManager/) is optional here.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs20" %}

In the meantime, the JSON data from the local *.json file type can also be connected to the pivot table via the file uploader option. Here, the resulting string after uploading the file needs to be converted to JSON data that can be assigned to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings). The following code example illustrates the same.

```javascript
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { Uploader } from '@syncfusion/ej2-inputs';

Vue.use(PivotViewPlugin);

export default {
    data() {
        return {
            // Step 1: Initiate the file uploader
            let uploadObj: Uploader = new Uploader({
            });
            uploadObj.appendTo('#fileupload');

            let input = document.querySelector('input[type="file"]');
            // Step 2: Add the event listener which fires when the *.JSON file is uploaded.
            input.addEventListener('change', function (e: Event) {
                // Step 3: Initiate the file reader
                let reader: FileReader = new FileReader();
                reader.onload = function () {
                    // Step 4: Getting the string output which is to be parsed as JSON.
                    let result: string[][] = JSON.parse(reader.result as string);
                    dataSourceSettings: {
                        // Step 5: The JSON result to be bound as data source.
                        dataSource: this.result
                        // Step 6: The appropriate report needs to be provided here.
                    },
                }
                reader.readAsText((input as any).files[0]);
            });
        }
    }
}
</script>
    < style >
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>

```

### Binding JSON data via remote

In-order to bind remote JSON data, mention the endpoint [`URL`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#url) under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) property. The [`URL`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#url) property supports both direct downloadable file (*.json) and web service URL.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs1" %}

## CSV

For CSV data binding, the `type` property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) needs to be set as `CSV` mandatorily.

> The CSV format is considered to be the most compact format compared to JSON since it is half the size of JSON. This helps to reduce the bandwidth while transferring to the browser.

### Binding CSV data via local

In-order to bind local CSV data to the pivot table, user needs to convert it as string array and then directly assign it to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/csvdata-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/csvdata-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/csvdata-cs1" %}

In the meantime, the CSV data from the local *.csv file type can also be connected to the pivot table via the file uploader option. Here, the resulting string after uploading the file needs to be converted to string array that can be assigned to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings). The following code example illustrates the same.

```javascript
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { Uploader } from '@syncfusion/ej2-inputs';

Vue.use(PivotViewPlugin);

export default {
    data() {
        return {
            // Step 1: Initiate the file uploader
            let uploadObj: Uploader = new Uploader({
            });
            uploadObj.appendTo('#fileupload');

            let input = document.querySelector('input[type="file"]');
            // Step 2: Add the event listener which fires when the *.CSV file is uploaded.
            input.addEventListener('change', function (e: Event) {
                // Step 3: Initiate the file reader
                let reader: FileReader = new FileReader();
                reader.onload = function () {
                    // Step 4: Getting the string output which is to be converted as string[][].
                    let result: string[][] = (reader.result as string).split('\n').map(function (line) {
                        return line.split(',');
                    });
                    dataSourceSettings: {
                        // Step 5: The string[][] result to be bound as data source
                        dataSource: this.result,
                        type: 'CSV',
                        // Step 6: The appropriate report needs to be provided here.
                    },
                }
                reader.readAsText((input as any).files[0]);
            });
        }
    }
}
</script>
< style >
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>

```

### Binding CSV data via remote

In-order to bind remote CSV data, mention the endpoint [`URL`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#url) under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) property. The [`URL`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#url) property supports both direct downloadable file (*.csv) and web service URL.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs2" %}

## Remote Data Binding

To interact with remote data source, provide the endpoint [`url`](https://ej2.syncfusion.com/documentation/data/adaptors/#url-adaptor) within [`DataManager`](https://ej2.syncfusion.com/documentation/data/adaptors/#data-adaptors) along with appropriate [`adaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#data-adaptors). By default, [`DataManager`](https://ej2.syncfusion.com/documentation/data/adaptors/#data-adaptors) uses [`ODataAdaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#odata-adaptor) for remote data-binding.

### Binding with OData services

OData is a standardized protocol for creating and consuming data. User can retrieve data from OData service using the [`DataManager`](https://ej2.syncfusion.com/documentation/data/adaptors/#data-adaptors). Refer to the following code example for remote data binding using OData service.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs3" %}

### Binding with OData V4 services

The OData V4 is an improved version of OData protocols, and the [`DataManager`](https://ej2.syncfusion.com/documentation/data/adaptors/#data-adaptors) can be used to retrieve and consume OData V4 services. For more details on OData V4 services, refer to the [OData documentation](http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData V4 service, use the [`ODataV4Adaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#odatav4-adaptor).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs4" %}

### Web API

User can use [`WebApiAdaptor`](https://ej2.syncfusion.com/documentation/data/adaptors/#web-api-adaptor) to bind pivot table with Web API created using OData endpoint.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs5" %}

### Querying in Data Manager

By default, the data manager retrieves all the data from the provider which is mapped in it. The data from the provider can be filtered, sorted, paged, etc. by setting the own query in `defaultQuery` property in the data manager instance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/common-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/common-cs6" %}

## Mapping

One can define field information like alias name (caption), data type, aggregation type, show and hide subtotals etc. using the [`fieldMapping`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#fieldmapping) property under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings). The available options are,

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#name) - It is to specify the appropriate field name.
* [`caption`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#caption) - It is to set the alias name (caption) to the specific field. Instead of actual field name, the alias name (caption) will be set in the UI of the pivot table.
* [`type`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#type) - It is to display values in the pivot table with appropriate aggregation such as sum, product, count, average, minimum, maximum, etc. Its default value is **sum**. This option is applicable only for relational data source.
* [`axis`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#axis) - It will help to display the field in specified axis such as row/column/value/filter axis of the pivot table.
* [`showNoDataItems`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#shownodataitems) - It is to show all the members of a specific field to the pivot table, even if there are no data in the intersection of the row and column. The default value is **false**. This option is applicable only for relational data source.
* [`baseField`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#basefield) - For the aggregate types like "DifferenceFrom" or "PercentageOfDifferenceFrom" or "PercentageOfParentTotal", selective field is assigned for comparison via this property.
* [`baseItem`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#baseitem) For the aggregate types like "DifferenceFrom" or "PercentageOfDifferenceFrom" or "PercentageOfParentTotal", selective member in a field is assigned for comparison via this property.
* [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#expandall) - It is to expand or collapse all headers of a specific field in row and column axes of the pivot table. The default value is **false**.
* [`showSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#showsubtotals) - It is to show or hide sub-totals of a specific field in row and column axis of the pivot table. The default value is **true**.
* [`isNamedSet`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#isnamedset) - It is to set whether the specified field is named set or not. In general, the named set is a set of dimension members or a set expression (MDX query) to be created as a dimension in the SSAS OLAP cube itself. The default value is **false** and this option is applicable only for OLAP data source.
* [`isCalculatedField`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#iscalculatedfield) - It is to set whether the specified field is a calculated field or not. In general, a calculated field is created from the bound data source or using simple formula with basic arithmetic operators in the pivot table. The default value is **false** and this option is applicable only for OLAP data source.
* [`showFilterIcon`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#showfiltericon) - It is to show or hide the filter icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This filter icon is used to filter the members of a specified field at runtime in the pivot table. The default value is **true**.
* [`showSortIcon`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#showsorticon) - It is to show or hide the sort icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This sort icon is used to order members of a specified field either in ascending or descending at runtime. The default value is **true**.
* [`showRemoveIcon`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#showremoveicon) - It is to show or hide the remove icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This remove icon is used to remove the specified field during runtime. The default value is **true**.
* [`showValueTypeIcon`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#showvaluetypeicon) - It is to show or hide the value type icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This value type icon helps to select the appropriate aggregation type to specified value field at runtime. The default value is **true**.
* [`showEditIcon`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#showediticon) - It is to show or hide the edit icon of a specific field which will be displayed on the button of the grouping bar and field list UI. This edit icon is used to modify caption, formula, and format of a specified calculated field at runtime. The default value is **true**.
* [`allowDragAndDrop`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#allowdraganddrop) - It is to restrict specific field's button from being dragged on runtime in the grouping bar and field list UI. This will prevent from altering the current report. The default value is **true**.
* [`dataType`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#datatype) - It is to specify the type of the field like 'string', 'number', 'datetime', 'date', and 'boolean'.
* [`groupName`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#groupname) - It is to display fields in the field list UI by grouping them under the desired folder name.

The main purpose of these mapping options is to configure each field that is not part of the initial pivot report. Even if any field that is part of this mapping is defined here, the value set in the initial report will have the highest preceding.

> This option is applicable only for relational data source.
In the below code sample, visibility of the field button icons are configured.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs21/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs21" %}

## Values in row axis

By default, the value fields are plotted in column axis. To plot those fields in row axis, use the [`valueAxis`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#valueaxis) property by setting its value as **row**. By default, it holds the value **column**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs22/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs22" %}

## Values at different positions

By default, the value fields are placed at the end of the row or column axis. To place those value fields in different positions, use the [`valueIndex`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#valueindex) property and set the value to an appropriate index position. Its default value is **-1**, which denotes the last position. The [`valueIndex`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#valueindex) property is dependent on the [`valueAxis`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#valueaxis) property.

> This support is only available for relational data sources. Also, enable the [`showValuesButton`](https://ej2.syncfusion.com/vue/documentation/api/pivotfieldlist/#showvaluesbutton) property in the grouping bar and field list UI to **true** to re-arrange the values fields at different positions via user interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs23" %}

## Show 'no data' items

By default, the pivot table only shows the field item if it has data in its row or column combination. To show all items that do not have data in row and column combination in the pivot table, use the [`showNoDataItems`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#shownodataitems) property by settings its value to **true** for the desired fields. In the following code sample, rows of the "County" and "State" fields do not have data in all combination with "Date" column field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/noData-cs1" %}

## Show value headers always

To show value header always in pivot table, even if it holds a single value, use the [`alwaysShowValueHeader`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#alwaysshowvalueheader) property by settings its value as **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs24" %}

## Customize empty value cells

User can show custom string in empty value cells using the [`emptyCellsTextContent`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#emptycellstextcontent) property in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) of the pivot table. Since the property is of string data type, user can fill empty value cells with any value like "0", "-", "*", "(blank)", etc. Its common for all value fields and can be configured through code behind.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/noData-cs2" %}

## Event

### Load

The event [`load`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#load) fires before initiate rendering of pivot table. It holds following parameters like`dataSourceSettings`, `fieldsType` and `pivotView`. In this event user can customize data source settings before initiating pivot table render module.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/noData-cs3" %}

### EnginePopulated

The event [`enginePopulated`](https://ej2.syncfusion.com/documentation/api/pivotview#enginepopulated) is triggered after engine is populated. It has following parameters - `dataSourceSettings`, `pivotFieldList` and `pivotValues`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/noData-cs4" %}

### EnginePopulating

The event [`enginePopulating`](https://ej2.syncfusion.com/documentation/api/pivotview#enginepopulating) triggers  before the pivot engine starts to populate and allows to customize the pivot datasource settings. It has following parameter `dataSourceSettings`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/noData-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/noData-cs5" %}

## See Also

* [Aggregation](./aggregation)
* [Show/Hide Totals](./summary-customization)
* [Customize number, date, and time values](./how-to/customize-number-date-and-time-values)
* [Server Side Engine (Optional)](./server-side-pivot-engine)