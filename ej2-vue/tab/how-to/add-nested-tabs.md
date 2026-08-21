---
layout: post
title: How to add nested tabs in Vue Tabs | Syncfusion
description: Render a child Vue Tabs component inside a parent tab content area to create nested tab layouts for hierarchical content navigation.
control: Add nested tabs 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to add nested tabs in Vue Tabs

Tab supports to render the nested level of Tabs by using `content` property. You can add the nested Tab element inside the parent Tab `content`
 property. To render the nested Tab, initialize the component using the id of Tab from a selected event handler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/nested-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/nested-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/nested-tab-cs1" %}