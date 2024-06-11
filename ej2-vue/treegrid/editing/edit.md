---
layout: post
title: Edit in Vue Treegrid component | Syncfusion
description: Learn here all about Edit in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Edit 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Edit in Vue Treegrid component

The TreeGrid component has options to dynamically insert, delete and update records. Editing feature is enabled by using [`editSettings`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#editsettings) property and it requires a primary key column for CRUD operations.

To define the primary key, set [`columns.isPrimaryKey`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#isprimarykey) to `true` in particular column.

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#editmodule) module in treegrid.

To get start quickly with Edit Options, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=oo1SOrOM5nk" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs7/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs7/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs7" %}

> * You can disable editing for a particular column, by specifying
[`columns.allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#allowediting) to `false`.

## Toolbar with edit option

The treegrid toolbar has the built-in items to execute Editing actions.
You can define this by using the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbar) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs8" %}

<!-- markdownlint-disable MD033 -->
<!--  Template context

The Essential JS2 packages has a built-in template engine. Using the template engine, you can access the row information inside the HTML element and bind the attributes, values, or elements based on this row information.

The following properties will be available at the time of template execution.

| Property Name | Usage |
|---------------|--------|
| <kbd>isAdd</kbd> | A Boolean property; it defines whether the current row should be a new record or not.

In the following code example, the `OrderID` textbox has been disabled by using the `isAdd` property.

```
// The disabled attributes will be added based on the isAdd property.
<input id="taskID" name="taskID" v-model='data.taskID' type="text" :disabled="!data.isAdd">

```

The following code example illustrates rendering the `taskID` textbox, when a new record is added.

```

${if(isAdd)}
<div class="form-group col-md-6">
    <div class="e-float-input e-control-wrapper">
       <input id="taskID" name="taskID" v-model='data.taskID' type="text" :disabled="!data.isAdd">
        <span class="e-float-line"></span>
        <label class="e-float-text e-label-top" for="OrderID">Task ID</label>
    </div>
</div>
${/if}

```

> The dialog template syntax supports the ES6 expression string literals, and you can refer to the [`Template Engine`](../../base/template-engine.html) for more template syntax.

 Render editors as components

You can convert the form editors to EJ2 controls in the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actioncomplete) event based on the `requestType` as `beginEdit` or `add`.

The following code example illustrates rendering the drop-down list control in the `actionComplete` event.

```
<script setup>
    actionComplete: function(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            let priorityData: {}[] = DataUtil.distinct(this.$refs.treegrid.grid.dataSource, 'priority',true);
            new DropDownList({value: args.rowData.priority, popupHeight: '200px', floatLabelType: 'Always',
                dataSource: priorityData, fields: {text: 'priority', value: 'priority'}, placeholder: 'Priority'}, args.form.elements.namedItem('priority') as HTMLInputElement);
        }
    }
</script>

```

 Get value from editor

You can read, format, and update the current editor value in the [`actionBegin`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actionbegin) event at the time of setting `requestType` to `save`.

In the following code example, the `progress` value has been formatted and updated.

``` html
<script setup>
    actionBegin: function(args) {
        if (args.requestType === 'save') {
            // cast string to integer value.
            args.data['progress'] = parseFloat(args.form.querySelector("#progress").value);
        }
    }
</script>

```

 Set focus to editor

By default, the first input element in the dialog will be focused while opening the dialog.
If the first input element is in disabled or hidden state, focus the valid input element in the
[`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actioncomplete)
event based on `requestType` as `beginEdit`.

```
<script setup>
    actionComplete: function(args) {
        // Set initail Focus
        if (args.requestType === 'beginEdit') {
            (args.form.elements.namedItem('taskName')).focus();
        }
    }
</script>

```

 Adding validation rules for custom editors

If you have used additional fields that are not present in the column model, then add the validation rules to the [`actionComplete`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#actioncomplete) event.

```
<script setup>
    actionComplete: function(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            args.form.ej2_instances[0].addRules('progress', {max: 100});
        }
    }
</script>

```

-->
<!-- markdownlint-disable MD033 -->

## Adding row position

The TreeGrid control provides the support to add the new row in the top, bottom, above selected row, below selected row and child position of tree grid content using [`editSettings.newRowPosition`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/editSettingsModel/#newrowposition) property. By default, a new row will be added at the top of the treegrid.

The following examples shows how to set new row position as `Child` in tree grid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs9" %}

## Confirmation messages

### Delete confirmation

The delete confirm dialog can be shown when deleting a record by defining the [`showDeleteConfirmDialog`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/editSettingsModel/#showdeleteconfirmdialog) as `true`

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs10" %}

> The `showDeleteConfirmDialog` supports all type of edit modes.

## Default column values on add new

The treegrid provides an option to set the default value for the columns when adding a new record in it.
To set a default value for the particular column by defining the [`columns.defaultValue`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#defaultvalue).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs11" %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#allowediting).

In the following demo, editing is disabled for the `Start Date` column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/treegrid/editing/default-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treegrid/editing/default-cs12" %}

## Troubleshoot: Editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row. If `primaryKey` is not defined in the treegrid, then edit or delete action take places the first row.