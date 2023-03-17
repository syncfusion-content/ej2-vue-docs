---
layout: post
title: Drilldown in Vue Treemap component | Syncfusion
description: Learn here all about Drilldown in Syncfusion Vue Treemap component of Syncfusion Essential JS 2 and more.
control: Drilldown 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Drilldown in Vue Treemap component

The TreeMap supports drill-down to expose the hierarchy, achieved by clicking a node. If an item is clicked in the TreeMap, it will be moved to the next level or sub level hierarchy and returned back to the previous level by clicking the node.

## Perform drill-down action

The TreeMap items can be drilled by setting the [`enableDrillDown`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#enabledrilldown) property to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs12" %}

## On-demand data loading

All the child items are rendered during the normal drill-down process, and visible at the initial rendering of the TreeMap. But on-demand data loading, it will not render child items at initial rendering, and child nodes will be rendered during the drill-down process by setting the [`drillDownView`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#drilldownview) property to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs13" %}

## Breadcrumb support

TreeMap items are drilled, up to any level of parent using breadcrumb navigation and the level from root parent to current level is displayed at the top of item layout. It can be enabled by using the [`enableBreadcrumb`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#enablebreadcrumb) property to **true** and customize the breadcrumb connector using the [`breadcrumbConnector`](https://ej2.syncfusion.com/vue/documentation/api/treemap/#breadcrumbconnector) property. By default, **-**(hyphen) is the connector.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treemap/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/getting-started-cs14" %}