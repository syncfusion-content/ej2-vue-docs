---
layout: post
title: Customize progress bar theme and sizing in Vue Toaster | Syncfusion
description: Customize the Vue Toaster progress bar styling and dimensions using custom CSS or event functions to override the default theme.
control: Customize progress bar theme and sizing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize progress bar theme and sizing in Vue Toaster

By default, the progress bar appears based on the theme styling and dimensions. You can customize the progress bar styling using custom CSS or event functions.

The following sample demonstrates customizing the progress bar styling using the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/toast#beforeopen) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/custom-progress-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toast/how-to/custom-progress-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toast/how-to/custom-progress-cs1" %}