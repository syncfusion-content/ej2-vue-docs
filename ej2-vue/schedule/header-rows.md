---
layout: post
title: Header rows in Vue Schedule component | Syncfusion
description: Learn here all about Header rows in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Header rows 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Header rows in Vue Schedule component

Timeline views in the Vue Schedule component support additional header rows beyond the default date and time headers. Using the [`headerRows`](../api/schedule/headerRows) property, multiple header rows can be displayed to represent different calendar units such as year, month, week, and date. This feature is applicable only to **timeline views**.

The following header row types are supported:

* `Year`
* `Month`
* `Week`
* `Date`
* `Hour`

> The `Hour` row is not applicable for Timeline month view.

Check out this video to learn about customizing header rows of the timeline views in Vue Scheduler.

{% youtube "https://www.youtube.com/watch?v=cqMLo9Yr_0s" %}

The following example demonstrates a timeline Scheduler configured with all available header rows.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs1" %}

## Display year and month rows in timeline views

To display only the **Year** and **Month** header rows in timeline views, include the `Year` and `Month` options in the [`headerRows`](../api/schedule/headerRows) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs2" %}

## Display week numbers in timeline views

The week number can be displayed in a separate header row of the timeline Scheduler by setting `Week` option within [`headerRows`](../api/schedule/headerRows) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs3" %}

## Timeline view displaying dates of a complete year

It is possible to display a complete year in a timeline view by setting `interval`[`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/views#interval) value as 12 and defining **TimelineMonth** view option within the [`views`](../api/schedule/views) property of Scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs4" %}

## Customizing header rows using template

The appearance and content of individual header rows can be customized using the `template` option within the [`headerRows`](../api/schedule/headerRows) property. Templates allow inserting formatted text, images, or custom markup for each header row.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-rows-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-rows-cs5" %}

> For a comprehensive overview of Scheduler features, visit the  [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples in the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) demo to see timeline header rows in action.