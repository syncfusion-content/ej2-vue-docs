---
layout: post
title: Tooltip open or display modes in Vue Tooltip component | Syncfusion
description: Learn here all about Tooltip open or display modes in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Tooltip open or display modes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip open or display modes in Vue Tooltip component

The open mode property of the Tooltip can be set to respond to hovering, focusing, or clicking on a target. The Tooltip component has the following types of open modes:

* Auto
* Hover
* Click
* Focus
* Custom

## Auto

Tooltip appears when you hover over the target or when the target element receives the focus.

## Hover

Tooltip appears when you hover over the target.

## Click

Tooltip appears when you click a target element.

## Focus

Tooltip appears when you focus (say through tab key) on a target element.

## Custom

Tooltip is not triggered by any default action. In this mode, you need to bind your own events and use either the open or close public methods to control the tooltip.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tooltip/mode-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tooltip/mode-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/mode-cs1" %}