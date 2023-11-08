---
layout: post
title: Edit in Vue Grid component | Syncfusion
description: Learn here all about Edit in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Edit 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Edit in Vue Grid component

The Grid component has options to dynamically insert, delete and update records. Editing feature requires a primary key column for CRUD operations. To define the primary key, set [`columns.isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#isprimarykey) to **true** in particular column.

You can start the edit action either by double clicking the particular row or by selecting the required row and click on **Edit** button in the toolbar. Similarly, you can add a new record to grid either by clicking on **Add** button in the toolbar or on an external button which is bound to invoke the [`addRecord`](https://ej2.syncfusion.com/vue/documentation/api/grid/edit/#addrecord) method of the grid, **Save** and **Cancel** while in edit mode is possible using respective toolbar icon in grid.

Deletion of the record is possible by selecting the required row and click on **Delete** button in the toolbar.

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/grid/edit/) module in the **provide** section.

To get start quickly with Edit Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=VUWaKKppBEg" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs20" %}

> * If [`columns.isIdentity`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#isidentity) is enabled, then it will be considered as a read-only column when editing and adding a record.
> * You can disable editing for a particular column, by specifying [`columns.allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowediting) to **false**.

## Toolbar with edit option

The grid toolbar has the [built-in items](../tool-bar#built-in-toolbar-items) to execute Editing actions.You can define this by using the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbar) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs21" %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#allowediting).

In the following demo, editing is disabled for the **CustomerID** column.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs22" %}

## Disable editing for a particular row or cell

You can disable the editing for a particular row by using the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event of Grid based on `requestType` as `beginEdit`.

In the below demo, the rows which are having the value for `ShipCountry` column as "France" is prevented from editing.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs23" %}

For batch mode of editing, you can use [`cellEdit`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings/#celledit) event of Grid. In the below demo, the cells which are having the value as "France" is prevented from editing.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs24" %}

## Editing template column

You can edit template column value by defining `field` for that particular column.

In the below demo, the `ShipCountry` column is rendered with the template.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/how-to/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/how-to/default-cs8" %}

## Troubleshoot editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row. If **primaryKey** is not defined in the grid, then edit or delete action take places the first row.

## How to make a Grid column always editable

Make the Grid column always editable using the column template feature of the Grid.

In the following example, the textbox is rendered in the Freight column using a column template. The keyup event for the Grid is bound using the [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event of the Grid, and the edited changes are saved in the data source using the [updateRow](https://ej2.syncfusion.com/vue/documentation/api/grid/#updaterow) method of the Grid.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/edit/default-cs25/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-cs25" %}

## See Also

* [Cascading DropDownList with Grid Editing](../how-to/cascading-drop-down-list-with-grid-editing)
* [Dialog editing for Vue Grid using WebAPI adaptor](https://www.syncfusion.com/forums/153713/dialog-editing-for-vue-grid-using-webapi-adaptor)
* [Is it possible to hide the tool bar or some of the CRUD operations in Vue Grid?](https://www.syncfusion.com/forums/164886/is-it-possible-to-hide-the-tool-bar-or-some-of-the-crud-operations-in-vue-grid)
* [How to pass a data from parent to child in Vue Grid](https://www.syncfusion.com/forums/144841/how-to-pass-a-data-from-parent-to-child-in-vue-grid)
* [Need to use different key value while performing delete in Vue Grid](https://www.syncfusion.com/forums/149008/need-to-use-different-key-value-while-performing-delete-in-vue-grid)
* [How to give custom Headertext name  and validation in ChildData Vue Grid](https://www.syncfusion.com/forums/159167/how-to-give-custom-headertext-name-and-validation-in-childdata-vue-grid)
* [Calculate column value based on another column with filtering in Vue Grid](https://www.syncfusion.com/forums/157994/calculate-column-value-based-on-another-column-with-filtering-in-vue-grid)