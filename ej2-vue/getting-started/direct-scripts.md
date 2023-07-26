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


Vue provides native script support, allowing users to directly include the Vue.js library in an HTML file without the need for a build process or module bundler. This feature is useful for simpler projects or prototypes, enabling quick and easy implementation of Vue.js without setting up a complex build workflow.


Similarly, Syncfusion offers direct script support for its Vue components. Developers can seamlessly include Syncfusion Vue components in their HTML files and leverage them within their Vue.js applications. This allows for straightforward integration of Syncfusion Vue components without the need for additional build processes. Now, let's delve into the process of utilizing Syncfusion Vue components through direct script inclusion.

## Prerequisites

* Any IDE, such as [Visual Studio Code](https://code.visualstudio.com/)

## Set up the Vue project

To demonstrate the usage of the `Grid` component through direct scripting, follow these steps:

1\. Begin by creating a folder named `quickstart` for the project.

2\. Inside the `quickstart` folder, create an HTML file named `index.html`.

Include the appropriate version of the Vue.js library in the **index.html** file based on whether to use [Vue 2](https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js) or [Vue 3](https://unpkg.com/vue@3/dist/vue.global.js) in the project. Then, create a new Vue instance with the required configuration options.

> The [Vue class component](https://class-component.vuejs.org) package is required before the 2023 Volume 1 (v21.1.35) release. So, add the [Vue class component](<https://cdn.jsdelivr.net/npm/vue-class-component@8.0.0-rc.1/dist/vue-class-component.global.min.js>) script to the head section of the **index.html** file for Vue 3 direct script.

{% tabs %}
{% highlight html tabtitle="Vue 2 (~/index.html)" %}

<div id="app">
    <!-- Vue components goes here -->
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.min.js"></script>
<script>
    new Vue({
        el: '#app',
    });
</script>

{% endhighlight %}
{% highlight html tabtitle="Vue 3 (~/index.html)" %}

<div id="app">
    <!-- Vue components goes here -->
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    Vue.createApp({
        el: '#app',
    }).mount('#app');
</script>

{% endhighlight %}
{% endtabs %}

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS from CDN, [CRG] and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in CDN. Add the `Material` CSS styles to the head section of the **index.html** file.

{% tabs %}
{% highlight html tabtitle="~/index.html" %}

<link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/21.2.3/material.css" rel="stylesheet" type="text/css" />

{% endhighlight %}
{% endtabs %}

## Import Syncfusion Vue scripts

To integrate Syncfusion components into your application, add the required Syncfusion Vue direct scripts to the head section of the **index.html** file to set up the Vue instance.

{% tabs %}
{% highlight html tabtitle="~/index.html" %}

<script src="https://cdn.syncfusion.com/ej2/21.2.3/ej2-vue-es5/dist/ej2-vue.min.js"></script>

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

1\. First, register the Grid component and its child directives in Vue.

{% tabs %}
{% highlight html tabtitle="Vue 2 (~/index.html)" %}

<script>
    Vue.use(ejs.grids.GridPlugin);
</script>

{% endhighlight %}
{% highlight html tabtitle="Vue 3 (~/index.html)" %}

<script>
    Vue.createApp({
        el: '#app',
        components: {
            'ejs-grid' : ejs.grids.GridComponent,
            'e-columns' : ejs.grids.ColumnsDirective,
            'e-column' : ejs.grids.ColumnDirective
        }
    }).mount('#app');
</script>

{% endhighlight %}
{% endtabs %}

2\. Add the component to the `<body>` section of the **index.html** file. Bind the [data-source](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource) property and inject the `Page` module. Follow the [Getting Started](https://ej2.syncfusion.com/vue/documentation/grid/getting-started/) documentation for further details.

> While using Syncfusion Vue components in a direct script way, camel-cased property (isPrimaryKey) names need to be specified in the kebab-cased (is-primary-key) equivalents.

{% tabs %}
{% highlight html tabtitle="Vue 2 (~/index.html)" %}

{% include code-snippet/common/getting-started-es5-cs1/index.html%}

{% endhighlight %}
{% highlight html tabtitle="Vue 3 (~/index.html)" %}

{% include code-snippet/common/getting-started-es5-vue3-cs1/index.html %}

{% endhighlight %}
{% endtabs %}

## Run the project

Run the **index.html** file in the web browser. The output will appear as follows:
        
{% previewsample "page.domainurl/code-snippet/common/getting-started-es5-vue3-cs1" %}
