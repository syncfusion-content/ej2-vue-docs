---
layout: post
title: Vue Grid Get Emitted Template Value | Syncfusion
description: Learn how to get emitted template values in Vue Data Grid using eventHub for communication between template columns and Grid components.
control: Get parent column instance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get Emitted Template Values in Vue Data Grid

The [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) component enables effective communication between different components through an event bus. This functionality is particularly useful for managing emitted values from [template](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#template) column, allowing one component to emit values and other components to listen to these emitted values. This functionality is achieved using eventHub, a global event bus used for communication between any components.

In the following example, a template column in the Vue Data Grid is defined, which emits a value when a button is clicked. The emitted value is then captured in the  [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event of the Grid component.
 
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/filter/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs13" %}