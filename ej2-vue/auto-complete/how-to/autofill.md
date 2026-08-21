---
layout: post
title: How to enable autofill in Vue AutoComplete | Syncfusion
description: Enable autofill on the Syncfusion Vue AutoComplete to autocomplete typed characters against the data source, with no suggestion when no match is found.
control: Autofill 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to enable autofill in Vue AutoComplete

The AutoComplete supports the autofill behavior with the help of [`autofill`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete#autofill) property. Whenever you change the input value, the AutoComplete will autocomplete your data by matching the typed character. Suppose, if no matches found then, AutoComplete doesn't suggest any item.

In the below sample, showcase that how to work autofill with AutoComplete.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs15" %}