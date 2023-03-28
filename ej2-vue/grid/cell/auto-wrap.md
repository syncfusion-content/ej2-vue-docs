---
layout: post
title: Auto wrap in Vue Grid component | Syncfusion
description: Learn here all about Auto wrap in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Auto wrap 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Auto wrap in Vue Grid component

The auto wrap allows the cell content of the grid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words. To enable auto wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowtextwrap) property to **true**. You can configure the auto wrap mode by setting the [`textWrapSettings.wrapMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/textWrapSettings/#wrapmode) property.

There are three types of [`wrapMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/textWrapSettings/#wrapmode). They are

* **Both** - The **Both** value is set by default. The auto wrap will be enabled for both content and Header.
* **Header** - Auto wrap will be enabled only for the header.
* **Content** - Auto wrap will be enabled only for the content.

Note: When a column width is not specified, then auto wrap of columns will be adjusted with respect to the grid's width.

In the below example, the [`textWrapSettings.wrapMode`](https://ej2.syncfusion.com/vue/documentation/api/grid/textWrapSettings/#wrapmode) is set as **Content**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/cell/autowrap-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/cell/autowrap-cs1" %}