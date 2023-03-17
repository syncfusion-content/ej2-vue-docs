---
layout: post
title: Form submit in Vue Button group component | Syncfusion
description: Learn here all about Form submit in Syncfusion Vue Button group component of Syncfusion Essential JS 2 and more.
control: Form submit 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Form submit in Vue Button group component

The name attribute of the input element  is used to group checkbox/radio type ButtonGroup. When the radio/checkbox type are grouped in form, the checked items value attribute will be post to server on form submit that can be retrieved through the name. The disabled radio/checkbox type value will not be sent to the server on form submit.

In the following code snippet, the radio type ButtonGroup is explained with male value as checked. Now, the value that is in checked state will be sent on form submit.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/button-group/getting-started-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button-group/getting-started-cs9" %}