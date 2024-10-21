---
layout: post
title: Paging in Vue Grid component | Syncfusion
description: Learn here all about Paging and and its customization in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Paging 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Paging in Vue Grid component

Paging provides an option to display grid data in segmented pages, making it easier to navigate through large datasets. This feature is particularly useful when dealing with extensive data sets. 

To enable paging, you need to set the [allowPaging](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowpaging) property to **true**. This property determines whether paging is enabled or disabled for the grid. When paging is enabled, a pager component rendered at the bottom of the grid, allowing you to navigate through different pages of data.

To use paging, you need to inject the **PageService** into the provider section of your **AppModule**. This service provides the necessary methods and events to handle paging functionality.

Paging options can be configured through the [pageSettings](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings) property. The `pageSettings` object allows you to control various aspects of paging, such as the page size, current page, and total number of records.

> You can achieve better performance by using grid paging to fetch only a pre-defined number of records from the data source.

## Customize the pager options 

Customizing the pager options in the Syncfusion Grid allows you to tailor the pagination control according to your specific requirements. You can customize the pager to display the number of pages using the `pageCount` property, change the current page using `currentPage` property, display the number of records in the grid using the `pageSize` property, and even adjust the page sizes in a dropdown using the `pageSizes` property. Additionally, you can include the current page as a query string in the URL for convenient navigation. 

### Change the page size 

The Syncfusion Grid allows you to control the number of records displayed per page, providing you with flexibility in managing your data. This feature is particularly useful when you want to adjust the amount of data visible to you at any given time. To achieve this, you can utilize the [pageSettings.pageSize](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesize) property. This property is used to specify the initial number of records to display on each page. The default value of `pageSize` property is **12**.

The following example demonstrates how to change the page size of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page10" %}

### Change the page count 

The Syncfusion Grid allows you to adjust the number of pages displayed in the pager container. This is useful when you want to manage the number of pages you see while navigating through extensive datasets. The default value of `pageCount` property is **8**.

To change the page count in the Syncfusion Grid, you can utilize the [pageSettings.pageCount](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagecount) property, which defines the number of pages displayed in the pager container.

The following example demonstrates how to change the page count of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page9" %}

### Change the current page

The Syncfusion Grid allows you to change the currently displayed page, which can be particularly useful when you need to navigate through different pages of data either upon the initial rendering of the grid or update the displayed page based on interactions or specific conditions. The default value of `currentPage` property is **1**.

To change the current page in the Syncfusion Grid, you can utilize the [pageSettings.currentPage](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#currentpage) property, which defines the current page number of the pager.

The following example demonstrates how to dynamically change the current page using an external button click based on **TextBox** input:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page8" %}

### Add current page in URL as a query string 

The Syncfusion Grid allows you to include the current page information as a query string in the URL. This feature is particularly useful for scenarios where you need to maintain and share the state of the grid's pagination.

To add the current page detail to the URL as a query string in the Syncfusion Grid, you can enable the [enableQueryString](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#enablequerystring) property. When this property is set to **true**, it will automatically pass the current page information as a query string parameter along with the URL when navigating to other pages within the grid. 

> By enabling the `enableQueryString` property, you can easily copy the URL of the current page and share it with others. When the shared URL is opened, it will load the grid with the exact page that was originally shared.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/vue/documentation/switch/getting-started) component is added to enable or disable the addition of the current page to the URL as a query string. When the switch is toggled, the [change](https://ej2.syncfusion.com/vue/documentation/api/switch/#change) event is triggered and the `enableQueryString` property of the grid is updated accordingly.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="padding: 0px 0px 20px 0px; display:flex">
      <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Query String</label>
      <ejs-switch ref="switch" id="switch"  @change="toggleQueryString"></ejs-switch>
    </div>
    <p id="message">{{ message }}</p>    
    <ejs-grid ref="grid" :dataSource='data' allowPaging='true'  :actionBegin="onActionBegin">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
        <e-column field='OrderDate' type="date" headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
      </e-columns>
    </ejs-grid> 
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";

const grid = ref(null);
let message = ref('');

const toggleQueryString = function(args) {
  grid.value.ej2Instances.pageSettings.enableQueryString = args.checked;
};

const onActionBegin = function(args) {
  if (args.requestType === "paging" && grid.value.ej2Instances.pageSettings.enableQueryString) {
    message.value = "Current URL: " + window.location.href;
  }
};

provide('grid',  [Page]);
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
#message {
  color: red;
  text-align: center;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
      <div style="padding: 0px 0px 20px 0px; display:flex">
        <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Query String</label>
        <ejs-switch ref="switch" id="switch"  @change="toggleQueryString"></ejs-switch>
      </div>
      <p id="message">{{message}}</p>  
      <ejs-grid ref="grid" :dataSource='data' allowPaging='true'  :actionBegin="onActionBegin">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          <e-column field='OrderDate' type="date" headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
        </e-columns>
      </ejs-grid> 
    </div>
</template>
<script>
import { GridComponent,ColumnsDirective,ColumnDirective,Page } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-switch": SwitchComponent,
  },
  data() {
    return {
      data: data,
      message: "",
    };
  },
  methods: {
    toggleQueryString: function (args) {
      this.$refs.grid.$el.ej2_instances[0].pageSettings.enableQueryString =
        args.checked;
    },
    onActionBegin(args) {
      if (
        args.requestType === "paging" &&
        this.$refs.grid.$el.ej2_instances[0].pageSettings.enableQueryString
      ) {
        this.message = "Current URL:" + window.location.href;
      }
    },
  },
  provide: {
    grid: [Page],
  },
};
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
#message {
  color: red;
  text-align: center;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page7" %}

## Pager template

The pager template in Syncfusion Grid allows you to customize the appearance and behavior of the pager element, which is used for navigation through different pages of grid data. This feature is particularly useful when you want to use custom elements inside the pager instead of the default elements.

To use the pager template, you need to specify the [pagerTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#template) property in your Syncfusion Grid configuration. The `pagerTemplate` property allows you to define a custom template for the pager. Within the template, you can access the [currentPage](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#currentpage), [pageSize](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesize), [pageCount](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagecount), **totalPage** and **totalRecordCount** values.

The following example demonstrates how to render a **NumericTextBox** component in the pager using the `pagerTemplate` property:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings="initialPage" :pagerTemplate="'pagerTemplate'">
      <template  v-slot:pagerTemplate="{ data}">
        <div class="e-pagertemplate">
          <div class="col-lg-12 control-section">
            <div class="content-wrapper">
              <ejs-numerictextbox
                format="###.##"
                :step="1"
                :min="1"
                :max="3"
                :value="data.currentPage"
                :change="onPageChange"
                :width="200"
              ></ejs-numerictextbox>
            </div>
          </div>
          <div id="totalPages" class="e-pagertemplatemessage" style="margin-top:5px;margin-left:30px;border:none;display:inline-block">
            <span class="e-pagenomsg">{{ data.currentPage }} of {{ data.totalPages }} pages ({{ data.totalRecordsCount }} items)</span>
          </div>
        </div>
      </template>
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" :width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" :width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" :width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide,ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";

const initialPage = ref({
  pageSize: 5,
});

const onPageChange=(args)=> {
  initialPage.value = { currentPage: args.value };
}
provide('grid',  [Page]);
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
    <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings="initialPage" :pagerTemplate="'pagerTemplate'">
      <template  v-slot:pagerTemplate="{ data}">
        <div class="e-pagertemplate">
          <div class="col-lg-12 control-section">
            <div class="content-wrapper">
              <ejs-numerictextbox
                format="###.##"
                :step="1"
                :min="1"
                :max="3"
                :value="data.currentPage"
                :change="onPageChange"
                :width="200"
              ></ejs-numerictextbox>
            </div>
          </div>
          <div id="totalPages" class="e-pagertemplatemessage" style="margin-top:5px;margin-left:30px;border:none;display:inline-block">
            <span class="e-pagenomsg">{{ data.currentPage }} of {{ data.totalPages }} pages ({{ data.totalRecordsCount }} items)</span>
          </div>
        </div>
      </template>
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" :width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" :width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" :width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" :width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page} from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxComponent} from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-numerictextbox":NumericTextBoxComponent
  },
  data() {
    return {
      data: data,
      initialPage : { pageSize: 5 }
    };
  },
  methods: {
    onPageChange(args) {
      this.initialPage = { currentPage: args.value };
    }
  },
  provide() {
    return {
      grid: [Page],
    };
  }
};
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
        
{% previewsample "page.domainurl/code-snippet/grid/page/template-cs1" %}

## Pager with page size dropdown

The pager with a page size dropdown in Syncfusion Grid allows you to dynamically change the number of records displayed in the grid. This feature is useful when you want to easily customize the number of records to be shown per page.

To enable the page size Dropdown feature in the Syncfusion Grid, you need to set the [pageSettings.pageSizes](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesizes) property to **true** in the grid configuration. This property configuration triggers the rendering of a dropdown list within the pager, allowing you to select the desired page size. The selected page size determines the number of records displayed on each page of the grid.

The following example that demonstrates how to integrate the page size Dropdown feature by configuring the `pageSizes` property:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page6" %}

> If the pageSizes property is set to a boolean value like 'true' or 'false,' the page size dropdown defaults to an array of strings containing options such as ['All', '5', '10', '15', '20'].

### Customize page size dropdown 

The Syncfusion Grid allows you to customize the default values of the page size dropdown in the pager, allowing you to change the number of records displayed per page. To achieve this, you can define the [pageSizes](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettings/#pagesizes) property as an array of string instead of boolean value.

The following example demonstrate how to customize the default values of the pager dropdown using the `pageSizes` property:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page5" %}

> The pageSizes property can be configured with either an array of strings or a boolean value.

## How to navigate to particular page 

Navigating to a particular page in the Syncfusion Grid is particularly useful when dealing with large datasets. It provides a quick and efficient way to jump to a specific page within the grid.

To achieve page navigation, you can use the [goToPage](https://ej2.syncfusion.com/vue/documentation/api/grid#gotopage) method provided by Syncfusion Grid. This method allows you to programmatically navigate to a specific page within the grid.

The following example demonstrates how to dynamically navigate to a particular page using the `goToPage` method triggered by an external button click based on **TextBox** input:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page4" %}

## How to get the pager element

You can get pager element in the Syncfusion Grid. This allows you to customize the pager's appearance or behavior to meet the requirements of your application.

[getPager](https://ej2.syncfusion.com/vue/documentation/api/grid/#getpager)- This method allows you to obtain a reference to the pager element within the Syncfusion Grid. It returns an HTML element representing the pager.

```ts
  this.$refs.grid.getPager()
```

## Dynamically calculate page size based on element height

You have an option to dynamically calculate the page size of a grid by considering the height of its parent element. This functionality proves invaluable in ensuring that the grid's content remains within the available space, preventing the need for excessive scrolling. It primarily serves the purpose of automatically adjusting the `pageSize` when the height of the grid's parent element changes dynamically. Upon each alteration in the parent element's height, invoking this method will compute the grid's `pageSize` and present the current page records accordingly. This feature effectively addresses situations where a static `pageSize` value does not cater to the varying heights of different parent elements, preventing any unwanted empty spaces within the grid.

To achieve page size calculation based on an element's height in the Grid, you can utilize the [calculatePageSizeByParentHeight](https://ej2.syncfusion.com/vue/documentation/api/grid/#calculatepagesizebyparentheight) method. This method calculates the page size based on the height of the parent element.

The following example demonstrates how to calculate the page size based on element height using the `calculatePageSizeByParentHeight` method triggered by a change event based on the **NumericTextBox** input:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page3" %}

## Render pager at the top of the grid 

The Grid component provides built-in support for rendering a pager at the bottom of the grid by default. However, in certain scenarios, you might want to display the pager at the top of the grid. This can be achieved by utilizing the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event. This event is triggered when the Grid completes rendering its data. By handling this event, you can customize the rendering of the pager and move it to the top of the Grid.

Here's an example that demonstrates how to render the pager at the top of the grid using the `dataBound` event:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/page/default-page2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page2" %}

> During the paging action, the pager component triggers the below three events.
> * The [created](https://ej2.syncfusion.com/vue/documentation/api/pager/pagerModel/#created) event triggers when Pager is created.
> * The [click](https://ej2.syncfusion.com/vue/documentation/api/pager/pagerModel/#click) event triggers when the numeric items in the pager is clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/vue/documentation/api/pager/pagerModel/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## Pager events 

The Syncfusion Grid component triggers two pager events during paging actions:

[actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin)-  This event triggered before any paging action (such as changing the page, changing the page size and etc) is initiated. You can use this event to customize or control the behavior of paging actions.

[actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete)- This event triggered after a pager action is completed. It provides information about the action, such as the new page number, page size, and the total number of records. You can use this event to perform actions or update the UI after the operation has been executed.

The following example that example demonstrates how to use these events to display notification messages to indicate the current and next page during paging actions in the Syncfusion vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <p id="message1">{{message1}}</p>
    <p id="message">{{message}}</p>    
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :actionBegin="onActionBegin" :actionComplete="onActionComplete"
      :pageSettings="initialPage">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" textAlign="Right" format="yMd" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from 'vue';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource.js';
const grid = ref(null);
const initialPage = { pageSize: 5 };
const message = ref('');
const message1 = ref('');
const onActionBegin = (args) => {
  if (args.requestType === 'paging') {
    message.value = args.currentPage > args.previousPage
      ? `You are going to switch to page ${parseInt(args.currentPage, 10) + 1}`
      : `You are going to switch to page ${args.previousPage}`;
  }
};
const onActionComplete = (args) => {
  if (args.requestType === 'paging') {
    message1.value = `Now you are in page ${args.currentPage}`;
  }
};
provide('grid', [Page]);
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

#message, #message1 {
  color: red;
  text-align: center;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <p id="message1">{{message1}}</p>
    <p id="message">{{message}}</p>    
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :actionBegin="onActionBegin" :actionComplete="onActionComplete"
      :pageSettings="initialPage">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" textAlign="Right" format="yMd" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Page} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },

  data() {
    return {
      data: data,
      initialPage: { pageSize: 5 },
      message: "",
      message1: "",
    };
  },
  methods: {
    onActionBegin(args) {
      if (args.requestType === "paging") {
        this.message =args.currentPage > args.previousPage? `You are going to switch to page ${parseInt(args.currentPage, 10) + 1}`: `You are going to switch to page ${args.previousPage}`;
      }
    },
    onActionComplete(args) {
      if (args.requestType === "paging") {
        this.message1 = "Now you are in page " + args.currentPage;
      }
    },
  },
  provide: {
    grid: [Page],
  },
};
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
#message,
#message1 {
  color: red;
  text-align: center;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/page/default-page1" %}

## See Also

* [Group with Paging](./grouping/grouping#group-with-paging)
* [How to change loading indicator in vue Grid](./data-binding/data-binding#loading-animation)