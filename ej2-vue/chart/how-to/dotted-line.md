---
layout: post
title: Dotted line in Vue Chart component | Syncfusion
description: Learn here all about Dotted line in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Dotted line 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Dotted line in Vue Chart component

Dotted lines can be added to a chart by using the `annotation` feature. This approach is commonly used to highlight thresholds, reference values, or specific data points without modifying the series itself.

To add dotted lines to the chart, follow the steps below.

**Step 1**:

Initialize the custom elements by using the `annotation` property. Annotations allow custom shapes or HTML elements to be rendered at specific positions within the chart area.

By setting the `coordinateUnits` value to `point` in the annotation object, dotted lines can be positioned based on the corresponding x and y data point values. This ensures that the dotted line aligns accurately with the underlying data points, even when the axis scale or range changes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
