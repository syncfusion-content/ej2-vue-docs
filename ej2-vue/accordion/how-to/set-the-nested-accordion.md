---
layout: post
title: Set the nested accordion in Vue Accordion component | Syncfusion
description: Learn here all about Set the nested accordion in Syncfusion Vue Accordion component of Syncfusion Essential JS 2 and more.
control: Set the nested accordion 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set the nested accordion in Vue Accordion component

Accordion supports to render `nested` level of Accordion by using content property. You can give nested Accordion content inside the parent Accordion content property by using `id` of nested element. The nested Accordion can be rendered with the use of provided events, such as `clicked` and `expanding`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/nestedaccordion-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/nestedaccordion-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/nestedaccordion-cs1" %}