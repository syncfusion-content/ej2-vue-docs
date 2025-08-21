---
layout: post
title: Blocks in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Blocks with Vue Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Block Editor
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Blocks in Vue Block Editor component

The Block Editor control enables you to create block-based content editing solution using various types of blocks. The [blocks](../api/blockeditor/#blocks) property allows you to define and manage the content structure of your editor.

## Blocks

Blocks are the fundamental building elements of the Block Editor. Each block represents a distinct content unit such as a `paragraph`, `heading`, `list`, or specialized content like `code snippets` or `images`. The Block Editor organizes content as a collection of `blocks`, allowing for better structure and formatting options.

You can configure blocks with various properties such as [id](../api/blockeditor/blockModel/#id), [type](../api/blockeditor/blockModel/#type), [content](../api/blockeditor/blockModel/#content), [children](../api/blockeditor/blockModel/#children) and more to create rich, structured editor.

## Block types

The Block Editor supports multiple block types. Each block type offers different formatting and functionality options:

| Built-in Block Types                    | Description                                       |
|-----------------------------------------|---------------------------------------------------|
| Paragraph                               | Default block type for regular text content.      |
| Heading1 to Heading4                    | Different levels of headings for document structure.|
| Checklist                               | Interactive to-do lists with checkable items.     |
| BulletList                              | Unordered lists with bullet points.               |
| NumberedList                            | Ordered lists with sequential numbering.          |
| Code                                    | Formatted code blocks with syntax highlighting.   |
| Quote                                   | Styled block for quotations.                      |
| Callout                                 | Highlighted block for important information.      |
| Divider                                 | Horizontal separator line.                        |
| CollapsibleParagraph and CollapsibleHeading1-4    | Collapsible content blocks.                       |
| Image                                   | Block for displaying images.                      |
| Template                                | Predefined custom templates.                      |

## Configure indent

You can specify the indentation level of a block using the [indent](../api/blockeditor/blockModel/#indent) property. This property accepts a numeric value that determines how deeply a block is nested from the left margin.

By default, the [indent](../api/blockeditor/blockModel/#indent) property is set to `0`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/indent/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/indent/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/indent" %}

## Configure CSS Class

You can apply custom styling to individual blocks using the [cssClass](../api/blockeditor/blockModel/#cssclass) property. This property accepts a string containing one or more CSS class names.

Custom CSS classes allow you to define specialized styling for specific blocks in your editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/cssClass/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/cssClass/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/cssClass" %}

## Configure templates

The Block Editor allows you to use custom templates for specialized content using the [template](../api/blockeditor/blockModel/#template) property. Templates can be defined as strings, functions, or HTML elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/template-block" %}