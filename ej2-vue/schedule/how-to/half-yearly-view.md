---
layout: post
title: Half yearly view in Vue Schedule component | Syncfusion
description: Learn here all about Half yearly view in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Half yearly view 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Half Yearly View in Vue Schedule Component

The year view of our scheduler displays all the 365 days and their related appointments of a particular year. You can customize the year view by using the following properties.

* [`firstMonthOfYear`](https://ej2.syncfusion.com/vue/documentation/api/schedule#firstmonthofyear)
* [`monthsCount`](https://ej2.syncfusion.com/vue/documentation/api/schedule#monthscount)
* [`monthHeaderTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#monthheadertemplate)

The following example demonstrates how to render only the last six months of a year in the Schedule. To begin the view from June, the `firstMonthOfYear` property is set to `6`, and `monthsCount` is set to `6` to display six months in total.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/year-customizations-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/year-customizations-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/year-customizations-cs1" %}