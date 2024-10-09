---
layout: post
title: State management in Vue Grid component | Syncfusion
description: Learn here all about State management in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: State management 
documentation: ug
domainurl: ##DomainURL##
---

# State Management in Vue Grid component

State management in the Vue Grid component allows you to maintain the grid's state even after a browser refresh or when navigating to a different page within the same browser session. This feature is particularly useful for retaining the grid's configuration and data even after a page reload.

To enable state persistence in the Grid, you can utilize the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property. When this property is set to **true**, the grid will automatically save its state in the browser's [localStorage](https://www.w3schools.com/html/html5_webstorage.asp#), ensuring that the state is preserved across page reloads.

```html
<ejs-grid [dataSource]="data" :enablePersistence="true"></ejs-grid>
```

> The grid will store the state using the combination of the component name and component ID in the storage. For example, if the component name is **grid** and the ID is **OrderDetails**, the state will be stored as **gridOrderDetails**.


When enabling state persistence, the following grid settings will persist in the local storage.

| Grid Settings    | Properties persist                                                                                                                                                                                                                                                                                                                | Ignored properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pageSettings     | currentPage<br> pageCount<br> pageSize<br> pageSizes<br> totalRecordsCount                                                                                                                                                                                                                                                        | template<br> enableQueryString                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| groupSettings    | allowReordering<br> columns<br> disablePageWiseAggregates<br> enableLazyLoading<br> showDropArea<br> showGroupedColumn<br> showToggleButton<br> showUngroupButton                                                                                                                                                                 | captionTemplate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| columns          | allowEditing<br> allowFiltering<br> allowGrouping<br> allowReordering<br> allowResizing<br> allowSearching<br> allowSorting<br> autoFit<br> disableHtmlEncode<br> enableGroupByFormat<br> field<br> foreignKeyField<br> index<br> showColumnMenu<br> showInColumnChooser<br> sortDirection<br> type<br> uid<br> visible<br> width | clipMode<br> commands<br> customAttributes<br> dataSource<br> defaultValue<br> displayAsCheckBox<br> edit<br> editTemplate<br> editType<br> filter<br> filterBarTemplate<br> filterTemplate<br> foreignKeyValue<br> format<br> formatter<br> freeze<br> headerTemplate<br> headerText<br> headerTextAlign<br> headerValueAccessor<br> hideAtMedia<br> isFrozen<br> isIdentity<br> isPrimaryKey<br> lockColumn<br> maxWidth<br> minWidth<br> sortComparer<br> template<br> textAlign<br> validationRules<br> valueAccessor |
| sortSettings     | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| filterSettings   | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| searchSettings   | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| selectedRowIndex | -                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |


The grid will persist only the last selected row index.

## Restore initial Grid state

In the Syncfusion Vue Grid component, you have the capability to restore the grid to its initial state, reverting all changes and configurations made during the interaction. This feature can be particularly useful when you want to reset the grid to its original settings, eliminating any applied filters, sorting, or column reordering.

Here are the steps to reset the grid to its initial state, even when the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is enabled:

### Changing component id

If you want to restore the initial state of the grid, consider changing the component ID. This step ensures that the grid is treated as a new instance, effectively reverting to its default settings.

Here is an example code to change the component id dynamically to restore initial grid state.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management/default-cs1" %}

### Clearing local storage

Another method to reset the grid is by clearing the local storage associated with the grid component. This action removes any stored state information, allowing the grid to return to its original configuration.

Here is an example code on how to clear local storage to retain its default state.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management/default-cs2" %}

## Restore to specific state version

Syncfusion Vue Grid supports version-based persistence for easy restoration to a specific state. To enable version based persistence, import `enableVersionBasedPersistence` from `@syncfusion/ej2-base` and set it globally to **true**. Define the grid in the template with properties, bind data, and configure persistence using [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) and [ej2state-persistenceVersion](https://ej2.syncfusion.com/vue/documentation/api/grid/#ej2state-persistenceversion). 

In the below example, the `clickHandler` method is responsible for handling button clicks corresponding to different versions. Inside this method, the targeted version is assigned to the grid's `ej2state-persistenceVersion` dynamically. The code checks if there is already a persisted state for the selected version in the local storage. If found, the grid is updated with the settings retrieved from the local storage, including columns, filter settings, group settings, sort settings, page settings, and selected row index. If no persisted state is found, the current grid state is persisted to the local storage using the [getPersistData](https://ej2.syncfusion.com/vue/documentation/api/grid/#getpersistdata) method.

Here is an example of how to integrate version-based persistence into your Vue component and restore to specific state version:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
        <ejs-button style='margin:3px' v-for="v in versions" :key="v" :id="'restore' + v"
            @click="clickHandler('v.' + v)">
            Version {{ v }}
        </ejs-button>
        <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true'
            :ej2StatePersistenceVersion='gridversion' :allowPaging='true' :allowFiltering='true' :allowGrouping='true'
            :allowSorting="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Filter, Group, Sort } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const grid = ref(null);
var message = ref('');
var gridversion = ref('v.0');
var versions = [1, 2, 3];
const clickHandler = function (version) {
    gridversion.value = version;
    var persistedGridSettings = window.localStorage.getItem(`gridOrderDetails${version}`);
    if (persistedGridSettings) {
        grid.value.setProperties(JSON.parse(persistedGridSettings));
        message.value = `Grid state restored to ` + version;
    } else {
        var gridData = grid.value.ej2Instances.getPersistData();
        window.localStorage.setItem(`gridOrderDetails${version}`, gridData);
        message.value = `Grid state saved for ` + version;
    }
}

provide('grid', [Page, Filter, Group, Sort]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
    <ejs-button style='margin:3px' v-for="v in versions" :key="v" :id="'restore' + v" @click="clickHandler('v.' + v)">
      Version {{ v }}
    </ejs-button>
    <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true'
      :ej2StatePersistenceVersion='gridversion' :allowPaging='true' :allowFiltering='true' allowGrouping='true'
      allowSorting="true">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { ref } from 'vue';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Sort, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
var message = ref('');
var gridversion = 'v.0';
var versions = [1, 2, 3];
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: data,
      message: message,
      versions: versions,
      gridversion: gridversion,
    };
  },
  methods: {
    clickHandler: function (version) {
      this.$refs.grid.ej2Instances.ej2StatePersistenceVersion = version;
      var persistedGridSettings = (window.localStorage.getItem(`gridOrderDetails` + this.$refs.grid.ej2Instances.ej2StatePersistenceVersion));
      if (persistedGridSettings) {
        this.$refs.grid.setProperties(JSON.parse(persistedGridSettings));
        this.message = `Grid state restored to ` + version;
      } else {
        var gridData = this.$refs.grid.ej2Instances.getPersistData();
        window.localStorage.setItem((`gridOrderDetails` + this.$refs.grid.ej2Instances.ej2StatePersistenceVersion), gridData);
        this.message = `Grid state saved to` + version;
      }
    }
  },
  provide: {
    grid: [Page, Filter, Sort, Group]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management/default-cs3" %}

## Restore to previous state

The Syncfusion Vue Grid component allows you to save and restore its state using local storage. This feature is helpful when you want to preserve the current state of the Grid, such as column order, sorting, and filtering, so that you can return to your previous work or configurations.

To implement this functionality, use the `getItem` and `setItem` methods for local storage, along with the Grid component's `setProperties` and [getPersistData](https://ej2.syncfusion.com/vue/documentation/api/grid/#getpersistdata) methods.

The provided code demonstrates how to save and restore the previous state of a Syncfusion Vue Grid component using local storage.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
        <ejs-button style='margin:3px' cssClass="e-success" @click="save()">Save</ejs-button>
        <ejs-button style='margin:3px' cssClass="e-danger" @click="restore()">Restore</ejs-button>
        <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :allowPaging='true'
            :allowFiltering='true' allowGrouping='true' allowSorting="true" :groupSettings="groupSettings">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>

            </e-columns>
        </ejs-grid>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Filter, Group, Sort } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

const grid = ref(null);
var message = ref('');
var state = ref(null);
const groupSettings = { showGroupedColumn: false, columns: ["ShipCountry"] }

// Save grid state to local storage
const save = function () {
    var persistData = grid.value.ej2Instances.getPersistData(); // Grid persistData
    window.localStorage.setItem("gridOrderDetails", persistData);
    message.value = "Grid state saved.";
}

// Restore grid state from local storage
const restore = function () {
    let persistDataValue = window.localStorage.getItem("gridOrderDetails"); //"gridOrderDetails" is component name + component id.
    state.value = JSON.parse(persistDataValue);
    console.log(state.value);
    if (state.value) {
        grid.value.ej2Instances.setProperties(state.value);
        message.value = "Previous grid state restored.";
    } else {
        message.value = "No saved state found.";
    }
}

provide('grid', [Page, Filter, Group, Sort]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
    <ejs-button style='margin:3px' cssClass="e-success" @click="save()">Save</ejs-button>
    <ejs-button style='margin:3px' cssClass="e-danger" @click="restore()">Restore</ejs-button>
    <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :allowPaging='true' :allowFiltering='true' allowGrouping='true' allowSorting="true" :groupSettings="groupSettings">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { ref } from 'vue';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Filter, Sort, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
var message = ref('');
var groupSettings = { showGroupedColumn: false, columns: ["ShipCountry"] };
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: data,
      message: message,
      groupSettings: groupSettings
    };
  },
  methods: {
    // Save grid state to local storage
    save: function () {
      var persistData = this.$refs.grid.ej2Instances.getPersistData(); // Grid persistData
      window.localStorage.setItem("gridOrderDetails", persistData);
      this.message = "Grid state saved.";
    },

    // Restore grid state from local storage
    restore: function () {
      let value = window.localStorage.getItem("gridOrderDetails"); //"gridOrderDetails" is component name + component id.
      this.state = JSON.parse(value);
      if (this.state) {
        this.$refs.grid.ej2Instances.setProperties(this.state);
        this.message = "Previous grid state restored.";
      } else {
        this.message = "No saved state found.";
      }
    }
  },
  provide: {
    grid: [Page, Filter, Sort, Group]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management/default-cs4" %}

## Maintaining custom query in a persistent state

When [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) is enabled, the Grid does not automatically maintain custom query parameters after a page load. This is because the Grid refreshes its query params for every page load. You can maintain the custom query params by resetting the [addParams](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method in the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}

## Get or set local storage value

If the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is set to **true**, the Grid property value is saved in the **window.localStorage** for reference. You can get or set the localStorage value by using the **getItem** and **setItem** methods in **window.localStorage**.

To retrieve the Grid model from Local Storage, follow these steps:

```typescript
//get the Grid model.
let value = window.localStorage.getItem('gridOrders'); //"gridOrders" is component name + component id.
let model = JSON.parse(value);

```

```typescript
//set the Grid model.
window.localStorage.setItem('gridOrders', JSON.stringify(value)); //"gridOrders" is component name + component id.

```

## Prevent columns from persisting

In the Syncfusion Vue Grid component, you may sometimes want to prevent certain settings from being persisted when using the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) feature. When the `enablePersistence` property is set to **true**, the Grid properties such as [Grouping](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettings/), [Paging](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/), [Filtering](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/), [Sorting](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettings/), and [Columns](https://ej2.syncfusion.com/vue/documentation/api/grid/column/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management/default-cs6" %}

## Add to persist

Persistence can be added to a Syncfusion Vue Grid component to enhance the user experience. Persistence allows saving and restoring the state of the grid, including column layouts, sorting, filtering, and other user-specific settings. In this documentation, you will explore how to persist column templates, header templates, and header text settings in the Vue Grid.

### Add a new column in persisted columns list

When the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is set to true in the Syncfusion Grid component, column configurations are persisted. If you need to add new columns to the existing persisted state, you can achieve this by using the Grid's built-in methods like `column.push`, and then call the [refreshColumns](https://ej2.syncfusion.com/vue/documentation/api/grid/#refreshcolumns) method to update the UI with the new columns.

Here's an example of how to add a new column to a list of persisted columns:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/state-management/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management/default-cs7" %}

> Adding new columns using `ColumnDirectives` directly in the grid initialization is not recommended if you intend to persist the new columns with the existing columns list 

### Persist the column template, header template and header text

By default, when the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is set to **true** in the Syncfusion Grid component, certain column properties such as column template, header text, header template, column formatter, and value accessor are not persisted. This is because these properties can be customized at the application level.

To restore these column properties and achieve persistence, you can follow the approach of cloning the grid's columns property using JavaScript Object's assign method and manually storing it along with the persist data. When restoring the settings, this cloned column object must be assigned to the grid's columns property to restore the column settings. The following sample demonstrates this process:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
        <ejs-button id="add" style='margin:3px' cssClass="e-success" @click="save">Save</ejs-button>
        <ejs-button id="add" style='margin:3px' cssClass="e-danger" @click="restore">Restore</ejs-button>
        <ejs-grid ref="grid" id="Orders" :dataSource="data" :enablePersistence="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='125' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='170'
                    :headerTemplate="'hTemplate'"></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='170'
                    :template="'columnTemplate'"></e-column>
            </e-columns>
            <template v-slot:hTemplate="{}">
                <ejs-button>HeaderTemplate</ejs-button>
            </template>
            <template v-slot:columnTemplate="{}">
                #template
            </template>
        </ejs-grid>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
const grid = ref(null);
const message = ref('');
var persistedGridSettings;
const save = () => {
    persistedGridSettings = JSON.parse(grid.value.ej2Instances.getPersistData());
    var gridColumns = Object.assign([], (grid.value.ej2Instances.getColumns()));
    persistedGridSettings.columns.forEach((persistedColumn) => {
        const column = gridColumns.find((col) => col.field === persistedColumn.field);
        if (column) {
            persistedColumn.headerText = 'Text Changed';
            persistedColumn.template = column.template;
            persistedColumn.headerTemplate = column.headerTemplate;
        }
    });
    window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
    grid.value.setProperties(persistedGridSettings);
    message.value = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
}
const restore = () => {
    const savedSettings = window.localStorage.getItem("gridOrders1");
    if (savedSettings) {
        grid.value.ej2Instances.setProperties(JSON.parse(savedSettings));
        message.value = 'Restored the headerText, template column, and headerTemplate';
    } else {
        message.value = 'No saved settings found.';
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
        <ejs-button id="add" style='margin:3px' cssClass="e-success" @click="save">Save</ejs-button>
        <ejs-button id="add" style='margin:3px' cssClass="e-danger" @click="restore">Restore</ejs-button>
        <ejs-grid ref="grid" id="Orders" :dataSource="data" :enablePersistence="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='125' textAlign='Right'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width='170'
                    :headerTemplate="'hTemplate'"></e-column>
                <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width='170'
                    :template="'columnTemplate'"></e-column>
            </e-columns>
            <template v-slot:hTemplate="{}">
                <ejs-button>HeaderTemplate</ejs-button>
            </template>
            <template v-slot:columnTemplate="{}">
                #template
            </template>
        </ejs-grid>
    </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
var message = '';
var persistedGridSettings;
export default {
    name: "App",
    components: {
        "ejs-grid": GridComponent,
        "e-columns": ColumnsDirective,
        "e-column": ColumnDirective,
        "ejs-button": ButtonComponent
    },
    data() {
        return {
            data: data,
            message: message
        };
    },
    methods: {
        save: function () {
            persistedGridSettings = JSON.parse(this.$refs.grid.ej2Instances.getPersistData());
            var gridColumns = Object.assign([], (this.$refs.grid.ej2Instances.getColumns()));
            persistedGridSettings.columns.forEach((persistedColumn) => {
                const column = gridColumns.find((col) => col.field === persistedColumn.field);
                if (column) {
                    persistedColumn.headerText = 'Text Changed';
                    persistedColumn.template = column.template;
                    persistedColumn.headerTemplate = column.headerTemplate;
                }
            });
            window.localStorage.setItem('gridOrders1', JSON.stringify(persistedGridSettings));
            this.$refs.grid.ej2Instances.setProperties(persistedGridSettings);
            this.message = 'Saved the headerText, template column, and headerTemplate properties in the persisted settings';
        },
        restore: function () {
            const savedSettings = window.localStorage.getItem("gridOrders1");
            if (savedSettings) {
                this.$refs.grid.ej2Instances.setProperties(JSON.parse(savedSettings));
                this.message = 'Restored the headerText, template column, and headerTemplate';
            } else {
                this.message = 'No saved settings found.';
            }
        }
    },
    provide: {
        grid: [Page]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/state-management/default-cs8" %}