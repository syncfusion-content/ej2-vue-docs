---
layout: post
title: Grouping in Vue Listview component | Syncfusion
description: Learn here all about Grouping in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Grouping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Vue Listview component

The ListView supports to wrap the nested element into a group based on the category. The category of each list item can be mapped with groupBy field in the data table, that also supports single-level navigation.

In the following sample, The cars are grouped based on its category by using the groupBy field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/grouping-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/grouping-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/grouping-cs1" %}

## Customization

The grouping header can be customized by using the groupTemplate property for both inline and fixed group header. The complete customization description and explanation with an example is given in the following link.

[Group Template](./customizing-templates#group-template).