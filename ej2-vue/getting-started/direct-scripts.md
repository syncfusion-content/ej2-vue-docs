---
layout: post
title: Direct scripts with Vue Getting started component | Syncfusion
description:  Checkout and learn about Direct scripts with Vue Getting started component of Syncfusion Essential JS 2 and more details.
control: Direct scripts 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD024 -->

# Getting Started with Syncfusion Vue UI Components using direct scripts

Vue provides native script support, allowing developers to directly include Vue.js and Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in HTML files without the need for a build process or module bundler. This approach is useful for simpler projects or prototypes, enabling quick and easy implementation of Vue.js and Syncfusion components without setting up a complex build workflow.

## Prerequisites

* Any IDE, such as [Visual Studio Code](https://code.visualstudio.com/)

## Set up the Vue project

To demonstrate the usage of the `Grid` component through direct scripting:

1\. Create a folder named `quickstart` and inside it, create an HTML file named `index.html`.

2\. Include the appropriate version of the Vue.js library in the **index.html** file based on whether to use [Vue 2](https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js) or [Vue 3](https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js) in the project. Then, create a new Vue instance with the required configuration options.

> The [Vue class component](https://class-component.vuejs.org) package is required before the 2023 Volume 1 (v21.1.35) release. Add the [Vue class component](<https://cdn.jsdelivr.net/npm/vue-class-component@8.0.0-rc.1/dist/vue-class-component.global.min.js>) script to the head section of the **index.html** file.

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

You can import themes for the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component in various ways, such as using CSS from CDN, [CRG] and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material3` theme is applied using CSS styles, which are available in CDN. Add the `Material3` CSS styles to the head section of the **index.html** file.

{% tabs %}
{% highlight html tabtitle="~/index.html" %}

<head>
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/33.2.3/material3.css" rel="stylesheet" type="text/css" />
</head>

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> Vue scripts

To integrate Syncfusion<sup style="font-size:70%">&reg;</sup> components into your application, add the required Syncfusion<sup style="font-size:70%">&reg;</sup> Vue direct scripts to the head section of the **index.html** file to set up the Vue instance.

{% tabs %}
{% highlight html tabtitle="~/index.html" %}

<head>
<script src="https://cdn.syncfusion.com/ej2/33.2.3/ej2-vue-es5/dist/ej2-vue.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> Vue component

1\. Register the Grid component and its child directives, then add the component to the `<body>` section of the **index.html** file. Bind the [data-source](https://ej2.syncfusion.com/vue/documentation/api/grid/index-default#datasource) property and inject the `Page` module. Follow the [Getting Started](https://ej2.syncfusion.com/vue/documentation/grid/getting-started) documentation for further details.

> **Note:** While using Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in direct script mode, camel-cased property names (e.g., `isPrimaryKey`) need to be specified in kebab-cased equivalents (e.g., `is-primary-key`).

{% tabs %}
{% highlight html tabtitle="Vue 3 (~/index.html)" %}

<script>
    const app = Vue.createApp({
        components: {
            'ejs-grid' : ejs.grids.GridComponent,
            'e-columns' : ejs.grids.ColumnsDirective,
            'e-column' : ejs.grids.ColumnDirective
        },
        data() {
            return {
                data: [
                    { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
                    { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
                    { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 }
                ]
            }
        }
    });
    app.mount('#app');
</script>

{% endhighlight %}
{% highlight html tabtitle="Vue 2 (~/index.html)" %}

<script>
    Vue.use(ejs.grids.GridPlugin);
    new Vue({
        el: '#app',
        data() {
            return {
                data: [
                    { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
                    { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
                    { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 }
                    ]
                }
            }
        });
</script>

{% endhighlight %}
{% endtabs %}

2\. Add the Grid component to a `<div>` element in the `<body>` section of the **index.html** file. Configure the Grid with columns and data source.

{% tabs %}
{% highlight html tabtitle="Vue 3 (~/index.html)" %}

<body>
<div id="app">
    <ejs-grid :data-source="data" :allow-paging="true" :page-settings='pageSettings'>
        <e-columns>
            <e-column field="OrderID" header-text="Order ID" text-align="Right" :is-primary-key="true" width="100"></e-column>
            <e-column field="CustomerID" header-text="Customer ID" width="80"></e-column>
            <e-column field="Freight" header-text="Freight" width="90"></e-column>
        </e-columns>
    </ejs-grid>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

{% endhighlight %}
{% highlight html tabtitle="Vue 2 (~/index.html)" %}

<div id="app">
    <ejs-grid :data-source="data" :allow-paging="true" :page-settings='pageSettings'>
        <e-columns>
            <e-column field="OrderID" header-text="Order ID" text-align="Right" :is-primary-key="true" width="100"></e-column>
            <e-column field="CustomerID" header-text="Customer ID" width="80"></e-column>
            <e-column field="Freight" header-text="Freight" width="90"></e-column>
        </e-columns>
    </ejs-grid>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js"></script>

{% endhighlight %}
{% endtabs %}


## Run the project

Run the **index.html** file in the web browser. The output will appear as follows:
        
{% previewsample "page.domainurl/code-snippet/common/getting-started-es5-vue3-cs1" %}