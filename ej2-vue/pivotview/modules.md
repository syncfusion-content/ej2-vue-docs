---
layout: post
title: Modules in Vue Pivot Table | Syncfusion
description: Learn about Vue Pivot Table feature modules, provider registration, module relationships, and how to enable common features.
control: Pivot Table
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Vue Pivot Table

The Vue Pivot Table includes optional modules for features that are not part of its core rendering behavior. Import and provide only the modules required by the report to keep the component configuration explicit and avoid registering unused features.

Import modules from `@syncfusion/ej2-vue-pivotview` and register them with the `pivotview` provider. In the Options API, add the provider to the component options; with the Composition API, call Vue's `provide` function from the component setup. Set the associated component property to enable each feature. The following table lists all Pivot Table feature modules exported by the package.

| Feature | Module | Related configuration | Data source support and notes |
| --- | --- | --- | --- |
| [Grouping bar](./grouping-bar) | `GroupingBar` | [`showGroupingBar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showgroupingbar) | Relational and OLAP |
| [Field list](./field-list) | `FieldList` | [`showFieldList`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showfieldlist) | Relational and OLAP |
| [Calculated field](./calculated-field) | `CalculatedField` | [`allowCalculatedField`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowcalculatedfield) | Relational and OLAP; formula syntax differs |
| [Conditional formatting](./conditional-formatting) | `ConditionalFormatting` | [`allowConditionalFormatting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowconditionalformatting) | Relational and OLAP |
| [Number formatting](./number-formatting) | `NumberFormatting` | [`allowNumberFormatting`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allownumberformatting) | Relational and OLAP |
| [Grouping](./grouping) | `Grouping` | [`allowGrouping`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowgrouping) | Relational data only |
| [Drill through](./drill-through) | `DrillThrough` | [`allowDrillThrough`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowdrillthrough) | Relational and OLAP; protect source records through application and data-service authorization |
| [Toolbar](./tool-bar) | `Toolbar` | [`showToolbar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#showtoolbar) and [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#toolbar) | Relational and OLAP; toolbar commands may require their own modules |
| [Pivot Chart](./pivot-chart) | `PivotChart` | [`displayOption`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/displayOptionModel), [`chartSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#chartsettings), and [`chartSeries`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/pivotSeries) | Relational and OLAP |
| [Virtual scrolling](./virtual-scrolling) | `VirtualScroll` | [`enableVirtualization`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#enablevirtualization) | Relational and OLAP |
| [Paging](./paging) | `Pager` | [`enablePaging`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#enablepaging), [`pageSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#pagesettings), and [`pagerSettings`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#pagersettings) | Relational and OLAP |
| [Excel and CSV export](./excel-export) | `ExcelExport` | [`allowExcelExport`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowexcelexport) | Relational and OLAP |
| [PDF export](./pdf-export) | `PDFExport` | [`allowPdfExport`](https://ej2.syncfusion.com/vue/documentation/api/pivotview/index-default#allowpdfexport) | Relational and OLAP |

> Importing a module alone does not enable its feature. Provide the module and configure the related property. Features without a module, including core aggregation, member filtering, sorting, drill down, and value sorting, do not need an entry in the `pivotview` provider.

## Module relationships and limitations

Some modules are commonly used together, while others are alternatives:

* **Toolbar commands:** `Toolbar` provides the toolbar. Provide the module for each optional feature used by a toolbar command, such as `ExcelExport`, `PDFExport`, `ConditionalFormatting`, `NumberFormatting`, `CalculatedField`, or `PivotChart`.
* **Field list variants:** `FieldList` enables the Pivot Table's built-in popup field list. A stand-alone field list is rendered with the `PivotFieldListComponent` (`ejs-pivotfieldlist`) and configured separately; it is a component, not another Pivot Table module. Provide any optional Pivot Table modules required by the features enabled in the report.
* **Paging and virtualization:** `Pager` and `VirtualScroll` are separate strategies for navigating large reports. Enable either paging or virtualization, but not both at the same time.
* **Grouping:** The `Grouping` module supports relational data. OLAP grouping and calculations are defined by the cube and OLAP report settings.
* `DrillThrough` can expose source records. The application and data service must authorize access to those records independently of the Pivot Table UI.

## Complete module import reference

The following import contains all optional Pivot Table feature modules. In an application, retain only the modules used by that Pivot Table instance and register them in its `pivotview` provider.

```javascript
import {
  CalculatedField,
  ConditionalFormatting,
  DrillThrough,
  ExcelExport,
  FieldList,
  Grouping,
  GroupingBar,
  NumberFormatting,
  Pager,
  PDFExport,
  PivotChart,
  Toolbar,
  VirtualScroll
} from '@syncfusion/ej2-vue-pivotview';
```

## Enabling basic features

The following example enables the grouping bar, field list, and calculated field features. It imports the corresponding modules from `@syncfusion/ej2-vue-pivotview`, configures the feature properties, and registers the modules with the `pivotview` provider.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/module-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pivot-grid/module-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-grid/module-cs1" %}
