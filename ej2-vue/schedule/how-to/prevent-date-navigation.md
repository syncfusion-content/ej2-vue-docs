---
layout: post
title: Prevent date navigation in Vue Schedule component | Syncfusion
description: Learn here all about Prevent date navigation in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Prevent date navigation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Prevent Date Navigation in Vue Schedule Component

Date navigation triggered by clicking on the date header can be disabled by removing the `e-navigate` class from the header cells. This can be achieved using the [`renderCell`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rendercell) event, where the class can be conditionally removed during the cell rendering process, as demonstrated in the example below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/how-to-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/how-to-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/how-to-cs1" %}