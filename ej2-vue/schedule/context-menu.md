---
layout: post
title: Context menu in Vue Schedule component | Syncfusion
description: Learn here all about Context menu in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Context Menu in Vue Schedule Component

A context menu can be displayed on work cells and appointments in the Vue Schedule component by manually integrating the [`ContextMenu`](https://ej2.syncfusion.com/vue/documentation/context-menu/getting-started) ContextMenu control. In this approach, the ContextMenu component is added at the application level and its `target` property is set to the Schedule component’s DOM element.

On Scheduler cells, menu items such as `New Event`, `New Recurring Event` and `Today` can be displayed. For appointments, context menu options such as `Edit Event` and `Delete Event`. The default event editor can be opened for creating and editing appointments using the [`openEditor`](../api/schedule#openeditor) method of the Schedule component.

Appointment deletion can be performed using the [`deleteEvent`](https://ej2.syncfusion.com/vue/documentation/api/schedule#deleteevent) public method. Date navigation can be achieved using the [`selectedDate`](../api/schedule#selecteddate) property to programmatically move to the desired date.

> Custom menu items can also be displayed for both cells and appointments. In responsive mode, the context menu opens on tap‑hold interaction.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/context-menu-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/context-menu-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/context-menu-cs1" %}

> Refer to the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) Vue Scheduler feature tour page for detailed feature descriptions. Explore the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) examples for demonstrations of scheduling and interaction behaviors.