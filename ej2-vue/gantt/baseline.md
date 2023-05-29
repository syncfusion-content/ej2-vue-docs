---
layout: post
title: Baseline in Vue Gantt component | Syncfusion
description: Learn here all about Baseline in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Baseline 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Baseline in Vue Gantt component

The baseline feature enables users to view the deviation between the planned dates and actual dates of the tasks in a project. Baseline dates or planned dates of a task may or may not be same as the actual task dates. The baseline can be enabled by setting the [`renderBaseline`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#renderbaseline) property to `true` and the baseline color can be changed using the [`baselineColor`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#baselinecolor) property. To render the baseline, you should map the baseline start and end date values from the data source. This can be done using the [`baselineStartDate`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#baselinestartdate) and [`baselineEndDate`](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields/#baselineenddate) properties. The following code example shows how to enable a baseline in the Gantt component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/gantt/baseline-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/baseline-cs1" %}