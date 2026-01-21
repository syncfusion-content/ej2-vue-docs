---
layout: post
title: Show field list when pivot table empty in Vue | Syncfusion
description: Learn here all about Show field list when pivot table empty in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Show field list when pivot table empty 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show field list for empty Vue Pivot Table component

When there are no fields configured in a pivot table's row, column, value, and filter axes, the field list can be automatically displayed to help users configure the pivot table. This is particularly useful in scenarios where users start with an empty pivot configuration and need immediate access to available fields for setup. To achieve this functionality, use the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#databound) event and call the `onShowFieldList` method as demonstrated below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs140/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs140/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs140" %}