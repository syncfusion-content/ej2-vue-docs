---
layout: post
title: How to customize icon and width in Vue Dropdown Button | Syncfusion
description: Resize the Vue Dropdown Button and reposition its icon using the iconPosition property and a custom CSS class for styling.
control: Customize icon and width 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to customize icon and width in Vue Dropdown Button

Width of the DropDownButton can be customized by setting required width to the dropdown element.

The following UI can be achieved by setting [`iconPosition`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-button/dropDownButtonModel/#iconposition) as `Top`, width as `85px` and size of the font icon as `40px` by adding `e-custom` class.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-button/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-button/default-cs6" %}