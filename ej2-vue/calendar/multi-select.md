---
layout: post
title: Multi Selection in Vue Calendar | Syncfusion
description: Enable multi-date selection in the Syncfusion Vue Calendar using isMultiSelection and the values array property for picking multiple dates.
control: Multi select
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multi Selection in Vue Calendar

Calendar provides an option to select **single** or **multiple dates** by using `isMultiSelection` and `values` properties. By default, the `isMultiSelection` property is disabled.

| API | Type | Description |
|------|------|----------------------|
| `isMultiSelection`| **Boolean**| Enables the multi-selection option in the Calendar component |
| `values`| **Date[]** | Gets or sets the date range values in multi-selection option |

The following example demonstrates the functionality of  `isMultiSelection` property and `values` properties in the Calendar component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/multi-selection-cs2" %}