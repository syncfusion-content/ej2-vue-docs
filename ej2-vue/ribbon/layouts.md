---
layout: post
title: Layouts in Vue Ribbon Component | Syncfusion
description: Check out and learn about Layouts in Syncfusion Ribbon Vue Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Layouts in Ribbon component

The Ribbon offers to customize the layout by using the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property. The Ribbon component supports the following layouts:

## Classic layout

In classic layout, the Ribbon component organize the items and groups in a traditional form by setting the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property to [Classic](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonLayout/). By default, the Ribbon component renders in `Classic` layout.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/classic/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/classic" %}

## Simplified layout

In simplified layout, the Ribbon component organize the items and groups into a single row by setting the [activeLayout](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#activelayout) property to [Simplified](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonLayout/).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/simplified/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/simplified" %}

## Minimized State

You can hide the Ribbon contents and display only the tab headers by double-clicking on the tab header. In minimized state, the Ribbon component expands to its normal state when click on the tab header.

Also, you can render or programmatically change the Ribbon component to minimized state by setting the [isMinimized](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#isminimized) property to `true`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/isMinimized/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/isMinimized" %}
