---
layout: post
title: Protect sheet in Vue Spreadsheet component | Syncfusion
description: Learn here all about Protect sheet in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Protect sheet 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Protect sheet in Vue Spreadsheet component

Sheet protection helps you to prevent the users from modifying the data in the spreadsheet.

## Protect Sheet

Protect sheet feature helps you to prevent the unknown users from accidentally changing, editing, moving, or deleting data in a spreadsheet.
You can use the [`isProtected`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#isprotected) property to enable or disable the Protecting functionality.

> * The default value for `isProtected` property is `false`.

By default in protected sheet, selecting, formatting, inserting, deleting functionalities are disabled. To enable some of the above said functionalities the `protectSettings` options are used in a protected spreadsheet.

The available `protectSettings` options in spreadsheet are,

| Options | Uses |
|-----|------|
| `Select Cells` | Used to perform Cell Selection. |
| `Format Cells` | Used to perform Cell formatting. |
| `Format Rows` | Used to perform Row formatting. |
| `Format Columns` | Used to perform Column formatting. |
| `Insert Link` | Used to perform Hyperlink Insertions. |

> * The default value for all `protectSettings` options are `false`.

By default, the `Protect Sheet` module is injected internally into the Spreadsheet to perform sheet protection function.

**User Interface**:

In the active Spreadsheet, the sheet protection can be done by any of the following ways:

* Select the Protect Sheet item in the Ribbon toolbar under the Data Tab, and then select your desired options.
* Right-click the sheet tab, select the Protect Sheet item in the context menu, and then select your desired options.
* Use the [`protectSheet()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#protectsheet) method programmatically.

The following example shows `Protect Sheet` functionality in the Spreadsheet control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-sheet-cs1" %}

## Limitations of Protect Sheet

* Password protection is not supported in Protect sheet feature.

## Unprotect Sheet

Unprotect sheet is used to enable all the functionalities that are already disabled in a protected spreadsheet.

**User Interface**:

In the active Spreadsheet, the sheet Unprotection can be done by any of the following ways:

* Select the `Unprotect Sheet` item in the Ribbon toolbar under the Data Tab.
* Right-click the sheet tab, select the `Unprotect Sheet` item in the context menu.
* Use the [`unprotectSheet()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#unprotectsheet) method programmatically.

## Unlock the particular cells in the protected sheet

In protected spreadsheet, to make some particular cell or range of cells are editable, you can use [`lockCells()`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#lockcells) method, with the parameter `range` and `isLocked` property as false.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/lock-cells-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/lock-cells-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/lock-cells-cs1" %}

## Make cells read-only without protecting worksheet

Previously, you could make cells read-only by protecting the entire sheet using the [protectSheet](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#protectsheet) method or through the UI option. Meanwhile, to make a specific range of cells editable within a protected sheet, you needed to use the [lockCells](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#lockcells) method, passing the `range` parameter and setting the `isLocked` property to **false**. 

Now, you can make an entire row, an entire column, or a specific range of cells read-only using the [setRangeReadOnly](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#setrangereadonly) method without protecting the entire sheet. This method accepts three parameters, as detailed in the following table:

| Parameter | Description |
|-----|------|
| `readOnly` | Specifies whether an entire row, an entire column, or a specific range of cells should be set as read-only (**true**) or editable (**false**). |.
| `range` | Specifies the particular range of cells to be set as read-only. |
| `sheetIndex` | Specifies the index of the sheet. |

You can make an entire row, an entire column, or a specific range of cells read-only by passing the range as shown in the code snippet below:

```js
// To set read-only for single cell.
spreadsheet.setRangeReadOnly(true, 'A2', 0)
// To set read-only for range of cells.
spreadsheet.setRangeReadOnly(true, 'A2:B5', 0)
// To set read-only for entire row.
spreadsheet.setRangeReadOnly(true, '3:3', 0)
// To set read-only for entire column.
spreadsheet.setRangeReadOnly(true, 'A:A', 0)
```

You can make the cells read-only in the cell data binding by setting the `isReadOnly` property to **true** for the respective rows, columns, and cells. Please refer to the code snippet below to see how to set cells to read-only in the cell data binding:

```js
<ejs-spreadsheet>
    <e-sheets>
        <e-sheet>
        <e-rows>
            <e-row :index="3" :isReadOnly="true"></e-row>
            <e-row :index="4">
                <e-cells>
                    <e-cell :index="4" :isReadOnly="true"></e-cell>
                </e-cells>
            </e-row>  
        </e-rows>
        <e-columns>
            <e-column :isReadOnly="true"></e-column>
        </e-columns>
        </e-sheet>
    </e-sheets>
</ejs-spreadsheet>
```

The following example demonstrates how to make rows, columns, and cells read-only without protecting the sheet:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/readonly-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/readonly-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/readonly-cs1" %}

## Protect Workbook

Protect workbook feature helps you to protect the workbook so that users cannot insert, delete, rename, hide the sheets in the spreadsheet.
You can use the [`password`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#password) property to protect workbook with password.
You can use the [`isProtected`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#isprotected) property to protect or unprotect the workbook without the password.

> The default value for `isProtected` property is `false`.

**User Interface**:

In the active Spreadsheet, you can protect the worksheet by selecting the Data tab in the Ribbon toolbar and choosing the `Protect Workbook` item. Then, enter the password and confirm it and click on OK.

The following example shows `Protect Workbook` by using the [`isProtected`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#isprotected) property in the Spreadsheet control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/local-data-binding-cs4" %}

The following example shows `Protect Workbook` by using the [`password`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#password) property in the Spreadsheet control. To unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as syncfusion<sup style="font-size:70%">&reg;</sup> in the dialog box.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/local-data-binding-cs5" %}

## Unprotect Workbook

Unprotect Workbook is used to enable the insert, delete, rename, move, copy, hide or unhide sheets feature  in the spreadsheet.

**User Interface**:

In the active Spreadsheet, the workbook Unprotection can be done in any of the following ways:

* Select the `Unprotect Workbook` item in the Ribbon toolbar under the Data Tab and provide the valid password in the dialog box.

## Limitations of Protect Workbook

* Encryption with password is not supported in the Protect workbook feature.

## Note

You can refer to our [Vue Spreadsheet](https://www.syncfusion.com/vue-ui-components/vue-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://ej2.syncfusion.com/vue/demos/#/material/spreadsheet/default.html) to knows how to present and manipulate data.

## See Also

* [Hyperlink](./link)