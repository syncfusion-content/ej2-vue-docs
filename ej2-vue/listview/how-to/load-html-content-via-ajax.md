---
layout: post
title: Load html content via ajax in Vue Listview component | Syncfusion
description: Learn here all about Load html content via ajax in Syncfusion Vue Listview component of Syncfusion Essential JS 2 and more.
control: Load html content via ajax 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load html content via ajax in Vue Listview component

We can set external `HTML` page content as the [`template`](https://ej2.syncfusion.com/vue/documentation/api/list-view/#template) for our `ListView` component by making use of `AJAX` call.

```ts

let ajax = new Ajax('./template.html', 'GET', false);
ajax.onSuccess = (e)=>{
    this.template = e;
}

ajax.send();

```

In the sample below, we have rendered a smartphone settings template from an external `HTML` file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/listview/ajax-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/listview/ajax-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/ajax-cs1" %}