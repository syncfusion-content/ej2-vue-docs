---
layout: post
title: Task labels in Vue Gantt Chart component | Syncfusion
description: Learn here all about Task labels in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Task labels
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Task labels in Vue Gantt Chart component

## Task labels

The Gantt Chart component maps any data source fields to task labels using the [labelSettings.leftLabel](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings#leftlabel), [labelSettings.rightLabel](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings#rightlabel), and [labelSettings.taskLabel](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings#tasklabel) properties. You can customize the task labels with templates.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/appearance-customization-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/appearance-customization-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearance-customization-cs4" %}