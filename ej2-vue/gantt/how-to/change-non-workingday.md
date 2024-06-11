---
layout: post
title: Change non workingday in Vue Gantt component | Syncfusion
description: Learn here all about Change non workingday in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Change non workingday 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change non workingday in Vue Gantt component

Non-working days/weekend are used to represent the non-productive days in a project. You can define the non-working days in a week using the `workWeek` property in Gantt.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changenonworkingday-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changenonworkingday-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/changenonworkingday-cs1" %}

> By default, Saturdays and Sundays are considered as non-working days/weekend in a project.
> In the Gantt component, you can make weekend as working day by setting the `includeWeekend` property to true.