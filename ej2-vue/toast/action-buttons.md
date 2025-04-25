---
layout: post
title: Action buttons in Vue Toast component | Syncfusion
description: Learn here all about Action buttons in Syncfusion Vue Toast component of Syncfusion Essential JS 2 and more.
control: Action buttons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in Vue Toast component

You can include action buttons to the toast component by adding the [`buttons`](https://ej2.syncfusion.com/vue/documentation/api/toast/#buttons) property. The collection of Essential<sup style="font-size:70%">&reg;</sup> JS 2 button models can be bound to the `model` property inside the buttons property. You can also include the click event callback function for each button.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/action-button-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/action-button-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/action-button-cs1" %}

## See Also

* [Configuring options](./config)