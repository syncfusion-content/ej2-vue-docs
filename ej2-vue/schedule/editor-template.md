---
layout: post
title: Editor template in Vue Schedule component | Syncfusion
description: Learn here all about Editor template in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Editor template 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Editor Template in Vue Schedule Component

The Schedule component uses popups and dialog windows to display notifications and includes an editor window containing event fields that simplify appointment creation and modification. The editor window and its fields can be customized, and validation rules can be applied where necessary.

## Event Editor

The editor window usually opens on the Scheduler, when a cell or event is double clicked. When a cell is double clicked, the detailed editor window opens in "Add new" mode, whereas when an event is double clicked, the same is opened in an "Edit" mode.

On mobile devices, the detailed editor window can be opened in edit mode by tapping the edit icon in the popup displayed after tapping an event. Tapping a cell displays a **+** indicator, which when tapped again, opens the editor in add mode.

> The editor window can be prevented from opening by enabling the [`readonly`](https://ej2.syncfusion.com/vue/documentation/api/schedule#readonly) mode or by customizing behavior within the [`popupOpen`](../api/schedule#popupopen) event.

### How to change the editor window header title and text of footer buttons

The header title and footer button text of the editor window can be modified by customizing the localized word collection used in the Schedule component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs1" %}

### How to change the label text of default editor fields

Default field labels such as **Subject**, **Location**, and others can be customized using the `title` property of the [`eventSettings`](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings) field options.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs2" %}

### Field Validation

It is possible to validate the required fields of the editor window from client-side before submitting it, by adding appropriate validation rules to each field. The appointment fields have been extended to accept both `string` and `object` type values. To perform validations, it is necessary to specify object values for the event fields.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs3" %}

> Validation rules are detailed in the [form validation](https://ej2.syncfusion.com/documentation/form-validator/validation-rules) documentation.

### Add additional fields to the default editor

The additional fields can be added to the default event editor by making use of the [`popupOpen`](../api/schedule#popupopen) event which gets triggered before the event editor opens on the Scheduler. The [`popupOpen`](https://ej2.syncfusion.com/vue/documentation/api/schedule#popupopen) is a client-side event that triggers before any of the generic popups opens on the Scheduler. The additional field (any of the form elements) should be added with a common class name `e-field`, so as to handle and process those additional data along with the default event object. In the following example, an additional field `Event Type` has been added to the default event editor and its value is processed accordingly.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs4" %}

### Customizing the default time duration in editor window

The default time interval for start and end times in the editor is determined by the [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#interval) value within the [`timeScale`](../api/schedule#timescale) property. By default, [`interval`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timeScale#interval) value is set to 30, and therefore the start/end time duration within the event editor will be in a 30 minutes time difference. You can change this duration value by changing the [`duration`](https://ej2.syncfusion.com/vue/documentation/api/schedule/popupOpenEventArgs#duration) option within the [`popupOpen`](../api/schedule#popupopen) event as shown in the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs5" %}

### How to Prevent the Display of Editor and Quick Popups

To prevent the editor or quick popups from opening, assign `true` to the `cancel` option in the [`popupOpen`](../api/schedule#popupopen) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs6" %}

When preventing only specific popups, conditional checks can be performed based on popup type. Supported popup types within the [`popupOpen`](https://ej2.syncfusion.com/vue/documentation/api/schedule#popupopen) event include.

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For  Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

### Customizing Timezone Collection in the Editor Window

By default, the timezone collections in the editor window have been loaded with built-in timezone collections. Now we can be able to customize the timezone collections using the [`timezoneDataSource`](https://ej2.syncfusion.com/vue/documentation/api/schedule#timezonedatasource) property with the collection of  [`TimezoneFields`](https://ej2.syncfusion.com/vue/documentation/api/schedule/timezoneFields) data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs7" %}

## Customizing Event Editor using Template

The event editor window can be customized by making use of the [`editorTemplate`](../api/schedule#editortemplate) option. Here, the custom window design is built with the required fields using the script template and its type should be of **text/x-template**.

Each field defined within template should contain the **e-field** class, so as to allow the processing of those field values internally. The ID of this customized script template section is assigned to the [`editorTemplate`](https://ej2.syncfusion.com/vue/documentation/api/schedule#editortemplate) option, so that these customized fields will be replaced onto the default editor window.

>Note: **e-field** class only applicable for **DropDownList**, **DateTimePicker**, **MultiSelect**, **DatePicker**, **CheckBox** and **TextBox** components. Since we have processed the field values internally for the above mentioned components.

As we are using our Syncfusion<sup style="font-size:70%">&reg;</sup> sub-components within our editor using template in the following example, the custom defined form elements needs to be configured as required Syncfusion<sup style="font-size:70%">&reg;</sup> components such as **DropDownList** and **DateTimePicker** within the [`popupOpen`](../api/schedule#popupopen) event. This particular step can be skipped, if the user needs to simply use the usual form elements.

Check out this video for further information on how to customise an editor window using a template in the Vue Scheduler:

{% youtube "https://www.youtube.com/watch?v=0mNyH2X-FV0" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs1" %}

### How to Customize Header and Footer using Template

The editor window's header and footer can be enhanced with custom designs using the [`editorHeaderTemplate`](../api/schedule#editorheadertemplate) and [`editorFooterTemplate`](../api/schedule#editorfootertemplate) options. To achieve this, create a script template that includes the necessary fields. Ensure that the template type is set to **text/x-template**.

In this demo, we tailor the editor's header according to the appointment's subject field using the [`editorHeaderTemplate`](../api/schedule#editorheadertemplate). Furthermore, we make use of the [`editorFooterTemplate`](../api/schedule#editorfootertemplate) to handle the functionality of validating specific fields before proceeding with the save action or canceling it if validation requirements are not met.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-header-footer-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-header-footer-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-header-footer-cs1" %}

### How to add resource options within editor template

Resource selection can be added to the editor template using a multiselect control when assigning multiple resources to an appointment.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/resource-field-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/resource-field-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/resource-field-cs1" %}

### How to add recurrence options within editor template

Recurrence options can be added to the editor template by including `RecurrenceEditor`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-recurrence-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-recurrence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-recurrence-cs1" %}

### Apply Validations on Editor Template Fields

In the following code example, validation has been added to the status field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs2" %}

### How to save the customized event editor using template

When the `e-field` class is not applied to all fields in a template, the corresponding values must be manually assigned using the [`popupClose`](../api/schedule#popupclose) event.

Note: You can allow to retrieve the data only on the `save` and `delete` option. Data cannot be retrieved on the `close` and `cancel` options in the editor window.

The following code example shows how to save the customized event editor using a template by the [`popupClose`](https://ej2.syncfusion.com/vue/documentation/api/schedule#popupclose) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs3" %}

In case, if you need to prevent only specific popups on Scheduler, then you can check the condition based on the popup type. The types of the popup that can be checked within the [`popupClose`](../api/schedule#popupclose) event are as follows.

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For  Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

## Quick Popups

The quick info popups are the ones that gets opened, when a cell or appointment is single clicked on the desktop mode. On single clicking a cell, you can simply provide a subject and save it. Also, while single clicking on an event, a popup will be displayed where you can get the overview of the event information. You can also edit or delete those events through the options available in it.

By default, these popups are displayed over cells and appointments of Scheduler and to disable this action, set `false` to [`showQuickInfo`](../api/schedule#showquickinfo) property.

> The quick popup that opens while single clicking on the cells are not applicable on mobile devices.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs8" %}

### How to Open QuickInfo Popup on Multiple Cell Selection

Quick popups open by default on single cell click. To open the quick popup after selecting multiple cells, press the **Enter** key. To open it immediately after selection, set the [`quickInfoOnSelectionEnd`](https://ej2.syncfusion.com/vue/documentation/api/schedule#quickinfoonselectionend) property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs9" %}

### How to Change the Watermark Text of Quick Popup Subject

By default, `Add Title` text is displayed on the subject field of quick popup. To change the default watermark text, change the value of the appropriate localized word collection used in the Scheduler.

```ts
L10n.load({
    'en-US': {
        'schedule': {
          'addTitle' : 'New Title'
        }
    }
});
```

### Customizing quick popups

The look and feel of the built-in quick popup window, which opens when single clicked on the cells or appointments can be customized by making use of the [`quickInfoTemplates`](../api/schedule#quickinfotemplates) property of the Scheduler. There are 3 sub-options available to customize them easily,

* header - Accepts the template design that customizes the header part of the quick popup.
* content - Accepts the template design that customizes the content part of the quick popup.
* footer - Accepts the template design that customizes the footer part of the quick popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/quick-info-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/quick-info-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/quick-info-cs1" %}

> Quick info popups in adaptive mode can also be customized using [`quickInfoTemplates`](https://ej2.syncfusion.com/vue/documentation/api/schedule#quickinfotemplates)  with the e-device class.

## More Events Indicator and Popup

When the number of appointments count that lies on a particular time range * default appointment height exceeds the default height of a cell in month view and all other timeline views, a `+ more` text indicator will be displayed at the bottom of those cells. This indicator denotes that the cell contains few more appointments in it and clicking on that will display a popup displaying all the appointments present on that day.

> To disable this option of showing popup with all hidden appointments, while clicking on the text indicator, you can do code customization within the [`popupOpen`](../api/schedule#popupopen) event.

The same indicator is displayed on all-day row in calendar views such as day, week and work week views alone, when the number of appointment count present in a cell exceeds three. Clicking on the text indicator here will not open a popup, but will allow the expand/collapse option for viewing the remaining appointments present in the all-day row.

The following code example shows how to disable the display of such popups while clicking on the more text indicator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs10" %}

### How to Customize the Popup that Opens on more Indicator

The following code example shows you how to customize the default more indicator popup in which number of events rendered count on the day has been shown in the header.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs11" %}

### How to prevent the display of popup when clicking on the more text indicator

It is possible to prevent the display of popup window by passing the value `true` to `cancel` option within the [`MoreEventsClick`](https://ej2.syncfusion.com/vue/documentation/api/schedule#moreeventsclick) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs12" %}

### How to navigate Day view when clicking on more text indicator

The following code example shows you how to customize the [`moreEventsClick`](../api/schedule#moreeventsclick) property to navigate to the Day view when clicking on the more text indicator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs13" %}

### How to Close the Editor Window Manually

The editor window can be manually closed using the [closeEditor](https://ej2.syncfusion.com/vue/documentation/api/schedule#closeeditor) method.  

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs14" %}

### How to Open the Quick info Popup Manually

The quick info popup can be opened manually by invoking the [openQuickInfoPopup](https://ej2.syncfusion.com/vue/documentation/api/schedule#openquickinfopopup) public method. Passing cell data opens the cell quick info popup; passing event data opens the event quick info popup.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs15" %}

### How to Close the Quick info Popup Manually

You can close the quick info popup in scheduler by using the [closeQuickInfoPopup](https://ej2.syncfusion.com/vue/documentation/api/schedule#closequickinfopopup) public method. The following code example demonstrates the how to close quick info popup manually.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/editor-window-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-window-cs16" %}

> Refer to the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for a detailed overview. Explore the   [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) sample for live interaction examples.
