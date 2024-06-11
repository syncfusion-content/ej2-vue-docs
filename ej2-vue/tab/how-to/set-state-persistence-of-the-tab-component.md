---
layout: post
title: Set state persistence of the tab component in Vue Tab component | Syncfusion
description: Learn here all about Set state persistence of the tab component in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Set state persistence of the tab component 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set state persistence of the tab component in Vue Tab component

State persistence allows the Tab to retain the current modal value in the browser cookies for state maintenance. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/tab#enablepersistence) property which is set to false by default.

When it is set to true, some of the Tab component model values will be retained even after refreshing the page.

The following sample demonstrates how to set state persistence of the Tab component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/persistence-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/persistence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/persistence-cs1" %}