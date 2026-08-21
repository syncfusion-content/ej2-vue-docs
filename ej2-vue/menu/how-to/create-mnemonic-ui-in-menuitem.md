---
layout: post
title: How to create mnemonic UI in menu item in Vue Menu Bar | Syncfusion
description: Underline a specific character in Vue Menu Bar item text by inserting a u tag in the beforeItemRender event and setting it as the li element innerHTML.
control: Create mnemonic ui in menuitem 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create mnemonic UI in menu item in Vue Menu Bar

A particular character in a text can be underlined in the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/menu#beforeitemrender) event by adding `<u>` tag in between the text and assign the innerHTML to the `li` element.

In the following example, the first character in `File`, `Open`, and `Save` menu items are underlined.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/menu/getting-started-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/menu/getting-started-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/menu/getting-started-cs10" %}