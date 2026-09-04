---
layout: post
title: Render other components using template in Vue Toolbar | Syncfusion
description: Embed other Vue components like Button or DropDownList inside Toolbar items using a template directive for richer toolbar content layout.
control: Render other components in toolbar using template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to render other components using template in Vue Toolbar

You can render other components inside the Toolbar using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item#template) property. This allows you to embed other components directly within the Toolbar with all their functionality intact. Follow the guidelines below for using other components as templates in the Toolbar.

* Declare a template in the **template** section of the “.vue” file. An empty object “data” needs to be initialized in the data option of the default export object in **script** section.

* The template function needs to be assigned to the [`template`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item#template) property of the Toolbar component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/direct-components-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/direct-components-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/how-to/direct-components-cs1" %}