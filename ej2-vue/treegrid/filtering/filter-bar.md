---
layout: post
title: Vue TreeGrid Filter Bar | Syncfusion
description: Learn how to use the filter bar in Vue TreeGrid, including column filtering, filter operators, and custom filter behavior.
control: Filter bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Filter Bar in Vue TreeGrid

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
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/filtering/default-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/filtering/default-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/filtering/default-cs3" %}