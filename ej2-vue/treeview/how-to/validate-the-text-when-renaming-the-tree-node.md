---
layout: post
title: Validate text when rename node in Vue Treeview component | Syncfusion
description: Learn here all about Validate the text when renaming the tree node in Syncfusion Vue Treeview component of Syncfusion Essential JS 2 and more.
control: Validate the text when renaming the tree node 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validate the text when renaming the tree node in Vue Treeview component

You can validate the tree node text during editing by using the [`nodeEdited`](https://helpej2.syncfusion.com/vue/documentation/api/treeview#nodeedited) event of the TreeView. The following example demonstrates how to validate and prevent empty values in tree nodes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/validate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/validate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/validate-cs1" %}