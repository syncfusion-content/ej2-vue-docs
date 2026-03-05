---
layout: post
title: Resizing of panels in Vue Dashboard Layout component | Syncfusion
description: Learn here all about Resizing of panels in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Resizing of panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resizing of panels in Vue Dashboard Layout component

The Dashboard Layout component provides panel resizing functionality, which can be enabled or disabled using the [`allowResizing`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowresizing) property. This functionality allows panels to be resized through UI interactions using resizing handlers that control resizing in various directions.

By default, panels can be resized only in the south-east direction. Panels can also be resized in east, west, north, south, and south-west directions by specifying the required directions with the[`resizableHandles`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#resizablehandles) property.

On resizing a panel in Dashboard Layout the following events are triggered,
* [resizeStart](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#resizestart) - Triggers when panel resize starts
* [resize](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#resize) - Triggers when panel is being resized
* [resizeStop](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#resizestop) - Triggers when panel resize stops

The following sample demonstrates enabling and disabling panel resizing in different directions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resizing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/resizing-cs1" %}

## Resizing panels programmatically

Dashboard Layout panels can also be resized programmatically using the [resizePanel](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#resizepanel) method. The method is invoked as follows,

```js
resizePanel(id, sizeX, sizeY)

```

Where,
* [`id`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#id) - ID of the panel which needs to be resized.
* [`sizeX`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizex) - New panel width in cells count for resizing the panel.
* [`sizeY`](https://helpej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel#sizey) - New panel height in cells count for resizing the panel.

The following sample demonstrates resizing panels programmatically in the Dashboard Layout's [created](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#created) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/resize-panel-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/resize-panel-cs1" %}

> Refer to the [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore the [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material3/dashboard-layout/default.html) to learn how to present and manipulate data.