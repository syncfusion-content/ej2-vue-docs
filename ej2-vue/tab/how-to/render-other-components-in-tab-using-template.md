---
layout: post
title: Render other components in tab using template in Vue Tabs | Syncfusion
description: Embed other Vue components like Grid or Chart inside Vue Tabs content panels using the item template for richer tab content layout.
control: Render other components in tab using template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render other components in tab using template in Vue Tabs

You can render other components inside the Tab using Vue **templates**. Through this, you can add content as other components directly with all functionalities to the Tab. Follow the guidelines below for using other components as a template in the Tab.

* Declare a template in the **template** section of the `.vue` file. An empty object `data` needs to be initialized in the `data` option of the default export object in the **script** section.

* The template function needs to be assigned to the `content` property of the Syncfusion Vue Tab component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/direct-components-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/direct-components-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/direct-components-cs1" %}