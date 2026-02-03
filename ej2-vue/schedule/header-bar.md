---
layout: post
title: Header bar in Vue Schedule component | Syncfusion
description: Learn here all about Header bar in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Header bar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Header bar in Vue Schedule component

The header bar of the Vue Schedule component provides navigation controls such as date navigation, view switching, and action buttons. It can be customized extensively using built-in properties, templates, and events.

## Show or Hide header bar

By default, the header bar displays navigation elements like **Previous**, **Next**, **Today**, date range text, and view options. The header bar can be hidden by setting the [`showHeaderBar`](../api/schedule#showheaderbar) property to `false`. The default value of this property is `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-bar-cs1" %}

## Customizing header bar using template

Apart from the default date navigation and view options In addition to the built-in navigation elements, custom items can be added to the header bar using the [`toolbarItems`](https://ej2.syncfusion.com/vue/documentation/api/schedule#toolbaritems) property.

To display the default items, it's Essential<sup style="font-size:70%">&reg;</sup> to assign a [`name`](https://ej2.syncfusion.com/vue/documentation/api/schedule/toolbarItemModel#name) field to each item. Supported default item names include:

- `Previous`
- `Next`
- `Today`
- `DateRangeText`
- `NewEvent`
- `Views`

For custom toolbar items, use `Custom` as the `name` value. In the following example, default navigation items are combined with custom toolbar items that include external icons.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-template/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-template/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/header-bar-template" %}

## Customizing header bar using events

Custom elements can also be added to the header bar dynamically using the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/schedule#actionbegin) event. This approach allows injecting UI elements programmatically based on scheduler actions.

In the example below, an employee image is added to the header bar. Selecting the image opens a popup that displays profile details.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-bar-cs2" %}

## How to display the view options within the header bar popup

By default, the view-switching options are shown directly in the header bar. To move these options into a popup (commonly used for adaptive or compact layouts), set the [`enableAdaptiveUI`](../api/schedule#enableadaptiveui) property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-bar-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-bar-cs3" %}

> Refer [here](./resources#adaptive-ui-in-desktop) to know more about adaptive UI in resources scheduler.

## Date header customization

The Scheduler UI that displays the date text on all views are considered as the date header cells. These cells can be customized using either [`dateHeaderTemplate`](../api/schedule#dateheadertemplate) or `renderCell` events.

### Using date header template

The [`dateHeaderTemplate`](../api/schedule#dateheadertemplate) property customizes date header cells in **Day**, **Week**, and **WorkWeek** views.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/date-header-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/date-header-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/date-header-cs1" %}

### Using renderCell event

In month view, the date header template is not applicable and therefore the same customization can be added beside the date text in month cells by making use of the `renderCell` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/render-cell-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/render-cell-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/render-cell-cs1" %}

## Customizing the date range text

The [`dateRangeTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#daterangetemplate) option allows you to customize the text content of the date range displayed in the scheduler. By default, the date range text is determined by the scheduler view being used. However, you can use the [`dateRangeTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#daterangetemplate) option to override the default text and specify your own custom text to be displayed.

The [`dateRangeTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#daterangetemplate) property includes `startDate`, `endDate` and `currentView` options, you can customize the date range text using these available options.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/date-header-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/date-header-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/date-header-cs2" %}

## Customizing header indent cells

Header indent cells can be customized using the [`headerIndentTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#headerindenttemplate) property. This is applicable to both vertical and timeline views.

- In **vertical views**, header indent cells can be customized at each resource hierarchy level.
- In **timeline views**, the resource header left indent cell can be customized using the same template.

**Example:** Display custom resource text in the header left indent cell.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-indent-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/header-indent-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-indent-cs1" %}

> Visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for a complete overview. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to see the header bar customization in action