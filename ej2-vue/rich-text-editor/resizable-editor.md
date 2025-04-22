---
layout: post
title: Resizable Editor in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Resizable Editor in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Resizable Editor
documentation: ug
domainurl: ##DomainURL##
---

# Resizable Editor in the Vue Rich Text Editor Component

The resizable editor feature allows dynamic resizing of the editor. Enable or disable this feature using the [enableResize](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor#enableresize) property in the Rich Text Editor. When `enableResize` is set to `true`, a grip appears at the bottom right corner for diagonal resizing.

> To use the Resizable feature feature, inject `Resize` in the provider section.

The following sample demonstrates the resizable feature.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs12" %}

## Restrict resize

To restrict the resizable area of the Rich Text Editor, set the `min-width`, `max-width`, `min-height`, and `max-height` CSS properties for the component's wrapper element. 

By default, the control resizes up to the current viewport size. Apply these styles using the `e-richtexteditor`  CSS class in the component's wrapper.

```CSS

.e-richtexteditor {
  max-width: 880px;
  min-width: 250px;
  min-height: 250px;
  max-height: 400px;
}

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/toolbar-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-cs13" %}

## See also

* [Working with IFrame Editing Mode](./iframe)
* [Using the Markdown Editor](../markdown-editor/getting-started)