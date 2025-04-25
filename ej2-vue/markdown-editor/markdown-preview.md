---
layout: post
title: Markdown to HTML preview in Vue Markdown Editor component | Syncfusion
description: Learn here all about Markdown to HTML preview in Syncfusion Vue Markdown editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Markdown to HTML preview
documentation: ug
domainurl: ##DomainURL##
---

# Markdown to HTML preview in Vue Markdown Editor Component

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

## Enable Markdown Preview in Vue Markdown Editor  

To enable the Markdown preview feature, integrate the third-party [Marked](https://marked.js.org/) library, which converts Markdown content into HTML format. The following example demonstrates how to enable Markdown to HTML preview in the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Markdown Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/markdown-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs7" %}