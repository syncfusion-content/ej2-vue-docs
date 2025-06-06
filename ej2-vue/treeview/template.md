---
layout: post
title: Template in Vue TreeView component | Syncfusion
description: Learn here all about Template in Syncfusion Vue TreeView component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue TreeView component

The TreeView component allows you to customize the look of the TreeView nodes by using the [nodeTemplate](https://ej2.syncfusion.com/vue/documentation/api/treeview/#nodetemplate) property. This property accepts an HTML element ID or `template string`.

In the following sample, employee information such as employee photo, name, and designation have been included using the `nodeTemplate` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/template-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/template-cs1" %}

## See Also

* [How to customize the expand and collapse icons](./how-to/customize-the-expand-and-collapse-icons)
* [How to customize the tree nodes based on levels](./how-to/customize-the-tree-nodes-based-on-levels)