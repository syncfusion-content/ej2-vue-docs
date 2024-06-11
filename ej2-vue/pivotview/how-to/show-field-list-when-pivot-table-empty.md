---
layout: post
title: Show field list when pivot table empty in Vue Pivotview component | Syncfusion
description: Learn here all about Show field list when pivot table empty in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Show field list when pivot table empty 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show field list when pivot table empty in Vue Pivotview component

When there are no fields in a pivot table's row, column, value, and filter axes, a field list can still be displayed. To do so, use the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#databound) event and call the `onShowFieldList` method as shown below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs140/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs140/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs140" %}