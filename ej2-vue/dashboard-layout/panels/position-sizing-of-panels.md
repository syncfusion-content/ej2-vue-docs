---
layout: post
title: Position sizing in Vue Dashboard Layout component | Syncfusion
description: Learn here all about Position sizing of panels in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Position sizing of panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Position sizing of panels in Vue Dashboard Layout component

Panels are the basic building blocks of the Dashboard Layout component. They act as containers for the data to be visualized or presented. Panels can be positioned and resized to present content effectively.

The following table lists the available panel properties and their descriptions.

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

Panels within the layout can be ordered using the [`row`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#row) and [`col`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#col) properties. Positioning panels is useful to present data in a desired order.

The following sample demonstrates positioning panels within the Dashboard Layout using the **row** and **column** properties.

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

A panel's size can be adjusted by defining the [`sizeX`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizex) and [`sizeY`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizey) properties. The [`sizeX`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizex) property defines the width and the [`sizeY`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizey) property defines height of a panel in cell count. These properties help design dashboards where panel content varies in size.

The following sample demonstrates the sizing of panels within the dashboard layout using the **sizeX** and **sizeY** properties of the panels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/setting-cell-spacing-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/setting-cell-spacing-cs2" %}

> Refer to the [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. Also explore the [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material3/dashboard-layout/default.html) to learn how to present and manipulate data.