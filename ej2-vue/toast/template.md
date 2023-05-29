---
layout: post
title: Template in Vue Toast component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Toast component

The Template property in toast can be defined as `HTML element`, this can be either a `string` or `selector`.

The HTML element tag can be given as a string for the [Template](https://ej2.syncfusion.com/vue/documentation/api/toast/#template) property.

```ts
template: "<div>Toast Content</div>"

```

The Template property allows getting the template content using the query `selector`. Here, the element `ID` attribute is specified in the template.

```ts
template: "#Template"

```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toast/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/template-cs1" %}

## See Also

* [Add template dynamically](./how-to/add-dynamic-template)