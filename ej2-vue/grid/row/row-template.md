---
layout: post
title: Row template in Vue Grid component | Syncfusion
description: Learn here all about Row template in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Row template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row template in Vue Grid component

The [`rowTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/#rowtemplate) has options to display custom `<tr>` element.

The `rowTemplate` property should be a function which returns an object. The object should contain a Vue component which should be assigned to the `template` property. The grid will look for the template property and render it as new Vue instance.

> In `rowTemplate`, the Vue component `template` should be a `<tr>` element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/template-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/template-cs5" %}