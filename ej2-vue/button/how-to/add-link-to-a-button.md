---
layout: post
title: Add link to a button in Vue Button component | Syncfusion
description: Learn here all about Add link to a button in Syncfusion Vue Button component of Syncfusion Essential JS 2 and more.
control: Add link to a button 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Add link to a button in Vue Button component

The appearance of the Button can be changed like a link by `e-link` class using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button/#cssclass) property and link navigation can be handled in Button click.

In the following example, link is added in Button click by using `window.open()` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue) %}
{% include code-snippet/button/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs3" %}