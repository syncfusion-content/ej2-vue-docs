---
layout: post
title: How to skip months in Vue Calendar | Syncfusion
description: Skip a month in the Syncfusion Vue Calendar navigation by using the navigated event with the navigateTo method on prev and next clicks.
control: Skip a month in calendar
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to skip months in Vue Calendar

The following example demonstrates how to skip a month in the Calendar while clicking the previous and next icons. In the following example, the [`navigated`](https://ej2.syncfusion.com/vue/documentation/api/calendar/index-default#navigated) event is used to skip a month using the [`navigateTo`](https://ej2.syncfusion.com/vue/documentation/api/calendar/index-default#navigateTo) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs11" %}