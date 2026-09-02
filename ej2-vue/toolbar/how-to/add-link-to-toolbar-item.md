---
layout: post
title: How to add link to toolbar item in Vue Toolbar | Syncfusion
description: Add a hyperlink to a Vue Toolbar item using the htmlAttributes property to bind an anchor tag for navigation on item click.
control: Add link to toolbar item 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to Add Link to Toolbar Item in Vue Toolbar

You can add a link inside the Toolbar using Vue **template**. Follow the guidelines below to add a link as a template in the Toolbar.

* Declare a template in the **template** section of the “.vue” file. Initialize an empty `data` object in the `data` option of the default export object in the **script** section so the template binding can access it.

* The template function needs to be assigned to the [template](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item#template) property of the Vue Toolbar component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toolbar-link-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toolbar-link-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/how-to/toolbar-link-cs1" %}