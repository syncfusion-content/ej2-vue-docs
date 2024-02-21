---
layout: post
title: Editor modes in Vue Rich text editor component | Syncfusion
description: Learn here all about Editor modes in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Editor modes 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Editor modes in Vue Rich text editor component

The Rich Text Editor component used to create and edit the content and return valid HTML markup or markdown (MD) of the content. It supports the following two editing formation.

* HTML editor
* Markdown editor

## HTML editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode in Rich Text Editor to format the content through the available toolbar items to return the valid HTML markup. Set the [editorMode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#editormode) property as **HTML**.

> To create Rich Text Editor with HTML editing feature, inject the `HtmlEditor` module to the Rich Text Editor using the `RichTextEditor.Inject(HtmlEditor)` method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs2" %}

## Markdown editor

Set the [editorMode](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#editormode) property as **Markdown**, to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* Supported tags are `h6`, `h5`, `h4`, `h3`, `h2`, `h1`, `blockquote`, `pre`, `p`, `OL`, and `UL`.
* Supported selection tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, and `LowerCase`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/markdown-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs1" %}

> To create Rich Text Editor with Markdown editing feature, inject the `MarkdownEditor` module to the Rich Text Editor using the `RichTextEditor.Inject(MarkdownEditor)` method.

For further details on Markdown editing, refer to the [`Markdown`](./markdown) section.

## See Also

* [How to integrate the third party library](./third-party-integration)
* [How to render the iframe](./iframe)