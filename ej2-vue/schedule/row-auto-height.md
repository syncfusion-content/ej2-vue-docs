---
layout: post
title: Row auto height in Vue Schedule component | Syncfusion
description: Learn here all about Row auto height in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Row auto height 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Row auto height in Vue Schedule component

By default, row heights in **Timeline views** of the Vue Schedule component are fixed. When multiple appointments overlap within the same time range, the component displays a **“+n more”** indicator instead of rendering all appointments.

The **row auto height** feature dynamically increases the height of Scheduler rows based on the number of overlapping appointments. This allows all events within the same time range to be displayed without using the “+n more” indicator.

To enable auto row height adjustments on Scheduler Timeline views and Month view, set `true` to the [`rowAutoHeight`](../api/schedule#rowautoheight) property whose default value is `false`.

> This auto row height adjustment is applicable only on all the Timeline views as well as on the calendar Month view.

Now, let's see how it works on those applicable views with examples.

## Calendar month view

In the Calendar Month view, each date cell has a fixed height by default. When multiple appointments overlap, excess events are collapsed and represented by a “+n more” indicator.
When [`rowAutoHeight`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rowautoheight) is enabled, the height of each date row expands automatically to accommodate all appointments in that cell. This ensures that all events are visible within the month view without requiring additional interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/working-days-cs1" %}

## Timeline views

When the feature [`rowAutoHeight`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rowautoheight) is enabled in Timeline views, the row height gets auto-adjusted based on the number of overlapping events occupied on the same time range, which is demonstrated in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/working-days-cs2" %}

## Timeline views with multiple resources

The row auto height feature also works when multiple resources are configured in Timeline views. In this scenario, each resource row expands independently based on the number of appointments assigned to that resource within the same time range.
This ensures that overlapping events for different resources are fully visible and clearly separated, even in complex multi-resource schedules.

The following example shows how the auto row adjustment feature works on timeline views with multiple resources.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/working-days-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/working-days-cs3" %}

## Appointments occupying entire cell

By default, with the feature [`rowAutoHeight`](../api/schedule#rowautoheight), there will be a space in the bottom of the cell when appointment is rendered. To avoid this space, we can set true to the property [`ignoreWhitespace`](../api/schedule/eventSettings#ignorewhitespace) with in [`eventSettings`](../api/schedule/eventSettings) whereas its default property value is false. The following example demonstrates how appointments fill the available cell space by ignoring the default bottom whitespace.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/ignore-whitespace-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/ignore-whitespace-cs1" %}

**Note**: The property [`ignoreWhitespace`](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings#ignorewhitespace) will be applicable only when [`rowAutoHeight`](https://ej2.syncfusion.com/vue/documentation/api/schedule#rowautoheight) feature is enabled in the Scheduler

> For a complete overview of resource scheduling features, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.