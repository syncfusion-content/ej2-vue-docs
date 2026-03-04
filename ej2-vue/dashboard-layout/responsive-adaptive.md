---
layout: post
title: Responsive adaptive in Vue Dashboard Layout component | Syncfusion
description: Learn here all about Responsive adaptive in Syncfusion Vue Dashboard Layout component of Syncfusion Essential JS 2 and more.
control: Responsive adaptive 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Responsive adaptive in Vue Dashboard Layout component

The control is provided with built-in responsive support, where panels within the layout get adjusted based on their parent element's dimensions to accommodate any resolution which relieves the burden of building responsive dashboards.

The dashboard layout is designed to automatically adapt with lower resolutions by transforming the entire layout into a stacked one, so that, the panels will be displayed in a vertical column. By default, whenever the screen resolution meets 600 px or lower resolutions this layout transformation occurs. This transformation can be modified for any user defined resolution by defining the for the [`mediaQuery`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#mediaquery) property of the component.

The following sample demonstrates the usage of the [`mediaQuery`](https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#mediaquery) property to turn out the layout into a stacked one in user defined resolution.  In the sample below, the layout becomes a stacked layout when the window width is 700px or less.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/dashboard-layout/responsive-adaptive-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dashboard-layout/responsive-adaptive-cs1" %}

> Refer to the [Vue Dashboard Layout](https://www.syncfusion.com/vue-ui-components/vue-dashboard-layout) feature tour page for its groundbreaking feature representations.Also explore the [Vue Dashboard Layout example](https://ej2.syncfusion.com/vue/demos/#/material3/dashboard-layout/default.html) to learn how to present and manipulate data.