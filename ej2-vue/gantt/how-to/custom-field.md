---
layout: post
title: Custom field in Vue Gantt component | Syncfusion
description: Learn here all about Custom field in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Custom field 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom field in Vue Gantt component

Generally in Gantt, Custom fields are displayed in the Custom Tab of the Add/Edit dialogs. However, they can be included in the General Tab of Add/Edit Dialog Box using `actionBegin` and `actionComplete` events. These events are used to append the custom field to the dialog box. The following code snippets demonstrate the solution.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/customfields-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/customfields-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/customfields-cs1" %}