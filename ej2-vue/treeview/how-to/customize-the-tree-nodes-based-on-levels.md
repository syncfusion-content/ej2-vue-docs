---
layout: post
title: customize tree nodes based on levels in Vue TreeView | Syncfusion
description: Apply different CSS styles to Vue TreeView nodes at each hierarchy level using the nodeTemplate or created event for level-based customization.
control: Customize the tree nodes based on levels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize tree nodes based on levels in Vue TreeView

You can customize the tree nodes based on their levels by adding a custom [cssClass](https://ej2.syncfusion.com/vue/documentation/api/treeview#cssclass) to the component and enabling specific styles.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/cssClass-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/cssClass-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/cssClass-cs1" %}