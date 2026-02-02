---
layout: post
title: Model binding in Vue Common control | Syncfusion
description: Learn here all about Model binding in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Model Binding

## Integrating Vue model binding in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components

Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components support model binding through the `v-model` directive. Model binding in Syncfusion Vue components uses a custom `modelchanged` event to notify Vue when the model value has changed.

- Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components that are initialized from form elements support model binding.

Refer to the following code snippet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/model-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/model-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/common/model-cs1" %}