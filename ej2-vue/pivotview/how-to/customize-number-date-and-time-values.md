---
layout: post
title: Customize number date and time values in Vue Pivotview component | Syncfusion
description: Learn here all about Customize number date and time values in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize number date and time values 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize number date and time values in Vue Pivotview component

You can format the number, date, and time values for each field using `formatSettings` option under `dataSourceSettings`. It can be configured through code behind, during initial rendering.

## Number formatting

For numbers, the formatting settings required to apply through code behind are:

* `name`: It allows to set the field name.
* `format`: It allows to set the format of the respective field.

> Also, you can customize the applied number format by setting the [`NumberFormatOptions`](https://ej2.syncfusion.com/vue/documentation/common/internationalization#manipulating-numbers) options in `formatSettings` itself.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs135/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs135/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs135" %}

## Date and Time formatting

For date and time, the formatting settings required to apply through code behind are:

* `name`: It allows to set the field name.
* `format`: It allows to set the format of the respective field.
* `type`: It allows to set the type of format to be used for the respective field.

> Also, you can customize the applied date format by setting [`DateFormatOptions`](https://ej2.syncfusion.com/vue/documentation/common/internationalization#manipulating-datetime) options in `formatSettings` itself.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs136/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/default-cs136/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs136" %}

## Limitations of date formatting

As per Firefox and Edge browsers standards, most of the date and time formats used in data source aren’t supported. For example: Apr-2000, Apr-01-2000, 01-03-2000, 2000-Apr-01 etc... are not supported. Meanwhile [`ISO formats`](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) will be supported across all browsers.