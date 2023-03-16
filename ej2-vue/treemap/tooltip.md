---
layout: post
title: Tooltip in Vue Treemap component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Tooltip 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Vue Treemap component

Tooltip is used to display details about the items in the TreeMap. When space constraints prevent us from displaying the information using Data Labels, the tooltip comes in handy.

## Default tooltip

The tooltip is not visible by default, to make it visible, set the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/treemap/tooltipSettingsModel/#visible) property in the [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#tooltipsettings) to **true** and injecting the `TreeMapTooltip`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs57/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs57" %}

## Format tooltip

The tooltip content is displayed by default based on the [`weightValuePath`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#weightvaluepath). In addition, to show more information in the tooltip, use the [`format`](https://ej2.syncfusion.com/vue/documentation/api/treemap/tooltipSettingsModel/#format) property and define field from the data source as `${datafield}`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs58/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs58" %}

## Tooltip template

Tooltip can be rendered as a custom component using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/treemap/tooltipSettingsModel/#template) property in the [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#tooltipsettings) which accepts one or more UI elements as an input, that can be rendered as a part of the tooltip rendering. You can use `${datafield}` as placeholder in HTML element to display the values from data source.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs59/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs59" %}