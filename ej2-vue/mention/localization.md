---
layout: post
title: Localization in Vue Mention component | Syncfusion
description: Learn here all about Localization in Syncfusion Vue Mention component of Syncfusion Essential JS 2 and more.
control: Localization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Vue Mention component

The Localization library allows you to localize static text content of the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/mention/#norecordstemplate) &nbsp;properties according to the culture currently assigned to the Mention.

| Locale key | en-US (default)  |
|------|------|
| noRecordsTemplate |  No records found |

## Loading translations

To load the translation object to your application, use the load function of the **L10n** class.

In the following sample, French culture is set to the mention component and no data is loaded. Hence, the [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/mention/#norecordstemplate) property displays its text in French culture initially.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/mention/localization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/localization-cs1" %}