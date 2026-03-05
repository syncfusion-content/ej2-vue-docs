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

Splitter allows specifying pane sizes in `pixel` or `percentage` formats.

## Auto size panes

If a pane size is not provided, panes are sized automatically using the Splitter's flex-based layout. When adding, removing, showing, or hiding panes, the Splitter automatically adjusts and aligns the panes within the container.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs4" %}

## Fixed pane

Panes can be rendered with fixed sizes in both `horizontal` and `vertical` mode. When fixed sizes are provided for all panes, the last pane is still treated as flexible.

> The last pane is flexible because the Splitter requires one flexible pane to occupy the remaining layout space.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs5" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs6" %}