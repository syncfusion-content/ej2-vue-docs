---
layout: post
title: Module in Vue Treegrid component | Syncfusion
description: Learn here all about Module in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Module 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Module in Vue Treegrid component

The following value providers should be injected to extend TreeGrid's functionality.

| Module | Description |
|------|-------------|
| [`PageService`](../../treegrid/paging)| Inject this module to use paging feature.|
| [`SortService`](../../treegrid/sorting)| Inject this module to use sorting feature.|
| [`FilterService`](../../treegrid/filtering)| Inject this module to use filtering feature.|
| [`EditService`](../../treegrid/editing)| Inject this module to use editing feature.|
| [`AggregateService`](../../treegrid/aggregates)| Inject this module to use aggregate feature.|
| [`ColumnMenuService`](../../treegrid/columns/#column-menu)| Inject this module to use column menu feature.|
| [`CommandColumnService`](../../treegrid/editing/#command-column)| Inject this module to use command column feature.|
| [`ContextMenuService`](../../treegrid/context-menu)| Inject this module to use context menu feature.
| [`ResizeService`](../../treegrid/columns/#column-resizing)| Inject this module to use resize feature.|
| [`ReorderService`](../../treegrid/columns/#reorder)| Inject this module to use reorder feature.|
| [`PrintService`](../../treegrid/print)| Inject this module to use to use print feature and this is a default injected module.|
| [`ToolbarService`](../../treegrid/tool-bar)| Inject this module to use toolbar feature.|
| [`ExcelExportService`](../../treegrid/excel-export)| Inject this module to use Excel export feature.|
| [`PdfExportService`](../../treegrid/pdf-export)| Inject this module to use PDF export feature.|

These modules should be injected into the `provide` section and use `treegrid` as a key of the object.
