---
layout: post
title: Insert Images in Vue Markdown editor component | Syncfusion
description: Learn here all about Insert Images in Syncfusion Vue Markdown editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Insert Images
documentation: ug
domainurl: ##DomainURL##
---

# Insert Images in Vue Markdown Editor Component

The Syncfusion Vue Markdown Editor allows users to insert images using the toolbar. This feature enables embedding images from online sources into the editor content.

## Steps to Insert an Image  

Follow these steps to add an image in the Markdown editor:

1. Click the **Insert Image** icon in the toolbar.
2. Enter the **URL** of the image from an online source.
3. Click the **Insert** button in the image dialog.

The image will be added to the editor content at the cursor position.

The following example demonstrates how to enable image insertion in the Syncfusion Vue Markdown Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/markdown-image-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/markdown-editor/markdown-image-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/markdown-editor/markdown-image-cs1" %}