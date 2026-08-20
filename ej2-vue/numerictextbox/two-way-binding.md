---
layout: post
title: Two Way Binding in Vue Numeric Textbox | Syncfusion
description: Sync values between two Syncfusion Vue Numeric Textbox components with the v-model directive for live two-way data binding.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two Way Binding in Vue Numeric Textbox

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one NumericTextBox component, v-model will automatically update the value in the other NumericTextBox.

The following example demonstrates how to set the `two-way-binding` in the NumericTextBox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/numeric-textbox/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/numeric-textbox/two-way-cs1" %}