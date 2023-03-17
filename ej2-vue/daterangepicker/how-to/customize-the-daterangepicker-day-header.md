---
layout: post
title: Customize the daterangepicker day header in Vue Daterangepicker component | Syncfusion
description: Learn here all about Customize the daterangepicker day header in Syncfusion Vue Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Customize the daterangepicker day header 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize the daterangepicker day header in Vue Daterangepicker component

You can change the format of the day that to be displayed in header using [`dayHeaderFormat`](https://ej2.syncfusion.com/vue/documentation/api/daterangepicker#dayheaderformat)property. By default, the format is `Short`.

You can find the possible formats on below.

| **Name** | **Description** |
|------|---------------------|
| `Short` | Sets the short format of day name (like Su ) in day header. |
| `Narrow` | Sets the single character of day name (like S ) in day header. |
| `Abbreviated` | Sets the min format of day name (like Sun ) in day header. |
| `Wide` | Sets the long format of day name (like Sunday ) in day header. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/daterangepicker/header-format-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/daterangepicker/header-format-cs1" %}