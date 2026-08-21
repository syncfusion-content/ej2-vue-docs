---
layout: post
title: Two-Way Binding in Vue DateTimePicker | Syncfusion
description: Bind the Syncfusion Vue DateTimePicker value to a Vue v-model so changes in one instance automatically update another component instance.
control: Two way binding
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two-Way Binding in Vue DateTimePicker

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one DateTimePicker component, v-model will automatically update the value in the other DateTimePicker.

The following example demonstrates how to set the `two-way-binding` in the DateTimePicker.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datetimepicker/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datetimepicker/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datetimepicker/two-way-cs1" %}