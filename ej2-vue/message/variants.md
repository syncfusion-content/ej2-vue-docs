---
layout: post
title: Variants in Vue Message component | Syncfusion
description: Learn here all about Variants in Syncfusion Vue Message component of Syncfusion Essential JS 2 and more.
control: Variants 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Variants in Vue Message component

The Message has predefined appearance variants for different visual representations. The variants of the message can be changed based on the `variant` property.

The available variants are **Text**, **Outlined** and **Filled**. The default variant type for messages is **Text**.
* **Text** - The severity is differentiated using a text color and a light background color.
* **Outlined** - The severity is differentiated using a text color and a border without a background.
* **Filled** - The severity is differentiated using a text color and a dark background color.

The following example demonstrates the default message with different variant types.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/message/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/message/getting-started-cs10" %}