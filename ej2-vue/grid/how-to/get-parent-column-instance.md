---
layout: post
title: Get parent column instance in Vue Grid component | Syncfusion
description: Learn here all about Get parent column instance in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Get parent column instance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get parent column instance in Vue Grid component

Emit values from one component and listen to emitted values in other component by using the `eventHub`. The `eventHub` is a global event bus used to communicate between any components.

In the following example, we have defined a template column in the grid column definition which emits a value and listens the emitted value in the [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event of the Grid component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs13" %}