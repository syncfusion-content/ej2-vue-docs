---
layout: post
title: Hierarchical tree layout in Vue Diagram component | Syncfusion
description: Learn here all about Hierarchical tree layout in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Hierarchical tree layout 
documentation: ug
domainurl: ##DomainURL##
---

# Hierarchical tree layout in Vue Diagram control

The hierarchical tree layout arranges nodes in a tree-like structure, where the nodes in the hierarchical layout may have multiple parents. There is no need to specify the layout root.

## Hierarchical tree layout with nodes and connectors

To arrange the nodes in a hierarchical structure, specify the layout [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/layout/#type) as **HierarchicalTree**. The following example shows how to arrange the nodes in a hierarchical structure.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs-1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs-1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/automaticlayout/hierarchicallayout-cs-1" %}

>Note: If you want to use hierarchical tree layout in diagram, you need to inject HierarchicalTree in the diagram.

## Hierarchical layout with DataSource

You can create a hierarchical layout with data Source. The following code demonstrates how to render a Hierarchical layout using DataSource.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs-2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/automaticlayout/hierarchicallayout-cs-2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/automaticlayout/hierarchicallayout-cs-2" %}

>Note: If you want to convert the data source into layout, you need to inject DataBinding along with HierarchicalTree module in the diagram.

![Hierarchical tree](images/hierarchicalTree.png)
