---
layout: post
title: How to show other months in Vue Calendar | Syncfusion
description: Show hidden previous and next month dates in the Syncfusion Vue Calendar by overriding e-month-hide and e-other-month CSS rules.
control: Show dates of other months
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to show other months in Vue Calendar

The following example demonstrates how to show dates of other months.

Using the styles below, you can make the dates of other months visible from their hidden state.

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

The first rule sets `display: block` so the dates of other months are rendered visibly instead of being hidden. The second rule restores `pointer-events` and `touch-action` so those dates become interactive and clickable.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/min-max-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/calendar/min-max-cs10" %}