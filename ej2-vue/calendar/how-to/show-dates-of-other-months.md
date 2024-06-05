---
layout: post
title: Show dates of other months in Vue Calendar component | Syncfusion
description: Learn here all about Show dates of other months in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Show dates of other months 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Show dates of other months in Vue Calendar component

The following example demonstrates how to show dates of other months.

Using the styles below, you can bring the dates of other months to visibility from its hidden state.

```
<style>
.e-calendar .e-content tr.e-month-hide,
.e-calendar .e-content td.e-other-month>span.e-day {
    display: block;
}

.e-calendar .e-content td.e-month-hide,
.e-calendar .e-content td.e-other-month {
    pointer-events: auto;
    touch-action: auto;
}
</style>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs10" %}