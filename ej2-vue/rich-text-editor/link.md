---
layout: post
title: Link in Vue Rich text editor component | Syncfusion
description: Learn here all about Link in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Link 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Link in Vue Rich Text Editor Component

A hyperlink can be insert into the editor for quick access to the related information. The hyperlink itself can be a text or an image.

## Insert link

To insert a hyperlink:

1. Position your cursor where you want to insert the link, or select the text or image you wish to convert into a hyperlink.
2. Click the "Insert HyperLink" tool on the toolbar.
3. In the Insert Link Dialog that appears, fill in the following options.

> To use Image and Link feature, inject `Image, Link` in the provider section.

| Options | Description |
|----------------|--------------------------------------|
| Web Address | Enter or paste the destination URL for your link |
| Display Text | Enter or edit the required text that you want to display text for the link|
| Tooltip | To display additional helpful information when you place the pointer on the hyperlink, type the required text in the “Tooltip” field. |
| Open Link in New Window | Specify whether, the given link will be open in new window or not |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs5" %}

> The Rich Text Editor validates URLs as you type in the Web Address field. Invalid URLs will be highlighted in red when you click the insert button in the `Insert Link` dialog.

## Edit and remove link

To remove a hyperlink:

1. Select the linked text or image.
2. Click the "Remove Hyperlink" tool in the toolbar.

This action will remove the hyperlink while keeping the original text or image intact.

## Auto link generation

The Rich Text Editor supports automatic link generation. When you type a URL and press Space or Enter, the editor automatically converts the typed URL into a clickable hyperlink.

## Inserting a related link

By default, the URL entered in the Web Address field is automatically converted into an absolute URL by prefixing it with https:// for hyperlinks. This ensures that the URL is properly formatted and accessible when used as a hyperlink.

However, if you want to accept the given URL without validating it for hyperlinks and without automatically adding a protocol (such as https://) or domain, you need to set the [enableAutoUrl](https://helpej2.syncfusion.com/vue/documentation/api/rich-text-editor/#enableautourl) property to true. By default, this property is set to false, meaning that automatic URL conversion is enabled unless explicitly disabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/relative-url/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/relative-url/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/relative-url" %}

## See also

* [Link Quick Toolbar](./toolbar/quick-toolbar#link-quick-toolbar)
* [Image with links](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/insert-images#hyperlinking-images)
* [Insert File Attachments](./how-to/file-attachments)