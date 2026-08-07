---
layout: post
title: How to load a pre-defined report in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to load a pre-defined report as the default in the Vue Pivot Table by setting the desired report name in the dataBound event.
platform: ej2-vue
control: Load desired report from the report list as default 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# How to load a pre-defined report in Vue Pivot Table

By default, the Pivot Table displays with the report configuration defined in the component initialization. To load a specific report from a previously saved report collection during the initial rendering process, configure the desired report name within the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#databound) event. This approach allows the Pivot Table to automatically apply the selected report's configuration, including field arrangements, filters, and formatting settings, as soon as the component completes its data binding process.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs269/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs269/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs269" %}