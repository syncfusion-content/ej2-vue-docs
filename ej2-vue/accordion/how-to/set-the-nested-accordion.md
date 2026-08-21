---
layout: post
title: How to set the nested accordion in Vue Accordion | Syncfusion
description: Embed a child Vue Accordion inside a parent Accordion by passing nested content through a Vue v-slot template using the content property.
control: Set the nested accordion 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set the nested accordion in Vue Accordion

Accordion supports to render `nested` level of Accordion by using content property. You can give nested Accordion content inside the parent Accordion content property by using [`v-slot`](https://ej2.syncfusion.com/vue/documentation/common/template#slot-template) template. In the Vue component, the v-slot directive is used to define a slot template in the component’s template where users can insert custom content.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/nestedaccordion-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/nestedaccordion-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/nestedaccordion-cs1" %}