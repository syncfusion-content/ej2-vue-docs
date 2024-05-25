---
layout: post
title: Sidebar with treeview in Vue Sidebar component | Syncfusion
description: Learn here all about Sidebar with treeview in Syncfusion Vue Sidebar component of Syncfusion Essential JS 2 and more.
control: Sidebar with treeview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Sidebar with treeview in Vue Sidebar component

The following example demonstrates how to render TreeView component inside the Sidebar with dock state and how to achieve expand and collapse the functionalities simultaneously in the sidebar and Treeview.

On collapse, the LI elements of TreeView show icons only to represent the short sign of the hidden text content. On expand, hidden text content will be set to be visible.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/treeview-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/treeview-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/treeview-cs1" %}