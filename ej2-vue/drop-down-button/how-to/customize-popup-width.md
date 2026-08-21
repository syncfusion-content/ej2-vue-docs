---
layout: post
title: How to customize popup width in Vue Dropdown Button | Syncfusion
description: Set a fixed or content-based width for the Vue Dropdown Button popup using the popupWidth API property with CSS units or pixels.
control: Customize Popup Width 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize popup width in Vue Dropdown Button

The dropdown popup width can be customized using the [popupWidth](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/#popupwidth) property of the DropDownButton component. By default, the popup's width adjusts based on the content. However, this property allows setting a specific width, ensuring consistency and alignment with design requirements. The width can be specified using common CSS units or as a raw pixel value.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/popup-width-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/popup-width-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/popup-width-cs1" %}