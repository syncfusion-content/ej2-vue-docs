---
layout: post
title: Convert complex JSON to flat JSON and assign it to the pivot table in Vue Pivotview component | Syncfusion
description: Learn here all about how to convert complex JSON to flat JSON and assign it to the pivot table in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Convert complex JSON to flat JSON and assign it to the pivot table 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Convert complex JSON to flat JSON and assign it to the pivot table in Vue Pivotview component

By default, flat JSON can only bind to the pivot table. However, you can connect complex JSON to the pivot table by converting it to flat JSON via code-behind and binding it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property in the [`load`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#load) event.

In the following example, the **complexToFlatJson()** method is used to convert complex JSON to flat JSON and bind it to the pivot table using the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#datasource) property, then modifying the field names in the [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#rows) and [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#columns) based on the converted flat JSON under [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) in the [`load`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#load)  event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs268/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs268/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs268" %}