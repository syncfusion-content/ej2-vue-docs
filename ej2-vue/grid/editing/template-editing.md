---
layout: post
title: Template editing in Vue Grid component | Syncfusion
description: Learn here all about Template editing in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Template editing 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---


# Template editing in Vue Grid component

The Syncfusion vue Grid component supports template editing, providing a powerful and flexible way to customize the appearance and behavior of cells during editing. This feature allows you to use Vue templates to define the structure and content of the cells within the grid.

## Inline or dialog template editing 

The Syncfusion Grid provides support for inline and dialog template editing, allowing you to customize the editing using [Forms](https://legacy.vuejs.org/docs/forms.html). These forms can be utilized to add and update grid records.

To enable this feature, you need to set the [editSettings.mode](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) property of the Grid to either **Normal** or **Dialog** and define the grid editors using [editSetting.template](https://ej2.syncfusion.com/vue/documentation/api/grid/editsettings/#template).

**Using Forms**

Forms is a approach to create and manipulate the form controls. You can use form to add and update grid records. To use forms for editing operation, you can take leverage of the template support of dialog or inline edit mode. Setting the [editSettings.mode](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) as **Normal/Dialog** and use [editSetting.template](https://ej2.syncfusion.com/vue/documentation/api/grid/editsettings/#template) to define the grid editors.

In some cases, you want to add new field editors in the dialog which are not present in the column model. In that situation the dialog template will help us to customize the default edit dialog.

In the following sample, grid enabled with dialog template editing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/dialogtemplate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/dialogtemplate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/dialogtemplate-cs1" %}

> The Dialog/Inline template form editors should have **name** attribute.

## Using template context

You can enhance the customization of your grid's edit forms by utilizing template contexts, such as accessing row details inside template, rendering editors as components, getting values from editors, setting focus to editors, and disabling default form validation, and adding custom validation. These features are applicable in both **inline** and **dialog** editing modes.

The following template context topics are demonstrated through a practical example in the [Render tab component inside the dialog template](https://ej2.syncfusion.com/vue/documentation/grid/editingtemplate-editing#render-tab-component-inside-the-dialog-template) topic.

### Access row details inside template using template context

When utilizing edit templates in the Grid , you can access crucial row information within an template when utilizing edit templates. This enables dynamic binding of attributes, values, or elements based on the specific row being edited. This is particularly useful for conditionally rendering or modifying elements in the edit template based on the row's state.

The following properties will be available at the time of template execution:

| Property Name | Usage |
|---------------|-------|
| <kbd>isAdd</kbd> | A Boolean property that defines whether the current row is a new record or not. |

The following code example demonstrates the usage of the `isAdd` property in an edit template to disable the **OrderID** textbox when it's not a new record:

```ts
  <input id="OrderID" name="OrderID" v-model='data.OrderID' type="text" :disabled="!data.isAdd">

```

### Render editors as components 

The Syncfusion Grid provides a powerful feature that allows you to dynamically render Syncfusion EJ2 controls as form editors during the editing process. This functionality is particularly useful when you want to provide feature-rich controls for data entry within the edit form.

To achieve this by utilizing the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event of the Grid and specifying `requestType` as **beginEdit** or **add**.

The following code example illustrates rendering the `DropDownList` component in the `actionComplete` event.

```typescript

const actionComplete = (args) => {
  if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
      let countryData = DataUtil.distinct(data, 'ShipCountry', true) ;
      new DropDownList({value: args.rowData.ShipCountry, popupHeight: '200px', floatLabelType: 'Always',
          dataSource: countryData, fields: {text: 'ShipCountry', value: 'ShipCountry'}, placeholder: 'Ship Country'}, args.form.elements.namedItem('ShipCountry'));
  }
}

```

### Get value from editor

The get value from editor feature in the Syncfusion Grid allows you to read, format, and update the current editor value before it is saved. This feature is particularly valuable when you need to perform specific actions on the data, such as formatting or validation, before it is committed to the underlying data source. 

To achieve this feature, you can utilize the [actionBegin](https://ej2.syncfusion.com/vue/documentation/api/grid/#actionbegin) event with the **requestType** set to **save**.

In the following code example, the freight value has been formatted and updated.

```typescript
    const actionBegin = (args) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data.Freight = parseFloat(args.form.querySelector('#Freight').ej2_instances[0] .value);
        }
    }
```

### Set focus to particular column editor 

The Syncfusion Grid allows you to control the focus behavior of input elements in edit forms. By default, the first input element in the dialog receives focus when the dialog is opened. However, in scenarios where the first input element is disabled or hidden, you can specify which valid input element should receive focus. This can be achieved using the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event of the Grid,  where the **requestType** is set to **beginEdit**.

In the following code example, the CustomerID column focused.

```typescript
    const actionComplete = (args) => {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            args.form.elements.namedItem('CustomerID').focus();
        }
    }
```

## Disable default form validation

The Syncfusion Grid provides built-in support for [vue form validation](https://vue-bootstrap.netlify.app/docs/forms/validation/) to ensure data integrity and accuracy during editing. However, there might be scenarios where you want to disable the default form validation rules. This can be achieved using the [removeRules](https://ej2.syncfusion.com/documentation/api/form-validator/#removerules) method within the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event of the Grid.

To disable default form validation rules in the Grid, follow these steps:

```typescript

    const actionComplete = (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Disable the Validation Rules
            args.form['ej2_instances'][0].removeRules();
        }
    }

```

> You can use this method to disable validation rules: **args.form.ej2_instances[0].rules = {}**.

## Adding validation rules for custom editors

The Syncfusion Grid provides the ability to add validation rules for fields that are not present in the column model. This feature is particularly useful to prevent erroneous or inconsistent data from being submitted, ultimately enhancing the reliability of your application's data.

To accomplish this, you can utilize the [actionComplete](https://ej2.syncfusion.com/vue/documentation/api/grid/#actioncomplete) event along with the [addRules](https://ej2.syncfusion.com/documentation/api/form-validator/#addrules) method.

Here's how you can use the `addRules` method to add validation rules for custom editors in the `actionComplete` event: 

```typescript

    const actionComplete = (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
           args.form.ej2_instances[0].addRules('Freight', { max: 500 });
        }
    }

```

## Render tab component inside the dialog template

You can enhance the editing experience in the Grid by rendering a [Tab](../../../tab/index.html) component inside the dialog template. This feature is especially useful when you want to present multiple editing sections or categories in a tabbed layout, ensuring a more intuitive and easily navigable interface for data editing.

To enable this functionality, you need to set the [editSettings.mode](https://ej2.syncfusion.com/vue/documentation/api/grid/editSettings/#mode) property of the Grid to **Dialog**. This configures the Grid to use the dialog editing mode. Additionally, you can use the [editSetting.template](https://ej2.syncfusion.com/vue/documentation/api/grid/editsettings/#template) property to define a template variable that contains the `Tab` component and its corresponding content.

The following example renders a tab component inside the edit dialog. The tab component has two tabs, and once you fill in the first tab and navigate to the second one, the validation for the first tab is performed before navigating to the second.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-tab-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/edit/default-tab-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/edit/default-tab-cs1" %}

