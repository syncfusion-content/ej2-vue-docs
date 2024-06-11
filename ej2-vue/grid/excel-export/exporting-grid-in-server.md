---
layout: post
title: Exporting grid in server in Vue Grid component | Syncfusion
description: Learn here all about Exporting grid in server in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid in server 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid in server in Vue Grid component

The Grid have an option to export the data to Excel in server side using Grid server export library.

## Server dependencies

The Server side export functionality is shipped in the Syncfusion.EJ2.GridExport package, which is available in Essential Studio and [nuget.org](https://www.nuget.org/).The following list of dependencies is required for Grid server side Excel exporting action.

* Syncfusion.EJ2
* Syncfusion.EJ2.GridExport

## Server configuration

The following code snippet shows server configuration using ASP.NET Core Controller Action.

To Export the Grid in server side, You need to call the [`serverExcelExport`](https://ej2.syncfusion.com/vue/documentation/api/grid/#serverexcelexport) method for passing the Grid properties to server exporting action.

```ts

public ActionResult ExcelExport([FromForm] string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return exp.ExcelExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords());
}

private Grid ConvertGridObject(string gridProperty)
{
    Grid GridModel = (Grid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Grid));
    GridColumnModel cols = (GridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(GridColumnModel));
    GridModel.Columns = cols.columns;
    return GridModel;
}

```

```
<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumnsGridComponent, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['ExcelExport'];
      const toolbarClick = function(args) {
        if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
            grid.value.serverExcelExport('Home/ExcelExport');
        }
    }
  provide('grid',  [Toolbar]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

```

>Note: Refer to the GitHub sample for quick implementation and testing from [here](https://github.com/SyncfusionExamples/Vue-EJ2-Grid-server-side-exporting).

## CSV export in server side

You can export the Grid to CSV format by using the [`serverCsvExport`](https://ej2.syncfusion.com/vue/documentation/api/grid/#servercsvexport) method which will pass the Grid properties to server.

In the below demo, we have invoked the above method inside the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/grid/#toolbarclick) event. In server side, we have deserialized the Grid properties and passed to the `CsvExport` method which will export the properties to CSV format.

```ts

public ActionResult CsvGridExport([FromForm] string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return exp.CsvExport<OrdersDetails>(gridProperty, OrdersDetails.GetAllRecords());
}

private Grid ConvertGridObject(string gridProperty)
{
    Grid GridModel = (Grid)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(Grid));
    GridColumnModel cols = (GridColumnModel)Newtonsoft.Json.JsonConvert.DeserializeObject(gridProperty, typeof(GridColumnModel));
    GridModel.Columns = cols.columns;
    return GridModel;
}

```

```
<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :toolbar='toolbarOptions' height='272px' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumnsGridComponent, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
const grid = ref(null);
      const toolbarOptions = ['CsvExport'];
      const toolbarClick: function(args) {
        if (args.item.id === 'Grid_csvexport') { // 'Grid_csvexport' -> Grid component id + _ + toolbar item name
            grid.value.serverCsvExport('Home/CsvGridExport');
        }
    }
  provide('grid',  [Toolbar]);
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>

```

## Export grid as memory stream

The Grid offers an option to export the data as a memory stream instead of downloading it as a file in the browser. To obtain the memory stream of the exported grid, set the `AsMemoryStream` parameter to **true** in the [ExcelExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridExcelExport.html#Syncfusion_EJ2_GridExport_GridExcelExport_ExcelExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_ExcelExportProperties_) and [CsvExport](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.GridExport.GridExcelExport.html#Syncfusion_EJ2_GridExport_GridExcelExport_CsvExport__1_Syncfusion_EJ2_Grids_Grid_System_Collections_IEnumerable_System_Boolean_Syncfusion_EJ2_GridExport_ExcelExportProperties_) methods.

The following code demonstrates how to get the memory stream of exported grid.

```ts
public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // pass third parameter as true to get the Memory Stream of exported grid data
    return (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
}

public object CsvExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    return (MemoryStream)exp.CsvExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
}

```

## Merge grid's memory stream

The [Essential XlsIO](https://help.syncfusion.com/file-formats/xlsio/overview) library is used to merge multiple memory streams into a single stream. To learn more about the merge option, please refer to this [documentation](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#move-or-copy-a-worksheet).

You can merge a memory stream, a file stream, and a local file with the Grid's memory stream in the following ways:

### Merging with an existing memory stream

If you already have a memory stream, you can directly use it to merge with the Grid's memory stream.

In the following code, `ExcelEngine` and `AddCopy` method of Worksheets are used to merge the grid's memory stream with an existing memory stream.

```ts
using Syncfusion.XlsIO;

public MemoryStream ms1; // defines existing memory stream

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    // get the memory stream of exported grid data
    MemoryStream ms2 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    //New instance of ExcelEngine is created equivalent to launching Microsoft Excel with no workbooks open
    ExcelEngine excelEngine = new ExcelEngine();
    //Instantiate the Excel application object
    IApplication application = excelEngine.Excel;
    //Assigns default application version
    application.DefaultVersion = ExcelVersion.Xlsx;
    //open an workbook of existing memory stream and grid's memory stream through Open method of IWorkbooks
    IWorkbook sourceWorkbook = application.Workbooks.Open(ms1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms2);

    //Copy all the worksheet from the Source workbook to the destination workbook
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    //Saving the workbook as stream
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    //Dispose the instance of ExcelEngine
    excelEngine.Dispose();
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    return ms3;
}

```

### Merging with an existing file stream

If you already have a file stream, you can directly use it to merge with the Grid's memory stream. In the following code, the existing file stream is merged with the Grid's memory stream.

```ts
using Syncfusion.XlsIO;

public FileStream fs1; // defines existing file stream

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //fs1 and ms1 represents the existing stream and grid's stream.
    IWorkbook sourceWorkbook = application.Workbooks.Open(fs1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms1);

    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    //Saving the workbook as stream
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    return ms3;
}

```

### Merging with a local file

To merge a local file with the Grid's memory stream, you need to convert it into a file stream before merging. In the following code, the existing local file is merged with the Grid's memory stream.

```ts
using Syncfusion.XlsIO;

// get the file stream of local file
public FileStream fs1 = new FileStream("D:/ExcelDoc.xlsx", FileMode.Open, FileAccess.Read); // ExcelDoc.xlsx is a local file which is located in local disk D.

public object ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    MemoryStream ms1 = (MemoryStream)exp.ExcelExport<OrdersDetails>(gridProperty, OrderRepository.GetAllRecords(), true);
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //fs1 and ms1 represents the local file's stream and grid's stream.
    IWorkbook sourceWorkbook = application.Workbooks.Open(fs1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms1);
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    return ms3;
}

```

### Downloading the merged memory stream

You can download the merged memory stream by converting it into a `FileStreamResult`. In the following code, the merged memory stream is downloaded to the browser.

```ts
using Syncfusion.XlsIO;

public ActionResult ExcelExport(string gridModel)
{
    ExcelEngine excelEngine = new ExcelEngine();
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    //open an workbook of streams through Open method of IWorkbooks
    IWorkbook sourceWorkbook = application.Workbooks.Open(ms1);
    IWorkbook destinationWorkbook = application.Workbooks.Open(ms2);
    for (int i = 0; i < sourceWorkbook.Worksheets.Count; i++)
    {
        destinationWorkbook.Worksheets.AddCopy(sourceWorkbook.Worksheets[i]);
    }
    destinationWorkbook.ActiveSheetIndex = 1;
    MemoryStream ms3 = new MemoryStream();
    destinationWorkbook.SaveAs(ms3);
    ms3.Position = 0;
    // Save the MemoryStream into FileStreamResult
    FileStreamResult fileStreamResult = new FileStreamResult(ms3, "Application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

    fileStreamResult.FileDownloadName = "Export.xlsx";
    //Dispose the instance of ExcelEngine
    excelEngine.Dispose();
    //Dispose the streams.
    ms1.Dispose();
    ms2.Dispose();
    // return the file
    return fileStreamResult;
}

```

## Rotate a header text to a certain degree in the exported grid on the server side

The DataGrid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported Excel file. To achieve this requirement, use the `ServerExcelHeaderQueryCellInfo` event of the Grid.

The `ServerExcelHeaderQueryCellInfo` will be triggered when creating a column header for the excel document to be exported in the server side. Customize the column header in this event.

In the following demo, using the `HeaderCellRotate` method of the `GridExcelExport` class in the `ServerExcelHeaderQueryCellInfo` event, you can rotate the header text of the column header in the excel exported document.

```ts
public ActionResult ExcelExport(string gridModel)
{
    GridExcelExport exp = new GridExcelExport();
    Grid gridProperty = ConvertGridObject(gridModel);
    gridProperty.ServerExcelHeaderQueryCellInfo = ExcelHeaderQueryCellInfo;
    IEnumerable data = Utils.DataTableToJson(dt);
    var result = exp.ExcelExport<dynamic>(gridProperty, data);
    return result;
}
private void ExcelHeaderQueryCellInfo(object excel)
{
    ServerExcelHeaderQueryCellInfoEventArgs name = (ServerExcelHeaderQueryCellInfoEventArgs)excel;
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    GridExcelExport exp = new GridExcelExport();
    var size = exp.ExcelTextSize(name.Style.Font.FontName, (float)name.Style.Font.Size, longestString);
    name.Cell.RowHeight = size.Width;
    exp.HeaderCellRotate(name, 45); // Give the rotate degree value by the user.  
    name.Style.Borders.LineStyle = Syncfusion.XlsIO.ExcelLineStyle.None;
}

```

## Limitations

* The export feature for detail and caption templates is not supported in server-side exporting.
* Multiple grids exporting feature is not supported with server side exporting.