---
layout: post
title: Underline a character in a text in Vue Split button component | Syncfusion
description: Learn here all about Underline a character in a text in Syncfusion Vue Split button component of Syncfusion Essential JS 2 and more.
control: Underline a character in a text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in a text in Vue Split button component

To underline a particular character in a text, it can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/split-button#beforeitemrender) event by
adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`:

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/split-button/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs7" %}