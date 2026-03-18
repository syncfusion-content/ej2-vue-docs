<template>
  <div id="app">
    <label>Enable animation</label>
    <input style="margin-left: 5px" id="enableAnimation" type="checkbox" v-model="enableAnimation" />
    <ejs-symbolpalette ref="symbolPalette" id="symbolpalette" :palettes="palettes" :enableAnimation="enableAnimation" />
  </div>
</template>

<script>
import { SymbolPaletteComponent } from '@syncfusion/ej2-vue-diagrams';

export default {
  name: 'AppComponent',
  components: {
    'ejs-symbolpalette': SymbolPaletteComponent,
  },
  data() {
    return {
      // Enables animation
      enableAnimation: true,
      palettes: [
        {
          id: 'basic',
          symbols: this.getBasicShapes(),
          title: 'Basic Shapes',
          iconCss: 'e-ddb-icons e-basic',
        },
      ],
    };
  },
  methods: {
    getBasicShapes() {
      return [
        {
          id: 'rectangle',
          shape: {
            type: 'Basic',
            shape: 'Rectangle',
          },
        },
        {
          id: 'plus',
          shape: {
            type: 'Basic',
            shape: 'Plus',
          },
        },
        {
          id: 'triangle',
          shape: {
            type: 'Basic',
            shape: 'RightTriangle',
          },
        },
      ];
    },
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fabric.css";
</style>