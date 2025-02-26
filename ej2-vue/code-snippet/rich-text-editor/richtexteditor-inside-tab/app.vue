<template>
  <div id="app">
    <ejs-tab id="element">
      <e-tabitems>
        <e-tabitem :header="header1" :content="'rteTemplate1'">
          <template v-slot:rteTemplate1>
            <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor><div>
          </template>
        </e-tabitem>
        <e-tabitem :header="header2" :content="'rteTemplate2'">
          <template v-slot:rteTemplate2>
          <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor><div>
          </template>
        </e-tabitem>
        <e-tabitem :header="header3" :content="'rteTemplate3'">
          <template v-slot:rteTemplate3>
          <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor><div>
          </template>
        </e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>

<script>
import {
  TabComponent,
  TabItemsDirective,
  TabItemDirective,
} from '@syncfusion/ej2-vue-navigations';
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  Count,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-vue-richtexteditor';

export default {
 name: 'App',
  components: {
    'ejs-tab': TabComponent,
    'e-tabitems': TabItemsDirective,
    'e-tabitem': TabItemDirective,
    'ejs-richtexteditor': RichTextEditorComponent,
  },
  data: function () {
    return {
      header1: { text: 'TAB 1' },
      header2: { text: 'TAB 2' },
      header3: { text: 'TAB 3' },
    };
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
  },
};
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>