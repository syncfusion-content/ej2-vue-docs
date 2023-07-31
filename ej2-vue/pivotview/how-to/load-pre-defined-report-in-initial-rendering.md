---
layout: post
title: Load desired report from the report list as default in vue Pivotview component | Syncfusion
description: Learn here all about how to load desired report from the report list as default in Syncfusion vue Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Load desired report from the report list as default 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Load desired report from the report list as default in vue Pivotview component

By default, the pivot table is displayed with the report bound at the code-behind. To load a desired report from the previously saved report collection during initial rendering, set the desired report name in the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/#databound) event, along with the additional report-based customization code shown below.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pivot-grid/default-cs269/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-grid/default-cs269" %}