---
layout: post
title: Custom indication in Vue Inplace editor component | Syncfusion
description: Learn here all about Custom indication in Syncfusion Vue Inplace editor component of Syncfusion Essential JS 2 and more.
control: Custom indication 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom indication in Vue Inplace editor component

You can add custom indication to unsaved input value by using the [actionSuccess](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#actionsuccess) event, when data not submitted to the server.

In this sample, the `actionSuccess` event configured and the [URL](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#url) property not included. Then submit button clicked, the current editor value saved into input and data sending to server action prevented due to the `URL` property not configured.

But [actionSuccess](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#actionsuccess) event will trigger the handler function with `null` argument values. In handler function data property [primaryKey](https://ej2.syncfusion.com/vue/documentation/api/inplace-editor/#primarykey) value checked, whether it empty or not. If it is empty custom class, added in the `e-value-wrapper` element to customize its styles.

> To send input value to local, set the `URL` property as empty.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/in-place-editor/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/in-place-editor/getting-started-cs15" %}