---
layout: post
title: Remote data bind in Vue Drop down list component | Syncfusion
description: Learn here all about Remote data bind in Syncfusion Vue Drop down list component of Syncfusion Essential JS 2 and more.
control: Remote data bind 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Remote data bind in Vue Drop down list component

Before component rendering, you can get the total items count by using [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#actioncomplete) &nbsp;event with its result arguments.

After rendering this component, you can get the total items count by using [`getItems`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#getitems) method.

The following example demonstrate how to get the total items count.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/getItems-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/getItems-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/getItems-cs1" %}