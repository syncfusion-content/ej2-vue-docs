---
layout: post
title: How to create with rounded corner in Vue Dropdown Button | Syncfusion
description: Add a rounded corner to a Vue Dropdown Button by applying a border-radius CSS rule via the cssClass property of the control.
control: Create dropdownbutton with rounded corner 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create with rounded corner in Vue Dropdown Button

DropDownButton with rounded corner can be achieved by adding `border-radius` CSS property to button element.

In the following example, `e-round-corner` class is defined with `5px` `border-radius` property and added that class to button element using [`cssClass`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#cssclass) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs4" %}