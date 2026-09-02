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

Tab items can be disabled dynamically by passing the index and a boolean value to the [enableTab](https://ej2.syncfusion.com/vue/documentation/api/tab#enabletab) method.

In the following sample, each Tab integrates with the components required to complete the reservation. Each field is validated to ensure all mandatory options are completed before proceeding to the next tab. Using the Tab item's `template` property, the components are added into the content.

Create the following contents for each tab in the wizard.
1. **Search tab:** Created with a [DropDownList](https://ej2.syncfusion.com/vue/documentation/drop-down-list/data-binding) to select the source, destination, and ticket type. A [DatePicker](https://ej2.syncfusion.com/vue/documentation/datepicker/getting-started) to choose the journey date.
2. **Train tab:** Based on the selected start and end points, the Grid is populated with a random list of available seats and trains. Initially, define the columns and a row-selected event for validation. After the source and destination are chosen, update the [dataSource](https://ej2.syncfusion.com/vue/documentation/api/grid#datasource) of the Grid.
3. **Passenger tab:** A table with TextBox, NumericTextBox, and DropDownList for adding the passenger name, age, gender, and preferred berth or seat. Add validation for the passenger details before proceeding.
4. **Payment tab:** Calculates the ticket cost based on the location, passenger count, and ticket type. Generates data for the Grid with the passenger details, train number, and ticket cost summary.

You can go back to each tab using the buttons available within it, and tab header clicks are disabled for navigation. Once you finish the wizard, all data is cleared and the wizard returns to the starting tab.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/wizard-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/tab/how-to/wizard-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/how-to/wizard-cs1" %}