---
layout: post
title: Excel like filter in Vue Grid component | Syncfusion
description: Learn here all about Excel like filter in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Excel like filter 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Excel like filter in Vue Grid component

You can enable Excel like filter by defining. [`filterSettings.type`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterSettings#type) as `Excel`.The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/filter/default-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/filter/default-cs1" %}

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionBegin) event when the [`requestType`](https://ej2.syncfusion.com/vue/documentation/api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```ts

  methods: {
    actionBegin(args) {
      if (args.requestType === "filterchoicerequest" || args.requestType ==="filtersearchbegin" ) {
        args.filterChoiceCount = 3000;
      }
    },
  },

```