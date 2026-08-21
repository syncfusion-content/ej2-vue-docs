---
layout: post
title: How to customize button appearance in Vue Button | Syncfusion
description: Customize the Vue Button's background, text color, height, width, and corners by assigning a custom CSS class via the cssClass property.
control: Customize button appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize button appearance in Vue Button

You can customize the appearance of the Button by using the Cascading Style Sheets (CSS). Define the CSS according to your requirement, and assign the class name to the [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/button/index-default#cssclass) property. In the following code snippet the background color, text color, height, width, and sharp corner of the Button can be customized through the `e-custom` class for all states (hover, focus, and active).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/button/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/button/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/button/default-cs6" %}