---
layout: post
title: How to detect value change source in Vue Dropdown List | Syncfusion
description: Detect whether a Syncfusion Vue Dropdown List value change came from user interaction or code by reading the isInteracted flag on the change event.
control: Value change 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to detect value change source in Vue Dropdown List

You can check about whether value change happened by manual or programmatic by using [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#change) event argument that argument name is `isInteracted`.

The following example demonstrate, how to check whether value change happened by manual or programmatic.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/change-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/change-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/change-cs1" %}