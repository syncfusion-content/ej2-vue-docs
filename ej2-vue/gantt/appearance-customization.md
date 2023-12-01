---
layout: post
title: Appearance customization in Vue Gantt component | Syncfusion
description: Learn here all about Appearance customization in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Appearance customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance customization in Vue Gantt component

## Taskbar customization

### Taskbar height

The height of child taskbars and parent taskbars can be customized by using [`taskbarHeight`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#taskbarheight) property. The following code example shows how to use the [`taskbarHeight`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#taskbarheight) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs1" %}

> NOTE
The [`taskbarHeight`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#taskbarheight) value should be lower than [`rowHeight`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowheight) property value and these properties accept only pixel values.

### Taskbar template

You can design your own taskbars to view the tasks in Gantt using the [`taskbarTemplate`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#taskbartemplate) property. You can customize the parent taskbars and milestones with custom templates using the [`parentTaskbarTemplate`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#parenttaskbartemplate) and [`milestoneTemplate`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#milestonetemplate) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs2" %}

### Conditional formatting

The default taskbar UI can be replaced with custom templates by using the [`queryTaskbarInfo`](https://ej2.syncfusion.com/vue/documentation/api/gantt/iQueryTaskbarInfoEventArgs) event. The following code example shows customizing the taskbar UI based on task progress values in Gantt component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs3" %}

### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/change-gripper-icon-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/change-gripper-icon-cs1" %}

## Task labels

The Gantt component maps any data source fields to task labels using the [`labelSettings.leftLabel`](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings/#leftlabel), [`labelSettings.rightLabel`](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings/#rightlabel), and [`labelSettings.taskLabel`](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings/#tasklabel) properties. You can customize the task labels with templates.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs4" %}

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [`connectorLineWidth`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#connectorlinewidth) and [`connectorLineBackground`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#connectorlinebackground) properties. The following code example shows how to use these properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs5" %}

## Customize rows and cells

While rendering the TreeGrid part in Gantt, the [`rowDataBound`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#rowdatabound) and [`queryCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#querycellinfo) events trigger for every row and cell. Using these events, you can customize the rows and cells. The following code example shows how to customize the cell and row elements using these events.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs6" %}

## Grid lines

In Gantt component, you can show or hide the grid lines in the TreeGrid side and chart side by using the [`gridLines`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#gridlines) property.

The following options are available in Gantt component for rendering grid lines,

* Horizontal: The horizontal grid lines alone will be visible.
* Vertical: The vertical grid lines alone will be visible.
* Both: Both the horizontal and vertical grid lines will be visible on the TreeGrid and chart sides.
* None: Gridlines will not be visible on TreeGird and chart sides.

> By default, the [`gridLines`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#gridLines) property is set with `Horizontal` type.

The following code example shows how to change the gridlines rendering mode in the Gantt component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs7" %}

## Splitter

In the Gantt component, the Splitter separates the TreeGrid section from the Chart section. You can change the position of the Splitter when loading the Gantt component using the [`splitterSettings`](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings/) property. By splitting the TreeGrid from the chart, the width of the TreeGrid and chart sections will vary in the component. The [`splitterSettings.position`](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings/#position) property denotes the percentage of the TreeGrid section’s width to be rendered and this property supports both pixels and percentage values. You can define the splitter position as column index value using the [`splitterSettings.columnIndex`](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings/#columnindex) property. You can also define the splitter position with built-in splitter view modes by using the [`splitterSettings.view`](https://ej2.syncfusion.com/vue/documentation/api/gantt/splitterSettings/#view) property. The following list is the possible values for this property:

* `Default`: Shows Grid side and Gantt side.
* `Grid`: Shows Grid side alone in Gantt.
* `Chart`: Shows chart side alone in Gantt.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs8" %}

## Change splitter position dynamically

In Gantt, we can change the splitter position dynamically by using [`setSplitterPosition`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#setsplitterposition) method. Either We can change the splitter position with splitter position or columnIndex values by passing these values as arguments to [`setSplitterPosition`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#setsplitterposition) method. The following code example shows how to use this methods.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/appearance-customization-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs9" %}