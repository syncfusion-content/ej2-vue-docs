---
layout: post
title: How to render Sidebar with TreeView in Vue Sidebar | Syncfusion
description: Embed a TreeView component inside the Vue Sidebar with dock state enabled to synchronize expand and collapse actions across both the sidebar and tree.
control: Sidebar with treeview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render Sidebar with TreeView in Vue Sidebar

The following example demonstrates how to render a TreeView component inside the Sidebar with dock state and how to achieve expand and collapse functionalities simultaneously in the Sidebar and TreeView.

When collapsed, the LI elements of TreeView show only icons to represent a short sign of the hidden text content. When expanded, the hidden text content becomes visible.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/treeview-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/treeview-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/treeview-cs1" %}