---
layout: post
title: Position sizing of panels in Vue Dashboard layout component | Syncfusion
description: Learn here all about Position sizing of panels in Syncfusion Vue Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Position sizing of panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Position sizing of panels in Vue Dashboard layout component

Panels are the basic building blocks of the dashboard layout component. They act as a container for the data to be visualized or presented. These panels can be positioned or resized for effective presentation of the data.

The following table represents all the available panel properties and the corresponding functionalities.

| **PanelObject** | **Description** |
| --- | --- |
| <kbd>id</kbd> | Specifies the ID value of the panel. |
| <kbd>row</kbd> | Specifies the row value in which the panel to be placed. |
| <kbd>col</kbd> | Specifies the column value in which the panel to be placed. |
| <kbd>sizeX</kbd> | Specifies the width of the panel in cells count. |
| <kbd>sizeY</kbd> | Specifies the height of the panel in cells count. |
| <kbd>minSizeX</kbd> |Specifies the minimum width of the panel in cells count. |
| <kbd>minSizeY</kbd> | Specifies the minimum height of the panel in cells count. |
| <kbd>maxSizeX</kbd> | Specifies the maximum width of the panel in cells count. |
| <kbd>maxSizeY</kbd> | Specifies the maximum height of the panel in cells count. |
| <kbd>header</kbd> | Specifies the header template of the panel. |
| <kbd>content</kbd> | Specifies the content template of the panel. |
| <kbd>cssClass</kbd> | Specifies the CSS class name that can be appended with each panel element.|

## Positioning of panels

The panels within the layout can be easily positioned or ordered using the `row` and `col` properties of the panels. Positioning of panels will be beneficial to represent the data in any desired order.

The following sample demonstrates the positioning of panels within the dashboard layout using the row, and,column properties of the panels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/position-of-panels-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/position-of-panels-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/position-of-panels-cs1" %}

## Sizing of panels

A panel's size can be varied easily by defining the `sizeX` and `sizeY` properties. The `sizeX` property defines the width and the `sizeY` property defines height of a panel in cells count. These properties will be helpful in designing a dashboard, where the content of each panel may vary in size.

The following sample demonstrates the sizing of panels within the dashboard layout using the sizeX and sizeY properties of the panels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/setting-cell-spacing-cs2" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.