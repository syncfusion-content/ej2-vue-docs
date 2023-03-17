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

# Getting Started with Syncfusion Vue UI Components using direct scripts in a quickstart application

Vue has direct script support. It allows users to include the Vue.js library directly in the HTML file, without the need for a build step or a module bundler. This is useful for simple projects or prototypes where users want to quickly get started with Vue.js without setting up a build process.

Syncfusion also provides direct script support for its Vue components. This allows developers to easily include the Syncfusion Vue components in their HTML file and use them in their Vue.js application. Let's see how to use the Syncfusion Vue components with a direct script.

## Prerequisites

* Any IDE, such as [Visual Studio Code](https://code.visualstudio.com/)

## Configure Syncfusion Vue components in the application

For example, let's create the Vue `Grid` component sample using direct scripting. First, create an application folder `quickstart` and create an HTML file `~/quickstart/index.html`, then open it in Visual Studio Code.

### Vue 2 application

To use Vue 2 direct script, include the [Vue.js](https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js) library in the `index.html` HTML file using a script tag, and then create a new Vue instance with the needed options.

```
<div id="app">
    <!-- Vue components goes here -->
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js"></script>
<script>
    new Vue({
        el: '#app',
    });
</script>
```

Now that the Vue instance has been set up, start using Syncfusion components in the application. To do this, add the following Syncfusion Vue 2 direct scripts and styles to the head section of the `index.html` file.

```
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/material.css">
<script src="https://cdn.syncfusion.com/ej2/ej2-vue-es5/dist/ej2-vue.min.js"></script>
```

Now, register the Vue `Grid` component and all its child directives globally using the following code snippet:

```
<script>
    Vue.use(ejs.grids.GridPlugin);
</script>
```

Add the Vue Grid component to the `<body>` section of the `index.html` file. To display the Grid with records, bind the [data-source](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property to it. The simple data is mapped to the `data-source` property in this case, and the `Page` module is injected into the Grid component. More information on Grid component functionality can be found in [this document](https://ej2.syncfusion.com/vue/documentation/grid/getting-started/).

> While using Syncfusion Vue components in a direct script way, camel-cased property (isPrimaryKey) names need to be specified in the kebab-cased (is-primary-key) equivalents.

```
<body>
    <h2>Syncfusion Vue 2 Grid Component</h2>
    <div id="app">
        <ejs-grid :data-source="data" :allow-paging="true" :page-settings='pageSettings'>
            <e-columns>
                <e-column field="OrderID" header-text="Order ID" text-align="Right" :is-primary-key="true" width="100"></e-column>
                <e-column field="CustomerID" header-text="Customer ID"  width="80"></e-column>
                <e-column field="Freight" header-text="Freight" width="90"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
    <script>
        Vue.use(ejs.grids.GridPlugin);
        new Vue({
            el: '#app',
            provide: {
                grid: [ejs.grids.Page]
            },
            data () {
                return {
                    data: [
                            { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
                            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
                            { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
                            { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
                            { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
                            { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
                            { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
                            { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
                            { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
                    ],
                    pageSettings: { pageSize: 5 }
                }
            }
        });
    </script>

</body>
```

Finally, run the `~/quickstart/index.html` file in the web browser, and it will render the Syncfusion Vue Grid component. The output will appear as follows:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/getting-started-es5-cs1/index.html%}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/getting-started-es5-cs1" %}

### Vue 3 application

To use Vue 3 direct script, include the [Vue.js](https://unpkg.com/vue@3/dist/vue.global.js) library in the `index.html` HTML file using a script tag, and then create a new Vue instance with the needed options.

The [Vue class component](https://class-component.vuejs.org) package is required to run the Vue 3 components. So, add the [Vue class component](<https://cdn.jsdelivr.net/npm/vue-class-component@8.0.0-rc.1/dist/vue-class-component.global.min.js>) script to the head section of the `index.html` file.

```
<div id="app">
    <!-- Vue components goes here -->
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-class-component@8.0.0-rc.1/dist/vue-class-component.global.min.js"></script>
<script>
    Vue.createApp({
        el: '#app',
    }).mount('#app');
</script>
```

Now that the Vue instance has been set up, start using Syncfusion components in the application. To do this, add the following Syncfusion Vue 3 direct scripts and styles to the head section of the `index.html` file.

```
<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/material.css">
<script src="https://cdn.syncfusion.com/ej2/ej2-vue-es5/dist/ej2-vue3.min.js"></script>
```

Now, register the Vue `Grid` component and all its child directives globally using the following code snippet:

```
<script>
    Vue.createApp({
        el: '#app',
        components: {
            'ejs-grid' : ejs.grids.GridComponent,
            'e-columns' : ejs.grids.ColumnsDirective,
            'e-column' : ejs.grids.ColumnDirective
        },
    }).mount('#app');
</script>
```

Add the Vue Grid component to the `<body>` section of the `index.html` file. To display the Grid with records, bind the [data-source](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property to it. The simple data is mapped to the `data-source` property in this case, and the `Page` module is injected into the Grid component. More information on Grid component functionality can be found in [this document](https://ej2.syncfusion.com/vue/documentation/grid/getting-started/).

> While using Syncfusion Vue components in a direct script way, camel-cased property (isPrimaryKey) names need to be specified in the kebab-cased (is-primary-key) equivalents.

```
<body>
    <h2>Syncfusion Vue 3 Grid Component</h2>
    <div id="app">
        <ejs-grid :data-source="data" :allow-paging="true" :page-settings='pageSettings'>
            <e-columns>
                <e-column field="OrderID" header-text="Order ID" text-align="Right" :is-primary-key="true" width="100"></e-column>
                <e-column field="CustomerID" header-text="Customer ID"  width="80"></e-column>
                <e-column field="Freight" header-text="Freight" width="90"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
    <script>
        Vue.createApp({
            el: '#app',
            components: {
                'ejs-grid' : ejs.grids.GridComponent,
                'e-columns' : ejs.grids.ColumnsDirective,
                'e-column' : ejs.grids.ColumnDirective
            },
            provide: {
                grid: [ejs.grids.Page]
            },
            data () {
                return {
                    data: [
                            { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
                            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
                            { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
                            { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
                            { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
                            { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
                            { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
                            { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
                            { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
                    ],
                    pageSettings: { pageSize: 5 }
                }
            }
        }).mount('#app');
    </script>

</body>
```

Finally, run the `~/quickstart/index.html` file in the web browser, and it will render the Syncfusion Vue Grid component. The output will appear as follows:

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/getting-started-es5-vue3-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/getting-started-es5-vue3-cs1" %}