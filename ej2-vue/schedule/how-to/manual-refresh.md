---
layout: post
title: Manually Refresh Layout in Vue Scheduler | Syncfusion
description: Learn how to manually refresh specific templates and the overall layout in the Syncfusion Vue Scheduler without re-rendering the entire component.
control: Scheduler
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Manually Refresh Layout in Vue Scheduler

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
