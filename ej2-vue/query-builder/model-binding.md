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

Model binding allows you to bind properties to the components used in the field, operator, and value columns. To implement model binding, assign the [`fieldModel`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#fieldmodel), [`operatorModel`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#operatormodel), and [`valueModel`](https://ej2.syncfusion.com/vue/documentation/api/query-builder/index-default#valuemodel) properties in the Query Builder.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/query-builder/model-binding-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/query-builder/model-binding-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/query-builder/model-binding-cs1" %}