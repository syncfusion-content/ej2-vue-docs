---
layout: post
title: Module in Vue Grid component | Syncfusion
description: Learn here all about Modules in Syncfusion Vue Grid component of Syncfusion Essential JS 2, how they extend grid features and more.
control: Module 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Module in Vue Grid component

The following modules should be injected to extend grid's functionality.

The available grid modules are

| Module | Description |
|------|-------------|
| [`Page`](https://ej2.syncfusion.com/vue/documentation/api/grid/page/)| Inject this module to use paging feature.|
| [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/grid/sort/)| Inject this module to use sorting feature.|
| [`Filter`](https://ej2.syncfusion.com/vue/documentation/api/grid/filter/)| Inject this module to use filtering feature.|
| [`Group`](https://ej2.syncfusion.com/vue/documentation/api/grid/group/)| Inject this module to use grouping feature|
| [`Edit`](https://ej2.syncfusion.com/vue/documentation/api/grid/edit/)| Inject this module to use editing feature.|
| `Aggregate`| Inject this module to use aggregate feature.|
| [`ColumnChooser`](https://ej2.syncfusion.com/vue/documentation/api/grid/columnChooser/)| Inject this module to use column chooser feature.|
| `ColumnMenu`| Inject this module to use column menu feature.|
| `CommandColumn`| Inject this module to use command column feature.|
| [`ContextMenu`](https://ej2.syncfusion.com/vue/documentation/api/grid/contextMenu/)| Inject this module to use context menu feature.|
| [`DetailRow`](https://ej2.syncfusion.com/vue/documentation/api/grid/detailRow/)| Inject this module to use detail template feature.|
| `ForeignKey`| Inject this module to use foreign key feature.|
| `Freeze`| Inject this module to use frozen rows and columns feature.|
| `Resize`| Inject this module to use resize feature.|
| [`Reorder`](https://ej2.syncfusion.com/vue/documentation/api/grid/reorder/)| Inject this module to use reorder feature.|
| `RowDD`| Inject this module to use row drag and drop feature.|
| [`Search`](https://ej2.syncfusion.com/vue/documentation/api/grid/search/)| Inject this module to use search feature and this is a default injected module.|
| [`Selection`](https://ej2.syncfusion.com/vue/documentation/api/grid/selection/)| Inject this module to use selection feature and this is a default injected module.|
| [`Scroll`](https://ej2.syncfusion.com/vue/documentation/api/grid/scroll/)| Inject this module to use scrolling feature and this is a default injected module.|
| [`Print`](https://ej2.syncfusion.com/vue/documentation/api/grid/print/)| Inject this module to use to use print feature and this is a default injected module.|
| `Toolbar`| Inject this module to use toolbar feature.|
| `VirtualScroll`| Inject this module to use virtual scroll feature.|
| `ExcelExport`| Inject this module to use excel export feature.|
| `PdfExport`| Inject this module to use PDF export feature.|

These modules should be injected into the `provide` section and use `grid` as a key of the object.
