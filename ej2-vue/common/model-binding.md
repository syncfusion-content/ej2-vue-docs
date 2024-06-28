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

## Integrating Vue model binding in Syncfusion Vue UI components

Syncfusion Vue UI components support model binding through the `v-model` directive. The model binding support in Syncfusion Vue components uses custom 'modelchanged' event, which is used to notify Vue that a model is changed.

* Syncfusion Vue UI components that are initialized from form elements support model binding.

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