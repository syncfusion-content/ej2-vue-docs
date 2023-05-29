---
layout: post
title: Setting max height to the dialog in Vue Dialog component | Syncfusion
description: Learn here all about Setting max height to the dialog in Syncfusion Vue Dialog component of Syncfusion Essential JS 2 and more.
control: Setting max height to the dialog 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Setting max height to the dialog in Vue Dialog component

By default, the maxHeight for the Dialog is calculated based on the target. If the target is not specified externally, the Dialog consider the body as target and will calculate the maxHeight based on it. We have an option to set the maxHeight of the Dialog in the [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/dialog/#beforeOpen) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/dialog/max-height-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/dialog/max-height-cs1" %}
