---
layout: post
title: Two-Way Binding in Vue TextBox | Syncfusion
description: Sync two Syncfusion Vue TextBox values in real time using the v-model directive for instant two-way binding across components.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two-Way Binding in Vue TextBox

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one Textbox component, v-model will automatically update the value in the other Textbox.

The following example demonstrates how to set the `two-way-binding` in the Textbox.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/two-way-cs1" %}