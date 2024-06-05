---
layout: post
title: Multi select in Vue Calendar component | Syncfusion
description: Learn here all about Multi select in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Multi select 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Multi select in Vue Calendar component

Calendar provides an option to select **single** or **multiple dates** by using `isMultiSelection` and `values` properties. By default, `isMultiSelection` property will be in disabled state.

| API | Type | Description |
|------|------|----------------------|
| `isMultiSelection`| **Boolean**| Enables the multi-selection option in the Calendar control |
|`values`| **Date[]** | Gets or sets the date range values in multi-selection option |

The following example demonstrates the functionality of  `isMultiSelection` property and `values` properties in the Calendar control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/calendar/multi-selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/calendar/multi-selection-cs2" %}