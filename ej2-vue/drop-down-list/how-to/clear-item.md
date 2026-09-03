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

You can clear the selected item in the following two different ways.

By clicking the `clear icon` shown in the DropDownList element, you can clear the selected item in the DropDownList through **interaction**. By using the [showClearButton](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/index-default#showclearbutton) property, you can enable the clear icon in the DropDownList element.

Through **programmatic** approach, you can set the `null` value to any one of the index, text, or value properties to clear the selected item in the DropDownList.

The following example demonstrates how to clear the selected item in the DropDownList.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/value-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/drop-down-list/how-to/value-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/drop-down-list/how-to/value-cs1" %}
