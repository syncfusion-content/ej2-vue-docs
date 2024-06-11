---
layout: post
title: Drill down in Vue Pivotview component | Syncfusion
description: Learn here all about Drill down in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Drill down 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drill down in Vue Pivotview component

## Drill down and drill up

The drill down and drill up action helps to view the bound data in detailed and abstract view respectively. By default, if member(s) has children, then expand and collapse icon will be displayed in the respective row/column header. On clicking the icon, expand or collapse action will be performed automatically through built-in source code. Meanwhile, leaf member(s) does not contain expand and collapse icon.

![output](images/drill.png)

## Drill position

Allows to drill only the current position of the selected member and exclude the drilled data of selected member in other positions. For example, if "FY 2015" and "FY 2016" have "Quarter 1" member as child in next level, and when end user attempts to drill "Quarter 1" under "FY 2016", only it will be expanded and not "Quarter 1" under "FY 2015".

> This feature is built-in and occurs every time when expand or collapse action is done for better performance.

![output](images/drill_position.png)

## Expand all

> This property is applicable only for the relational data source.

Allows to either expand or collapse all headers that are displayed in row and column axes. To display all headers in expanded state, set the property [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#expandall) to **true** and to collapse all headers, set the property [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#expandall) to **false**. By default, [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#expandall) property is set to **false**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs27" %}

## Expand all headers for specific fields

> This property is applicable only for the relational data source.

Allows to expand or collapse all headers for specific fields (only) in row and column axes. To expand headers for a specific field in row or column axis, set the property [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#expandall) in [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#rows) or [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#columns) to **true**. By default, [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iFieldOptions/#expandall) property in [`rows`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#rows) or [`columns`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#columns) is set to **false**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs28" %}

## Expand all except specific member(s)

> This option is applicable only for the relational data source.

In addition to the previous topic, there is an enhancement to expand all headers expect specific header(s) and similarly to collapse all headers except specific header(s). To achieve this, [`drilledMember`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#drilledmembers) is used. The required properties of the [`drilledMember`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#drilledmembers) are explained below:

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDrillOptions/#name): It allows to set the field name whose member(s) needs to be specifically drilled.
* [`items`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDrillOptions/#items): It allows to set the exact member(s) which needs to be drilled.

> The [`drilledMember`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#drilledmembers) option always works in vice-versa with respect to the property [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#expandall) in pivot table. For example, if [`expandAll`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#expandall) is set to **true**, then the member(s) added in [`items`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDrillOptions/#items) collection alone will be in collapsed state.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs29" %}

## Expand specific member(s)

End user can also manually expand or collapse specific member(s) in each fields under row and column axes using the [`drilledMembers`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#drilledmembers) from code behind. The required properties of the [`drilledMembers`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#drilledmembers) are explained below:

* [`name`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDrillOptions/#name): It allows to set the field name whose member(s) needs to be specifically drilled.
* [`items`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDrillOptions/#items): It allows to set the exact member(s) which needs to be drilled.
* [`delimiter`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDrillOptions/#delimiter): It allows to separate next level of member from its parent member.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs30" %}

## Event

The event [`drill`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#aggregatecellinfo) triggers every time when a field is expanded or collapsed. For instance using this event user can alter delimiter and drill action for the respective item. It has the following parameters:

* `drillInfo` - It holds the current drilled item information.
* `pivotview` - It holds pivot table instance.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs31" %}

### ActionBegin

The event [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#actionbegin) triggers when the UI actions such as drill down and drill up begin. This allows user to identify the current action being performed at runtime. It has the following parameters:

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action began. The following are the UI actions and their names:

    | Action | Action Name|
    |------|-------------|
    | [`Expand`](./drill-down/#Drill-down-and-drill-up)| Drill down|
    | [`Collapse`](./drill-down/#Drill-down-and-drill-up)| Drill up|

* `cancel`: It allows user to restrict the current action.

In the below sample, drill down and drill up action can be restricted by setting the **args.cancel** option to **true** in the `actionBegin` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs32" %}

### ActionComplete

The event [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#actioncomplete) triggers when a UI action such as drill down or drill up, is completed. This allows user to identify the current UI actions being completed at runtime. It has the following parameters:

* `dataSourceSettings`: It holds the current data source settings such as input data source, rows, columns, values, filters, format settings and so on.

* `actionName`: It holds the name of the current action completed. The following are the UI actions and their names:

    | Action | Action Name|
    |------|-------------|
    | [`Expand`](./drill-down/#Drill-down-and-drill-up)| Drill down|
    | [`Collapse`](./drill-down/#Drill-down-and-drill-up)| Drill up|

* `actionInfo`: It holds the unique information about the current UI action. For example, if drill down action is completed, the event argument contains information such as field name and the drill information.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs33/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs33" %}

### ActionFailure

The event [`actionFailure`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#actionfailure) triggers when the current UI action fails to achieve the desired result. It has the following parameters:

* `actionName`: It holds the name of the current action failed. The following are the UI actions and their names:

    | Action | Action Name|
    |------|-------------|
    | [`Expand`](./drill-down/#Drill-down-and-drill-up)| Drill down|
    | [`Collapse`](./drill-down/#Drill-down-and-drill-up)| Drill up|

* `errorInfo`: It holds the error information of the current UI action.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs34/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs34" %}