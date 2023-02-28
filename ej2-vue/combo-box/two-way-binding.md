---
layout: post
title: Two way binding in Vue Combo box component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Combo box component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Vue Combo box component

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one ComboBox component, v-model will automatically update the value in the other ComboBox.

The following example demonstrates how to set the `two-way-binding` in the ComboBox.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/combobox/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/combobox/two-way-cs1" %}