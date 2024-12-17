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

The Clipboard functionality in the Syncfusion Schedule control enhances scheduling efficiency by enabling users to cut, copy, and paste appointments with ease. This feature is especially beneficial for those managing multiple appointments, as it eliminates the need for repetitive data entry and allows users to quickly adjust their schedules without hassle.
To activate the clipboard feature in the scheduler, simply set the [`allowClipboard`](https://ej2.syncfusion.com/vue/documentation/api/schedule#allowClipboard) property to **true**.

>Note: The [`allowKeyboardInteraction`](https://ej2.syncfusion.com/vue/documentation/api/schedule#allowKeyboardInteraction) property must be true for proper functionality of the clipboard feature.

## Cut, Copy and Paste using keyboard

The Syncfusion Schedule control supports keyboard shortcuts to streamline the process of managing appointments.

These keyboard shortcuts enable users to efficiently manage their schedules:

| Operation | Shortcut | Description                                                      |
|-----------|----------|------------------------------------------------------------------|
| Copy      | Ctrl+C   | Duplicate appointments to streamline the scheduling process.     |
| Cut       | Ctrl+X   | Move appointments to a new time slot without duplicates.         |
| Paste     | Ctrl+V   | Place copied or cut appointments into the desired time slot.     |

To use these shortcuts, simply click on the appointment and press **Ctrl+C** to copy or **Ctrl+X** to cut. To paste the copied or cut appointment, click on the desired time slot and press **Ctrl+V**

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

You can programmatically manage appointments by using the public methods **cut**, **copy**, and **paste**. These methods allow you to perform the same actions as the context menu or external buttons.

Utilize these public methods to manage appointments programmatically in Syncfusion Schedule control:

| Method | Parameters                     | Description                                                                                     |
|--------|--------------------------------|-------------------------------------------------------------------------------------------------|
| [`copy`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#copy)   | None                           | Duplicate the selected appointment for reuse.                                                   |
| [`cut`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#cut)    | None                           | Remove the selected appointment from its current slot for moving.                               |
| [`paste`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#paste)  | targetElement (Scheduler's work-cell) | Insert the copied or cut appointment into the specified time slot.                              |

By using these methods, you can programmatically cut, copy, and paste appointments in the scheduler, providing more control over the appointment management process.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

## Modifying Content Before Pasting

You can modify the content of an appointment before pasting it by using [`beforePaste`](https://ej2.syncfusion.com/vue/documentation/api/schedule/#beforePaste) event accessing the appointment details and making necessary changes.

The following example demonstrates how to seamlessly copy and paste content from a grid to a scheduler. To do this, follow these steps:

1. **Select an Item**: Click on an item in the grid.
2. **Copy the Details**: Press **Ctrl + C** to copy the selected event details.
3. **Choose a Time Slot**: Click on the desired time slot in the scheduler.
4. **Paste the Details**: Press **Ctrl + V** to paste the copied appointment details into the selected time slot.

In this example, the `beforePaste` event can be utilized to intercept the event details before they are pasted. This allows you to modify the content as needed. Such modifications could include adjusting the time, adding notes, or altering other specifics of the appointment.

>Note: Ensure that the field mapping matches with the fields in the scheduler.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/clipboard-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}


>  You can refer to our [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/material/schedule/overview) to knows how to present and manipulate data.
