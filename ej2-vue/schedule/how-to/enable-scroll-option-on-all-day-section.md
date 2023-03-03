---
layout: post
title: Enable scroll option on all day section in Vue Schedule component | Syncfusion
description: Learn here all about Enable scroll option on all day section in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Enable scroll option on all day section 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Enable scroll option on all day section in Vue Schedule component

When you have larger number of appointments in all-day row, it is difficult to view all the appointments properly. In that case you can enable scroller option for all-day row by setting true to `enableAllDayScroll` whereas its default value is false. When setting this property to true, individual scroller for all-day row is enabled when it reaches its maximum height on expanding.

>Note: This property is not applicable for Scheduler with height `auto`.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/virtual-scrolling-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/virtual-scrolling-cs1" %}
