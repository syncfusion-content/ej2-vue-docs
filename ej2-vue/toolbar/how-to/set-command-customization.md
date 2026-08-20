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

The `htmlAttributes` property of the Toolbar item is used to set the HTML attributes ('ID', 'class', 'style' ,'role') for the commands.

When style attributes are added, if the same attributes were already present, they will be replaced. This is not so in the case of `class`
 attribute. Classes will be added to the element instead of replacing the existing ones.

Single or multiple CSS classes can be added to the Toolbar commands using the Toolbar item `cssClass` property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/customization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/toolbar/how-to/customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/how-to/customization-cs1" %}