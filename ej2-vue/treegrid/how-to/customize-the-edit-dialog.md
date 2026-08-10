---
layout: post
title: Vue TreeGrid Edit Dialog Customization | Syncfusion
description: Learn how to customize the Vue TreeGrid edit dialog by modifying dialog headers and appearance for add and edit record operations.
control: Customize the edit dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize the Edit Dialog in Vue TreeGrid

You can customize the appearance of the edit dialog in the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actioncomplete) event based on **requestType** as **beginEdit** or **add**.

In the below example, we have changed the dialog's header text for editing and adding records.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/how-to/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/how-to/default-cs8" %}