---
layout: post
title: State persistence in Vue Grid component | Syncfusion
description: Learn here all about State persistence in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Vue Grid component

State persistence refers to the Grid's state maintained in the browser's
[`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#)
even if the browser is refreshed or if you move to the next page within the browser.State persistence stores grid’s model object in the local storage when the
[`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) is defined as true.

## Restore initial Grid state

When the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is set to **true**, the Grid will keep its state even if the page is reloaded. In some cases, you may be required to retain the Grid in its initial state. The Grid will not retain its initial state now since the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property has been enabled.

You can achieve this by destroying the grid after disabling the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property and clearing the local storage data, as shown in the sample below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs8" %}

## Maintaining custom query in state persistence

Grid does not maintain the query params after page load event when
[`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) is set to true.
This is because the Grid refreshes its query params for every page load. You can maintain the custom query params by resetting the
`addParams`method in the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs9" %}

## Add a new column in persisted columns list

The Grid columns can be persisted when the [enablePersistence](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property is set to true. If you want to add the new columns with the existing persist state, you can use the Grid inbuilt method such as `column.push` and call the [refreshColumns()](../../api/grid/#refreshcolumns) method for UI changes. Please refer to the following sample for more information.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/sort/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/sort/default-cs10" %}

## See Also

* [How to override Grid persistence in Vue Grid](https://www.syncfusion.com/forums/150064/how-to-override-grid-persistence-in-vue-grid)