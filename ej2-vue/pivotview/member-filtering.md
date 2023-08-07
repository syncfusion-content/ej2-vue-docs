---
layout: post
title: Member filtering in Vue Pivotview component | Syncfusion
description: Learn here all about Member filtering in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Member filtering 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Member filtering in Vue Pivotview component

Member filtering allows you to view pivot table with particular records based on filter criteria. You can disable the member filter by setting the [`allowMemberFilter`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/iDataOptions/#allowmemberfilter) property to **false**. By default, this property is set as **true**.

## Filtering through UI

Filtering can also be performed through UI option available in [`grouping bar`](./grouping-bar) and [`field list`](./field-list) at run time.

## Filtering through code

It can be configured using the `filterSettings` option through code-behind. The settings required to filter at initial rendering are:
* `name`: It allows to set field name.
* `type`: It allows to set filter type as either "Include" or "Exclude" to the field.
* `items`: It allows to set the filter members of the field.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs154/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs154" %}

## See Also

* [Label Filtering](./label-filtering)
* [Value Filtering](./value-filtering)