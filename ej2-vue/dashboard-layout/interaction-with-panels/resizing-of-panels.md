---
layout: post
title: Resizing of panels in Vue Dashboard layout component | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion Vue Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Resizing of panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resizing of panels in Vue Dashboard layout component

The Dashboard Layout component is also provided with the panel resizing functionality which can be enabled or disabled using the [`allowResizing`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#allowresizing) property. This functionality allows you to resize the panels dynamically through UI interactions using the resizing handlers which controls the panel resizing in various directions.

Initially, the panels can be resized only in south-east direction. However, panels can also be resized in east, west, north, south and south-west directions by defining the required directions with the [`resizableHandles`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#resizablehandles) property.

On resizing a panel in Dashboard layout the following events will be triggered,
* [resizeStart](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#resizestart) - Triggers when panel resize starts
* [resize](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#resize) - Triggers when panel is being resized
* [resizeStop](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#resizestop) - Triggers when panel resize stops

The following sample demonstrates how to enable and disable the resizing of panels in the Dashboard Layout component in different directions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/resizing-cs1" %}

## Resizing panels programatically

The Dashboard Layout panels can also be resized programatically by using [resizePanel](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#resizepanel) method. The method is invoked as follows,

```js
resizePanel(id, sizeX, sizeY)

```

Where,
* id - ID of the panel which needs to be resized.
* sizeX - New panel width in cells count for resizing the panel.
* sizeY - New panel height in cells count for resizing the panel.

The following sample demonstrates resizing panels programatically in the Dashboard Layout's [created](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#created) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/resize-panel-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.