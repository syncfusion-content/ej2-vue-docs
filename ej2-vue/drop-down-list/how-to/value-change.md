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

You can check whether a value change was made manually or programmatically by using the [change](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#change) event argument `isInteracted`.

The following example demonstrates how to check whether the value change was made manually or programmatically.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/change-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/change-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/change-cs1" %}