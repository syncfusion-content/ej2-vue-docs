---
layout: post
title: Get emitted template value in Vue Grid component | Syncfusion
description: Learn here all about Get parent column instance in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Get parent column instance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get the emitted column template value in Vue Grid component

The Syncfusion Grid component enables effective communication between different components through an event bus. This functionality is particularly useful for managing emitted values from [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) column, allowing one component to emit values and other components to listen to these emitted values. This functionality is achieved using eventHub, a global event bus used for communication between any components.

In the following example, a template column in the Syncfusion Grid is defined, which emits a value when a button is clicked. The emitted value is then captured in the  [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event of the Grid component.
 
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs13" %}