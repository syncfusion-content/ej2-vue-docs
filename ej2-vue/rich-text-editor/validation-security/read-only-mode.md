---
layout: post
title: Read-only Mode in Vue Rich Text Editor component | Syncfusion
description: Learn all about Read-only Mode in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Read-only Mode
documentation: ug
domainurl: ##DomainURL##
---

# Controlling Editor Access in the Vue Rich Text Editor Component

## Read-only mode

The Rich Text Editor component offers a read-only mode that prevents you from editing the content while still allowing them to view it. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#readonly) property to `true`. 

This will allow you to view the content without making any modifications.

Please refer to the sample and code snippets below to demonstrate how to enable the read-only mode in the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/read-only-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/read-only-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/read-only-cs1" %}

## Disabled mode

The Vue Rich Text Editor component offers a feature to disable the editor, preventing any user interaction.This functionality is particularly useful when you need to display content without allowing modifications or when you want to temporarily restrict user input.

### How to disable the editor

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
