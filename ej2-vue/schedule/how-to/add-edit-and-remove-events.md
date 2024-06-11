---
layout: post
title: Add edit and remove events in Vue Schedule component | Syncfusion
description: Learn here all about Add edit and remove events in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Add edit and remove events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add edit and remove events in Vue Schedule component

CRUD actions can be manually performed on appointments using `addEvent`, `saveEvent` and `deleteEvent` methods as shown below.

## Normal event

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs1" %}

## Recurrence event

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs2" %}