---
layout: post
title: Inline mode in Vue Rich text editor component | Syncfusion
description: Learn here all about Inline mode in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Inline mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Inline mode in Vue Rich text editor component

This is the inline example for the Rich Text Editor. For this you must set the [inlineMode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#inlinemode) property.

Inline edition allows you to select any editable element or click the element on the page and edit it in-place.

Inline editing is a true WYSIWYG formation and on the contrary to Rich Text Editor HTML/MD editing, the styles that are used for edited content comes directly from the document stylesheet. This means that inline editors ignore the default Rich Text Editor content styles.

## Show on select/click

Enabling the [onSelection](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/inlineMode/#onselection) option of inlineMode makes the inline Rich Text Editor to appear.  You can select the text in the editable area otherwise the inline Rich Text Editor will be appear once click into the editable area.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs20/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs20" %}

## See Also

* [How to edit the quick toolbar settings](../rich-text-editor/toolbar#quick-inline-toolbars)
* [How to insert link editing option in the toolbar items](../rich-text-editor/link#insert-link)
* [How to insert image editing option in the toolbar items](../rich-text-editor/image#upload-options)