---
layout: post
title: Render other components in tab using template in Vue Tab component | Syncfusion
description: Learn here all about Render other components in tab using template in Syncfusion Vue Tab component of Syncfusion Essential JS 2 and more.
control: Render other components in tab using template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Render other components in tab using template in Vue Tab component

You can render other components inside Tab using Vue **template**. Through this, we can add content as other components directly with all functionalities to our Tab. Follow the below guidelines for using the other components as template in tab.

* Declare a template in the **template** section of the “.vue” file. An empty object “data” needs to be initialized in the data option of the default export object in **script** section.

* The template function needs to be assigned to the content property of the EJ2 Vue Tab Component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/tab/how-to/direct-components-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/direct-components-cs1" %}