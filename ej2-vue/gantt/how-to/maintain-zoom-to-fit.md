---
layout: post
title: Maintain zoom to fit in Vue Gantt component | Syncfusion
description: Learn here all about Maintain zoom to fit in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Maintain zoom to fit 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Maintain zoom to fit in Vue Gantt component

In the Gantt control, While performing edit actions or dynamically change dataSource, the timeline gets refreshed. When zoomToFit toolbar item is clicked and perform editing actions or dynamically change dataSource, the timeline gets refreshed. So that, the timeline will not fit to the project any more.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions(cell edit,dialog edit,taskbar edit) by using [`fitToProject`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#fittoproject) method in `actionComplete` and `taskbarEdited` event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/how-to/maintainzoomtofit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/maintainzoomtofit-cs1" %}

## Maintain zoomToFit after change dataSource dynamically

We can maintain `zoomToFit` after change dataSource dynamically, by calling [`fitToProject`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#fittoproject) method in dataBound event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/how-to/maintainzoomtofitdatasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/maintainzoomtofitdatasource-cs1" %}