---
layout: post
title: How to clear selected item in Vue Dropdown List | Syncfusion
description: Clear the selected Syncfusion Vue Dropdown List item via the clear icon by enabling showClearButton or by setting index, text, or value to null.
control: Clear item 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to clear selected item in Vue Dropdown List

You can clear the selected item in the below two different ways.

By clicking on the `clear icon` which is shown in DropDownList element, you can clear the selected item in DropDownList through **interaction**. By using [`showClearButton`](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#showclearbutton) property, you can enable the clear icon in DropDownList element.

Through **programmatic** you can set `null` value to anyone of the index, text or value property to clear the selected item in DropDownList.

The following example demonstrate about how to clear the selected item in DropDownList.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/value-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/value-cs1" %}
