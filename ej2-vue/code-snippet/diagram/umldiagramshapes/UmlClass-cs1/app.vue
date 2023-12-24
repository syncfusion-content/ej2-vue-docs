

<template>
    <div style="width: 100%">
     <div id="palette-space" class="sb-mobile-palette">
       <ejs-symbolpalette
         id="symbolpalette"
         :palettes="palettes"
         :width="palettewidth"
         :height="paletteheight"
         :getNodeDefaults="palettegetNodeDefaults"
         :getSymbolInfo="getSymbolInfo"
         :symbolMargin="symbolMargin"
         :symbolHeight="symbolHeight"
         :symbolWidth="symbolWidth"
       ></ejs-symbolpalette>
     </div>
     <div id="diagram-space" class="sb-mobile-diagram">
       <ejs-diagram
         style="display: block"
         ref="diagramObject"
         id="diagram"
         :width="width"
         :height="height"
       ></ejs-diagram>
     </div>
   </div>
 </template>
 <script>
     import Vue from 'vue';
     import {  DiagramPlugin,
         Diagram,
         SymbolPalette,SymbolPalettePlugin,
         SymbolInfo,} from '@syncfusion/ej2-vue-diagrams';
     Vue.use(DiagramPlugin);
     Vue.use(SymbolPalettePlugin);
     let umlShapes = [
         {
             id: 'class',
             style: {
             fill: '#26A0DA',
             },
             borderColor: 'white',
             shape: {
             type: 'UmlClassifier',
             classShape: {
                 attributes: [
                 {
                     name: 'accepted',
                     type: 'Date',
                     style: {
                     color: 'red',
                     fontFamily: 'Arial',
                     textDecoration: 'Underline',
                     italic: true,
                     },
                     isSeparator: true,
                 },
                 ],
                 methods: [
                 {
                     name: 'getHistory',
                     style: {},
                     parameters: [{ name: 'Date', style: {} }],
                     type: 'History',
                 },
                 ],
                 name: 'Patient',
             },
             classifier: 'Class',
             },
         },
         {
             id: 'Interface',
             style: {
             fill: '#26A0DA',
             },
             borderColor: 'white',
             shape: {
             type: 'UmlClassifier',
             interfaceShape: {
                 name: 'Bank Account',
             },
             classifier: 'Interface',
             },
         },
         {
             id: 'Enumeration',
             style: {
             fill: '#26A0DA',
             },
             borderColor: 'white',
             shape: {
             type: 'UmlClassifier',
             enumerationShape: {
                 name: 'AccountType',
                 members: [
                 {
                     name: 'Checking Account',
                     style: {},
                 },
                 ],
             },
             classifier: 'Enumeration',
             },
         },
         ];
   
     export default {
         name: 'app',
         data() {
             return {
                 width: '100%',
                 height: '700px',
                 palettes: [
                     {
                         id: 'uml',
                         expanded: true,
                         symbols: umlShapes,
                         title: 'UML Shapes',
                     },
                 ],
                 palettewidth: '100%',
                 paletteheight: '700px',
                 symbolHeight: 80,
                 symbolWidth: 80,
                 symbolMargin: {
                     left: 12,
                     right: 12,
                     top: 12,
                     bottom: 12,
                 },
                 palettegetNodeDefaults: (symbol) => {
                     symbol.width = 100;
                     symbol.height = 100;
                 },
                 symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
                 getSymbolInfo: (symbol) => {
                     return { fit: true, description: { text: symbol.id } };
                 },
             };
         }
     }
 </script>
 <style>
     @import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
 </style>
 
 
 