---
layout: post
title: Template in Vue Dashboard Layout component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Dashboard Layout component

You can customize the default appearance of the dashboard layout using the `content` property.

The two ways to configure template support in dashboard layout using `content` property are:

* Custom vue template (.vue file)
* Vue.component()

## Custom vue template

The `content` property is used to customize the default appearance of each panel in the dashboard layout. The content of the dashboard layout is displayed as per the template layout provided.

* Define the content in a pietemplate.vue file and create an object `data` in the **data option** of the pietemplate.vue file.

Refer to the following code snippet of pietemplate.vue file.

```
// pietemplate.vue

<template>
    <div id="app" style='display:block;height:100%; width:100%;'>
        <!--  chart element declaration -->
         <ejs-accumulationchart class="chart-content" ref="accumulationInstance" style='display:block;height:100%; width:100%;' :legendSettings="legendSettings" :tooltip="tooltip">
            <e-accumulation-series-collection>
                <e-accumulation-series :palettes='palettes' :dataSource='seriesData' xName='x' yName='y' innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { AccumulationChartComponent, PieSeries, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

export default {
  data() {
    return {
      seriesData:  [
        { 'x': 'Jan', y: 12.5, text: 'January' },
        { 'x': 'Feb', y: 25, text: 'February' },
        { 'x': 'Mar', y: 50, text: 'March' },
     ],
     legendSettings: { visible: false },
     dataLabel: { visible: true, position: 'Inside', name: 'value'},
     tooltip: {
        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
     },
     palettes: ['#00bdae', '#357cd2', '#e56691'],
    };
  },
  provide('accumulationchart',  [PieSeries, AccumulationDataLabel, AccumulationTooltip]);,
    mounted(){
    this.$refs.accumulationInstance.height ="100%";
    this.$refs.accumulationInstance.width ="100%";
  }
};
</script>

<style>
  .chart-content{
    height: 100%;
    width:100%;
  }
  #container{
    width: 100%;
    height: 100%;
  }
</style>
```

* Import the `pietemplate.vue` file in the corresponding app.vue file and create a template function, which returns an object

```ts

import pieTemplate from './pietemplate.vue'

pie: function () {
    return { template : pieTemplate }
},
```

Refer to the following code snippet of App.vue file.

```
// App.vue

<template>
    <div id="app">
     <!--  dashboard layout element declaration -->
      <ejs-dashboardlayout ref="DashbordInstance" :columns="2" id='edit_dashboard' >
         <e-panels>
                 <!--  template declaration for content property -->
                <e-panel :row="0" :col="1" :sizeX="1" :sizeY="1" header="<div>Pie Chart</div>" :content="pie"></e-panel>
            </e-panels>
    </ejs-dashboardlayout>
    </div>
</template>
<script setup>

// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutComponent } from "@syncfusion/ej2-vue-layouts";
import pieTemplate from "./pietemplate.vue";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);



export default {
       data () {
        return {
             pie: function () {
                return { template : pieTemplate }
            },
        };
     },
}
</script>
```

## Vue component

The pietemplate is initialized with `Vue.component()` where template is provided in the template option.

```ts

var pietemplate = Vue.component("contentTemp1", {
    template: `
        <div id="app" style='display:block;height:100%; width:100%;'>
            <ejs-accumulationchart class="chart-content" ref="accumulationInstance" style='display:block;height:100%; width:100%;' :legendSettings="legendSettings" :tooltip="tooltip">
                <e-accumulation-series-collection>
                    <e-accumulation-series :palettes='palettes' :dataSource='seriesData' xName='x' yName='y' innerRadius="40%" :dataLabel="dataLabel"> </e-accumulation-series>
                </e-accumulation-series-collection>
            </ejs-accumulationchart>
        </div>`,

    data() {
        return {
            seriesData:  [
                { 'x': 'Jan', y: 12.5, text: 'January' },
                { 'x': 'Feb', y: 25, text: 'February' },
                { 'x': 'Mar', y: 50, text: 'March' },
            ],
            legendSettings: { visible: false },
            dataLabel: { visible: true, position: 'Inside', name: 'value'},
            tooltip: {
                enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'
            },
            palettes: ['#00bdae', '#357cd2', '#e56691'],
        };
    },
    provide: {
        accumulationchart: [PieSeries, AccumulationDataLabel, AccumulationTooltip]
    },
    mounted(){
        this.$refs.accumulationInstance.height ="100%";
        this.$refs.accumulationInstance.width ="100%";
    }
});
```

* Create a template function which returns an object

```ts

export default {
    data: function() {
        return {
            pie: function () {
                return { template : pietemplate }
            },
        };
    }
}
```

The following sample demonstrates how to add EJ2 Chart components as the `content` for  panel in the dashboard layout component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/template-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.