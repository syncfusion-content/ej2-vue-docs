---
layout: post
title: Two-Way Binding in Vue Calendar | Syncfusion
description: Bind the Syncfusion Vue Calendar value to a Vue v-model so changes in one instance automatically update another component instance.
control: Two way binding
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two-Way Binding in Vue Calendar

Two-way binding can be achieved by using the `v-model` directive in Vue. In the following sample, when you change the value in one Calendar component, v-model will automatically update the value in the other Calendar.

The following example demonstrates how to set the `two-way-binding` in the Calendar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/two-way-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/two-way-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/two-way-cs1" %}