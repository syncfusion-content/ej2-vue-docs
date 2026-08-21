---
layout: post
title: How to load content through Ajax in Vue Accordion | Syncfusion
description: Populate Vue Accordion panels with remote data on demand using the ej2-base Ajax module and the success event to bind the fetched content.
control: Load content through post 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to load content through Ajax in Vue Accordion

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