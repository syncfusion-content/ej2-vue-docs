---
layout: post
title: Underline character in item text in Vue Dropdown Button | Syncfusion
description: Underline a single character in a Vue Dropdown Button popup item by inserting a u tag in the beforeItemRender event handler.
control: Underline a character in the item text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to underline character in item text in Vue Dropdown Button

Underline a particular character in a text can be handled in [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#beforeitemrender)event by adding `<u>` tag in between the text and given as innerHTML in `li` rendering.

In the following example, `C` is underlined in the text `Copy`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs12" %}