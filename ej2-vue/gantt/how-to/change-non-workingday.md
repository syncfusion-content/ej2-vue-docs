---
layout: post
title: Change Non-Working Day in Vue Gantt Chart Component | Syncfusion
description: Learn how to change non-working days in the Syncfusion Vue Gantt Chart component of Essential JS 2.
control: Change non workingday
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Change non-working day in Vue Gantt Chart Component

Non‑working days (weekends) are used to represent non‑productive days in a project. You can configure non‑working days in a week using the `workWeek` property of the Gantt Chart component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changenonworkingday-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/changenonworkingday-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/how-to/changenonworkingday-cs1" %}

> By default, Saturdays and Sundays are considered non‑working days (weekends) in a project.  
> You can make weekends **working days** by setting the `includeWeekend` property to `true` in the Gantt Chart component.