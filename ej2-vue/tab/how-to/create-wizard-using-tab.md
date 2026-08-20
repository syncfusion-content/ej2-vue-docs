---
layout: post
title: How to create wizard using tab in Vue Tabs | Syncfusion
description: Build a multi-step wizard using Vue Tabs with validation and conditional navigation to guide users through a sequence of form steps in the Tab.
control: Create wizard using tab 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# How to create wizard using tab in Vue Tabs

Tab items can be disabled dynamically by passing the index and boolean value with the [`enableTab`](https://ej2.syncfusion.com/vue/documentation/api/tab#enabletab) method.

In the below Wizard sample, each Tab is integrated with required components to complete the reservation. Each field is provided with validation
for all mandatory option to proceed to next tabs. Using Tab item's template property the components are added intocontent.

Create the following contents for each tab in the wizard.
1. **Search tab:**
   Created with [DropDownList](https://ej2.syncfusion.com/vue/documentation/drop-down-list/data-binding/) to select the source, destination and type of ticket. A [DatePicker](https://ej2.syncfusion.com/vue/documentation/datepicker/getting-started/) for choosing the date of journey.
2. **Train tab:**
   Based on the selected start and end point, populated Grid with random list of available seats and train list. Initially define the columns
   and row selected event for validating, after the source and destination chosen update the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource)
   for the Grid.
3. **Passenger tab:**
   A table with Textbox, Numeric, DropDownList for adding passenger name, age, gender and preferred berth/seat. Add validation on entering
   passenger details to proceed.
4. **Payment tab:**
   Calculate the ticket cost based on location, passenger count and ticket type. Generate data for Grid with passenger details, train number
   and ticket cost summary.

You can go back on each tab using buttons available in it and tabs are disabled to navigate through tab header click actions. Once you end
the wizard all the data get cleared and wizard goes back to starting tab.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/wizard-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/wizard-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/wizard-cs1" %}