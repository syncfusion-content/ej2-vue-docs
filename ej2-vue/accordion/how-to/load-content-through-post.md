---
layout: post
title: Load content through post in Vue Accordion component | Syncfusion
description: Learn here all about Load content through post in Syncfusion Vue Accordion component of Syncfusion Essential JS 2 and more.
control: Load content through post 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Load content through post in Vue Accordion component

Accordion supports to load external contents through `AJAX` library. Refer the below steps.

* Import the `Ajax` module from `ej2-base` and initialize with URL path.

* Get data from the Ajax Success event to initialize Accordion with retrieved external path data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-ajax-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-ajax-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/accordion-ajax-cs1" %}