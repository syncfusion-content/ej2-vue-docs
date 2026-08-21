---
layout: post
title: Two Way Binding in Vue MaskedTextBox | Syncfusion
description: Sync masked values between two Syncfusion Vue MaskedTextBox components using the v-model directive for two-way data binding.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two Way Binding in Vue MaskedTextBox

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one MaskedTextBox component, v-model will automatically update the value in the other MaskedTextBox.

The following example demonstrates how to set the `two-way-binding` in the MaskedTextBox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/masked-textbox/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/masked-textbox/two-way-cs1" %}