---
layout: post
title: Enable scroll option on all-day section in Vue Schedule | Syncfusion
description: Learn how to enable the scroll option on the all-day section in the Syncfusion Vue Schedule component of Syncfusion Essential JS 2.
control: Enable scroll option on all day section 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Enable Scroll Option on all day Section in Vue Schedule Component

When a large number of appointments are added to the all-day row, it becomes difficult to view all of them within the available space. In such cases, you can enable the scroll option for the all-day row by setting the [`enableAllDayScroll`](https://ej2.syncfusion.com/vue/documentation/api/schedule#enablealldayscroll) property to `true`, as its default value is `false`. When this property is enabled, an individual scroll bar appears for the all-day row once it reaches its maximum allowed height.

> Note: This property is not applicable when the Scheduler height is set to `auto`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/virtual-scrolling-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/virtual-scrolling-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/virtual-scrolling-cs1" %}
