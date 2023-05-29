---
layout: post
title: Load content through post in Vue Tab component | Syncfusion
description: Learn here all about Load content through post in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Load content through post 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load content through post in Vue Tab component

The Tab supports to load external contents through AJAX library. Refer to the following steps.

* Import the Ajax module from ej2-base and initialize with URL path.

* Get the data from Ajax Success event, then initialize the Tab with retrieved external path data.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/tab/how-to/ajax-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/ajax-cs1" %}
