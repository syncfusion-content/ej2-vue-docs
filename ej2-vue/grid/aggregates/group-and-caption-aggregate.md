---
layout: post
title: Group and caption aggregate in Vue Grid component | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Group and caption aggregate 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in Vue Grid component

Group and caption aggregate values are calculated from the current group items.
If [`groupFooterTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupfootertemplate)
is provided then the aggregate values can be displayed in the group footer cells and if [`groupCaptionTemplate`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumn/#groupcaptiontemplate) is provided then aggregate values can be displayed in the group caption cells.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/aggregates/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/aggregates/default-cs5" %}

> * Use the template reference property name as `groupFooterTemplate` to specify the group footer template and as `groupCaptionTemplate` to specify the group caption template.
> * The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/vue/documentation/api/grid/aggregateColumnModel/#type)
name.