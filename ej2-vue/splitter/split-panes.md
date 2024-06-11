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

This section explain about split panes behaviours.

## Horizontal layout

By default, splitter will render in horizontal orientation. Splitter container will be splitted as panes in horizontal flow direction with vertical separator.

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

By setting [`orientation`](https://ej2.syncfusion.com/vue/documentation/api/splitter/#orientation) API as `Vertical`, splitter will render in vertical orientation. Splitter container will be splitted as panes in vertical flow direction with horizontal separator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/panes-orientation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/panes-orientation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/panes-orientation-cs1" %}

> You can also render multiple panes in splitter with both `Horizontal/Vertical` orientations.

## Separator

By default, pane separator will be render with `1px` width/height. You can customize the separator size by using [`separatorSize`](https://ej2.syncfusion.com/vue/documentation/api/splitter/#separatorsize) API.

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

Splitter provides support to render the nested pane to achieve the complex layouts. You can use the same `<div>` element for splitter pane and nested splitter.

> Also you can render the nested splitter using direct child of the splitter pane. For this, nested splitter should have `100%` width and height to match with the parent pane dimensions.

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

You can add or remove panes programmatically to the splitter, by using [addPane](https://ej2.syncfusion.com/vue/documentation/api/splitter/#addpane) and [removePane](https://ej2.syncfusion.com/vue/documentation/api/splitter/#removepane) methods.

### Add pane

You can add the panes dynamically in the splitter by passing [`paneProperties`](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel/) along with index to the [addPane](https://ej2.syncfusion.com/vue/documentation/api/splitter/#addpane) method

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

You can remove the split panes dynamically by passing the pane index to [removePane](https://ej2.syncfusion.com/vue/documentation/api/splitter/#removepane) method.

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