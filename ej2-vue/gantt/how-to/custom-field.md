---
layout: post
title: Custom Field in Vue Gantt Chart Component | Syncfusion
description: Learn here all about custom fields in the Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Custom field 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom field in Vue Gantt Chart Component

Generally, in the Gantt Chart, custom fields are displayed in the Custom tab of the Add/Edit dialogs. However, they can be included in the General tab of the Add/Edit dialog box using the `actionBegin` and `actionComplete` events. These events are used to append the custom field to the dialog box. The following code snippets demonstrate the solution.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/customfields-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/customfields-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/customfields-cs1" %}