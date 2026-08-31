---
layout: post
title: Toggle checkbox on text click in Vue TreeView | Syncfusion
description: Toggle the checkbox state when clicking Vue TreeView node text by handling the nodeClicked event and switching the checked state of the node.
control: Check uncheck the checkbox on clicking the tree node text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to toggle checkbox on text click in Vue TreeView

You can toggle the checkboxes in the TreeView by clicking the tree node text. This can be achieved using the [nodeClicked](https://helpej2.syncfusion.com/vue/documentation/api/treeview#nodeclicked) event of the TreeView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/checkbox-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/checkbox-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/checkbox-cs1" %}