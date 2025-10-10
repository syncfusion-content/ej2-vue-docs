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
| [Page](../treegrid/paging)| Inject this module to use paging feature.|
| [Sort](../treegrid/sorting)| Inject this module to use sorting feature.|
| [Filter](../treegrid/filtering/filtering)| Inject this module to use filtering feature.|
| [Edit](../treegrid/editing/edit)| Inject this module to use editing feature.|
| [Aggregate](../treegrid/aggregates/aggregates)| Inject this module to use aggregate feature.|
| [ColumnChooser](../treegrid/columns/column-chooser) | Inject to enable the column chooser feature. |
| [ColumnMenu](../treegrid/columns/column-menu)| Inject this module to use column menu feature.|
| [CommandColumn](../treegrid/editing/command-column-editing)| Inject this module to use command column feature.|
| [ContextMenu](../treegrid/context-menu)| Inject this module to use context menu feature.
| [Resize](../treegrid/columns/column-resizing)| Inject this module to use resize feature.|
| [Reorder](../treegrid/columns/column-reorder)| Inject this module to use reorder feature.|
| [Print](../treegrid/print)| Inject this module to use to use print feature and this is a default injected module.|
| [Toolbar](../treegrid/tool-bar/tool-bar)| Inject this module to use toolbar feature.|
| [ExcelExport](../treegrid/excel-export/excel-export)| Inject this module to use Excel export feature.|
| [PdfExport](../treegrid/pdf-export/pdf-export)| Inject this module to use PDF export feature.|

These modules should be injected into the `provide` section and use `treegrid` as a key of the object.
