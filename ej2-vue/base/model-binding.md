---
layout: post
title: Model binding in Vue Base component | Syncfusion
description: Learn here all about Model binding in Syncfusion Vue Base component of Syncfusion Essential JS 2 and more.
control: Model binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Model binding in Vue Base component

## Integrating Vue Model Binding in Essential JS 2 Vue Components

Essential JS 2 for Vue Components support Model Binding through `v-model` directive. Model Binding support in Essential JS2 Vue Components uses custom 'modelchanged' event, which is used to notify Vue that a model is changed.

* Essential JS 2 for Vue Components which are initialized from Form Elements support Model Binding.

Refer the code snippet given below.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/base/model-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/base/model-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/base/model-cs1" %}