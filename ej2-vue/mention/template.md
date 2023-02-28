---
layout: post
title: Template in Vue Mention component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Mention component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Mention component

The Mention has been provided with several options to customize each suggestion list item, display item, and data loading indication.

## Item template

The content of each list item in Mention can be customized using [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/mention/#itemtemplate) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/mention/template-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/template-cs1" %}

## Display template

You can customize the mentioned value's display appearance using the [displayTemplate](https://ej2.syncfusion.com/vue/documentation/api/mention/#displaytemplate) property.

In the following sample, the selected value is displayed as a combined text of both FirstName and City in the mention element, which is separated by a hyphen.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/mention/template-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/template-cs2" %}

## No records template

You can show the custom design of the popup list content when no data is found and no matches are found on search with the help of [noRecordsTemplate](https://ej2.syncfusion.com/vue/documentation/api/mention/#norecordstemplate) property.

In the following sample, popup list content displays the notification of no data available.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/mention/template-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/template-cs3" %}

## Spinner template

Display the customized waiting spinner, when data fetching takes time to load in the suggestion list by using the [spinnerTemplate](https://ej2.syncfusion.com/vue/documentation/api/mention/#spinnertemplate) property.

In the following sample, customized spinner is shown while fetching the data from the service.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/mention/template-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/mention/template-cs4" %}