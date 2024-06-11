---
layout: post
title: Resizing in Vue Splitter component | Syncfusion
description: Learn here all about Resizing in Syncfusion Vue Splitter component of Syncfusion Essential JS 2 and more.
control: Resizing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in Vue Splitter component

By default, resizing will be enable for split panes. Resizing gripper element will be add to the separator to makes the resize easy.

> Horizontal splitter will allows to resize in horizontal directions.
> Vertical splitter will allows to resize in vertical directions.

While resizing, previous and next panes will be adjust its dimensions automatically.

## Min and Max validation

Splitter allows you to set the minimum and maximum sizes for each pane. Resizing will not be occur over the [minimum](https://ej2.syncfusion.com/vue/documentation/api/splitter/paneProperties/#min) and [maximum](https://ej2.syncfusion.com/vue/documentation/api/splitter/paneProperties/#max) values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs7" %}

## Prevent resizing

You can disable the resizing for the pane by setting `false` to the [`resizable`](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel/#resizable) API within [paneSettings](https://ej2.syncfusion.com/vue/documentation/api/splitter/#panesettings).

> Splitter resizing will be enabled only when the target of the adjacent pane's `resizable` api should also be in `true` state.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs8" %}

## Refresh content on resizing

While resizing the panes, you can refresh the pane contents by using either [`resizeStart`](https://ej2.syncfusion.com/vue/documentation/api/splitter/#resizestart), [`resizing`](https://ej2.syncfusion.com/vue/documentation/api/splitter/#resizestart) or [`resizeStop`](https://ej2.syncfusion.com/vue/documentation/api/splitter/#resizestart) events.

## Customize the resize grip and cursor

You can customize the resize gripper icon and cursor in css level.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/splitter/resize-min-max-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/resize-min-max-cs9" %}

## See Also

* [Collapsible panes](./expand-collapse/)