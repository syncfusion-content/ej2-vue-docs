---
layout: post
title: Save and open Spreadsheet data as a Base64 string in the Vue Spreadsheet component | Syncfusion
description: Learn here all about save and open Spreadsheet data as a Base64 string in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

## Save and open Spreadsheet data as a Base64 string in Vue Spreadsheet component

In the Spreadsheet component, there is currently no direct option to save and open data as a `Base64` string. You can achieve this by saving the Spreadsheet data as blob data and then converting that saved blob data to a `Base64` string using `FileReader`. 

> You can get the Spreadsheet data as blob in the [saveComplete](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#savecomplete) event when you set the  `needBlobData` as **true** and `isFullPost` as **false** in the [beforeSave](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#beforesave) event.

The following code example shows how to save and open the spreadsheet data as base64 string.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/spreadsheet/base-64-string/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/base-64-string" %}