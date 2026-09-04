---
layout: post
title: How to customize toolbar scroll step in Vue Toolbar | Syncfusion
description: Change the Vue Toolbar scroll step distance using the scrollStep property to control how many pixels items move on each scroll button click.
control: Customize toolbar scroll step 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize toolbar scroll step in Vue Toolbar

You can customize the scrolling distance in the Toolbar when you click the left and right side navigation icons. We can customize the [`scrollStep`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/index-default#scrollstep) property for scrolling distance. The `scrollStep` property accepts a numeric value that specifies the scrolling distance in pixels. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/scrollstep-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/scrollstep-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/how-to/scrollstep-cs1" %}