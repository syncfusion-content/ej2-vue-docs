---
layout: post
title: Split panes in Vue Splitter component | Syncfusion
description: Learn here all about Split panes in Syncfusion Vue Splitter component of Syncfusion Essential JS 2 and more.
control: Split panes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Split panes in Vue Splitter component

This section explains split-pane behavior.

## Horizontal layout

By default, Splitter renders in horizontal orientation. The Splitter container is split into panes that flow horizontally and are separated by vertical separators.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/split-panes-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/split-panes-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/split-panes-cs1" %}

## Vertical layout

Set the [`orientation`](https://ej2.syncfusion.com/vue/documentation/api/splitter#orientation) API to `Vertical` to render the Splitter in vertical orientation. The Splitter container is split into panes that flow vertically and are separated by horizontal separators.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/panes-orientation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/panes-orientation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/panes-orientation-cs1" %}

> You can also render multiple panes in Splitter using either `Horizontal` or `Vertical` orientation.

## Separator

By default, the pane separator renders with a `1px` width/height. Customize the separator size using the [`separatorSize`](https://ej2.syncfusion.com/vue/documentation/api/splitter#separatorsize) API.

> For horizontal orientation, it will be considered as separator width.
> For vertical orientation, it will be considered as separator height.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/panes-separator-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/panes-separator-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/panes-separator-cs1" %}

## Nested Splitter

Splitter supports nested panes to achieve complex layouts. The same `<div>` element for splitter pane and nested splitter.

> A nested Splitter can also be rendered as a direct child of a Splitter pane. In that case, set the nested Splitter to `100%` width and height so it matches the parent pane dimensions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/nested-splitter-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/nested-splitter-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/nested-splitter-cs1" %}

## Add or remove pane

Add or remove panes programmatically using the [addPane](https://ej2.syncfusion.com/vue/documentation/api/splitter#addpane) and [removePane](https://ej2.syncfusion.com/vue/documentation/api/splitter#removepane) methods.

### Add pane

Add panes dynamically by passing [`paneProperties`](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel) along with index to the [addPane](https://ej2.syncfusion.com/vue/documentation/api/splitter#addpane) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/add-pane-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/add-pane-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/add-pane-cs1" %}

### Remove pane

Remove panes dynamically by passing the pane index to the [removePane](https://ej2.syncfusion.com/vue/documentation/api/splitter#removepane) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/remove-pane-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/remove-pane-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/remove-pane-cs1" %}

## See Also

* [Resizable split panes](./resizing)
* [Collapsible panes](./expand-collapse)
* [Define size to a panes](./pane-sizing)
* [Specify content to a panes](./pane-content)