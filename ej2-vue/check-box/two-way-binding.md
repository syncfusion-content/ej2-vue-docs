---
layout: post
title: Two-Way Binding in Vue Checkbox | Syncfusion
description: Synchronize the checked state of the Vue Checkbox in real time using the v-model directive for two-way data binding.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two-Way Binding in Vue Checkbox

It can be achieved by using the `v-model` directive in Vue. In the following sample, when you check or uncheck a value in one CheckBox will automatically check or unchecks the value in the other CheckBox. It updates the other CheckBox using `value` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/default-cs1" %}