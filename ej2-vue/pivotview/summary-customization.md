---
layout: post
title: Summary customization in Vue Pivotview component | Syncfusion
description: Learn here all about Summary customization in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Summary customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Summary customization in Vue Pivotview component

## Show or hide grand totals

Allows to show or hide grand totals in rows and columns using the [`showGrandTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showgrandtotals) property. To hide the grand totals in rows and columns, set the property [`showGrandTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showgrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) to **false**.
End user can also hide grand totals for row or columns separately by setting the property [`showRowGrandTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showrowgrandtotals) or [`showColumnGrandTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showcolumngrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) to **false** respectively.

> By default, [`showGrandTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showgrandtotals), [`showRowGrandTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showrowgrandtotals) and [`showColumnGrandTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showcolumngrandtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) are set as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs236/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs236" %}

## Show grand totals at top or bottom

Allows to show grand totals either at top or bottom in rows and columns using the [`grandTotalsPosition`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#grandtotalsposition) property. To show the grand totals at top in rows and columns, set the [`grandTotalsPosition`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#grandtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) to **Top**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs237/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs237" %}

## Show or hide sub-totals

Allows to show or hide sub-totals in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showsubtotals) property. To hide all the sub-totals in rows and columns, set the property [`showSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) to **false**. End user can also hide sub-totals for rows or columns separately by setting the property [`showRowSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showrowsubtotals) or [`showColumnSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showcolumnsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings)  to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showsubtotals), [`showRowSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showrowsubtotals) and [`showColumnSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showcolumnsubtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) are set as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs238/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs238" %}

## Show or hide sub-totals for specific fields

Allows to show or hide sub-totals for specific fields in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showsubtotals) property. To hide sub-totals for a specific field in row or column axis, set the property [`showSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showsubtotals) in [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#rows) or [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#columns) to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#showsubtotals) property in [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#rows) or [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#columns) is set as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs239/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs239" %}

## Show sub-totals at top or bottom

Allows to show sub-totals either at top or bottom of the header group in rows and columns by using the [`subTotalsPosition`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#subtotalsposition) property. By default, [`subTotalsPosition`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#subtotalsposition) property is set to **Auto**, which means that column sub-totals are displayed at the bottom and row sub-totals are displayed at the top of the header group in the pivot table.

To show sub-totals at top of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) to **Top**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs240/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs240" %}

To show sub-totals at bottom of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#datasourcesettings) to **Bottom**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs241/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs241" %}

## Show or hide totals using toolbar

It can also be achieved using built-in toolbar options by setting the [`showToolbar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#showtoolbar) property in pivot table to **true**. Also, include the items **GrandTotal** and **SubTotal** within the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#toolbar) property in pivot table. End user can now see "Show/Hide Grand totals" and "Show/Hide Sub totals" icons in toolbar UI automatically.

The grand totals and sub-totals can be dynamically displayed at the top or bottom of the pivot table's row and column axes by using the built-in options "Grand totals position" and "Subtotals position" available in the grand totals and sub-totals drop down menus, respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs242/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs242" %}