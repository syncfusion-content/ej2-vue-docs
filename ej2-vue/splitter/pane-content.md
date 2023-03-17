---
layout: post
title: Pane content in Vue Splitter component | Syncfusion
description: Learn here all about Pane content in Syncfusion Vue Splitter component of Syncfusion Essential JS 2 and more.
control: Pane content 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pane content in Vue Splitter component

This section explains how to provide plain text content or HTML markup or integrate other JavaScript UI components as content of splitter.

## HTML Markup

Splitter is a layout based container component. You can render the pane contents from existing HTML markups. Converting HTML markup as splitter pane is easy way to add the panes content dynamically.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/resize-min-max-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs1" %}

## JavaScript UI components

You can render any JavaScript UI components along with their native and control events within splitter as pane content.

You can refer [Accordion within splitter](https://ej2.syncfusion.com/vue/demos/#/material/splitter/accordion-navigation-menu.html) and [Listview within splitter](https://ej2.syncfusion.com/vue/demos/#/material/splitter/details-view.html) examples.

## Plain content

You can add the plain text as a pane contents using either inner HTML or [content](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel/#content) API

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/resize-min-max-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs2" %}

## Pane content using selector

You can set HTML element as pane [content](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel/#content) using the query selectors such as ID or CSS class selectors.

The following code demonstrates how to fetch an element from the document and load it to pane using its ID.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/resize-min-max-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs3" %}