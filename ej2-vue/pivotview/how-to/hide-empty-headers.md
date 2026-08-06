---
layout: post
title: How to hide empty headers in Vue Pivot Table | Syncfusion
description: Step-by-step example showing how to hide empty (Undefined) headers in the Vue Pivot Table by setting the showHeaderWhenEmpty property to false in dataSourceSettings.
control: Hide empty headers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to hide empty headers in Vue Pivot Table

When the raw data for a particular field is not defined, it will be shown as 'Undefined' in the pivot table headers. You can hide those headers by setting the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel#showheaderwhenempty) property to **false** in the pivot table.

For example, when the raw data contains **"United Kingdom"** for the 'Country' field but the **"State"** field is undefined, the header displays as **"United Kingdom >> Undefined"**. Here, you can hide those 'Undefined' headers using the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel#showheaderwhenempty) property.

> By default, this property is set to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivotNullData-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivotNullData-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivotNullData-cs1" %}