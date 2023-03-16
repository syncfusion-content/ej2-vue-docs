---
layout: post
title: Auto wrap in Vue Treegrid component | Syncfusion
description: Learn here all about Auto wrap in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Auto wrap 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Auto wrap in Vue Treegrid component

The auto wrap allows the cell content of the treegrid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words. To enable auto wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowtextwrap) property to `true`. You can configure the auto wrap mode by setting the [`textWrapSettings.wrapMode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#textwrapsettings) property.

There are three types of `wrapMode`. They are:

* **`Both`**: `Both` value is set by default. Auto wrap will be enabled for both the content and the header.
* **`Header`**: Auto wrap will be enabled only for the header.
* **`Content`**: Auto wrap will be enabled only for the content.

Note: When a column width is not specified, then auto wrap of columns will be adjusted with respect to the treegrid's width.

In the following example, the `textWrapSettings.wrapMode` is set to `Content`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/cell/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/cell/default-cs1" %}