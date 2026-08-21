---
layout: post
title: How to load content through Ajax in Vue Tabs | Syncfusion
description: Load Vue Tabs content panels from a remote server using AJAX requests and the dataBound event to populate tab content dynamically on tab selection.
control: Load content through post 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through Ajax in Vue Tabs

The Tab supports to load external contents through AJAX library. Refer to the following steps.

* Import the Ajax module from ej2-base and initialize with URL path.

* Get the data from Ajax Success event, then initialize the Tab with retrieved external path data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/ajax-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/ajax-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/ajax-cs1" %}