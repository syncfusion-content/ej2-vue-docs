---
layout: post
title: Adornments in Vue Numeric Textbox | Syncfusion
description: Add currency, unit, or icon adornments before and after the Syncfusion Vue Numeric Textbox using prependTemplate and appendTemplate.
platform: ej2-vue
control: Adornments
documentation: ug
domainurl: ##DomainURL##
---

# Adornments in Vue Numeric Textbox

Adornments allow you to add custom elements before or after the numeric textbox using the `prependTemplate` and `appendTemplate` properties. These elements can include currency symbols, unit labels, or action icons to provide context and quick actions without affecting numeric behavior or float label functionality.

## Common Use Cases

- **Currency Symbols**: Add indicators like $, €, ¥ for monetary inputs.
- **Unit Labels**: Show measurement units (kg, cm, km).
- **Action Icons**: Include buttons for clear, reset, or custom actions.
- **Visual Context**: Display icons for input type or status.

## Adding Adornments to NumericTextBox

Use `prependTemplate` and `appendTemplate` to inject HTML content before and after the masked input respectively. These templates do not alter mask behavior and support any inline HTML or icon.

**prependTemplate**: Renders elements before the numeric textbox.
**appendTemplate**: Renders elements after the numeric textbox.

The following example demonstrates how to add adornments in the NumericTextBox control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/adornments-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/adornments-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

You can view the demo here: [NumericTextBox Adornments demo](https://ej2.syncfusion.com/vue/demos/#/tailwind3/numerictextbox/adornments.html).