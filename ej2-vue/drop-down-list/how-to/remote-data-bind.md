---
layout: post
title: How to get total count of data in Vue Dropdown List | Syncfusion
description: Get the total count of remote items bound to the Syncfusion Vue Dropdown List using the actionComplete event args or the getItems method.
control: Remote data bind 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to get total count of data in Vue Dropdown List

Before the component renders, you can get the total items count by using the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#actioncomplete) event with its result arguments.

After the component is rendered, you can get the total items count by using the [getItems](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#getitems) method.

The following example demonstrates how to get the total items count.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/getItems-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/getItems-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/getItems-cs1" %}