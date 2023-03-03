---
layout: post
title: Integration in Vue Inplace editor component | Syncfusion
description: Learn here all about Integration in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Integration 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Integration in Vue Inplace editor component

The In-place Editor supports adding HTML5 input components using the [template](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#template) property. The Template property can be given as either a `string` or a `query selector`.

## As a string

The HTML element tag can be given as a string for the template property. Here, the input is rendered as an HTML template.

```ts
template: "<div><input type='text' id='name'></input></div>"

```

## As a selector

The template property also allows getting template content through query `selector`. Here, the input wrapper element 'ID' attribute is specified in the template.

```ts
template: "#date"

```

## As a template

You can render other components inside In-place Editor using Vue template . Follow the below guildlines for using other the components as template in In-place Editor.

Declare a template in the template section of the “.vue” file. An empty object “data” needs to be initialized in the data option of the default export object in script section.

The template function needs to be assigned to the template property of the EJ2 Vue In-place Editor Component.

Template mode, the `value` property not handled by the In-place Editor component. So, before sending a value to the server, you need to modify at [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#actionbegin) event, otherwise, an empty string will pass. In the following template sample, before submitting a data to the server, event argument and [value](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#value) property content updated in the `actionBegin` event handler.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs18" %}

## See Also

* [Built-in Components](./components/)