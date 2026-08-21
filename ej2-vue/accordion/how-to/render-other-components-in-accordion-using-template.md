---
layout: post
title: Render other components using template in Vue Accordion | Syncfusion
description: Embed other Syncfusion Vue components inside Vue Accordion panels using a Vue template assigned to the content property of an accordion item.
control: Render other components in accordion using template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Render other components using template in Vue Accordion

You can render other components inside Accordion using Vue **template**. Through this, we can add content as other components directly with all functionalities to our Accordion. Follow the below guidelines for using the other components as template in Accordion.

* Declare a template in the **template** section of the “.vue” file. An empty object “data” needs to be initialized in the data option of the default export object in **script** section.

* The template function needs to be assigned to the content property of the EJ2 Vue Accordion Component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/direct-components-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/accordion/how-to/direct-components-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/accordion/how-to/direct-components-cs1" %}