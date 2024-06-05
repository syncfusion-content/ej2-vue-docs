---
layout: post
title: Responsive adaptive in Vue Dashboard layout component | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion Vue Dashboard layout component of Syncfusion Essential JS 2 and more.
control: Responsive adaptive 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Responsive adaptive in Vue Dashboard layout component

The control is provided with built-in responsive support, where panels within the layout get adjusted based on their parent element's dimensions to accommodate any resolution which relieves the burden of building responsive dashboards.

The dashboard layout is designed to automatically adapt with lower resolutions by transforming the entire layout into a stacked one, so that, the panels will be displayed in a vertical column. By default, whenever the screen resolution meets 600 px or lower resolutions this layout transformation occurs. This transformation can be modified for any user defined resolution by defining the for the [`mediaQuery`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#mediaquery) property of the component.

The following sample demonstrates the usage of the [`mediaQuery`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout/#mediaquery) property to turn out the layout into a stacked one in user defined resolution. Here, whenever, the window size reaches 700 px or lesser, the layout becomes a stacked layout.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/responsive-adaptive-cs1" %}

> You can refer to our [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material/dashboard-layout/default.html) to knows how to present and manipulate data.