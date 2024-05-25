---
layout: post
title: Change schedule dates in Vue Gantt component | Syncfusion
description: Learn here all about Change schedule dates in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Change schedule dates 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Change schedule dates in Vue Gantt component

In the Gantt component, you can change the schedule start and end dates by clicking the custom button programmatically using the [`updateProjectDates`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#updateprojectdates) method. You can pass the start and end dates as method arguments to the [`updateProjectDates`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#updateprojectdates) method. You can also pass the Boolean value as an additional parameter, which is used to round-off the schedule start and end dates displayed in Gantt timeline.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/changescheduledates-cs1" %}