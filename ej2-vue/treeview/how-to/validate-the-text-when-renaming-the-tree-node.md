---
layout: post
title: Validate text when renaming node in Vue TreeView | Syncfusion
description: Validate the text entered when renaming a Vue TreeView node using the nodeEdited event to check for empty strings or disallowed characters.
control: Validate the text when renaming the tree node 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to validate text when renaming node in Vue TreeView

You can validate the tree node text during editing by using the [nodeEdited](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodeedited) event of the TreeView. The following example demonstrates how to validate and prevent empty values in tree nodes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/validate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/validate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/validate-cs1" %}