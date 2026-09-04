---
layout: post
title: Underline item text characters in Vue Context Menu | Syncfusion
description: Underline a specific character in Vue Context Menu item text by inserting a u tag in the beforeItemRender event and setting it as the li innerHTML.
control: Underline a character in the item text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to underline a character in the item text in Vue Context Menu

Underlining a particular character in a text can be handled in the [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/context-menu/index-default#beforeitemrender) event by adding a `<u>` tag in between the text and setting it as the innerHTML in `li` rendering.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/context-menu/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/context-menu/default-cs10" %}