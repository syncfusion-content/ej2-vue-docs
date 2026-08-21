---
layout: post
title: Set item-wise custom template in Vue Toolbar | Syncfusion
description: Assign a unique custom template to individual Vue Toolbar items using the item-wise template directive for per-item content customization.
control: Set item wise custom template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set item-wise custom template in Vue Toolbar

The Toolbar supports adding template commands using the  `template` property. Template property can be given as the `HTML element` that is
either a `string`  or a `query selector`.

## As a string

The HTML element tag can be given as a string for the template property. Here, the checkbox is rendered as a HTML template.

```html
template: "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>"

```

## As a selector

The template property also allows getting template content through query `selector`. Here, checkbox 'ID' attribute is specified in the template.

```ts
template: "#Template"

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toolbar-items-templateID-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toolbar-items-templateID-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/how-to/toolbar-items-templateID-cs1" %}