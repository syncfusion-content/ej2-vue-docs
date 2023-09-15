---
layout: post
title: Exporting Tree Grid in Server in Syncfusion ##Platform_Name## Tree Grid Component
description: Learn here all about Exporting Tree Grid in Server in Syncfusion ##Platform_Name## Tree Grid Component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Exporting TreeGrid in Server
domainurl: ##DomainURL##
documentation: ug
---


# Exporting tree grid in Server in Vue Tree Grid Component

The Tree Grid have an option to export the data to Excel in server side using tree grid server export library.

## Server dependencies

The Server side export functionality is shipped in the Syncfusion.EJ2.TreeGridExport package, which is available in Essential Studio and [nuget.org](https://www.nuget.org/).The following list of dependencies is required for tree grid server side Excel exporting action.

* Syncfusion.EJ2
* Syncfusion.EJ2.TreeGridExport

## Server configuration

The following code snippet shows server configuration using ASP.NET Core Controller Action.

To Export the tree grid in server side, You need to call the [`serverExcelExport`](https://ej2.syncfusion.com/documentation/api/treegrid/#serverexcelexport) method for passing the tree grid properties to server exporting action.

```ts

public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToExcel<TreeData>(gridProperty, TreeData.GetDefaultData());
}
private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}
public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}

```
```ts
<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :allowExcelExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      toolbarOptions: ['ExcelExport'],
    };
  },
  methods: {
      toolbarClick(args) {
        if (args['item'].text === 'Excel Export') {
            this.$refs.treegrid.serverExcelExport('Home/ExcelExport');
        }
    }
  },
  provide: {
      treegrid: [ Page, Toolbar, ExcelExport ]
  }
}
</script>

```
## CSV Export in server side

You can export the tree grid to CSV format by using the [`serverCsvExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#servercsvexport) method which will pass the tree grid properties to server.

In the below demo, we have invoked the above method inside the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbarclick) event. In server side, we have deserialized the tree grid properties and passed to the [`CsvExport`](https://helpej2.syncfusion.com/documentation/api/treegrid/#csvexport) method which will export the properties to CSV format.

```ts
public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}
public IActionResult CsvExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToCsv<TreeData>(gridProperty, TreeData.GetDefaultData());
}
private Syncfusion.EJ2.TreeGrid.TreeGrid ConvertTreeGridObject(string gridProperty)
{
    Syncfusion.EJ2.TreeGrid.TreeGrid TreeGridModel = (Syncfusion.EJ2.TreeGrid.TreeGrid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Syncfusion.EJ2.TreeGrid.TreeGrid));
    TreeGridColumnModel cols = (TreeGridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(TreeGridColumnModel));
    TreeGridModel.Columns = cols.columns;
    return TreeGridModel;
}
public class TreeGridColumnModel
{
    public List<TreeGridColumn> columns { get; set; }
}
```
```ts
<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbarOptions' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      toolbarOptions: ['CsvExport'],
    };
  },
  methods: {
      toolbarClick(args) {
        if (args['item'].text === 'Csv Export') {
            this.$refs.treegrid.serverCsvExport('Home/CsvExport');
        }
    }
  },
  provide: {
      treegrid: [ Page, Toolbar, CsvExport ]
  }
}
</script>
```

## Rotate a header text to a certain degree in the exported grid on the server side

The TreeGrid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the `ExcelHeaderCellRendering` event of the tree grid.

The `ExcelHeaderCellRendering` will be triggered when creating a column header for the excel document to be exported in the server side. Customize the column header in this event.

In the following demo, using the `HeaderCellRotate` method of the `TreeGridExcelExport` class in the `ExcelHeaderCellRendering` event, you can rotate the header text of the column header in the excel exported document.

```ts

public IActionResult ExcelExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridExcelExport exp = new TreeGridExcelExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    gridProperty.ExcelHeaderCellRendering = ExcelHeaderQueryCellInfo;
    return (IActionResult)exp.ExcelExport<TreeGridItems>(gridProperty, TreeGridItems.GetDefaultData());
}

private void ExcelHeaderQueryCellInfo(object excel)
{
    Syncfusion.EJ2.TreeGridExport.ExcelHeaderCellEventArgs name = (Syncfusion.EJ2.TreeGridExport.ExcelHeaderCellEventArgs)excel;
    List<string> headerValues = new List<string>();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    TreeGridExcelExport exp = new TreeGridExcelExport();
    var size = exp.ExcelTextSize(name.Style.Font.FontName, (float)name.Style.Font.Size, longestString);
    name.Cell.RowHeight = size.Width;
    exp.HeaderCellRotate(name, 45); // Give the rotate degree value by the user.  
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}

```
