---
layout: post
title: Add dynamic items with content reuse in Vue Tabs | Syncfusion
description: Dynamically add Vue Tabs items at runtime with shared content templates to reuse the same content layout across multiple tab items efficiently.
control: Adding dynamic items with content reuse 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add dynamic items with content reuse in Vue Tabs

You can add dynamic tabs by reusing the content using Vue **template**. Tabs can be added dynamically by passing array of items and index value to the [`addTab`](https://ej2.syncfusion.com/vue/documentation/api/tab#addtab) method.

Content reuse can be achieved by using the following steps:
1. Declare a template in the **template** section of the “.vue” file. An empty object “data” needs to be initialized in the data option of the default export object in **script** section.
2. The template function needs to be assigned to the content property of the EJ2 Vue Tab Component.
3. Provide separate template function for each vue component
and pass content by dynamically adding tab. It will reuse the content of vue component.

Refer to the following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/content-reuse-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/content-reuse-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/content-reuse-cs1" %}