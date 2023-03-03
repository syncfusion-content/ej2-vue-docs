---
layout: post
title: Hide tool tip in Vue Chart component | Syncfusion
description: Learn here all about Hide tool tip in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Hide tool tip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD036 -->

# Hide tool tip in Vue Chart component

By using the [`tooltipRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#tooltiprender) event, you can cancel the tooltip for unselected series in the chart.

To hide the tooltip value in unselected series, follow the given steps:

**Step 1**:

By using the [`tooltipRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#tooltiprender) event, you can get the series elements in the arguments. By using this argument we can compare whether seriesElementclasslist is deselected container or not. If it is true then we cancel the tooltip by setting the value for `args.cancel` as `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/chart/axis/category-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs30" %}