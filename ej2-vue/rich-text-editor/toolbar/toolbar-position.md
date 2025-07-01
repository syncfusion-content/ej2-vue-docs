---
layout: post
title: Toolbar Types in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Toolbar Types in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Toolbar Position
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar position in Vue Rich Text Editor Component

The Rich Text Editor allows you to configure the toolbar's position using the [position](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#position) field in the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/) property. The available positions are:

1. Top 
2. Bottom

## Configuring the toolbar position

The Rich Text Editor allows you to position the toolbar at the top or bottom of the content area, depending on your layout requirements.

By default, the toolbar is displayed at the top of the editor, making all formatting and editing tools immediately accessible above the content.

To position the toolbar at the bottom, use the [position](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#position) property in the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/) configuration and set its value to `Bottom`. This places the toolbar below the content area, which can help maintain a cleaner top layout and improve accessibility for certain use cases.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs16" %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/style#customizing-the-rich-text-editors-toolbar)
* [Implementing Inline Editing](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/inline-mode)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility#keyboard-interaction)