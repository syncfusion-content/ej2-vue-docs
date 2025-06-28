---
layout: post
title: Integrate Chart in Vue Grid | Syncfusion
description: Learn how to integrate charts into Syncfusion Vue Grid using Essential JS 2 for interactive and insightful data visualization.
control: Integrate Chart 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Chart in Syncfusion Vue Grid

The Grid and Chart Integration feature in Syncfusion allows users to visualize tabular data in a graphical format by linking the Grid with the Chart.This feature allows seamless integration with Charts to visualize selected data interactively. You can generate various Chart types such as bar, line, or pie directly from Grid data using the [ContextMenu](https://ej2.syncfusion.com/vue/documentation/grid/context-menu) feature. This feature is particularly useful in scenarios where tabular data can be better understood through graphical representation.

This feature is particularly useful in dashboards, reporting tools, and data-driven applications where both tabular and visual representations of data are required.

## Steps for Chart integration

To integrate Charts into your Grid, follow these steps:

### Dependencies

Below is the list of minimum dependencies required to integrate Chart functionality into the Grid:

```javascript
|-- dependencies
  |-- @syncfusion/ej2-grid-chart
    |--@syncfusion/ej2-vue-grids
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-notifications
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-charts

```

### Setup for local development

To get started with Syncfusion components in your Vue project, refer to the appropriate documentation based on your Vue version:

**For Vue 3:**

Refer to the [Vue 3 Getting Started](https://ej2.syncfusion.com/vue/documentation/grid/vue-3-getting-started#set-up-the-vite-project) with Vite guide for step-by-step instructions.

**For Vue 2:**

Refer to the [Vue 2 Getting Started](https://ej2.syncfusion.com/vue/documentation/grid/getting-started#setting-up-the-vue-2-project) guide for detailed setup steps.

### Add Syncfusion Vue packages

Syncfusion Vue component packages are available at [npmjs.com](https://www.npmjs.com/~syncfusionorg). To use Syncfusion Vue components in your project, install the corresponding npm packages.

To install the `Grid-Chart` package, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-grid-chart --save

{% endhighlight %}
{% endtabs %}

or

{% tabs %}
{% highlight bash tabtitle="NPM" %}

yarn add @syncfusion/ej2-grid-chart

{% endhighlight %}
{% endtabs %}

### Import the Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG and Theme Studio. Refer to themes topic to know more about built-in themes and different ways to refer to [themes](https://ej2.syncfusion.com/vue/documentation/appearance/theme) in a Vue project.

In this article, **Tailwind** theme is applied using CSS styles, which are available in installed packages. The necessary tailwind CSS styles for the `Grid` and `GridChart` and its dependents were imported into the <style> section of **src/App.vue** file. Vite app generates a default **styles.css** file which we do not need for this example. Before running the sample, delete the content of **src/style.css** or remove the file if it’s unused.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
@import '../node_modules/@syncfusion/ej2-grid-chart/styles/tailwind.css';
```

>The order of importing CSS styles should be in line with its dependency graph.

### Chart integration via Context Menu in Grid

This section explains how to dynamically render Charts based on user interactions within the Syncfusion Vue Grid using the context menu. Users can **right-click** on selected rows and choose from various Chart types such as bar, pie, line Charts etc to visualize the data instantly. This feature enhances interactivity and provides a seamless analytical experience.

For example, in a sales dashboard, you can select sales records for specific products and instantly view a comparative bar or pie Chart illustrating online sales versus retail sales or revenue trends over several month. This functionality helps improve decision-making by providing immediate visual feedback.

Steps to be followed to integrate Chart into Grid via Context Menu:

**Step 1. Inject required modules:**

Import the necessary modules from the `Grid` and `GridChart` packages, and inject the `ContextMenu` module into the Grid to enable context menu functionality.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

import { GridComponent, ColumnDirective, ColumnsDirective, ContextMenu } from '@syncfusion/ej2-vue-grids';
import { GridChart } from '@syncfusion/ej2-grid-chart';

export default {
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  provide: {
    grid: [ContextMenu]
  }
}

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, ContextMenu } from "@syncfusion/ej2-vue-grids";
import { GridChart } from '@syncfusion/ej2-grid-chart';

provide('grid', [ContextMenu]);

{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 2: Define Chart options to Grid Context Menu:**

Add Chart visualization options as context menu items within the Grid configuration using [contextMenuItems](https://ej2.syncfusion.com/vue/documentation/api/grid/#contextmenuitems) property. These items allow  you to right-click on selected rows and choose a Chart type to visualize the data.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

export default {
  data: () => {
    return {
      contextMenuItems: ['Bar', 'StackingBar', 'StackingBar100', 'Pie',
        'Column', 'StackingColumn', 'StackingColumn100',
        'Line', 'StackingLine', 'StackingLine100',
        'Area', 'StackingArea', 'StackingArea100',
        'Scatter'
      ]    
    }
  }
}

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

const contextMenuItems = [
  'Bar', 'StackingBar', 'StackingBar100', 
  'Pie','Column', 'StackingColumn', 
  'StackingColumn100','Line', 'StackingLine', 
  'StackingLine100','Area', 'StackingArea', 
  'StackingArea100','Scatter'
];

{% endraw %}
{% endhighlight %}
{% endtabs %}

**Step 3: Initialize GridChart instance on Grid creation:**

Inside the Grid’s [created](https://ej2.syncfusion.com/vue/documentation/api/grid/#created) event, instantiate a **GridChart** object. This instance will be used to render Charts dynamically based on the selected Grid data.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

export default {
  methods: {
    created() {
      var grid = this.$refs.gridInstance.$el.ej2_instances[0];
      this.gridChart = new GridChart({
        enableRtl: grid.enableRtl,
        locale: grid.locale,
      });
    }
  }
}

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

const gridInstance=ref(null);

const created = () => {
  gridChart.value = new GridChart({
    enableRtl: gridInstance.value.enableRtl,
    locale: gridInstance.value.locale,
  });
};

{% endraw %}
{% endhighlight %}
{% endtabs %}

This ensures that the Chart instance is ready as soon as the Grid is initialized, allowing seamless interaction through the context menu.

**Step 4: Handle context menu click to render Chart:**

Use the [contextMenuClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#contextmenuclick) event to detect which Chart type was selected and render the Chart accordingly using the `gridChart.render()` method.

`ContextMenuClick` event passes the below arguments:

  * `args.chartType:` The selected Chart type.

  * `args.gridInstance:` The current Grid instance.

  * `args.records:` The selected data records to be visualized in the Chart.

* Use the `gridChart.render` to render the Chart. It accepts three arguments discussed below:

  * `chartArgs`: Contains Grid instance, [Chart type](.https://ej2.syncfusion.com/vue/documentation/chart/chart-types), and selected records.

  * `chartModel:` This specifies various Chart configurations related to the appearance and behavior of the Chart. The model allows you to configure axes, labels, legends, tooltips, and other Chart attributes. Refer to Syncfusion's [Chart Model](https://ej2.syncfusion.com/vue/documentation/api/chart/chartmodel/) for detailed configurations, options, and customization possibilities.

  * `categorySeries:` This specifies the fields in your data used for [categories](https://ej2.syncfusion.com/vue/documentation/chart/category-axis) and [series](https://ej2.syncfusion.com/vue/documentation/chart/chart-series) in the Chart.

    * Category fields: Define the grouping axis.
    * Series fields: Define the actual values plotted on the Chart.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

export default {
  methods: {
    contextMenuClick(args) {
      // Check if the Chart type is defined in the clicked context menu item.
      if (args.chartType && args.gridInstance) {
        // Prepare the Chart arguments including the Grid instance, Chart type, and records to plot.
        const chartArgs = {
          gridInstance: args.gridInstance,
          chartType: args.chartType,
          records: args.records,
        };

        // Set up the Chart model configurations.
        const chartModel = {
          primaryXAxis: {
            valueType: 'Category',
            labelRotation: 315,
          }
        };

         // Combine both Chart models into a single model for rendering.
        const model= {
          chart: chartModel,
          accumulationChart: { }
        };

        // Determine fields for category and series data in the Chart.
        const categorySeries= {
          category: ['Product', 'Month'],
          series: ['Online', 'Retail']
        };

        // Render the Chart using the configured arguments and models.
        // The render function uses the defined chartArgs, model, and categorySeries to display the Chart.
        this.gridChart.render(chartArgs, model, categorySeries);
      }
    }
  }
}

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

const contextMenuClick = (args) => {
  // Check if the Chart type is defined in the clicked context menu item.
  if (args.chartType && args.gridInstance) {

    // Prepare the Chart arguments including the Grid instance, Chart type, and records to plot.
    const chartArgs = {
      gridInstance: args.gridInstance,
      chartType: args.chartType,
      records: args.records,
    };

    // Set up the Chart model configurations.
    const chartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315,
      }
    };

    // Combine both Chart models into a single model for rendering.
    const model= {
      chart: chartModel,
      accumulationChart: { }
    };

    // Determine fields for category and series data in the Chart.
    const categorySeries= {
      category: ['Product', 'Month'],
      series: ['Online', 'Retail']
    };

    // Render the Chart using the configured arguments and models.
    // The render function uses the defined chartArgs, model, and categorySeries to display the Chart.
    gridChart.value.render(chartArgs, model, categorySeries);
  }
};

{% endraw %}
{% endhighlight %}
{% endtabs %}

The following complete example demonstrates how to integrate charts into a Grid context menu using the `contextMenuClick` event with `gridChart.render` method:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/chart-intergartion/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/chart-intergartion/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/chart-intergartion-cs" %}
        
## Enable export functionality in GridChart

The export functionality in GridChart allows Charts to be saved or shared externally in various formats. This is particularly useful for preserving visualized data or including Charts in reports and presentations.

To enable this feature, set the `allowExport` property to true when creating the **GridChart** instance. Once enabled, an export option appears in the Chart popup toolbar, allowing the Chart to be exported in various formats such as PDF, CSV, Print, JPEG, XLSX, SVG, and PNG.

The following code snippet demonstrates how to enable export functionality in **GridChart**:

```ts

gridChart = new GridChart({
  allowExport: true
});

```

## Enable property panel in GridChart

The property panel in GridChart provides a built-in interface to modify Chart settings dynamically at runtime. By default, the property panel is disabled. To enable it, set the `enablePropertyPanel` option to true during the instantiation of the **GridChart** object. Here’s how to do it:

```ts

gridChart = new GridChart({
  enablePropertyPanel: true
});

```

When enabled, the property panel appears alongside the Chart popup and offers three main configuration sections:

* **Chart Types:** Choose from a variety of Chart types, including Column, Line, Pie, and others.

* **Chart Data:** Configure the category axis and series fields for data visualization.

* **Formatting Options:** Adjust styling properties such as Chart style, title style, legend appearance, series settings, and axes formatting.

  * **Chart Style:** 

    * **Margin :** Adjust the [margins](https://ej2.syncfusion.com/vue/documentation/api/chart/margin/) around the chart (top, bottom, left, right) for better layout spacing.
    * **Color**: Set distinct colors for different chart elements to improve visual clarity.

  * **Title Style** 

    * **Legend** - Toggle the visibility of the legend and customize its font, size, color, and position.
    * **Series** - Enable/disable tooltips and customize [Series](https://ej2.syncfusion.com/vue/documentation/api/chart/series/) color and data labels based on categories such as online, retail, or revenue.

  * **Axes:** - Select axes as either category or value type, and customize:

    * Reverse Order to change the data sequence.
    * **Title:** Adjust text, font, size, color, and rotation.
    * **Label:** Modify text, font, size, color, and rotation for better label presentation.

**customize the Chart model:**   

You can customize the [Chart](https://ej2.syncfusion.com/vue/documentation//chart/getting-started) by defining a [chartModel](https://ej2.syncfusion.com/vue/documentation/api/chart/chartModel/) object in the `chart` property of the `model` object within the [contextMenuClick](https://ej2.syncfusion.com/vue/documentation/api/grid/#contextmenuclick) event .This allows you to configure various Chart properties such as axes, margins, tooltips, titles, and more. Additionally, you can use the [events](https://ej2.syncfusion.com/vue/documentation//api/chart/#events/) of the Chart within the `chartModel` configuration to apply further customizations when the Chart is rendered. 

To customize [Accumulation Charts](https://ej2.syncfusion.com/vue/documentation//accumulation-chart/getting-started) (such as Pie), use the `accumulationChart` property of the `model` object. This property allows you to configure Chart options like titles, legends, data labels, and visual styles tailored for accumulation-type visualizations.  You can also use Accumulation Chart [events](https://ej2.syncfusion.com/vue/documentation//api/accumulation-chart/#events/) to apply additional customizations when the Chart is rendered.

The following code snippets demonstrate how to achieve this:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

export default {
  methods: {
    contextMenuClick(args) 
    {
      if (args.chartType && args.gridInstance) {
        const chartModel = {
          primaryXAxis: {
            valueType: 'Category',
            labelRotation: 315,
          },
          margin: {
            top: 20,
            bottom: 20,
            right: 20,
            left: 20
          },
          tooltip: {
            enable: true,
            textStyle: {
              size: '16px',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }
          },
          title: 'Sales Data',
          titleStyle: {
            size: '24px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'Bold'
          },
          subTitle: 'Sales data for various products over the months',
          load: (args) => {
            if (args.chart.titleStyle) {
              args.chart.titleStyle.color = '#1976d2';
            }
          }
        };
        const accumulationChartModel = {
          title :'Sales Distribution'
        };
        const model= {
          chart: chartModel,
          accumulationChart: accumulationChartModel
        };
      }
    },
  }
}

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

const contextMenuClick = (args) => {
  if (args.chartType && args.gridInstance) {
    const chartModel = {
      primaryXAxis: {
        valueType: 'Category',
        labelRotation: 315,
      },
      margin: {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20
      },
      tooltip: {
        enable: true,
        textStyle: {
          size: '16px',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }
      },
      title: 'Sales Data',
      titleStyle: {
        size: '24px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'Bold'
      },
      subTitle: 'Sales data for various products over the months',
      load: (args) => {
        if (args.chart.titleStyle) {
          args.chart.titleStyle.color = '#1976d2';
        }
      }
    };
    const accumulationChartModel = {
      title :'Sales Distribution'
    };
    const model= {
      chart: chartModel,
      accumulationChart: accumulationChartModel
    };
  }
}
{% endraw %}
{% endhighlight %}
{% endtabs %}

You can also programmatically update the Chart’s appearance using the `updateChartSettings(args: UpdateChartArgs)` event provided by the **GridChart** integration. This event is triggered when you modify Chart properties through the Chart popup’s property panel. This is useful for applying custom themes, adjusting axis settings, or modifying series styles.

The following code snippet demonstrates how to dynamically customize chart margins and restrict their values to a minimum of 20 using the `updateChartSettings` event.


{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}

export default {
  methods: {
    created() {
      var grid = this.$refs.gridInstance.$el.ej2_instances[0];
      this.gridChart = new GridChart({
        enablePropertyPanel: true,
        allowExport: true,
        enableRtl: grid.enableRtl,
        locale: grid.locale,
        updateChartSettings: this.updateChartSettings
      });
    },
    updateChartSettings(args) {
      const chart = args.changes?.chart;
      if (!chart) return;
      const chartMargin = chart.margin;

      // Restrict margin values to minimum 20.
      if (chartMargin && !isNullOrUndefined(chartMargin)) {
        if ((chartMargin.top ?? 0) < 20) chartMargin.top = 20;
        if ((chartMargin.bottom ?? 0) < 20) chartMargin.bottom = 20;
        if ((chartMargin.left ?? 0) < 20) chartMargin.left = 20;
        if ((chartMargin.right ?? 0) < 20) chartMargin.right = 20;
      }
    },
  }
}

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}

const created = () => {
  gridChart.value = new GridChart({
    enablePropertyPanel: true,
    allowExport: true,
    enableRtl: gridInstance.value.enableRtl,
    locale: gridInstance.value.locale,
    updateChartSettings: updateChartSettings
  });
};

const updateChartSettings = (args) => {
  const chart = args.changes.chart;
  if (!chart) return;

  // Restrict margin values to minimum 20.
  const chartMargin = chart.margin;
  if (chartMargin && !isNullOrUndefined(chartMargin)) {
    if (chartMargin.top < 20) chartMargin.top = 20;
    if (chartMargin.bottom < 20) chartMargin.bottom = 20;
    if (chartMargin.left < 20) chartMargin.left = 20;
    if (chartMargin.right < 20) chartMargin.right = 20;
  }
};

{% endraw %}
{% endhighlight %}
{% endtabs %}


The following complete example demonstrates how to enable the property panel by setting `enablePropertyPanel` to **true**, customize the chart using the `chartModel` within `contextMenuClick` event, and dynamically control or customize the behavior of the `updateChartSettings` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/chart-intergartion-cs1/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/chart-intergartion-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/chart-intergartion-cs1" %}

