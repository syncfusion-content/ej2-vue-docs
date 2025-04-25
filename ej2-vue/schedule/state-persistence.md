---
layout: post
title: State persistence in Vue Schedule component | Syncfusion
description: Learn here all about State persistence in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: State persistence 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Vue Schedule component

State persistence allowed Scheduler to retain the [`currentView`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#currentview), [`selectedDate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#selecteddate) and Scroll position values in the [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) for state maintenance even if the browser is refreshed or if you move to the next page within the browser. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#enablepersistence) property which is set to false by default. When it is set to true, `currentView`, `selectedDate` and Scroll position values of the scheduler component will be retained even after refreshing the page.

> **Note**: Scheduler `id` is Essential<sup style="font-size:70%">&reg;</sup> to set state persistence.

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

> You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.