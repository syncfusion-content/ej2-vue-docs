---
layout: post
title: Expand collapse in Vue Splitter component | Syncfusion
description: Learn here all about Expand collapse in Syncfusion Vue Splitter component of Syncfusion Essential JS 2 and more.
control: Expand collapse 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Expand collapse in Vue Splitter component

## Collapsible panes

The Vue Splitter panes can be configured with built-in expand and collapse functionalities. By default, the collapsible behavior is disabled. Enable the [collapsible](https://ej2.syncfusion.com/vue/documentation/api/splitter/#collapsible) behavior in the paneSettings property to show or hide the expand or collapse icons in the panes. You can dynamically expand and collapse the panes by using the corresponding icons.

The following code shows how to enable collapsible behavior.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/expand-collapse-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/expand-collapse-cs1" %}

## Programmatically control the expand and collapse action

The Vue Splitter provides public method to control the expand and collapse behavior programmatically using the [expand](https://ej2.syncfusion.com/vue/documentation/api/splitter/#expand) and [collapse](https://ej2.syncfusion.com/vue/documentation/api/splitter/#collapse) methods. Refer to the following code example.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/expand-collapse-method-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/expand-collapse-method-cs1" %}

## Specify initial state to panes

You can render specific panes with collapsed state on page load. Specify a Boolean value to the [collapsed](https://ej2.syncfusion.com/vue/documentation/api/splitter/#collapsed) property to control this behavior. The following code explains how to collapse panes on rendering (the second panes renders with collapsed state).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/splitter/collapsed-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/splitter/collapsed-cs1" %}

## See Also

* [Resizable split panes](./resizing/)