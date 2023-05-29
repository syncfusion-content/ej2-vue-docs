---
layout: post
title: Loading animation in Vue Gantt component | Syncfusion
description: Learn here all about Loading animation in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Loading animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Loading animation in Vue Gantt component

The loading indicator is used to display a visual indicator while the Gantt is fetching data or performing certain actions, such as sorting or filtering. The gantt support two indicator types, which is achieved by setting the [`loadingIndicator.indicatorType`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#loadingindicator) property to Shimmer or Spinner. The default value of the indicator type is "Spinner."

In the following sample, the Shimmer indicator is displayed while the gantt is scrolled when using the virtual data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/loading-animation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/loading-animation-cs1" %}