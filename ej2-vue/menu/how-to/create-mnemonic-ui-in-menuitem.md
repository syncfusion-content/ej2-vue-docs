---
layout: post
title: Create mnemonic ui in menuitem in Vue Menu component | Syncfusion
description: Learn here all about Create mnemonic ui in menuitem in Syncfusion Vue Menu component of Syncfusion Essential JS 2 and more.
control: Create mnemonic ui in menuitem 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create mnemonic ui in menuitem in Vue Menu component

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