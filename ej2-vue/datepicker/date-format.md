---
layout: post
title: Date format in Vue DatePicker Component | Syncfusion
description: Learn here all about date format in Syncfusion Essential Vue DatePicker component, its elements and more.
control: Date format 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Date format in Vue DatePicker Component

Date format is a way of representing the date value in different string format in the textbox.

By default, the DatePicker's format is based on the culture. You can also set the own custom format by using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/datepicker/#format) property.

> Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](https://ej2.syncfusion.com/documentation/common/internationalization) section.

The following example demonstrates the DatePicker with the custom format (`yyyy-MM-dd`).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/datepicker/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs2" %}
