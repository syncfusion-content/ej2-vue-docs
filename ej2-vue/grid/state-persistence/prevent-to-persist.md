---
layout: post
title: Prevent to persist in Vue Grid component | Syncfusion
description: Learn here all about Prevent to persist in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Prevent to persist 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent to persist in Vue Grid component

## Prevent columns from persisting

When the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is set to true, the Grid properties such as [Grouping](https://ej2.syncfusion.com/vue/documentation/api/grid/groupSettingsModel/), [Paging](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettingsModel/), [Filtering](https://ej2.syncfusion.com/vue/documentation/api/grid/pageSettingsModel/), [Sorting](https://ej2.syncfusion.com/vue/documentation/api/grid/sortSettingsModel/), and [Columns](https://ej2.syncfusion.com/vue/documentation/api/grid/columnModel/) will persist. You can use the `addOnPersist` method to prevent these Grid properties from persisting.

The following example demonstrates how to prevent Grid columns from persisting. In the [dataBound](https://ej2.syncfusion.com/vue/documentation/api/grid/#databound) event of the Grid, you can override the `addOnPersist` method and remove the columns from the key list given for persistence.

>**Note:** When the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is set to true, the Grid properties such as column template, column formatter, header text, and value accessor will not persist.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/sort/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs7" %}