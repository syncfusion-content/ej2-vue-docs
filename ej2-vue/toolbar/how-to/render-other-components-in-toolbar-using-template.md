---
layout: post
title: Render other components in toolbar using template in Vue Toolbar component | Syncfusion
description: Learn here all about Render other components in toolbar using template in Syncfusion Vue Toolbar component of Syncfusion Essential JS 2 and more.
control: Render other components in toolbar using template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Render other components in toolbar using template in Vue Toolbar component

You can render other components inside Toolbar using Vue **template**. Through this, we can add content as other components directly with all functionalities to our Toolbar. Follow the below guidelines for using the other components as template in Toolbar.

* Declare a template in the **template** section of the “.vue” file. An empty object “data” needs to be initialized in the data option of the default export object in **script** section.

* The template function needs to be assigned to the content property of the EJ2 Vue Toolbar Component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/direct-components-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/direct-components-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/how-to/direct-components-cs1" %}