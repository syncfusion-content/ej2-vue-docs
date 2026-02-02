---
layout: post
title: Clipboard in Vue Schedule component | Syncfusion
description: Learn here all about Context menu in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Clipboard 
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in Vue Schedule component

The Clipboard functionality in the Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule control enhances scheduling efficiency by enabling users to cut, copy, and paste appointments with ease. This feature is especially beneficial for those managing multiple appointments, as it eliminates the need for repetitive data entry and allows users to quickly adjust their schedules without hassle.
To activate the clipboard feature in the scheduler, simply set the [`allowClipboard`](https://ej2.syncfusion.com/vue/documentation/api/schedule#allowclipboard) property to **true**.

>Note: The [`allowKeyboardInteraction`](https://ej2.syncfusion.com/vue/documentation/api/schedule#allowkeyboardinteraction) property must also be set to **true** for clipboard operations to function correctly.

## Cut, Copy and Paste using Keyboard

The Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule control supports keyboard shortcuts to streamline the process of managing appointments.

These keyboard shortcuts enable users to efficiently manage their schedules:

| Operation | Shortcut | Description                                                      |
|-----------|----------|------------------------------------------------------------------|
| Copy      | Ctrl+C   | Duplicate appointments to streamline the scheduling process.     |
| Cut       | Ctrl+X   | Move appointments to a new time slot without duplicates.         |
| Paste     | Ctrl+V   | Place copied or cut appointments into the desired time slot.     |

When an appointment is selected, pressing **Ctrl+C** copies it, while **Ctrl+X** cuts it. Clicking a target time slot and pressing **Ctrl+V** pastes the appointment into the selected location.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/clipboard-cs1" %}

>Note: For Mac users, use **Cmd** instead of **Ctrl** for copy, cut, and paste operations.

## Cut, Copy, and Paste using Context Menu

Clipboard operations can also be performed programmatically using the Schedule component’s public methods **cut**, **copy**, and **paste**. These methods allow users to perform the same actions as the context menu or external buttons.

Utilize these public methods to manage appointments programmatically in Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule control:

| Method | Parameters                     | Description                                                                                     |
|--------|--------------------------------|-------------------------------------------------------------------------------------------------|
| [`copy`](https://ej2.syncfusion.com/vue/documentation/api/schedule#copy)   | None                           | Duplicate the selected appointment for reuse.                                                   |
| [`cut`](https://ej2.syncfusion.com/vue/documentation/api/schedule#cut)    | None                           | Remove the selected appointment from its current slot for moving.                               |
| [`paste`](https://ej2.syncfusion.com/vue/documentation/api/schedule#paste)  | targetElement (Scheduler's work-cell) | Insert the copied or cut appointment into the specified time slot.                              |

These methods enable direct programmatic control over appointment manipulation, replicating the behavior of context menu actions and keyboard shortcuts.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/clipboard-cs2" %}

## Modifying Content before Pasting

Appointment content can be altered before it is pasted by handling the [`beforePaste`](https://ej2.syncfusion.com/vue/documentation/api/schedule#beforepaste) event. This event exposes the appointment details prior to insertion, enabling modifications such as adjusting times or updating additional fields.

The following workflow outlines how data copied from an external source, such as a grid, can be pasted into the Schedule component:

1. **Select an Item**: Click on an item in the grid.
2. **Copy the Details**: Press **Ctrl + C** to copy the selected event details.
3. **Choose a Time Slot**: Click on the desired time slot in the scheduler.
4. **Paste the Details**: Press **Ctrl + V** to paste the copied appointment details into the selected time slot.

By using the `beforePaste` event, the copied details can be intercepted and updated before insertion to match required field mappings, such as adjusting start and end times or adding additional descriptive fields.

>Note: Ensure that the field mapping matches with the fields in the scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/clipboard-cs3" %}



>  For more information on Schedule component capabilities, visit the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page. Explore live examples at [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview) for more usage scenarios.
