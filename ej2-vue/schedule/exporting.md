---
layout: post
title: Exporting in Vue Schedule component | Syncfusion
description: Learn here all about Exporting in Syncfusion Vue Schedule component of Syncfusion Essential JS 2 and more.
control: Exporting 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting in Vue Schedule Component

The Schedule component supports exporting its appointments to Excel (`.xlsx`/`.csv`) and ICS (`.ics`) file formats on the client side. Several client‑side methods are available to export appointment data in Excel and iCalendar formats. The following sections describe the exporting and printing capabilities of the Schedule component.

## Excel Exporting

Appointments can be exported to an Excel file by using the `exportToExcel` method. By default, all event fields mapped through the [`eventSettings`](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings)  property are included.

> Before using Excel export functionality, import and inject the `ExcelExport` module from the `@syncfusion/ej2-schedule` package using the `Inject` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs1" %}

### Exporting with Custom Fields

By default, Scheduler exports all the default event fields that are mapped to it through the [`eventSettings`](https://ej2.syncfusion.com/vue/documentation/api/schedule/eventSettings) property. To limit the number of fields on the exported excel file, it provides an option to export only the custom fields of the event data. To export such custom fields alone, define the required `fields` through the [`ExportOptions`](../api/schedule/exportOptions) interface and pass it as argument to the `exportToExcel` method as shown in the following example. For example: `['Id', 'Subject', 'StartTime', 'EndTime', 'Location']`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs2" %}

### Exporting Individual Occurrences of a Recurring Series

By default, the Scheduler exports recurring events as a single data by exporting only its parent record into the excel file. If you want to export each individual occurrences of a recurring series appointment as separate records in an Excel file, define the [`includeOccurrences`](https://ej2.syncfusion.com/vue/documentation/api/schedule/exportOptions#includeoccurrences) option as `true` through the [`ExportOptions`](../api/schedule/exportOptions) interface and pass it as argument to the [`exportToExcel`](https://ej2.syncfusion.com/vue/documentation/api/schedule#exporttoexcel) method. By default, the [`includeOccurrences`](https://ej2.syncfusion.com/vue/documentation/api/schedule/exportOptions#includeoccurrences) option is set to `false`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs3" %}

### Exporting Custom Event Data

By default, the whole event collection bound to the Scheduler gets exported as an excel file. To export only specific events of Scheduler or some custom event collection, you need to pass those custom data collection as a parameter to the [`exportToExcel`](https://ej2.syncfusion.com/vue/documentation/api/schedule#exporttoexcel) method as shown in this following example, through the `customData` option of [`ExportOptions`](../api/schedule/exportOptions) interface.

> By default, the event data are taken from Scheduler dataSource.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs4" %}

### Customizing Column Header with Custom Fields Exporting

Using fields property, we can only export the defined fields into excel without customizing the header. Now we can provide the alternate support to customize the header of custom fields exporting using the `fieldsInfo` option through the [`ExportFieldInfo`](../api/schedule/exportFieldInfo) interface and pass it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/vue/documentation/api/schedule#exporttoexcel) method as shown in the following example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs5" %}

### Export with Custom File Name

By default, the Scheduler allows users to download the exported Excel file with a name `Schedule.xlsx`. It also provides an option to export the excel file with a custom file name, by defining the desired `fileName` through the [`ExportOptions`](../api/schedule/exportOptions) interface and passing it as an argument to the [`exportToExcel`](https://ej2.syncfusion.com/vue/documentation/api/schedule#exporttoexcel) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs6" %}

### Excel File Formats

By default, the Scheduler exports event data to an excel file in the `.xlsx` format. Users can also export the Scheduler data in either of the file type such as `.xlsx` or `csv` formats, by defining the `exportType` option as either `csv` or `xlsx` through the [`ExportOptions`](../api/schedule/exportOptions) interface. By default, the `exportType` is set to `xlsx`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs7" %}

### Custom separator in CSV

The Scheduler exports the event data to CSV format with `,` as separator. You can change separator by setting [separator](../api/schedule/exportOptions#separator) property in [ExportOptions](../api/schedule/exportOptions#exporttype).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs8" %}

### How to Customize the Excel Sheet on before Exporting

Customizing an Excel sheet before export is made easy with the [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/schedule#excelExport) event. This event provides users with robust flexibility to tailor the exported data, format it according to specific needs, and include additional elements for enhanced presentation.

With the [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/schedule#excelExport) event, you can:

- **Adjust the formatting:** Apply specific styles such as font type, size, color, and cell formatting to make the output visually appealing and consistent with your requirements.

- **Customize headers and footers:** Personalize the Excel sheet by modifying the header and footer content, offering more control over the exported document.

- **Cancel the export:** The event supports cancellation of the export process by setting the `cancel` property to `true`. This feature ensures you can prevent export based on specific conditions, offering you full control over the Excel export workflow.

Here’s an example of how you can add a custom header and footer to an Excel sheet before exporting using the [`excelExport`](https://ej2.syncfusion.com/vue/documentation/api/schedule#excelExport) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/excel-export-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/excel-export-cs9" %}

## Exporting Calendar Events as ICS File

The Schedule component allows exporting events to an `.ics` calendar file compatible with applications such as Google Calendar and Outlook. To enable ICS export, import and inject the `ICalendarExport` module from `@syncfusion/ej2-schedule`.

The following code example shows how the Scheduler events are exported to a calendar (.ics) file by making use of the [`exportToICalendar`](https://ej2.syncfusion.com/vue/documentation/api/schedule#exporttoicalendar)  public method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/calendar-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/calendar-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-export-cs1" %}

### Exporting Calendar with Custom File Name

By default, the calendar is exported with a file name `Calendar.ics`. To change this file name on export, pass the custom string value as `fileName` to the method argument so as to get the file downloaded with this provided name.

The following example downloads the iCal file with a name `ScheduleEvents.ics`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/calendar-export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/calendar-export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-export-cs2" %}

## Import Events from other Calendars

The events from external calendars (ICS files) can be imported into Scheduler by using the `importICalendar` method. This method accepts the `blob object` of an .ics file to be imported, as a mandatory argument.

> To import an ICS file containing events into Scheduler, you need to first import the `ICalendarImport` module from `@syncfusion/ej2-schedule` package and then inject it using the `Schedule.Inject(ICalendarImport)` method.

The following example shows how to import an ICS file into Scheduler, using the `importICalendar` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/calendar-import-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/calendar-import-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/calendar-import-cs1" %}

## How to Print the Scheduler Element

The Schedule component can be printed using the [`print`](../api/schedule#print) method. Printing supports two modes:

* Using print method without options.
* Using a print method with options.

> To enable printing, import the `Print` module from `@syncfusion/ej2-vue-schedule` and inject it using `provide: { schedule: [Print] }`.

### Using Print Method Without Options

You can print the Schedule element with the current view by using the [`print`](../api/schedule#print) method without passing the options. The following example shows how to print the Scheduler using the [`print`](https://ej2.syncfusion.com/vue/documentation/api/schedule#print) method without passing options.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/print-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/print-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/print-cs1" %}

### Using Print Method with Options

You can print the Schedule element based on your needs using the [`print`](../api/schedule#print) method by passing the print options used in this example with its values. The following example shows how to print the Scheduler using the [`print`](https://ej2.syncfusion.com/vue/documentation/api/schedule#print) method by passing the options.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/print-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/print-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/print-cs2" %}

### How to Customize the Print Layout

The [`beforePrint`](https://ej2.syncfusion.com/vue/documentation/api/schedule#beforePrint) event enables users to customize the print layout of the Scheduler control without altering the actual schedule layout or data. This event returns the HTML element used for printing, which can be tailored based on specific requirements before the print operation is triggered. Additionally, users can prevent the print action by setting the `cancel` property to `true`, giving them full control over when and how the print operation takes place.

Key customization options include:

- **Customizing the header and footer:** Add custom header and footer content of the print layout to include additional information.
- **Controlling print output:** Fine-tune the layout to ensure that only the necessary details are printed, ensuring a clean and structured printout.

Here’s an example of how you can add a custom header and footer to the print layout using the [`beforePrint`](https://ej2.syncfusion.com/vue/documentation/api/schedule#beforePrint) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/schedule/print-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/schedule/print-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/print-cs3" %}

> Refer to the [Vue Scheduler](https://www.syncfusion.com/vue-components/vue-scheduler) feature tour page for an overview. Explore the [Vue Scheduler example](https://ej2.syncfusion.com/vue/demos/#/tailwind3/schedule/overview.html) to knows how to present and manipulate data.
