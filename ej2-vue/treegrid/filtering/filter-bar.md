---
layout: post
title: Filter bar in Vue Treegrid component | Syncfusion
description: Learn here all about Filter bar in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Filter bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filter bar in Vue Treegrid component

By setting the [`allowFiltering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowfiltering) to true, the filter bar row will render next to the header, which allows you to filter data. You can filter the records with different expressions depending upon the column type.

 **Filter bar expressions:**

 You can enter the following filter expressions (operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A | `Equal` operator will always be used for date filter. |Date
N/A |N/A |`Equal` operator will always be used for Boolean filter. |Boolean

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/treegrid/filtering/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs3" %}