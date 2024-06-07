---
layout: post
title: Responsive columns in Vue Treegrid component | Syncfusion
description: Learn here all about Responsive columns in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Responsive columns 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Responsive columns in Vue Treegrid component

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#hideatmedia).
The [`hideAtMedia`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs23/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/columns/default-cs23/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/columns/default-cs23" %}