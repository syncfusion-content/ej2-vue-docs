---
layout: post
title: Resizing in Vue Ribbon component | Syncfusion
description:  Learn here all about Resizing in Syncfusion Vue Ribbon component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Ribbon
documentation: ug
domainurl: ##DomainURL##
--- 

# Ribbon Resizing

The Ribbon effectively resizes the ribbon elements while being resized. It extends when the ribbon size is increased and collapses when the ribbon size is decreased. The resizing can be performed in both the classic and simplified modes.

By default, the ribbon elements are resized based on the group size with larger groups collapsing first, later the medium and small sized items.

## Defining items allowed size

The [allowedSizes](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#allowedsizes) property is used to maintain a constant size for an item when being resized. You can limit an items size by specifying its `allowedSizes` which keeps the size constant even when the Ribbon is being resized.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/ribbon/itemsSize/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ribbon/itemsSize" %}

## Defining items active size

The [activeSize](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItem/#activesize) read-only property is used to set the size of the item which is displayed intially before it is being resized.

> On resizing, the items size will be changed based on the available width of the tab content from the order of Large-> Medium-> Small and viceversa.