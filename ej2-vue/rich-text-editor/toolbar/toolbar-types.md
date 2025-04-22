---
layout: post
title: Toolbar Types in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Toolbar Types in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Toolbar Types
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in Vue Rich Text Editor Component

The Syncfusion Vue Rich Text Editor provides a powerful toolbar that enables users to format, style, and edit content efficiently. The toolbar includes essential editing tools such as bold, italic, underline, alignment, and lists, along with customization options to suit different use cases.

>To use Toolbar feature, configure `Toolbar` in the provider section.

The Rich Text Editor allows you to configure different types of toolbar using [toolbarSettings.type](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#type) field in [toolbarSettings](https://ej2.syncfusion.com/revueact/documentation/api/rich-text-editor/toolbarSettings/) property. The types of toolbar are:

1. Expand 
2. MultiRow
3. Scrollable

## Expanding the toolbar

The default mode of the toolbar is `Expand`, configured through [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#type) with `type: 'Expand'`. This mode hides any overflowing toolbar items in the next row, which can viewed by clicking the expand arrow.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs16" %}

## Configuring a multi-row toolbar

Setting the `type` as `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#type) will arrange the toolbar items across multiple rows, displaying all configured toolbar items.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs17" %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#type) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/scrollable-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/scrollable-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/scrollable-cs1" %}

## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when scrolling. You can customize the position of this sticky toolbar by setting the [floatingToolbarOffset](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#floatingtoolbaroffset) to adjust its offset from the top of the document.

Additionally, you can enable or disable the floating toolbar using the [enableFloating`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarSettings/#enablefloating) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs18" %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/style#customizing-the-rich-text-editors-toolbar)
* [Implementing Inline Editing](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/inline-mode)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility#keyboard-interaction)