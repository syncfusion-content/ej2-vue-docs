---
layout: post
title: Open add edit dialog in Vue Gantt component | Syncfusion
description: Learn here all about Open add edit dialog in Syncfusion Vue Gantt component of Syncfusion Essential JS 2 and more.
control: Open add edit dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open add edit dialog in Vue Gantt component

In the Gantt component, add and edit dialogs can be opened dynamically by using [`openAddDialog`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#openadddialog) and [`openEditDialog`](https://ej2.syncfusion.com/vue/documentation/api/gantt/#openeditdialog) methods. The following code example shows how to open add and dialog on separate button click actions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/open-add-edit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt/how-to/open-add-edit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to/open-add-edit-cs1" %}

>NOTE: You should select any one of the row in the Gantt to open the edit dialog.