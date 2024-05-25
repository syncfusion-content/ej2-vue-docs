---
layout: post
title: Smithchart print in Vue Smithchart component | Syncfusion
description: Learn here all about Smithchart print in Syncfusion Vue Smithchart component of Syncfusion Essential JS 2 and more.
control: Smithchart print 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Smithchart print in Vue Smithchart component

## Print

The rendered smithchart can be printed directly from the browser by calling the public method print. ID of the smithchart's div element must be passed as argument to that method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div class="control_wrapper">
    <ejs-smithchart id="smithchart" ref='smithchart'>
      <e-seriesCollection>
        <e-series :dataSource='dataSource' :name='name' :reactance='reactance' :resistance='resistance'
          :loaded='loaded'></e-series>
      </e-seriesCollection>
    </ejs-smithchart>
  </div>
</template>
<script setup>
import { SmithchartComponent as EjsSmithchart, SeriesDirective as ESeries, SeriesCollectionDirective as ESeriesCollection } from "@syncfusion/ej2-vue-charts";

const dataSource = [
  { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
  { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
  { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
  { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
  { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
  { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
];
const name = 'Transmission1';
const reactance = 'reactance';
const resistance = 'resistance';

const loaded = function (args) {
  args.smithchart.print();
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div class="control_wrapper">
    <ejs-smithchart id="smithchart" ref='smithchart'>
      <e-seriesCollection>
        <e-series :dataSource='dataSource' :name='name' :reactance='reactance' :resistance='resistance'
          :loaded='loaded'></e-series>
      </e-seriesCollection>
    </ejs-smithchart>
  </div>
</template>
<script>
import { SmithchartComponent, SeriesDirective, SeriesCollectionDirective } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    "ejs-smithchart": SmithchartComponent,
    "e-seriesCollection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  data: function () {
    return {
      dataSource: [
        { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
        { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
        { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
        { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
        { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
      ],
      name: 'Transmission1',
      reactance: 'reactance', resistance: 'resistance',
    }
  },
  methods: {
    loaded: function (args) {
      args.smithchart.print();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Export

The rendered smithchart can be exported to JPEG , PNG, SVG or PDF format by using export method in smithchart. Input parameters for this method are Export Type for format and fileName of result.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div class="control_wrapper">
    <ejs-smithchart id="smithchart" ref='smithchart'>
      <e-seriesCollection>
        <e-series :dataSource='dataSource' :name='name' :reactance='reactance' :resistance='resistance'
          :loaded='loaded'></e-series>
      </e-seriesCollection>
    </ejs-smithchart>
  </div>
</template>
<script setup>
import { SmithchartComponent as EjsSmithchart, SeriesDirective as ESeries, SeriesCollectionDirective as ESeriesCollection } from "@syncfusion/ej2-vue-charts";

const dataSource = [
  { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
  { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
  { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
  { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
  { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
  { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
];
const name = 'Transmission1';
const reactance = 'reactance';
const resistance = 'resistance';

const loaded = function (args) {
  args.smithchart.export('PNG', 'export');
}
</script>


{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div class="control_wrapper">
    <ejs-smithchart id="smithchart" ref='smithchart'>
      <e-seriesCollection>
        <e-series :dataSource='dataSource' :name='name' :reactance='reactance' :resistance='resistance'
          :loaded='loaded'></e-series>
      </e-seriesCollection>
    </ejs-smithchart>
  </div>
</template>
<script>
import { SmithchartComponent, SeriesDirective, SeriesCollectionDirective } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    "ejs-smithchart": SmithchartComponent,
    "e-seriesCollection": SeriesCollectionDirective,
    "e-series": SeriesDirective
  },
  data: function () {
    return {
      dataSource: [
        { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
        { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
        { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
        { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
        { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
        { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
      ],
      name: 'Transmission1',
      reactance: 'reactance', resistance: 'resistance',
    }
  },
  methods: {
    loaded: function (args) {
      args.smithchart.export('PNG', 'export');
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}
