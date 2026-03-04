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

By default, resizing is enabled for split panes. A resize gripper is added to the separator to make resizing easier.

> Horizontal splitter will allows to resize in horizontal directions.
> Vertical splitter will allows to resize in vertical directions.

While resizing, the adjacent panes adjust their dimensions automatically.

## Min and Max validation

Splitter allows setting the minimum and maximum sizes for each pane. Resizing will not occur beyond the [minimum](https://ej2.syncfusion.com/vue/documentation/api/splitter/paneProperties#min) and [maximum](https://ej2.syncfusion.com/vue/documentation/api/splitter/paneProperties#max) values.

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

You can disable the resizing for the pane by setting `false` to the [`resizable`](https://ej2.syncfusion.com/vue/documentation/api/splitter/panePropertiesModel#resizable) API within [paneSettings](https://ej2.syncfusion.com/vue/documentation/api/splitter#panesettings).

> Splitter resizing is enabled only when both adjacent pane's `resizable` api should also be in `true` state.

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

While resizing the panes, you can refresh the pane contents by using either [`resizeStart`](https://ej2.syncfusion.com/vue/documentation/api/splitter#resizestart), [`resizing`](https://ej2.syncfusion.com/vue/documentation/api/splitter#resizestart) or [`resizeStop`](https://ej2.syncfusion.com/vue/documentation/api/splitter#resizestart) events.

## Customize the resize grip and cursor

Customize the resize gripper icon and cursor via CSS.

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

* [Collapsible panes](./expand-collapse)