---
layout: post
title: How to customize tab scroll step in Vue Tabs | Syncfusion
description: Change the Vue Tabs scroll step distance using the scrollStep property to control how many pixels tab headers move on each scroll button click.
control: Customize tab scroll step 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tab scroll step in Vue Tabs

Tab supports customizing the scrolling distance when you click the left and right side navigation icons. You can customize the `ScrollStep` property for the scrolling distance. Refer to the following code example.

By using the Tab's `scrollStep` property, pass a required value to customize the tab scroll step.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/scrollstep-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/scrollstep-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/scrollstep-cs1" %}