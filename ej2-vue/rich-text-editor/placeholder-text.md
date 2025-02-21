---
layout: post
title: Placeholder Text in Vue Rich Text Editor component | Syncfusion
description: Learn here all about Editor Placeholder in Syncfusion Vue Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Placeholder Text
documentation: ug
domainurl: ##DomainURL##
---

# Placeholder Text in Vue Rich Text Editor Component

Specifies the placeholder for the Rich Text Editor’s content used when the editor's content area is empty through the [placeholder](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/#placeholder) property.

You can customize the appearance of the placeholder text by targeting the `e-rte-placeholder` class in your CSS. This allows you to modify properties such as font family, color, and other styles.

```css

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rich-text-editor/getting-started-cs15" %}

## See Also

* [Customizing the placeholder in Styles](./style/#customizing-placeholder-text)