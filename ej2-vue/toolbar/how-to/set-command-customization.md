---
layout: post
title: Set command customization in Vue Toolbar component | Syncfusion
description: Learn here all about Set command customization in Syncfusion Vue Toolbar component of Syncfusion Essential JS 2 and more.
control: Set command customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Set command customization in Vue Toolbar component

The `htmlAttributes` property of the Toolbar item is used to set the HTML attributes ('ID', 'class', 'style' ,'role') for the commands.

When style attributes are added, if the same attributes were already present, they will be replaced. This is not so in the case of `class`
 attribute. Classes will be added to the element instead of replacing the existing ones.

Single or multiple CSS classes can be added to the Toolbar commands using the Toolbar item `cssClass` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/toolbar/how-to/customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/how-to/customization-cs1" %}