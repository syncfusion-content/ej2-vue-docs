---
layout: post
title: Api listViewModel in Vue ListView component | Syncfusion
description: Learn here all about Api listViewModel in Syncfusion Vue ListView component of Syncfusion Essential JS 2 and more.
control: Api listViewModel 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Api listViewModel in Vue ListView component

Interface for a class ListView

## Properties

### actionBegin  `EmitType<Object>`

We can trigger `actionBegin` event before every ListView action starts.

### actionComplete  `EmitType<Object>`

We can trigger `actionComplete` event for every ListView action success event
 with the dataSource parameter.

### actionFailure  `EmitType<Object>`

We can trigger `actionFailure` event for every ListView action failure event
 with the dataSource parameter.

### select [`EmitType<SelectEventArgs>`](https://ej2.syncfusion.com/vue/documentation/api-selectEventArgs.html)

We can trigger the `select` event when we select the list item in the component.

### animation [`AnimationSettings`](https://ej2.syncfusion.com/vue/documentation/api-animationSettings.html)

It is used to apply the animation to sub list navigation of list items.

### checkBoxPosition `checkBoxPosition`

It is used to set the position of check box in an item.

### cssClass `string`

This cssClass property helps to use custom skinning option for ListView component, by adding the mentioned class name into root element of ListView.

### dataSource ``Object`[]` &#124;  `string[]` &#124;  `number[]` &#124;  `DataManager`

It provides the data to render the ListView component which is mapped with the fields of ListViewhttps://ej2.syncfusion.com/vue/documentation

### enable `boolean`

It specifies enabled state of ListView component.

### enablePersistence `boolean`

Enable or disable persisting component's state between page reloads.

### enableRtl `boolean`

Enable or disable rendering component in right to left direction.

### enableVirtualization `boolean`

It enables UI virtualization which will increase ListView performance on loading large number of data.

### fields [`FieldSettingsModel`](./api-fieldSettingsModel.html)

It is used to map keys from the dataSource which extracts the appropriate data from the dataSource with specified mapped with the column fields to render the ListView.

### groupTemplate `string`

The ListView has an option to custom design the group header title with the help of groupTemplate property.
Refer the documentation [here] (http://ej2.syncfusion.com/documentation/list-view/customizing-templates.html?lang=typescript#group-template) to know more about this property with demo.

### headerTemplate `string`

The ListView has an option to custom design the ListView header title with the help of headerTemplate property.
Refer the documentation [here] (http://ej2.syncfusion.com/documentation/list-view/customizing-templates.html?lang=typescript#header-template) to know more about this property with demo.

### headerTitle `string`

It is used to set the title of ListView component.

### height `number` &#124;  `string`

It is used to set the height of the ListView component.

### htmlAttributes ``Object``

Defines the HTML attributes such as id, class, etc., for the ListView.

### locale `string`

Overrides the global culture and localization value for this component. Default global culture is 'en-US'.

### query `Query`

It is used to fetch the specific data from dataSource by using where, select key words. Refer the documentation [here] (http://ej2.syncfusion.com/documentation/list-view/data-binding.html?lang=typescript#bind-to-remote-data) to know more about this property with demo.

### showCheckBox `boolean`

Using this property, we can show or hide the `checkbox`.


### showHeader `boolean`

Using this property, we can show or hide the header of ListView component.

### showIcon `boolean`

Using this property, we can show or hide the icon of list item.


### sortOrder `string`

It is used to enable the sorting of list items to be ascending or descending.

### template `string`

The ListView supports to customize the content of each list items with the help of template property.
Refer the documentation [here](http://ej2.syncfusion.com/documentation/list-view/customizing-templates.html?lang=typescript)  to know more about this property with demo.

### width `number` &#124;  `string`

It sets the width to the ListView component.
