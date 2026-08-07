---
layout: post
title: Display Multiple Colors in Single Event in Vue Scheduler | Syncfusion
description: Learn how to render a single appointment with multiple colors in the Syncfusion Vue Scheduler using a custom event template.
control: Scheduler
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multi-Color events in Vue Scheduler

In the Vue Schedule component, multiple colors can be displayed within a single event by using the [`eventTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#eventtemplate) option available in the views model. This customization is achieved by defining an additional field, such as `SubCount`, in the event data. The `SubCount` field contains background color and height values, and the event is visually divided into segments based on these values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/multiple-color-event/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/multiple-color-event/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/multiple-color-event" %}
