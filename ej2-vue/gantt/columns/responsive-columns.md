---
layout: post
title: Responsive columns in Vue Gantt component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Responsive columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in Vue Gantt component

You can toggle the column visibility based on media queries, which are defined in the [`hideAtMedia`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#hideatmedia). The [`hideAtMedia`](https://ej2.syncfusion.com/vue/documentation/api/gantt/column/#hideatmedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs18" %}

## Change tree/expander column

The tree/expander column is a column in the Gantt component, that has icons to expand or collapse the parent records. You can define the tree column index in the Gantt component by using the [`treeColumnIndex`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#treecolumnindex) property and the default value of this property is `0`. The following code example shows how to use this property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs19" %}

## Show or Hide columns dynamically

You can show or hide gantt columns dynamically using external buttons by invoking the [`showColumn`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#showcolumn) or [`hideColumn`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#hidecolumn) method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/columns-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/columns-cs20" %}