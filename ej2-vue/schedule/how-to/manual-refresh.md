---
layout: post
title: Manual refresh in Vue Schedule component | Syncfusion
description: Learn here all about Manual refresh in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Manual refresh 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Manual Refresh in Vue Schedule Component

In the Vue Schedule component, the layout can be manually refreshed without re-rendering the entire DOM by using the [`refreshLayout`](https://ej2.syncfusion.com/vue/documentation/api/schedule#refreshlayout) public method. This method updates the layout to reflect changes such as style adjustments or structural modifications. The following example demonstrates how to use the `refreshLayout` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/app-crud-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/app-crud-cs3" %}
