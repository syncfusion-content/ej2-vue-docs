---
layout: post
title: How to set command customization in Vue Toolbar | Syncfusion
description: Attach click event handlers to Vue Toolbar items to execute custom commands when the user clicks a specific toolbar button or toggle item.
control: Set command customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to set command customization in Vue Toolbar

The [`htmlAttributes`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item#htmlattributes) property of the Toolbar item is used to set the HTML attributes ('id', 'class', 'style', 'role') for the commands.

When style attributes are added, if the same attributes were already present, they will be replaced. However, the `class` attribute is appended rather than replaced.

Single or multiple CSS classes can be added to the Toolbar commands using the Toolbar item [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/item#cssclass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/customization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/toolbar/how-to/customization-cs1" %}