---
layout: post
title: Vue TreeGrid Loading Animation | Syncfusion
description: Learn how to use loading animations in Vue TreeGrid, including spinner and shimmer indicators for improved loading experiences.
control: Loading animation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Loading Animation in Vue TreeGrid

The Tree Grid displays a loading indicator while the data is being fetched and bound to the tree grid during initial rendering, refreshing, and after performing any tree grid actions like sorting, filtering, and more.

The tree grid supports two indicator types, which can be enabled by setting the `loadingIndicator.indicatorType` property to Spinner or Shimmer. The default value of the indicator type is Spinner.

In the following sample, the Shimmer indicator is displayed while the tree grid is loading and refreshing when using the remote data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/indicator/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/indicator/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/indicator/default-cs1" %}