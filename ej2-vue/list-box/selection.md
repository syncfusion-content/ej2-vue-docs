---
layout: post
title: Selection in Vue List box component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue List box component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection in Vue List box component

The ListBox provides support to select an item or a group of item by mouse or keyboard action. There are two selection modes available in list box,

* Single -  To select single item in the list box.
* Multiple -  To select multiple items in the list box.

On selection of each list box item, [`change`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#change) event is triggered.

## Single selection

To enable single selection in the list box, [`mode`](https://ej2.syncfusion.com/vue/documentation/api/list-box/selectionSettingsModel/#mode) should be set as `Single` in [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/list-box/#selectionsettings) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/list-box/getting-started/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs17" %}

## Multiple selection

To enable multiple selection in the list box, `mode` should be set as `Multiple` in `selectionSettings` property.

To select multiple items, use the SHIFT, CTRL, and arrow keys to make selections.

> By default, the selection mode is set as `Multiple`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/list-box/getting-started/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/list-box/getting-started/getting-started-cs18" %}