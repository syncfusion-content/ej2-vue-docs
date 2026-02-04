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

The tooltip displayed for a chart series can be conditionally hidden by using the [`tooltipRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#tooltiprender) event. This is useful when tooltips should be shown only for selected series or specific data points.

To hide the tooltip for unselected series, follow the steps below.

**Step 1**:

Use the [`tooltipRender`](https://ej2.syncfusion.com/vue/documentation/api/chart/#tooltiprender) event to access the tooltip rendering arguments. From the event arguments, the corresponding series element can be obtained and checked to determine whether it belongs to a deselected series.

By comparing the `seriesElement` class list with the deselected container, the tooltip rendering can be conditionally canceled. If the series is identified as unselected, set `args.cancel` to `true` to prevent the tooltip from being displayed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chart/axis/category-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/chart/axis/category-cs30" %}