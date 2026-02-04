---
layout: post
title: Dynamic chart in Vue Chart component | Syncfusion
description: Learn here all about Dynamic chart in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Dynamic chart 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Dynamic chart in Vue Chart component

A chart can be rendered dynamically by using an HTML button. This approach is useful in scenarios where charts need to be created or updated based on user interaction, such as loading data on demand or rendering multiple charts conditionally.

To add a chart dynamically through a button click, follow the steps below.

**Step 1**:

Create an HTML button initially.

Define the chart creation logic inside the button’s `onClick` event handler. Each time the button is clicked, the chart is rendered dynamically based on the click count or the associated logic defined in the handler.

The following example demonstrates dynamically rendering a chart when the button is clicked.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs29" %}