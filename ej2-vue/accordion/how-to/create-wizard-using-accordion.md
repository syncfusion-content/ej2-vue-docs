---
layout: post
title: Create wizard using accordion in Vue Accordion component | Syncfusion
description: Learn here all about Create wizard using accordion in Syncfusion Vue Accordion component of Syncfusion Essential JS 2 and more.
control: Create wizard using accordion 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create wizard using accordion in Vue Accordion component

Accordion items can be disabled dynamically by passing the index and boolean value with the [`enableItem`](https://ej2.syncfusion.com/vue/documentation/api/accordion#enableitem) method.

The below Wizard sample is designed for Online Shopping model. In this, each Accordion item is integrated with required components to fill
the details and designed for getting user details and making payment at the end. Each field is provided with validation for all mandatory
option to enable/disable to next Accordion.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-wizard-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/accordion-wizard-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/accordion-wizard-cs1" %}