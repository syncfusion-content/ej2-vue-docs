---
layout: post
title: Modify result data before passing in Vue Dropdown List | Syncfusion
description: Modify the result data before passing it to the Syncfusion Vue Dropdown List by handling the actionComplete event when binding remote sources.
control: Modify data 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to modify result data before passing in Vue Dropdown List

When binding to the remote data source, by using the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#actioncomplete) event, you can modify the result data before passing it to the DropDownList.

The following sample demonstrates how to modify the result data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/modify-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/modify-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/modify-cs1" %}