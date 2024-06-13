---
layout: post
title: Tooltip template in Vue Heatmap chart component | Syncfusion
description: Learn here all about Tooltip template in Syncfusion Vue Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Tooltip template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip template in Vue Heatmap chart component

You can show a tooltip as a table using the `template` property in `tooltipSettings`.

The following steps describe how to show the table tooltip.

**Step 1**:

Initialize the tooltip template div as shown in the following html page.

**Step 2**:

Set the element id to the `template` property in `tooltipSettings` to show the tooltip template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/how-to-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/heatmap-chart/how-to-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap-chart/how-to-cs2" %}