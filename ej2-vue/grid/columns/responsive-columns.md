---
layout: post
title: Responsive columns in Vue Grid component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Responsive columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in Vue Grid component

You can toggle column visibility based on media queries which are defined at the [`hideAtMedia`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#hideatmedia). The [`hideAtMedia`](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#hideatmedia) accepts valid [Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ). In the below sample, for `OrderID` column, `hideAtMedia` property value is set as `(min-width: 700px)` so that `OrderID` column will gets hidden when the browser screen width is lessthan 700px.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/grid/column/default-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/column/default-cs30" %}