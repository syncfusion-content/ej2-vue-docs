---
layout: post
title: Model Binding in Vue Components | Syncfusion
description: Learn how to enable two-way model binding on Syncfusion Vue form components using the v-model directive and modelchanged event.
control: Common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Model Binding in Syncfusion® Vue Components

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