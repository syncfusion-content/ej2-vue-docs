---
layout: post
title: Add, Edit, and Remove Events in Vue Scheduler | Syncfusion
description: Learn how to add, edit, and remove events dynamically in the Syncfusion Vue Scheduler component with easy-to-follow examples and code snippets.
control: Scheduler
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add, Edit, and Remove Events in Vue Scheduler

CRUD actions can be manually performed on events using [`addEvent`](https://ej2.syncfusion.com/vue/documentation/api/schedule#addevent), [`saveEvent`](https://ej2.syncfusion.com/vue/documentation/api/schedule#saveevent) and [`deleteEvent`](https://ej2.syncfusion.com/vue/documentation/api/schedule#deleteevent) methods. These methods allow creating new events, updating existing ones, and removing events from the Schedule.

## Normal Event

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs1" %}

## Recurrence Event

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs2" %}