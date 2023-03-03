---
layout: post
title: Overflow in Vue Breadcrumb component | Syncfusion
description: Learn here all about Overflow in Syncfusion Vue Breadcrumb component of Syncfusion Essential JS 2 and more.
control: Overflow 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Overflow in Vue Breadcrumb component

In the Breadcrumb component, [`maxItems`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#maxitems) and [`overflowMode`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#overflowmode) properties were used to limit the number of breadcrumb items to be displayed.

In the following example, the [`maxItems`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#maxitems) is set as 3 with `overflowMode` as Default. To prevent breadcrumb item navigation, the [`enableNavigation`](https://ej2.syncfusion.com/vue/documentation/api/breadcrumb/#enablenavigation) property has been set to false in the Breadcrumb component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs18" %}

The following overflow modes are available in the Breadcrumb component.

* Collapsed
* Menu
* Wrap
* Scroll
* Hidden
* None

## Collapsed

Collapsed mode shows the first and last Breadcrumb items and hides the remaining items with a collapsed icon. When the collapsed icon is clicked, all items become visible and navigable.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs19/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs19" %}

## Menu

Menu mode shows the number of Breadcrumb items that can be accommodated within the container space and creates a submenu with the remaining items.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs20" %}

## Wrap

Wrap mode wraps the items to multiple lines when the Breadcrumb’s width exceeds the container space.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs21" %}

## Scroll

Scroll mode shows an HTML scroll bar when the Breadcrumb’s width exceeds the container space.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs22" %}

## Hidden

Hidden mode shows the maximum number of items possible in the container space and hides the remaining items. Clicking on a previous item will make the hidden item visible.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/breadcrumb/getting-started-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/breadcrumb/getting-started-cs23" %}

## None

None mode shows all the items on a single line.
