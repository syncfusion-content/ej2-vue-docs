---
layout: post
title: Set item wise custom template in Vue Toolbar component | Syncfusion
description: Learn here all about Set item wise custom template in Syncfusion Vue Toolbar component of Syncfusion Essential JS 2 and more.
control: Set item wise custom template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set item wise custom template in Vue Toolbar component

The Toolbar supports adding template commands using the  `template` property. Template property can be given as the `HTML element` that is
either a `string`  or a `query selector`.

## As a string

The HTML element tag can be given as a string for the template property. Here, the checkbox is rendered as a HTML template.

```hmtl
template: "<div><input type='checkbox' id='check1' checked=''>Accept</input></div>"

```

## As a selector

The template property also allows getting template content through query `selector`. Here, checkbox 'ID' attribute is specified in the template.

```ts
template: "#Template"

```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toolbar/how-to/toolbar-items-templateID-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/how-to/toolbar-items-templateID-cs1" %}