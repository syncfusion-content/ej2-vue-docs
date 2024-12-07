---
layout: post
title: Labels in Vue Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Labels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Vue Diagram component

[`Annotation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationModel) is a block of text that can be displayed over a node or connector. Annotation is used to textually represent an object with a string that can be edited at runtime. Multiple annotations can be added to a node/connector.

<!-- markdownlint-disable MD033 -->

## Create annotation

An annotation can be added to a node/connector by defining the annotation object and adding that to the annotation collection of the node/connector. The [`content`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationModel#content) property of annotation defines the text to be displayed.

To create and add annotation to Nodes and Connectors using the EJ2 Vue Diagram, refer to the below video link,

{% youtube "youtube:https://www.youtube.com/embed/4pAKBu0hKd0" %}

The following code illustrates how to create a annotation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Annotation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Annotation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Annotation-cs1" %}

## Add annotations at runtime

Annotations can be added at runtime by using the diagram method [`addLabels`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#addlabels). The following code illustrates how to add a annotation to a node.

The annotation's [`id`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationModel#id) property is used to define the name of the annotation and its further used to find the annotation at runtime and do any customization.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Run-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Run-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Run-cs1" %}

## Remove annotation

A collection of annotations can be removed from the node by using diagram method [`removeLabels`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#removelabels). The following code illustrates how to remove a annotation to a node.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Update-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Update-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Update-cs1" %}

## Update annotation at runtime
You can get the annotation directly from the node’s annotations collection property and you can change any annotation properties at runtime. To reflect the changes immediately, we need to call `dataBind`.

The following code example illustrates how to change the annotation properties.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Update-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Update-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Update-cs2" %}
