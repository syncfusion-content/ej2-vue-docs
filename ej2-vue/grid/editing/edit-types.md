---
layout: post
title: Edit types in Vue Grid component | Syncfusion
description: Learn here all about Edit types in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Edit types 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Edit types in Vue Grid component

The Vue Grid component in Syncfusion provides various edit types that allow you to customize the editing behavior for different types of columns. These edit types enhance the editing experience and provide flexibility in handling different data types. 

## Default cell edit type editor

The Syncfusion Grid provides pre-built default editors that enhance data editing and input handling within the grid. These default editors are designed to simplify the process of defining the editor component for specific columns based on the data type of the column within the grid. To configure default editors for grid columns, leverage the [editType](https://ej2.syncfusion.com/vue/documentation/api/grid/editType/) property.

The available default edit types are as follows:

Component|Edit Type value |Description
----|-----|-----
[TextBox](../../textbox)|stringedit	|  The  `stringedit` type renders a TextBox component for string data type columns. 
[NumericTextBox](../../numerictextbox)|numericedit	| The `numericedit` type renders a NumericTextBox component for integers,double,float ,short ,byte ,long ,long double and decimal data types columns.
[DropDownList](../../drop-down-list)|dropdownedit	| The `dropdownedit` type renders a DropdownList component for string data type columns.
[Checkbox](../../check-box)|booleanedit	| The `booleanedit` type renders a CheckBox component for boolean data type columns.
[DatePicker](../../datepicker)|datepickeredit	|The `datepickeredit` type renders a DatePicker component for date data type columns.
[DateTimePicker](../../datetimepicker)|datetimepickeredit	| The `datetimepickeredit` type renders a DateTimePicker component for date time data type columns.

The following example demonstrates how to define the `editType` for grid columns:

```html
    <e-column field="CustomerName" headerText="Customer Name" editType="stringedit"></e-column>
    <e-column field="Frieght" headerText="Frieght" editType="numericedit'"></e-column>
    <e-column field="ShipCountry" headerText="Ship Country" editType="dropdownedit"></e-column>
    <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit"></e-column>
    <e-column field="OrderTime" headerText="Order Time" editType="datetimepickeredit"></e-column>
    <e-column field="Verified" headerText="Verified" editType="booleanedit"></e-column>
```

> If edit type is not defined in the column, then it will be considered as the **stringedit** type (TextBox component) .

## Customize TextBox component of stringedit type 

You can customize the default TextBox component in Grid edit form using its property. This customization allows you to configure various properties of the TexBox, tailoring its behavior and appearance to match your specific requirements within the Grid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property.

Component|Edit Type |Description|Example Customized edit params
-----|---|-----|-----|
[TextBox](../../textbox) |stringedit| The `stringedit` type renders a TextBox component for string data type columns. To customize the `TextBox` component, refer to the [TextBox API documentation](https://ej2.syncfusion.com/vue/documentation/api/textbox) for detailed information on available properties | params: { showClearButton : true}

The following sample code demonstrates the customization applied to TextBox component of **CustomerID** Grid column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-edit-type1" %}

## Customize NumericTextBox component of numericedit type 

You can customize the `NumericTextBox` component in Grid edit form using its property. This customization allows you to configure various properties of the NumericTextBox, tailoring its behavior and appearance to match your specific requirements within the Grid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property.

Component| Edit Type |Description |Example Customized edit params
-----|-----|-----|----|
[NumericTextBox](../../numerictextbox)|numericedit| TThe `numericedit` type renders a NumericTextBox component for integers, double, float, short, byte, long, long double and decimal data types columns. To customize the **NumericTextBox** component, refer to the [NumericTextBox API documentation](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/) for detailed information on available properties. | params: { decimals: 2, value: 5 }

The following sample code demonstrates the customization applied to NumericTextBox component of **Frieght** Grid column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-edit-type2" %}

### Restrict to type decimal points in a NumericTextBox while editing the numeric column

By default, the `NumericTextBox` component allows entering decimal values with up to two decimal places when editing a numeric column. However, there might be cases where you want to restrict input to whole numbers only, without any decimal points. In such scenarios, you can make use of the [validateDecimalOnType](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#validatedecimalontype) and [decimals](https://ej2.syncfusion.com/vue/documentation/api/numerictextbox/#decimals) properties provided by Syncfusion's `NumericTextBox` component.

The `validateDecimalOnType` property is used to control whether decimal points are allowed during input in the NumericTextBox. By default, it is set to **false**, allowing decimal points to be entered. However, when set to **true**, decimal points will be restricted, and only whole numbers can be entered.

The `decimals` property specifies the number of decimal places to be displayed in the NumericTextBox. By default, it is set to 2, meaning that two decimal places will be displayed. However, you can modify this value to customize the decimal places according to your requirements.

In the below demo, while editing the row the decimal point value is restricted to type in the NumericTextBox of **Freight** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-numeric1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-numeric1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-customize-numeric1" %}

## Customize DropDownList component of DropDownEdit type 

You can customize the `DropDownList` component in Grid edit form using its property. This customization allows you to configure various properties of the DropDownList, tailoring its behavior and appearance to match your specific requirements within the Grid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property. 

Component|Edit Type |Description| Example Customized edit params
-----|-----|-----|----|
[DropDownList](../../drop-down-list)-|DropDownEdit|  The `dropdownedit` type renders a DropDownList component for string data type columns. To customize the DropDownList component, refer to the [DropDownList API documentation](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list) for detailed information on available properties.  | params: { value: ‘Germany’ }

The following sample code demonstrates the customization applied to DropDownList component  of **ShipCity** Grid column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-edit-type3" %}

### Provide custom data source for DropDownList component

In Syncfusion's Grid component, you have an option to provide a custom data source for the `DropDownList` component in the edit form. This feature allows you to define a specific set of values for the DropDownList.

To achieve this, you can utilize the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property. This property allows you to define the edit params for the column within the grid.

When setting a new data source using the edit params, you need to specify a new [query](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list#query)  property for the DropDownList. The `query` property allows you to define custom queries for data retrieval and filtering.

In the below demo, DropDownList is rendered with custom data source for the **ShipCountry** column :

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-dropdown1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-dropdown1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-customize-dropdown1" %}

### Apply filtering for DropDownList component

The Syncfusion Grid component provides filtering for the DropDownList within the edit form. This feature allows to select options from a predefined list and easily search for specific items using the built-in filtering feature.  

To enable filtering, set the [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list#allowfiltering) property to **true** within the edit params. This will enable the filtering feature in the DropDownList.

In the following demo, filtering is enabled for the **ShipCountry** column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-dropdown2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-dropdown2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-customize-dropdown2" %}

### Open popup while focusing in the edit cell

You can open the dropdown edit popup with a single click by focusing the dropdown element. This feature allows you to quickly access and interact with the dropdown options without the need for an additional click.

To achieve this, you can utilize the [showPopup](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#showpopup) method provided by the EJ2 DropDownList component. This method can be invoked within the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event of the Grid, which triggers when an action, such as editing, is completed. By calling the `showPopup` method in this event, you can open the popup for the dropdown edit.

To ensure that the dropdown column is the clicked edit target, you need to set a global flag variable in the **mouseup** event along with `load` event. This flag variable will be used to determine if the clicked element corresponds to the dropdown column.

The following sample demonstrates how to open the popup when focusing on the edit cell using the `actionComplete` and `load` events:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-dropdown3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-customize-dropdown3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-customize-dropdown3" %}

## Customize CheckBox component of booleanedit type 

You can customize the CheckBox component in Grid edit form using its property. This customization allows you to configure various properties of the CheckBox, tailoring its behavior and appearance to match your specific requirements within the Grid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property.

Component| Edit Type |Description |Example Customized edit params
-----|-----|-----|----|
[CheckBox](../../check-box)| booleanedit | The `booleanedit` type renders a **CheckBox** component for boolean data type. To customize the CheckBox component, refer to the [CheckBox API documentation](https://ej2.syncfusion.com/vue/documentation/api/check-box/) for detailed information on available properties. | params: { checked: true}

The following sample code demonstrates the customization applied to CheckBox component of **Verified** Grid column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-edit-type4" %}

## Customize DatePicker component of datepickeredit type 

You can customize the DatePicker component in Grid edit form using its property. This customization allows you to configure various properties of the DatePicker, tailoring its behavior and appearance to match your specific requirements within the Grid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property.

Component| Edit Type |Description|Example Customized edit params
-----|-----|-----|----|
[DatePicker](../../datepicker)| datepickeredit | The `datepickeredit` type renders a **DatePicker** component for date data type columns. To customize the DatePicker component, refer to the [DatePicker API documentation](https://ej2.syncfusion.com/vue/documentation/api/datepicker/) for detailed information on available properties. | params: { format:'dd.MM.yyyy' }
 
The following sample code demonstrates the customization applied to DatePicker component of **OrderDate** Grid column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-edit-type5" %}

### Disable the date value prior to the selected date value in DatePicker

The Syncfusion Vue Grid allows configuring the [DatePicker](../../datepicker) to dynamically set a minimum selectable date. This ensures that users can only select dates that fall after a specified minimum date, based on the data in each row. This feature is particularly useful for maintaining data consistency and preventing users from selecting inappropriate or illogical dates.

The following example demonstrates how to configure the `DatePicker` within the Grid using the **edit** parameters of a column. This setup dynamically restricts the selection of dates in the DatePicker’s calendar based on the data in the current row.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-hide-dates/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-hide-dates/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-hide-dates" %}

## Customize DateTimePicker component of datetimepickeredit type 

You can customize the DateTimePicker component in Grid edit form using its property. This customization allows you to configure various properties of the DateTimePicker, tailoring its behavior and appearance to match your specific requirements within the Grid. The behavior of the editor component can be fine-tuned through the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property.

Component|Edit Type |Description |Example Customized edit params
-----|-----|-----|----|
[DateTimePicker](../../datetimepicker)| datetimepickeredit | The `datetimepickeredit` type renders a **DateTimePicker** component for date time data type columns. You can customize the DateTimePicker component, refer to the [DateTimePicker API documentation](https://ej2.syncfusion.com/vue/documentation/api/datetimepicker) for detailed information on available properties. | params: { value: new Date() }
 
The following sample code demonstrates the customization applied to DatePicker component of **OrderDate** Grid column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-edit-type6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-edit-type6" %}

## Access editor components using instance

Accessing editor components in the Syncfusion Grid allows you to interact with the editor instances associated with cells during editing or adding actions. This feature is especially useful when you need to perform custom actions, retrieve data from the Editor, or manipulate its properties during editing or adding operations in the Grid.

To access the component instance from the component element, you can use the **ej2_instances** property. This property provides access to the instance of the editor component associated with a cell.

In the below demo, you can access the editor component instance while adding or editing actions in the `actionComplete` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-editor-instance/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-editor-instance/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-editor-instance" %}

## Render custom cell editors

The Syncfusion Grid allows you to render custom cell editors for particular columns. This feature is particularly useful when you need to use custom components to edit the data within a grid column. To achieve this, you can make use of the [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) of the Grid Column component.

>Custom components inside the `editTemplate` must be specified with two-way (@bind-Value) binding to reflect the changes in Grid.

### Render TextArea in edit form 

The Syncfusion Grid allows you to render a TextArea within the Grid's edit form for a specific column. This feature is especially valuable when you need to edit and display multi-line text content, providing an efficient way to manage extensive text data within the Grid's columns.

To render a TextArea in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

> When using a text area, please use **Shift+Enter** to move to the next line. By default, pressing **Enter** will trigger a record update while you are in edit mode.

The following example demonstrates how to render a TextArea component in the **ShipAdress** column of the Syncfusion Grid. The [valueAccessor](https://ej2.syncfusion.com/vue/documentation/api/grid/valueAccessor/) property is utilized to split the text into multiple lines within the grid column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-textarea/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-textarea/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-textarea" %}

**Prevent the enter key functionality in multiline textbox while editing** 

While editing a particular row in normal or dialog edit mode, pressing the **ENTER** key will save the changes made in the specific cell or edit form. Similarly, pressing the **ENTER** key while performing editing with the multiline textbox will save the changes.  However, in a multiline textbox, it is often desired that pressing the **ENTER** key adds a new line break in the text content, rather than triggering the save action.

To achieve this behavior, you can utilize the `stopPropagation` method along with the [focus](https://ej2.syncfusion.com/vue/documentation/api/textbox/textBoxModel/#focus) event of the textBox component. This prevents the default behavior of the **ENTER** key, allowing you to manually handle the newline behavior.

The following example demonstrates how to prevent the enter key functionality in multiline textbox during editing by utilizing the `focus` event:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-key/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-key/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-key" %}

### Render AutoComplete component in edit form 

The Syncfusion Grid allows you to render a AutoComplete component within the Grid's edit form for a specific column. This feature is especially valuable when you need to provide a dropdown-like auto-suggestion and input assistance for data entry in the Grid's columns.

To render a AutoComplete component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render an AutoComplete component in the **CustomerID** column of the Syncfusion Grid. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-autocomplete/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-autocomplete/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-autocomplete" %}

### Render MaskedTextBox component in edit form 

The Syncfusion Grid allows you to render a MaskedTextBox component within the Grid's edit form for a specific column. This feature is especially useful when you need to provide masked input fields that require a specific format, such as phone numbers or postal codes.

To render a MaskedTextBox component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

Here's an example of how to render a MaskedTextBox component in the **CustomerNumber** column of the Syncfusion Grid. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-masked/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-masked/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-masked" %}

### Render DropDownList component in edit form 

The Syncfusion Grid allows you to render a DropDownList component within the Grid's edit form for a specific column. This feature is valuable when you need to provide a convenient way to select options from a predefined list while editing data in the Grid's edit form.

To render a DropDownList component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a DropDownList component in the **ShipCountry** column of the Syncfusion Grid .The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-dropdown/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-dropdown/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-dropdown" %}

### Render images in the DropDownList editor component using the item template 

The Syncfusion Grid allows you to render images in the DropDownList editor component. This feature is valuable when you want to display images for each item in the dropdown list of a particular column, enhancing the visual representation of your data.

To render a DropDownList in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

To display an image in the DropDownList editor component, you can utilize the [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#itemtemplate) property. This property allows you to customize the content of each item in the dropdown list.

The following example demonstrates how to render images in the DropDownList editor component using the `itemTemplate` within the **EmployeeName** column of the Syncfusion Grid. Additionally, the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-image/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-image/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-image" %}

### Render Multiple columns in DropDownList component  

The Syncfusion Grid allows you to render a DropDownList component within the Grid's edit form for a specific column. This feature is particularly useful when you want to display more detailed information for each item in the dropdown list during editing a specific column.

To render a DropDownList in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The DropDownList has been provided with several options to customize each list item, group title, selected value, header, and footer element. By default, list items can be rendered as a single column in the DropDownList component. Instead of this, multiple columns can be rendered. This can be achieved by using the [headerTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#headertemplate) and [itemTemplate](https://ej2.syncfusion.com/vue/documentation/api/drop-down-list/#itemtemplate) properties of the DropDownList component.

The following example demonstrates how to render a DropDownList component with multiple columns within in the **ShipCountry** column. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-multicolumn/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-multicolumn/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-multicolumn" %}

### Render ComboBox component in edit form 

The Syncfusion Grid allows you to render a ComboBox component within the Grid's edit form for a specific column. This feature is especially valuable when you need to provide a drop-down selection with auto-suggestions for data entry.

To render a ComboBox component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a ComboBox component in the **ShipCountry** column of the Syncfusion Grid. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-combox/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-combox/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-combox" %}

### Render TimePicker component in edit form 

The Syncfusion Grid allows you to render a TimePicker component within the Grid's edit form for a specific column. This feature is especially valuable when you need to provide a time input, such as appointment times, event schedules, or any other time-related data for editing in the Grid.

To render a TimePicker component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a TimePicker component in the **Order Time** column of the Syncfusion Grid. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-datepicker/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-datepicker/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-datepicker" %}

### Render MultiSelect component in edit form 

The Syncfusion Grid allows you to render a MultiSelect component within the Grid's edit form, enabling you to select multiple values from a dropdown list when editing a specific column. This feature is particularly useful when you need to handle situations where multiple selections are required for a column.

To render a MultiSelect component in the edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a MultiSelect component in the **ShipCity** column of the Syncfusion Grid. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-multiselect/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-multiselect/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-multiselect" %}

### Render RichTextEditor component in edit form

The Syncfusion Grid allows you to render the RichTextEditor component within the edit form. This feature is valuable when you need to format and style text content using various formatting options such as bold, italic, underline, bullet lists, numbered lists, and more during editing a specific column.

To render RichTextEditor component in edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

Additionally, you need set the [allowTextWrap](https://ej2.syncfusion.com/vue/documentation/api/grid/#allowtextwrap) property of the corresponding grid column to **true**. By enabling this property, the rich text editor component will automatically adjust its width and wrap the text content to fit within the boundaries of the column.

The following example demonstrates how to render a RichTextEditor component in the **ShipAddress** column of the Syncfusion Grid. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-richtexteditor/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-richtexteditor/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-richtexteditor" %}

### Render Upload component in edit form  

The Syncfusion Grid allows you to render an Upload component within the Grid's edit form. This feature is especially valuable when you need to upload and manage files or images in a specific column during data editing.

To render Upload component in edit form, you need to define an [editTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edittemplate) for the column using **template**. The `editTemplate` property specifies the cell edit template that used as an editor for a particular column. It can accept either a template string or an HTML element ID.

The following example demonstrates how to render a Upload component in the **Employee Image** column of the Syncfusion Grid. The [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid#actionbegin) event is handled to update the edited value in the grid when the save button is clicked:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-upload/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-template-upload/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-template-upload" %}

> By default, the grid saves the cell when clicking outside the editor component. If your components, like multiple popups, are dynamically rendered, the grid may not recognize them, causing the editor to close when the popup is clicked. To prevent this, apply the `edit-custom-template` class to both your main component and sub-components. If you are using Syncfusion components, set their `cssClass` property to include the `edit-custom-template` class.

## Render custom cell editors using external function 

The Syncfusion Grid provides the ability to render custom cell editors, allowing you to add custom components to specific columns in your grid using the cell edit template feature. This feature is useful when you need to edit cell values using custom input elements or controls.

To utilize the custom cell editor template feature, you need to implement the following functions:

* **create** - It is used to create the element at the time of initialization.

* **write** - It is used to create custom component or assign default value at the time of editing.

* **read** - It is used to read the value from the component at the time of save.
          
* **destroy** - It is used to destroy the component.

### Render AutoComplete component in edit form 

The Syncfusion Grid allows you to render the AutoComplete component within the edit form by using the cell edit template feature.This feature enables you to select values from a predefined list during the editing of a specific column. It is especially valuable when you need to provide a dropdown-like auto-suggestion and input assistance for data entry in the Grid's columns.

To achieve this, you need to utilize the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property along with a defined object that specifies the necessary functions for creating, reading, and writing the auto complete component.

The following example demonstrates how to render a Autocomplete component in the **CustomerID** column:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-custom-autocomplete/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-custom-autocomplete/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-custom-autocomplete" %}

### Render cascading DropDownList component in edit form 

The Syncfusion Grid allows you to render the cascading DropDownList within the edit form by using the cell edit template feature.This feature is especially useful when you need to establish a hierarchy of options, such as choosing a country and then selecting a state based on the chosen country.

To achieve this, you need to utilize the [columns->edit->params](https://ej2.syncfusion.com/vue/documentation/api/grid/column/#edit) property along with a defined object that specifies the necessary functions for creating, reading, and writing the auto complete component.

In the below demo, cascading DropDownList rendered for **ShipCountry** and **ShipState** column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-custom-cascading/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-custom-cascading/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-custom-cascading" %}