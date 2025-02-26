---
layout: post
title: Disabling the Rich Text Editor | Syncfusion
description: Learn all about Disabling Editor in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Disabling the Rich Text Editor
documentation: ug
domainurl: ##DomainURL##
---

# Disabling the Editor in the Vue Rich Text Editor Component

The Vue Rich Text Editor component offers a feature to disable the editor, preventing any user interaction.This functionality is particularly useful when you need to display content without allowing modifications or when you want to temporarily restrict user input.

### How to Disable the Editor

To disable the editor, set the [enabled](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#enabled) property to `false`.

When disabled, the editor becomes non-interactive, ensuring that users cannot edit or modify the content.

Below are examples and code snippets demonstrating how to disable the Rich Text Editor by setting the `enabled` property to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/disable-editor-cs1" %}

### See Also

[Implementing Read-Only Mode in Rich Text Editor](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/read-only-mode)