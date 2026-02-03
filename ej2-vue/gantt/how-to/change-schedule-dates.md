---
layout: post
title: Change Schedule Dates in Vue Gantt Chart Component | Syncfusion
description: Learn how to change schedule dates in the Syncfusion Vue Gantt Chart component of Essential JS 2.
control: Change schedule dates
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change schedule dates in Vue Gantt Chart Component

In the Gantt Chart component, you can change the schedule start and end dates programmatically using the [updateProjectDates](https://ej2.syncfusion.com/vue/documentation/api/gantt#updateprojectdates) method. Pass the **start date** and **end date** as arguments to the  
`updateProjectDates` method. You can also pass a **Boolean value** as the third parameter to **round off** the schedule start and end dates displayed in the Gantt Chart timeline.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changescheduledates-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/how-to/changescheduledates-cs1" %}