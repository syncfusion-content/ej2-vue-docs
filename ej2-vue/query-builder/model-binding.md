---
layout: post
title: Model Binding in Vue Query Builder UI | Syncfusion
description: Bind custom properties to field, operator, and value columns in the Vue Query Builder UI using fieldModel, operatorModel, and valueModel.
control: Model binding 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Model Binding in Vue Query Builder UI

Model binding allows to bind properties for the components used in field, operator, and value columns. To implement model binding, assign fieldModel, operatorModel, and valueModel properties in QueryBuilder.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/model-binding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/model-binding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/model-binding-cs1" %}