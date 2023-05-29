---
layout: post
title: Context menu in Vue Schedule component | Syncfusion
description: Learn here all about Context menu in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in Vue Schedule component

You can display context menu on work cells and appointments of Scheduler by making use of the `ContextMenu` control manually from the application end. In the following code example, context menu control is being added from sample end and set its target as `Scheduler`.

On Scheduler cells, you can display the menu items such as `New Event`, `New Recurring Event` and `Today` option. For appointments, you can display its related options such as `Edit Event` and `Delete Event`. The default event window can be opened for appointment creation and editing using the [`openEditor`](../api/schedule/#openeditor) method of Scheduler.

The deletion of appointments can be done by using the `deleteEvent` public method. Also, the [`selectedDate`](../api/schedule/#selecteddate) property can be used to navigate between different dates.

> You can also display custom menu options on Scheduler cells and appointments. Context menu will open on tap-hold in responsive mode.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/schedule/context-menu-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/context-menu-cs1" %}

> You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-ui-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview.html) to knows how to present and manipulate data.