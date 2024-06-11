---
layout: post
title: Hide empty headers in Vue Pivotview component | Syncfusion
description: Learn here all about Hide empty headers in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Hide empty headers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Hide empty headers in Vue Pivotview component

If the raw data for a particular field is not defined, it will be shown as 'Undefined' in the pivot table headers. You can hide those headers by setting the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel/#showheaderwhenempty) property to **false** in the pivot table.

For example, if the raw data for the field 'Country' is defined as **"United Kingdom"** and **"State"** is not defined means, it will be shown as **"United Kingdom >> Undefined"** in the header section. Here, you can hide those 'Undefined' header using the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel/#showheaderwhenempty) property.

> By default, this property is set as **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivotNullData-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/pivotNullData-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/pivotNullData-cs1" %}