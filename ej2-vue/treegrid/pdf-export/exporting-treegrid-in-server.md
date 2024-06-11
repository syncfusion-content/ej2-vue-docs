---
layout: post
title: Exporting tree grid in server in Vue Tree Grid component | Syncfusion
description: Learn here all about Exporting tree grid in server in Syncfusion Vue Tree Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: Exporting tree grid in server 
documentation: ug
domainurl: ##DomainURL##
---

# Exporting tree grid in server in Vue Tree Grid component

The Tree Grid have an option to export the data to PDF in server side using tree grid server export library.

## Server dependencies

The Server side export functionality is shipped in the Syncfusion.EJ2.TreeGridExport package, which is available in Essential Studio and [nuget.org](https://www.nuget.org/). The following list of dependencies is required for tree grid server side PDF exporting action.

* Syncfusion.EJ2
* Syncfusion.EJ2.TreeGridExport

## Server configuration

The following code snippet shows server configuration using ASP.NET Core Controller Action.

To Export the tree grid in server side, You need to call the [`serverPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#serverpdfexport) method for passing the tree grid properties to server exporting action.

```ts

public IActionResult ServerSideExporting()
{
    var order = TreeData.GetDefaultData();
    ViewBag.dataSource = order;
    return View();
}
public IActionResult PdfExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridPdfExport exp = new TreeGridpdfExport();
    Syncfusion.EJ2.TreeGrid.TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    return exp.ExportToPdf<TreeData>(gridProperty, TreeData.GetDefaultData());
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
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent, Page, Toolbar, PdfExport } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";



export default {
  data ()  {
    return {
      data: sampleData,
      toolbarOptions: ['PdfExport'],
    };
  },
  methods: {
      toolbarClick(args) {
        if (args['item'].text === 'Pdf Export') {
            this.$refs.treegrid.serverExcelExport('Home/PdfExport');
        }
    }
  },
  provide('treegrid',  [ Page, Toolbar, PdfExport ]);
}
</script>

```
## Rotate a header text to a certain degree in the exported tree grid on the server side

The Tree Grid has support to customize the column header styles such as changing text orientation, the font color, and so on in the exported PDF file. To achieve this requirement, define the `BeginCellLayout` event of the `PdfExportProperties` with an event handler to perform the required action.

The `PdfHeaderCellRendering` will be triggered when creating a column header for the pdf document to be exported. Collect the column header details in this event and handle the custom in the BeginCellLayout event handler.

In the following demo, the `DrawString` method from the `Graphics` is used to rotate the header text of the column header inside the `BeginCellLayout` event handler.

> A PDF exporting is not supported to rotate the column header on the client side.
```ts
public IActionResult PdfExport(string treeGridModel)
{
    if (treeGridModel == null)
    {
        return View();
    }
    TreeGridPdfExport exp = new TreeGridPdfExport();
    TreeGrid gridProperty = ConvertTreeGridObject(treeGridModel);
    gridProperty.PdfHeaderCellRendering = PdfHeaderQueryCellInfo;
    PdfGrid grid = new PdfGrid();
    Syncfusion.EJ2.TreeGridExport.PdfExportProperties pdfExportProperties = new Syncfusion.EJ2.TreeGridExport.PdfExportProperties();
    pdfExportProperties.IsRepeatHeader = true;
    exp.BeginCellLayout = new PdfGridBeginCellLayoutEventHandler(BeginCellEvent);
    System.Collections.IEnumerable data = Syncfusion.EJ2.Base.Dat.DataTableToJson(ViewBag.dataSource);
    var result = exp.PdfExport<dynamic>(gridProperty, data, pdfExportProperties);
    return View();
}

public void BeginCellEvent(object sender, PdfGridBeginCellLayoutEventArgs args)
{
    PdfGrid grid = (PdfGrid)sender;
    var brush = new PdfSolidBrush(new PdfColor(Color.DimGray));
    args.Graphics.Save();
    args.Graphics.TranslateTransform(args.Bounds.X + 50, args.Bounds.Height + 40); // give the value for bounds x and Y by the user
    args.Graphics.RotateTransform(-60);   // give the rotate degree value by the user
                                          // Draw the text at particular bounds.
    args.Graphics.DrawString(headerValues[args.CellIndex], new PdfStandardFont(PdfFontFamily.Helvetica, 10), brush, new PointF(0, 0));
    if (args.IsHeaderRow)
    {
        grid.Headers[0].Cells[args.CellIndex].Value = string.Empty;
    }
    args.Graphics.Restore();
}

private void PdfHeaderQueryCellInfo(object pdf)
{
    Syncfusion.EJ2.TreeGridExport.PdfHeaderCellEventArgs name = (Syncfusion.EJ2.TreeGridExport.PdfHeaderCellEventArgs)pdf;
    PdfGrid grid = new PdfGrid();
    headerValues.Add(name.Column.HeaderText);
    var longestString = headerValues.Where(s => s.Length == headerValues.Max(m => m.Length)).First();
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 6);
    SizeF size = font.MeasureString(longestString);
    name.Headers[0].Height = size.Width * 2;
}

```