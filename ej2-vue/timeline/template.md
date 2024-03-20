---
layout: post
title: Template in Vue Timeline component | Syncfusion
description: Learn here all about Template in Syncfusion Vue Timeline component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Template in Vue Timeline component

The Timeline component allows you to customize the appearance for each item by using the [template](https://ej2.syncfusion.com/vue/documentation/api/timeline#template) property to modify the dot items, templated contents, progress bar styling and more.

The `template` context receives the following information:

| Type | Purpose |
| --- | --- |
| `item` | Indicates the current data of the Timeline item. |
| `itemIndex` | Indicates the current index of the Timeline item. |

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/timeline/template/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/timeline/template" %}
