---
layout: post
title: How to add link to toolbar item in Vue Toolbar | Syncfusion
description: Add a hyperlink to a Vue Toolbar item using the htmlAttributes property to bind an anchor tag for navigation on item click.
control: Add link to toolbar item 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add link to toolbar item in Vue Toolbar

You can add link inside Toolbar using Vue **template**. Follow the below guidelines for add link as template in Toolbar.

* Declare a template in the **template** section of the “.vue” file. An empty object “data” needs to be initialized in the data option of the default export object in **script** section.

* The template function needs to be assigned to the content property of the EJ2 Vue Toolbar Component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toolbar-link-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/toolbar-link-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/how-to/toolbar-link-cs1" %}