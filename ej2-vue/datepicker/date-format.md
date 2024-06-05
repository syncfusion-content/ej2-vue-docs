---
layout: post
title: Date format in Vue Datepicker component | Syncfusion
description: Learn here all about Date format in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Date format 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Date format in Vue Datepicker component

Date format is a way of representing the date value in different string format in the textbox.

By default, the DatePicker's format is based on the culture. You can also set the own custom format by using the [`format`](https://ej2.syncfusion.com/vue/documentation/api/datepicker/#format) property.

> Once the date format property has been defined it will be common to all the cultures.

To know more about the date format standards, refer to the [Internationalization Date Format](https://ej2.syncfusion.com/documentation/common/internationalization) section.

The following example demonstrates the DatePicker with the custom format (`yyyy-MM-dd`).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/datepicker/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/datepicker/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs2" %}