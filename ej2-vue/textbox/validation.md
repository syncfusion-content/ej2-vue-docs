---
layout: post
title: Validation in Vue Textbox component | Syncfusion
description: Learn here all about Validation in Syncfusion Vue Textbox component of Syncfusion Essential JS 2 and more.
control: Validation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Vue Textbox component

The TextBox supports three types of validation styles namely `error`, `warning`, and `success`. These states are enabled by adding corresponding classes `.e-error`, `.e-warning`, or `.e-success` to the input parent element.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs4" %}

## Adding mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk(*)` to placeholder and float label using <b>.e-float-input.e-control-wrapper .e-float-text::after</b> class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/textbox/icon-samples-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/textbox/icon-samples-cs5" %}