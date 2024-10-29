---
layout: post
title: User interactions in Vue Treeview component | Syncfusion
description: Learn here all about User interactions in Syncfusion Vue Treeview component of Syncfusion Essential JS 2 and more.
control: User interactions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# User interactions in Vue Treeview component

The below methods were available in TreeView, and we can walk through one by one.

* addNodes
* removeNodes
* updateNode
* refreshNode
* moveNodes

## addNodes

TreeView allows user to add the collection of TreeView nodes based on target and index position by using the `addNodes` method. You can add parent as well as the child by passing its id and target as arguments. Here, you can achieve this by using button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interactions-cs1" %}

## removeNodes

TreeView allows user to remove the collection of TreeView nodes by passing the array of node id by using the `removeNodes` method. You can remove parent as well as the child by passing its id value. Here, you can achieve this by using button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interactions-cs2" %}

## updateNode

TreeView allows user to update TreeView nodes by passing the target and the text to be shown by using the `updateNode` method. You can also need to enable the `allowEditing` property. Here, you can achieve this by using button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interactions-cs3" %}

## refreshNode

TreeView allows user to refresh TreeView nodes with new changes by passing the target and the new changes to be shown by using the `refreshNode` method while using the nodeTemplate property. Here, you can achieve this by using button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interactions-cs4" %}

## moveNodes

TreeView allows user to move TreeView node by passing the node to be moved, the target where to be moved, index of the moved node to be placed in target by using the `moveNodes` method. Here, you can achieve this by using button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treeview/how-to/user-interactions-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treeview/how-to/user-interactions-cs5" %}
