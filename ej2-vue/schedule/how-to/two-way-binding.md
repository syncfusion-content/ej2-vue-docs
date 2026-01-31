---
layout: post
title: Two way binding in Vue Schedule component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Two way binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Two‑Way Binding in Vue Schedule Component

Two‑way binding in the Vue Schedule component can be configured by using the `v-model` directive. The Schedule properties that support two‑way binding are:

* selectedDate
* currentView

## Two-Way Binding With Vue Schedule Component's selectedDate Property

The following example demonstrates two‑way binding with the [`selectedDate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#selecteddate) property. When the `selectedDate` value changes in the Schedule component, the value reflected in the associated DatePicker component is updated automatically, and changes in the DatePicker component propagate back to the Schedule.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/two-way-binding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/two-way-binding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/two-way-binding-cs1" %}

## Two‑Way Binding With Vue Schedule Component's currentView Property

In the following example, when you change the `currentDate` value in the Vue Scheduler component, `v-model` will automatically update the value in the Dropdown component, and if you change the value in the Dropdown component, it will automatically update the value in the Vue Scheduler.

The following example demonstrates how to set the two-way-binding with the [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule#currentview) property in the Vue Scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/two-way-binding-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/two-way-binding-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/two-way-binding-cs2" %}

> Refer to the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for detailed feature overviews, and explore the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) for demonstrations on presenting and managing data.