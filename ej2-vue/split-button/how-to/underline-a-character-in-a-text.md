---
layout: post
title: Underline a character in a text in Vue Split Button | Syncfusion
description: Underline a single character in a Vue Split Button popup item by inserting a u tag in the beforeItemRender event handler.
control: Underline a character in a text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to underline a character in a text in Vue Split Button

To underline a particular character in a text, it can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/split-button/#beforeitemrender) event by
adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/split-button/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/split-button/default-cs7" %}