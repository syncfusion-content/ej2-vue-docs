---
layout: post
title: How to customize appearance in Vue Radio Button | Syncfusion
description: Learn how to customize the Syncfusion Vue Radio Button appearance using CSS rules and the cssClass property to create primary, success, info, warning, and danger variants.
control: Customize radiobutton appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize appearance in Vue Radio Button

You can customize the appearance of the RadioButton component by using the CSS rules. Define own CSS rules according to your requirement and assign the class name to the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/radio-button/#cssclass) property.

The background and border color of the RadioButton is customized through the custom classes to create the primary, success, info, warning, and danger type of RadioButton.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/radio-button/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/radio-button/default-cs5" %}