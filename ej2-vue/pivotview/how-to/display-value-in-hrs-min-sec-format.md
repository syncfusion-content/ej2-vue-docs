---
layout: post
title: Display string value to pivot table values in Vue Pivotview component | Syncfusion
description: Learn here all about how to display string value to pivot table values in Syncfusion vue Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Display string value to pivot table values 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Display string value to pivot table values in vue Pivotview component

End user can display string value to the pivot table's value cell by using the [`aggregateCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#aggregatecellinfo) event.

In the following example, each cell value of the **Sold** field's actual value has been assigned from its combination data sets obtained from the [`args.cellSets`](https://helpej2.syncfusion.com/vue/documentation/api/pivotview/aggregateEventArgs/#cellsets) in the [`aggregateCellInfo`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#aggregatecellinfo) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs267/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs267" %}