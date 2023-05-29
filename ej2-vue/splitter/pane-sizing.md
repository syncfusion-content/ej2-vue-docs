---
layout: post
title: Pane sizing in Vue Splitter component | Syncfusion
description: Learn here all about Pane sizing in Syncfusion Vue Splitter component of Syncfusion Essential JS 2 and more.
control: Pane sizing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Pane sizing in Vue Splitter component

Splitter allows you to provide pane sizes either in `pixel` or `percentage` formats.

## Auto size panes

The splitter's panes are adjusted automatically during resizing if the size is not specified externally to panes, because the panes are designed based on flex layout by default. When add/remove or show/hide the panes, the panes are auto aligned within its container.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/resize-min-max-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs4" %}

## Fixed pane

You can render the split panes with fixed size in both `horizontal` and `vertical` mode. Even if you provide fixed sizes to all the panes, the last pane is considered as a flexible pane.

> Last pane is flexible because the splitter needs one pane as flexible pane always, to adjust its remaining layout space.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/resize-min-max-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs5" %}

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/resize-min-max-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs6" %}