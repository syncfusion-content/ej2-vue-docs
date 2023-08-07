---
layout: post
title: Submit name and value in form in Vue Switch component | Syncfusion
description: Learn here all about Submit name and value in form in Syncfusion Vue Switch component of Syncfusion Essential JS 2 and more.
control: Submit name and value in form 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Submit name and value in form in Vue Switch component

The [`name`](https://ej2.syncfusion.com/vue/documentation/api/switch/#name) attribute of the Switch is used to group Switches. When the Switches are grouped in form, the checked items
[`value`](https://ej2.syncfusion.com/vue/documentation/api/switch/#value) attribute will post to the server on form submit. The disabled and unchecked Switch values will not be sent to
the server on form submit.

In the following code snippet, USB and Wi-Fi in the checked state, and Bluetooth is in disabled state. Values that are in checked state only be sent on form submit.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/switch/getting-started-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/switch/getting-started-cs8" %}