---
layout: post
title: Custom search in Vue Auto complete component | Syncfusion
description: Learn here all about Custom search in Syncfusion Vue Auto complete component of Syncfusion Essential JS 2 and more.
control: Custom search 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Custom search in Vue Auto complete component

The AutoComplete has built-in support to [`highlight`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete/#highlight) the searched characters on suggested list items when enabled the highlight property.

In the below sample, customized the matched character in suggestion list by `e-highlight` class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs16" %}