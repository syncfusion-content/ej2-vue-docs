---
layout: post
title: How to customize highlight search in Vue AutoComplete | Syncfusion
description: Customize the highlight style for matched characters in the Syncfusion Vue AutoComplete suggestion list by overriding the e-highlight CSS class.
control: Custom search 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to Customize Highlight Search in Vue AutoComplete

The AutoComplete has built-in support to [`highlight`](https://ej2.syncfusion.com/vue/documentation/api/auto-complete#highlight) the searched characters on suggested list items when the highlight property is enabled. Enable the `highlight` property and override the `e-highlight` CSS class to customize the highlight style of the matched characters.

In the below sample, the matched characters in the suggestion list are customized using the `e-highlight` class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/auto-complete/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/auto-complete/getting-started-cs16" %}