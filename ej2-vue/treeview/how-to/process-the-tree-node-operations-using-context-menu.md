---
layout: post
title: Process tree node operations using context menu in Vue TreeView | Syncfusion
description: Integrate a Context Menu with Vue TreeView to perform node-level operations like add, remove, rename, and expand via right-click context actions.
control: Process the tree node operations using context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to process tree node operations using context menu in Vue TreeView

You can integrate a context menu with the TreeView component to perform tree-view-related operations such as adding, removing, and renaming nodes. The following example demonstrates how to use the **select** event of the context menu to manipulate TreeView operations.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/context-menu-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/context-menu-cs1" %}