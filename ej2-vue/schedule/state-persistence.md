---
layout: post
title: State Persistence in Vue Scheduler | Syncfusion
description: Learn how to enable state persistence in the Syncfusion Vue Scheduler to retain current view, selected date, and scroll position.
control: Scheduler
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# State Persistence in Vue Scheduler

State persistence allowed Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule#currentview), [`selectedDate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#selecteddate) and Scroll position values in the [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance even if the browser is refreshed or if you move to the next page within the browser. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/schedule#enablepersistence) property which is set to false by default. When it is set to true, `currentView`, `selectedDate` and Scroll position values of the scheduler component will be retained even after refreshing the page.

> **Note**: The Scheduler `id` is required to enable state persistence.

The following sample demonstrates how to set state persistence of the Scheduler component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/working-days-cs4" %}

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.