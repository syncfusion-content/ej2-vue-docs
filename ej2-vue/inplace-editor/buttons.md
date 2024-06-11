---
layout: post
title: Buttons in Vue Inplace editor component | Syncfusion
description: Learn here all about Buttons in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Buttons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Buttons in Vue Inplace editor component

The In-place Editor had an action for save and cancel using buttons. The [saveButton](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#savebutton) and [cancelButton](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#cancelbutton) properties accept the [ButtonModel](https://ej2.syncfusion.com/vue/documentation/api/button/buttonModel/) objects for customizing the save and cancel button properties.

Buttons can be show or hide by sets a Boolean value to the [showButtons](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#showbuttons) property.

> Without buttons value will be processed via the following ways.

* **[actionOnBlur](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#actiononblur)**: By clicking out side the editor component get focus out and do action based on this property value.
* **[submitOnEnter](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#submitonenter)**: Pressing `Enter` key it performs the submit action, if this property set to `true`.

In the following sample, the [content](https://ej2.syncfusion.com/vue/documentation/api/button/#content) and [cssClass](https://ej2.syncfusion.com/vue/documentation/api/button/#cssclass) properties of `Button` value assigned to the [saveButton](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#savebutton) and [cancelButton](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#cancelbutton) properties to customize its appearance. Also check or uncheck a checkbox buttons render or removed from the editor.

To restrict either save or cancel button rendering into a DOM, simply pass empty object `{}` in the `saveButton` or `cancelButton` properties.

> For more details about buttons, refer this documentation [section](../button/).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/in-place-editor/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs1" %}

## See Also

* [In-place editor buttons](./how-to/dynamic-edit-mode)