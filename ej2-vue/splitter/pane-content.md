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

This section explains how to provide plain text, HTML markup, or other JavaScript UI components as pane content in the Splitter.

## HTML Markup

The Splitter is a layout container component. Render pane content from existing HTML markup. Converting HTML markup into Splitter panes makes it easy to add pane content dynamically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs1" %}

## JavaScript UI components

Any JavaScript UI component, along with its native and control events, can be rendered inside a Splitter pane.

Refer [Accordion within splitter](https://ej2.syncfusion.com/vue/demos/#/material3/splitter/accordion-navigation-menu.html) and [Listview within splitter](https://ej2.syncfusion.com/vue/demos/#/material3/splitter/details-view.html) examples.

## Plain content

Add plain text as pane content using inner HTML or the [content](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel#content) API

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs2" %}

## Pane content using selector

Set an HTML element as pane [content](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel#content) using query selectors such as an ID or CSS class selectors.

The following code demonstrates how to fetch an element from the document and load it to pane using its ID.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs3" %}