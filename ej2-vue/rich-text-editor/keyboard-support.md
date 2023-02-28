---
layout: post
title: Keyboard support in Vue Rich text editor component | Syncfusion
description: Learn here all about Keyboard support in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Keyboard support 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard support in Vue Rich text editor component

The editor has full keyboard accessibility that includes shortcuts to open and other actions with toolbar items, drop-down lists, and dialogs.

## HTML formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with `HTML` [`editMode`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#editormode).

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus | <kbd>alt</kbd> + <kbd>f10</kbd> |
| Insert link | <kbd>ctrl</kbd> + <kbd>k</kbd> |
| Insert image | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>i</kbd> |
| Insert table | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>e</kbd> |
| Undo | <kbd>ctrl</kbd> + <kbd>z</kbd> |
| Redo | <kbd>ctrl</kbd> + <kbd>y</kbd> |
| Copy | <kbd>ctrl</kbd> + <kbd>c</kbd> |
| Cut | <kbd>ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>ctrl</kbd> + <kbd>i</kbd> |
| Underline| <kbd>ctrl</kbd> + <kbd>u</kbd> |
| Strikethrough| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>ctrl</kbd> + <kbd>=</kbd> |
| Indents| <kbd>ctrl</kbd> + <kbd>]</kbd> |
| Outdents| <kbd>ctrl</kbd> + <kbd>[</kbd> |
| HTML source | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>h</kbd> |
| Fullscreen| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>f</kbd> |
| Exit Fullscreen| <kbd>Esc</kbd> |
| Justify center| <kbd>ctrl</kbd> + <kbd>e</kbd> |
| Justify full | <kbd>ctrl</kbd> + <kbd>j</kbd> |
| Justify left | <kbd>ctrl</kbd> + <kbd>l</kbd> |
| Justify right | <kbd>ctrl</kbd> + <kbd>r</kbd> |
| Clear format | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>r</kbd> |
| Ordered list | <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>o</kbd> |
| Unordered list | <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>o</kbd> |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs21/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs21" %}

## Markdown formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with `Markdown` [editMode](../api/rich-text-editor/#editormode).

| Actions | Keyboard shortcuts |
|----------------|---------|
| Toolbar focus| <kbd>alt</kbd> + <kbd>f10</kbd> |
| Insert link| <kbd>ctrl</kbd> + <kbd>k</kbd> |
| Insert image| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>i</kbd> |
| Insert table| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>e</kbd> |
| Undo| <kbd>ctrl</kbd> + <kbd>z</kbd> |
| Redo| <kbd>ctrl</kbd> + <kbd>y</kbd> |
| Copy| <kbd>ctrl</kbd> + <kbd>c</kbd> |
| Cut| <kbd>ctrl</kbd> + <kbd>x</kbd> |
| Paste| <kbd>ctrl</kbd> + <kbd>v</kbd> |
| Bold| <kbd>ctrl</kbd> + <kbd>b</kbd> |
| Italic| <kbd>ctrl</kbd> + <kbd>i</kbd> |
| Strikethrough| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>s</kbd> |
| Uppercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>u</kbd> |
| Lowercase| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>l</kbd> |
| Superscript| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>=</kbd> |
| Subscript| <kbd>ctrl</kbd> + <kbd>=</kbd> |
| Fullscreen| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>f</kbd> |
| Ordered list| <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>o</kbd> |
| Unordered list| <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>o</kbd> |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs22/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs22" %}

## Custom key config

Customize the key config for the keyboard interaction of Rich Text Editor, using the [`keyConfig`](../api/rich-text-editor/#keyconfig) property.

In the following sample, customize the cut, copy, paste toolbar action with `ctrl+1`, `ctrl+2`, `ctrl+3`, respectively.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rich-text-editor/getting-started-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs23" %}

## See Also

* [Globalization](./globalization/)
* [Accessibility](./accessibility/)
* [How to customize the toolbar items shortcut key](./how-to/customize-shortcut-keys/)
* [How to customize the saving operation](./how-to/update-value/)