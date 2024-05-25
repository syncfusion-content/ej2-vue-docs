---
layout: post
title: Underline a character in the item text in Vue Context menu component | Syncfusion
description: Learn here all about Underline a character in the item text in Syncfusion Vue Context menu component of Syncfusion Essential JS 2 and more.
control: Underline a character in the item text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Underline a character in the item text in Vue Context menu component

Underline a particular character in a text can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/context-menu/#beforeitemrender) event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs10" %}