---
layout: post
title: Modify data in Vue Drop down list component | Syncfusion
description: Learn here all about Modify data in Syncfusion Vue Drop down list component of Syncfusion Essential JS 2 and more.
control: Modify data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Modify data in Vue Drop down list component

When binding the remote data source, by using the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#actioncomplete) event, you can modify the result data before passing it to DropDownList.

The following sample demonstrate how to modify the result data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/modify-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/modify-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/modify-cs1" %}