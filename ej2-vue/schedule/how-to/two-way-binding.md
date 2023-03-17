---
layout: post
title: Two way binding in Vue Schedule component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Vue Schedule component

We can achieve two-way binding with Vue Scheduler by using the `v-model` directive in Vue. The following Vue Scheduler properties support two-way binding.

* selectedDate
* currentView

## Two-Way Binding with Vue Scheduler Component's selectedDate Property

In the following example, when you change the `selectedDate` value in the Vue Scheduler component, `v-model` will automatically update the value in the Date picker component, and if you change the value in the Date picker component, it will automatically update the value in the Vue Scheduler.

The following example demonstrates how to set the two-way-binding with the `selectedDate` property in the Vue Scheduler.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/two-way-binding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/two-way-binding-cs1" %}

## Two-Way Binding with Vue Scheduler Component's currentView Property

In the following example, when you change the `currentDate` value in the Vue Scheduler component, `v-model` will automatically update the value in the Dropdown component, and if you change the value in the Dropdown component, it will automatically update the value in the Vue Scheduler.

The following example demonstrates how to set the two-way-binding with the `currentView` property in the Vue Scheduler.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/two-way-binding-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/two-way-binding-cs2" %}

> You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-ui-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.