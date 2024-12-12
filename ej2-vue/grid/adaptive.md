---
layout: post
title: Adaptive in Vue Grid component | Syncfusion
description: Learn here all about Adaptive in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Adaptive 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Adaptive in Vue Grid component

The Grid user interface (UI) was redesigned to provide an optimal viewing experience and improve usability on small screens. This interface will render the filter, sort, column chooser, column menu(supports only when the `rowRenderingMode` as Horizontal) and edit dialogs adaptively and have an option to render the grid row elements in the vertical direction.

## Render adaptive dialogs

The Syncfusion Vue Grid offers a valuable feature for rendering adaptive dialogs, specifically designed to enhance the user experience on smaller screens. This feature is particularly useful for optimizing the interface on mobile devices or other devices with limited screen space. The functionality is achieved by enabling the [enableAdaptiveUI](https://ej2.syncfusion.com/vue/documentation/api/grid/#enableadaptiveui) property, allowing the grid to render filter, sort, and edit dialogs in full-screen mode.

Additionally, apply the `e-bigger` class to the grid's parent element to enable the adaptive view.

The following sample demonstrates how to enable and utilize adaptive dialogs in the Syncfusion vue Grid:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/adaptive-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/adaptive-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/adaptive-cs1" %}

## Vertical row rendering

The Syncfusion Vue Grid introduces the feature of vertical row rendering, allowing you to display row elements in a vertical order. This is particularly useful for scenarios where a vertical presentation enhances data visibility. This is achieved by setting the [rowRenderingMode](https://ej2.syncfusion.com/vue/documentation/api/grid#rowrenderingmode) property to the value **Vertical**.

>The default row rendering mode is **Horizontal**.

The following sample demonstrates how to dynamically change the row rendering mode between **Vertical** and **Horizontal** based on a DropDownList selection:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="display:inline-block; padding: 0px 0px 20px 200px">
      <label style="padding: 30px 17px 0 0;font-weight: bold;"> Select row rendering mode :</label>
      <ejs-dropdownlist ref="dropdown" index="0" width="150" :dataSource="dropDownData"  :change="changeAlignment">
      </ejs-dropdownlist>
    </div>
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' :dataSource="data" height='100%' :enableAdaptiveUI='true'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings'
            :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
            <e-columns>
              <e-column field='SNO' headerText='S NO' width='150' :isPrimaryKey='true'
                :validationRules='orderidrules'></e-column>
              <e-column field='Model' headerText='Model Name' width='200' editType='dropdownedit'
                :validationRules='customeridrules'></e-column>
              <e-column field='Developer' headerText='Developer' width='200' :validationRules='customeridrules'
                :filter='menuFilter'></e-column>
              <e-column field='ReleaseDate' headerText='Released Date' width='200' type='date' format='yMMM'
                editType='datepickeredit'></e-column>
              <e-column field='AndroidVersion' headerText='Android Version' width='200' :validationRules='customeridrules'
                :filter='checkboxFilter'></e-column>
            </e-columns>
            <e-aggregates>
              <e-aggregate>
                <e-columns>
                  <e-column type="Count" field="Model" :footerTemplate="'sumTemplate'">
                  </e-column>
                  <template v-slot:sumTemplate="{data}"><span>Total Models: {{data.Count}}</span></template>
                </e-columns>
              </e-aggregate>
            </e-aggregates>
          </ejs-grid>
        </div>
      </div>
      <br>
      <div className="datalink">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones" target="_blank">Wikipedia: List of Android
          smartphones</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Filter, Sort, Edit, Toolbar, Page, Aggregate } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'

const grid=ref(null);
const orderidrules = { required: true, number: true };
const customeridrules = { required: true };
const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
const filterSettings = { type: 'Excel' };

const dropDownData= [
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
      ];
const menuFilter = {
  type: 'Menu'
};
const checkboxFilter = {
  type: 'CheckBox'
};

const load = function () {
  grid.value.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
}
const changeAlignment=function(args){
  grid.value.ej2Instances.rowRenderingMode = args.value;
}
provide('grid', [Filter, Sort, Edit, Toolbar, Page, Aggregate]);
</script> 
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";

/* The device with borders */
.e-mobile-layout {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px solid #f4f4f4;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  box-shadow: 0 0px 2px rgb(144, 144, 144), 0 0px 10px rgb(0 0 0 / 16%);
}

/* The horizontal line on the top of the device */
.e-mobile-layout:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ebebeb;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.e-mobile-layout:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #e8e8e8;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.e-mobile-layout .e-mobile-content {
  overflow-x: hidden;
  height: 100%;
  background: white;
  border: 0px solid #dddddd;
}

.e-responsive-dialog {
  box-shadow: none;
  border: 1px solid #dddddd;
}

/* Render the mobile pager by default */
@media (max-width: 3840px) {
  .e-adaptive-demo .e-pager {
    padding: 13px 0;
  }

  .e-adaptive-demo .e-pager div.e-parentmsgbar {
    box-sizing: border-box;
    display: inline-block;
    float: initial;
    padding: 0;
    text-align: center;
    vertical-align: top;
    width: calc(60% - 48px);
  }

  .e-adaptive-demo .e-pager .e-pagesizes,
  .e-adaptive-demo .e-pager .e-pagecountmsg,
  .e-adaptive-demo .e-pager .e-pagercontainer {
    display: none;
  }

  .e-adaptive-demo .e-pager .e-icons {
    font-size: 11px;
  }

  .e-adaptive-demo .e-pager .e-mfirst,
  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext,
  .e-adaptive-demo .e-pager .e-mlast {
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    padding: 1% 5%;
  }

  .e-adaptive-demo .e-pager .e-mfirst {
    margin-right: 4px;
    text-align: right;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext {
    margin: 0 4px;
    width: 10%;
  }

  .e-adaptive-demo .e-pager .e-mprev {
    text-align: right;
  }

  .e-adaptive-demo .e-pager .e-mnext {
    text-align: left;
  }

  .e-adaptive-demo .e-pager .e-mlast {
    margin-left: 4px;
    text-align: left;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-bigger .e-pager,
  .e-adaptive-demo .e-pager.e-bigger {
    padding: 19px 0;
  }

  .e-adaptive-demo .e-bigger .e-pager.e-rtl div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger.e-rtl div.e-parentmsgbar {
    margin-right: 0;
  }

  .e-adaptive-demo .e-bigger .e-pager div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger div.e-parentmsgbar {
    padding: 0;
  }
}

.e-dlg-target.e-scroll-disabled {
  overflow: auto !important;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div style="display:inline-block; padding: 0px 0px 20px 200px">
      <label style="padding: 30px 17px 0 0;font-weight: bold;"> Select row rendering mode :</label>
      <ejs-dropdownlist ref="dropdown" index="0" width="150" :dataSource="dropDownData"  :change="changeAlignment">
      </ejs-dropdownlist>
    </div>
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' :dataSource="data" height='100%' :enableAdaptiveUI='true'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings'
            :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
            <e-columns>
              <e-column field='SNO' headerText='S NO' width='150' :isPrimaryKey='true'
                :validationRules='orderidrules'></e-column>
              <e-column field='Model' headerText='Model Name' width='200' editType='dropdownedit'
                :validationRules='customeridrules'></e-column>
              <e-column field='Developer' headerText='Developer' width='200' :validationRules='customeridrules'
                :filter='menuFilter'></e-column>
              <e-column field='ReleaseDate' headerText='Released Date' width='200' type='date' format='yMMM'
                editType='datepickeredit'></e-column>
              <e-column field='AndroidVersion' headerText='Android Version' width='200' :validationRules='customeridrules'
                :filter='checkboxFilter'></e-column>
            </e-columns>
            <e-aggregates>
              <e-aggregate>
                <e-columns>
                  <e-column type="Count" field="Model" :footerTemplate="'sumTemplate'">
                  </e-column>
                  <template v-slot:sumTemplate="{data}"><span>Total Models: {{data.Count}}</span></template>
                </e-columns>
              </e-aggregate>
            </e-aggregates>
          </ejs-grid>
        </div>
      </div>
      <br>
      <div className="datalink">Source:
        <a href="https://en.wikipedia.org/wiki/List_of_Android_smartphones" target="_blank">Wikipedia: List of Android
          smartphones</a>
      </div>
    </div>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, AggregatesDirective, AggregateDirective, Filter, Sort, Edit, Toolbar, Page, Aggregate } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";


export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "e-aggregates": AggregatesDirective,
    "e-aggregate": AggregateDirective,
    'ejs-dropdownlist' : DropDownListComponent,
  },
  data() {
    return {
      data: data,
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
      filterSettings: { type: 'Excel' },
      dropDownData: [
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
      ],
      menuFilter: {
        type: 'Menu'
      },
      checkboxFilter: {
        type: 'CheckBox'
      }
    };
  },
  methods: {
    load: function () {
      this.$refs.grid.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    },
   changeAlignment(args){
      this.$refs.grid.ej2Instances.rowRenderingMode = args.value;
    }
  },
  provide: {
    grid: [Filter, Sort, Edit, Toolbar, Page, Aggregate]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
 
/* The device with borders */
.e-mobile-layout {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px solid #f4f4f4;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  box-shadow: 0 0px 2px rgb(144, 144, 144), 0 0px 10px rgb(0 0 0 / 16%);
}

/* The horizontal line on the top of the device */
.e-mobile-layout:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ebebeb;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.e-mobile-layout:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #e8e8e8;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.e-mobile-layout .e-mobile-content {
  overflow-x: hidden;
  height: 100%;
  background: white;
  border: 0px solid #dddddd;
}

.e-responsive-dialog {
  box-shadow: none;
  border: 1px solid #dddddd;
}

/* Render the mobile pager by default */
@media (max-width: 3840px) {
  .e-adaptive-demo .e-pager {
    padding: 13px 0;
  }

  .e-adaptive-demo .e-pager div.e-parentmsgbar {
    box-sizing: border-box;
    display: inline-block;
    float: initial;
    padding: 0;
    text-align: center;
    vertical-align: top;
    width: calc(60% - 48px);
  }

  .e-adaptive-demo .e-pager .e-pagesizes,
  .e-adaptive-demo .e-pager .e-pagecountmsg,
  .e-adaptive-demo .e-pager .e-pagercontainer {
    display: none;
  }

  .e-adaptive-demo .e-pager .e-icons {
    font-size: 11px;
  }

  .e-adaptive-demo .e-pager .e-mfirst,
  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext,
  .e-adaptive-demo .e-pager .e-mlast {
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    padding: 1% 5%;
  }

  .e-adaptive-demo .e-pager .e-mfirst {
    margin-right: 4px;
    text-align: right;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext {
    margin: 0 4px;
    width: 10%;
  }

  .e-adaptive-demo .e-pager .e-mprev {
    text-align: right;
  }

  .e-adaptive-demo .e-pager .e-mnext {
    text-align: left;
  }

  .e-adaptive-demo .e-pager .e-mlast {
    margin-left: 4px;
    text-align: left;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-bigger .e-pager,
  .e-adaptive-demo .e-pager.e-bigger {
    padding: 19px 0;
  }

  .e-adaptive-demo .e-bigger .e-pager.e-rtl div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger.e-rtl div.e-parentmsgbar {
    margin-right: 0;
  }

  .e-adaptive-demo .e-bigger .e-pager div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger div.e-parentmsgbar {
    padding: 0;
  }
}

.e-dlg-target.e-scroll-disabled {
  overflow: auto !important;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/adaptive-cs2" %}

> [enableAdaptiveUI](https://ej2.syncfusion.com/vue/documentation/api/grid/#enableadaptiveui) property must be enabled for vertical row rendering.

### Supported features by vertical row rendering

The following features are only supported in vertical row rendering:

* Paging, including Page size dropdown
* Sorting
* Filtering
* Selection
* Dialog Editing
* Aggregate
* Infinite scroll
* Toolbar - Options like **Add**, **Filter**, **Sort**, **Edit**, **Delete**, **Search**, and **Toolbar template** are available when their respective features are enabled. The toolbar dynamically includes a three-dotted icon, containing additional features like **ColumnChooser**, **Print**, **PdfExport**, **ExcelExport**, or **CsvExport**, once these features are enabled. Please refer to the following snapshot.

![VerticalmodeColumnMenu](./images/VerticalmodeColumnMenu.gif)

A snapshot of the adaptive grid displaying enabled paging along with a pager dropdown.

![AdaptivePagerDropdown](./images/PagerDropdown_Adaptive.gif)

> The Column Menu feature, which includes grouping, sorting, autofit, filter, and column chooser, is exclusively supported for the Grid in **Horizontal** [rowRenderingMode](https://ej2.syncfusion.com/vue/documentation/api/grid#rowrenderingmode).

## Rendering an adaptive layout for smaller screens alone

By default, adaptive UI layout is rendered in both mobile devices and desktop mode too while setting the [enableAdaptiveUI](https://ej2.syncfusion.com/vue/documentation/api/grid/#enableadaptiveui) property as **true**. Now the DataGrid component has an option to render an adaptive layout only for mobile screen sizes. This can be achieved by specifying the `AdaptiveUIMode` property value as `Mobile`. The default value of the `AdaptiveUIMode` property is "Both".

> The [rowRenderingMode](https://ej2.syncfusion.com/vue/documentation/api/grid#rowrenderingmode) property is rendered on the adaptive layout based on the `AdaptiveUIMode` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' id="Grid" :dataSource="data" height='100%' :enableAdaptiveUI='true' :adaptiveUIMode= 'adaptiveUIMode'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :allowExcelExport='true' :allowPdfExport='true' :allowGrouping=true :selectionSettings="selectionSettings" :showColumnChooser='true' 
            :load='load' :toolbarClick="toolbarClick">
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
              <e-column field='CustomerID' headerText='Customer Name' width='160' minWidth=80 maxWidth=300 :validationRules='customeridrules'></e-column>
              <e-column field='Freight' headerText='Freight' width='150' minWidth=80 maxWidth=300 format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
              <e-column field='OrderDate' headerText='Order Date' width='200' :format='dateFormat' textAlign='Right' editType='datepickeredit'></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
          </ejs-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Filter, Sort, Edit, Toolbar, Page,  ColumnChooser, Group, ExcelExport, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'

const grid=ref(null);
const adaptiveUIMode= 'Mobile';
const orderidrules = { required: true, number: true };
const customeridrules = { required: true };
const freightrules = { required: true };
const dateFormat= { type: 'dateTime', format: 'M/d/y hh:mm a' };
const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'];
const filterSettings = { type: 'Excel' };
const selectionSettings= { type: 'Multiple' };

const load = function () {
  grid.value.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
};

const toolbarClick =function (args) {
  switch (args.item.id) {
    case 'Grid_pdfexport':
      grid.value.pdfExport();
      break;
    case 'Grid_excelexport':
      grid.value.excelExport();
      break;
  }
}

provide('grid', [Filter, Sort, Edit, Toolbar, Page,
ColumnChooser, Group, ExcelExport, PdfExport]);
</script> 
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";

/* The device with borders */
.e-mobile-layout {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px solid #f4f4f4;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  box-shadow: 0 0px 2px rgb(144, 144, 144), 0 0px 10px rgb(0 0 0 / 16%);
}

/* The horizontal line on the top of the device */
.e-mobile-layout:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ebebeb;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.e-mobile-layout:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #e8e8e8;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.e-mobile-layout .e-mobile-content {
  overflow-x: hidden;
  height: 100%;
  background: white;
  border: 0px solid #dddddd;
}

.e-responsive-dialog {
  box-shadow: none;
  border: 1px solid #dddddd;
}

/* Render the mobile pager by default */
@media (max-width: 3840px) {
  .e-adaptive-demo .e-pager {
    padding: 13px 0;
  }

  .e-adaptive-demo .e-pager div.e-parentmsgbar {
    box-sizing: border-box;
    display: inline-block;
    float: initial;
    padding: 0;
    text-align: center;
    vertical-align: top;
    width: calc(60% - 48px);
  }

  .e-adaptive-demo .e-pager .e-pagesizes,
  .e-adaptive-demo .e-pager .e-pagecountmsg,
  .e-adaptive-demo .e-pager .e-pagercontainer {
    display: none;
  }

  .e-adaptive-demo .e-pager .e-icons {
    font-size: 11px;
  }

  .e-adaptive-demo .e-pager .e-mfirst,
  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext,
  .e-adaptive-demo .e-pager .e-mlast {
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    padding: 1% 5%;
  }

  .e-adaptive-demo .e-pager .e-mfirst {
    margin-right: 4px;
    text-align: right;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext {
    margin: 0 4px;
    width: 10%;
  }

  .e-adaptive-demo .e-pager .e-mprev {
    text-align: right;
  }

  .e-adaptive-demo .e-pager .e-mnext {
    text-align: left;
  }

  .e-adaptive-demo .e-pager .e-mlast {
    margin-left: 4px;
    text-align: left;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-bigger .e-pager,
  .e-adaptive-demo .e-pager.e-bigger {
    padding: 19px 0;
  }

  .e-adaptive-demo .e-bigger .e-pager.e-rtl div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger.e-rtl div.e-parentmsgbar {
    margin-right: 0;
  }

  .e-adaptive-demo .e-bigger .e-pager div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger div.e-parentmsgbar {
    padding: 0;
  }
}

.e-dlg-target.e-scroll-disabled {
  overflow: auto !important;
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
  <div id="app">
    <div class="e-adaptive-demo e-bigger">
      <div class="e-mobile-layout">
        <div class="e-mobile-content">
          <ejs-grid ref='grid' id="Grid" :dataSource="data" height='100%' :enableAdaptiveUI='true' :adaptiveUIMode= 'adaptiveUIMode'
            :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :allowExcelExport='true' :allowPdfExport='true' :allowGrouping=true :selectionSettings="selectionSettings" :showColumnChooser='true'
            :load='load' :toolbarClick="toolbarClick">
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :isPrimaryKey='true' :validationRules='orderidrules'></e-column>
              <e-column field='CustomerID' headerText='Customer Name' width='160' minWidth=80 maxWidth=300 :validationRules='customeridrules'></e-column>
              <e-column field='Freight' headerText='Freight' width='150' minWidth=80 maxWidth=300 format='C2' textAlign='Right' editType='numericedit' :validationRules='freightrules'></e-column>
              <e-column field='OrderDate' headerText='Order Date' width='200' :format='dateFormat' textAlign='Right' editType='datepickeredit'></e-column>
              <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></e-column>
            </e-columns>
          </ejs-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Sort, Edit, Toolbar, Page, ColumnChooser, Group, ExcelExport, PdfExport } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

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
      adaptiveUIMode: 'Mobile',
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      freightrules: { required: true },
      dateFormat: { type: 'dateTime', format: 'M/d/y hh:mm a' },
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'],
      filterSettings: { type: 'Excel' },
      selectionSettings: { type: 'Multiple' },
    };
  },
  methods: {
    load: function () {
      this.$refs.grid.ej2Instances.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    },
    toolbarClick: function(args) {
      switch (args.item.id) {
        case 'Grid_pdfexport':
          this.$refs.grid.pdfExport();
          break;
        case 'Grid_excelexport':
          this.$refs.grid.excelExport();
          break;
      }
    }
  },
  provide: {
    grid: [Filter, Sort, Edit, Toolbar, Page,
    ColumnChooser, Group, ExcelExport, PdfExport]
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
 
/* The device with borders */
.e-mobile-layout {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
  border: 16px solid #f4f4f4;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  box-shadow: 0 0px 2px rgb(144, 144, 144), 0 0px 10px rgb(0 0 0 / 16%);
}

/* The horizontal line on the top of the device */
.e-mobile-layout:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ebebeb;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.e-mobile-layout:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #e8e8e8;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.e-mobile-layout .e-mobile-content {
  overflow-x: hidden;
  height: 100%;
  background: white;
  border: 0px solid #dddddd;
}

.e-responsive-dialog {
  box-shadow: none;
  border: 1px solid #dddddd;
}

/* Render the mobile pager by default */
@media (max-width: 3840px) {
  .e-adaptive-demo .e-pager {
    padding: 13px 0;
  }

  .e-adaptive-demo .e-pager div.e-parentmsgbar {
    box-sizing: border-box;
    display: inline-block;
    float: initial;
    padding: 0;
    text-align: center;
    vertical-align: top;
    width: calc(60% - 48px);
  }

  .e-adaptive-demo .e-pager .e-pagesizes,
  .e-adaptive-demo .e-pager .e-pagecountmsg,
  .e-adaptive-demo .e-pager .e-pagercontainer {
    display: none;
  }

  .e-adaptive-demo .e-pager .e-icons {
    font-size: 11px;
  }

  .e-adaptive-demo .e-pager .e-mfirst,
  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext,
  .e-adaptive-demo .e-pager .e-mlast {
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    padding: 1% 5%;
  }

  .e-adaptive-demo .e-pager .e-mfirst {
    margin-right: 4px;
    text-align: right;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-pager .e-mprev,
  .e-adaptive-demo .e-pager .e-mnext {
    margin: 0 4px;
    width: 10%;
  }

  .e-adaptive-demo .e-pager .e-mprev {
    text-align: right;
  }

  .e-adaptive-demo .e-pager .e-mnext {
    text-align: left;
  }

  .e-adaptive-demo .e-pager .e-mlast {
    margin-left: 4px;
    text-align: left;
    width: calc(10% + 11px);
  }

  .e-adaptive-demo .e-bigger .e-pager,
  .e-adaptive-demo .e-pager.e-bigger {
    padding: 19px 0;
  }

  .e-adaptive-demo .e-bigger .e-pager.e-rtl div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger.e-rtl div.e-parentmsgbar {
    margin-right: 0;
  }

  .e-adaptive-demo .e-bigger .e-pager div.e-parentmsgbar,
  .e-adaptive-demo .e-pager.e-bigger div.e-parentmsgbar {
    padding: 0;
  }
}

.e-dlg-target.e-scroll-disabled {
  overflow: auto !important;
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/adaptive-cs1" %}

## See Also

* [Effective ways to utilize responsiveness](https://www.syncfusion.com/blogs/post/essential-js-2-effective-ways-to-utilize-responsiveness-in-the-vue-grid.aspx)