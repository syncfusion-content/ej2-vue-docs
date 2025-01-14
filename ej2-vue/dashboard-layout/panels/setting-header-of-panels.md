---
layout: post
title: Set panel headers in Vue Dashboard Layout | Syncfusion
description: Learn here all about Setting header of panels in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Setting header of panels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Setting header of panels in Vue Dashboard Layout component

The Dashboard Layout component is mostly used to represent the data used for monitoring or managing a process. These data or any HTML template can be placed as the content of a panel using the [`content`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel/#content) property. Also, word or phrase that summarize the panel’s content can be added as the header on the top of each panel using the [`header`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel/#header) property of the panel.

The following sample demonstrates how to add content for each panel using the header and content properties of the panels.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/header-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/header-cs1" %}

## Placing components as content of panels

In a dashboard, components like the chart, grids, maps, gauge, and more etc. can be used to present a complex data. Such components can be placed as the panel content by assigning the corresponding component element as the [`content`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/panelModel/#content) of the panel.

To design a Vue Dashboard Layout with UI components, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=X7NMBiIGkyA" %}

The following sample demonstrates how to add EJ2 Chart components as the `content` for each panel in the Dashboard Layout component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/content-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/content-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/content-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.
