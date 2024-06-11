---
layout: post
title: Format Painter in Vue Rich Text Editor Component | Syncfusion
description: Learn here all about Format Painter in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Format Painter  
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Format Painter in Vue Rich Text Editor Component | Syncfusion

A format painter is a tool that allows you to copy the formatting from a piece of text and apply it to another one. Format Painter can be accessed via the toolbar or the keyboard shortcuts. The format painter can copy the formatting of a single word or a whole paragraph. The format painter can be customized using the [formatPainterSettings](../api/rich-text-editor/formatPainterSettings/) property.

## Enabling the toolbar option for Format Painter

You can add the `FormatPainter` tool in the Rich Text Editor using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

> Rich Text Editor features are segregated into individual feature-wise modules. To use the Format Painter feature, we need to import and inject the `FormatPainter` module in `provides` section.

By double-clicking the format painter toolbar button, `sticky mode` will be enabled. In sticky mode, the format painter will be disabled when the user clicks the `Escape` key again.

The following code example shows how to add the format painter tool in the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/format-painter-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/format-painter-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/format-painter-cs1" %}

## Customization of copy and paste format

You can customize the format painter tool in the Rich Text Editor using the `formatPainterSettings` property.

The [allowedFormats](../api/rich-text-editor/formatPainterSettings/#allowedformats) property helps you to specify tag names that allow the formats to be copied from the selected text. For instance, you can include formats from the selected text using tags like `p; h1; h2; h3; div; ul; ol; li; span; strong; em; code;`. The following example demonstrates how to customize this functionality.

Similarly, with the [deniedFormats](../api/rich-text-editor/formatPainterSettings/#deniedformats) property, you can utilize the selectors to prevent specific formats from being pasted onto the selected text. The table below illustrates the selectors and their respective usage.

| Type | Description        | Selector                                                | Usage                                                                  |
|------|--------------------|---------------------------------------------------------|------------------------------------------------------------------------|
| ()   | Class Selector     | h3(e-rte-block-blue-text)                               | The class name e-rte-block-blue-text of H3 element is not copied.      |
| []   | Attribute Selector | span\[title]                                            | The title attribute of span element is not copied.                     |
| {}   | Style Selector     | span{background-color, color}                           | The background-color and color styles of span element is not copied.   |

Using the `deniedFormats` property following styles are denied copying from the selected text such as `h3(e-rte-block-blue-text){background-color,padding}[title]; li{color}; span(e-inline-text-highlight)[title]; strong{color}(e-rte-strong-bg)`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/format-painter-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/format-painter-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/format-painter-cs2" %}

## Using the shortcut key to copy and paste the format

You can use the following shortcut keys to copy and paste the format in the Rich Text Editor.

| Actions               | Keyboard shortcuts                               | Description                                                     |
|-----------------------|--------------------------------------------------|-----------------------------------------------------------------|
| Copy the format       | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>c</kbd> | Copy the selection format or current range.                     |
| Pate the format       | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>v</kbd> | Paint the copied format.                                        |
| Escape                | <kbd>Esc</kbd>                                   | Remove the previously copied format and disable the sticky mode.|

> The format painter retains the formatting after application making it possible to apply the same formatting multiple times by using the <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>v</kbd> keyboard shortcut.

Additionally, You can perform the format painter actions programmatically using the [executeCommand](../exec-command/) public method.