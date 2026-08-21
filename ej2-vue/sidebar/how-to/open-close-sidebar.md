---
layout: post
title: How to open and close sidebar in Vue Sidebar | Syncfusion
description: Open and close the Vue Sidebar programmatically using the built-in show, hide, and toggle public methods to control sidebar visibility on user action.
control: Open close sidebar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to open and close sidebar in Vue Sidebar

Opening and closing the Sidebar can be achieved with built-in public methods.

* [show()](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#show): Method to open the Sidebar.
* [hide()](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#hide): Method to close the Sidebar.
* [toggle()](https://ej2.syncfusion.com/vue/documentation/api/sidebar/#toggle): Method to toggle between open and close states of the Sidebar.

In the following sample, the `toggle()` method has been used to show or hide the Sidebar on button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sidebar/howto-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sidebar/howto-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sidebar/howto-cs2" %}