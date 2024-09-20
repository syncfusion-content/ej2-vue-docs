---
layout: post
title: Multi-Color Events of Vue Schedule | Syncfusion
description: Learn here all about rendering an event with multiple colors in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Display multiple colors in the event 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Display multiple colors in single event in Vue Schedule component

In Scheduler we can display the multiple colors within a single event. This can be achieved by using the [`eventTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views/#eventtemplate) option available within the views model. Here, we've used `SubCount` as an additional field. The SubCount field contains the background color and height values. Based on these values, events will be divided into different colors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/multiple-color-event/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/multiple-color-event/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/multiple-color-event" %}
