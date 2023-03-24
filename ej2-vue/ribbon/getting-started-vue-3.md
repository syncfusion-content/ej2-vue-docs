---
layout: post
title: Getting started vue 3 with Vue Ribbon component | Syncfusion
description:  Checkout and learn about Getting started vue 3 with Vue Ribbon component of Syncfusion Essential JS 2 and more details.
control: Getting started vue 3 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Syncfusion Ribbon Component in Vue 3

This section explains how to use Ribbon component in Vue 3 application.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Creating Vue application using Vue CLI

The easiest way to create a Vue application is to use the [`Vue CLI`](https://github.com/vuejs/vue-cli). Vue CLI versions above [`4.5.0`](https://v3.vuejs.org/guide/migration/introduction.html#vue-cli) are mandatory for creating applications using Vue 3. Use the following command to uninstall older versions of the Vue CLI.

```bash
npm uninstall vue-cli -g

```

Use the following commands to install the latest version of Vue CLI.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

Create a new project using the command below.

```bash
vue create quickstart

```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default (Vue 3)` from the menu.

![Reference](./images/vue3-terminal.png)

## Adding Syncfusion Ribbon package in the application

 Syncfusion Vue packages are maintained in the [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. The Ribbon component will be used in this example. To install it use the following command.

```bash
npm install @syncfusion/ej2-vue-ribbon --save
```

## Adding CSS reference for Syncfusion Vue Ribbon component

Import the needed CSS styles for the Ribbon component along with dependency styles in the `<style>` section of the `src/App.vue` file as follows.

```
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
</style>
```

## Adding Syncfusion Vue Ribbon component in the application

You have completed all the necessary configurations needed for rendering the Syncfusion Vue component. Now, you are going to add the Ribbon component using following steps.

### Importing the component, directives and required modules

Import the Ribbon component, Ribbon directives and required modules in the `<script>` section of the `src/App.vue` file.

  ```
  <script>
  import { RibbonComponent, RibbonFileMenu, RibbonItemSize, RibbonColorPicker, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";
  </script>

  ```

### Registering the component and directives

Register the Ribbon component, Ribbon directives in `src/App.vue` file which are used in this example.

  ```js
  import { RibbonComponent, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";
    //Component, Directives registeration
  export default {
      components: {
        'ejs-ribbon' : RibbonComponent,
        'e-ribbon-tabs': RibbonTabsDirective,
        'e-ribbon-tab': RibbonTabDirective,
        'e-ribbon-groups': RibbonGroupsDirective,
        'e-ribbon-group': RibbonGroupDirective,
        'e-ribbon-collections': RibbonCollectionsDirective,
        'e-ribbon-collection': RibbonCollectionDirective,
        'e-ribbon-items': RibbonItemsDirective,
        'e-ribbon-item': RibbonItemDirective
      }
  }
  ```

In the above code snippet, you have registered Ribbon component and it's directives.

### Injecting required modules

Inject the Ribbon required modules in `src/App.vue` file which are used in this example.

```js
  import { RibbonFileMenu, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  export default {
    provide: {
      ribbon: [RibbonFileMenu, RibbonColorPicker]
    }
  }
```

In the above code snippet, you have injected required modules.

### Adding the Ribbon component

Add the component definition in template section.

```
  <template>
    <ejs-ribbon id="ribbon"></ejs-ribbon>
  </template>
  
  <script>
    import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
    export default {
      components: {
        "ejs-ribbon": RibbonComponent
      }
    }
  </script>

```

### Adding Ribbon Tab

In Ribbon, the options are arranged in tabs for easy access. You can use the `e-ribbon-tab` directive to define the ribbon tab like below.

```
  <template>
    <ejs-ribbon id="ribbon">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home"></e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
  </template>
  
  <script>
    import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";
    export default {
      components: {
        "ejs-ribbon": RibbonComponent,
        'e-ribbon-tabs': RibbonTabsDirective,
        'e-ribbon-tab': RibbonTabDirective
      }
    }
  </script>

```

### Adding Ribbon Group

To define a ribbon group under each tab, you can use the `e-ribbon-group` directive like below. The `orientation` property of ribbon group defines whether the collection of items will be rendered column-wise or row-wise.

```
  <template>
    <ejs-ribbon id="ribbon">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard" orientation="Row"></e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
  </template>
  
  <script>
    import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonGroupDirective, RibbonGroupsDirective } from "@syncfusion/ej2-vue-ribbon";
    export default {
      components: {
        "ejs-ribbon": RibbonComponent,
        'e-ribbon-tabs': RibbonTabsDirective,
        'e-ribbon-tab': RibbonTabDirective,
        'e-ribbon-groups': RibbonGroupsDirective,
        'e-ribbon-group': RibbonGroupDirective
      }
    }
  </script>

```

### Adding Ribbon Items

You can use the `e-ribbon-collection` directive to define each ribbon collection that contains one or more items. To define each ribbon item, you can use the `e-ribbon-item` directive and the `type` property to specify the type of control to be rendered, like a button, a drop-down button, a combo box, and more.

```
  <template>
    <ejs-ribbon id="ribbon">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard" orientation="Column">
              <e-ribbon-collections>
                <e-ribbon-collection id="paste-collection">
                  <e-ribbon-items>
                    <e-ribbon-item type="SplitButton" :splitButtonSettings="pasteSettigs"></e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
                <e-ribbon-collection id="cutcopy-collection">
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="cutButton"></e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="copyButton"></e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
  </template>
  
  <script>
    import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-vue-ribbon";
    export default {
      components: {
        "ejs-ribbon": RibbonComponent,
        'e-ribbon-tabs': RibbonTabsDirective,
        'e-ribbon-tab': RibbonTabDirective,
        'e-ribbon-groups': RibbonGroupsDirective,
        'e-ribbon-group': RibbonGroupDirective,
        'e-ribbon-collections': RibbonCollectionsDirective,
        'e-ribbon-collection': RibbonCollectionDirective,
        'e-ribbon-items': RibbonItemsDirective,
        'e-ribbon-item': RibbonItemDirective
      },    
      data: function () {
        return {
          pasteSettigs:{ 
            iconCss: "e-icons e-paste", content: "Paste",
            items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
          },
          cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
          copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
        };
      }
    }
  </script>

```

### Running the application

Below example is the summarized view of the Ribbon component in the `src/App.vue` file.

```
  <template>
    <ejs-ribbon :fileMenu="fileSettings">
      <e-ribbon-tabs>
        <e-ribbon-tab header="Home">
          <e-ribbon-groups>
            <e-ribbon-group header="Clipboard" groupIconCss="e-icons e-paste" :showLauncherIcon="true" >
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="SplitButton" :allowedSizes="largeSize" :splitButtonSettings="pasteSettigs" >
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="cutButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="copyButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="formatButton">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
            <e-ribbon-group header="Font" orientation="Row" :enableGroupOverflow="true" :isCollapsible="false" groupIconCss="e-icons e-bold" cssClass="font-group" >
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
                    </e-ribbon-item>
                    <e-ribbon-item type="ComboBox" :comboBoxSettings="sizeOptions">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="ColorPicker" displayOptions="Simplified" :allowedSizes="smallSize" :colorPickerSettings="colorPicker" >
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="boldButton" >
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="italicButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="underlineButton" >
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="strikethroughButton">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :allowedSizes="smallSize" :buttonSettings="caseButton" >
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
            <e-ribbon-group header="Editor" :isCollapsible="false" groupIconCss="e-icons e-edit" >
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :allowedSizes="largeSize" :buttonSettings="editButton">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
        <e-ribbon-tab header="Insert">
          <e-ribbon-groups>
            <e-ribbon-group header="Tables" :isCollapsible=false>
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="DropDown" :allowedSizes="largeSize" :dropDownSettings="tableSettings">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
            <e-ribbon-group header="Illustrations" id="illustration" orientation="Row" :enableGroupOverflow=true groupIconCss="e-icons e-image">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="chartSettings">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
            <e-ribbon-group header="Media" :isCollapsible=false>
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Template" :itemTemplate="'ribbonTemplate'">
                      <template v-slot:ribbonTemplate = "{data}">
                        <span v-bind:class="'ribbonTemplate ' + data.activeSize"><span class="e-icons e-video"></span><span class="text">Video</span></span>
                      </template>
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
        <e-ribbon-tab header="View">
          <e-ribbon-groups>
            <e-ribbon-group header="Views" orientation="Row" groupIconCss="e-icons e-print">
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="Button" :buttonSettings="printSettings">
                    </e-ribbon-item>
                    <e-ribbon-item type="Button" :buttonSettings="layoutSettings">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
            <e-ribbon-group header="show" :isCollapsible=false>
              <e-ribbon-collections>
                <e-ribbon-collection>
                  <e-ribbon-items>
                    <e-ribbon-item type="CheckBox" :checkBoxSettings="rulerSettings">
                    </e-ribbon-item>
                    <e-ribbon-item type="CheckBox" :checkBoxSettings="gridSettings">
                    </e-ribbon-item>
                    <e-ribbon-item type="CheckBox" :checkBoxSettings="navigationSettings">
                    </e-ribbon-item>
                  </e-ribbon-items>
                </e-ribbon-collection>
              </e-ribbon-collections>
            </e-ribbon-group>
          </e-ribbon-groups>
        </e-ribbon-tab>
      </e-ribbon-tabs>
    </ejs-ribbon>
  </template>

  <script>
    import { RibbonComponent, RibbonFileMenu, RibbonItemSize, RibbonColorPicker, RibbonGroupDirective, RibbonGroupsDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonItemsDirective, RibbonItemDirective, RibbonTabsDirective, RibbonTabDirective } from "@syncfusion/ej2-vue-ribbon";
    export default {
      components: {
        "ejs-ribbon": RibbonComponent,
        'e-ribbon-tabs': RibbonTabsDirective,
        'e-ribbon-tab': RibbonTabDirective,
        'e-ribbon-groups': RibbonGroupsDirective,
        'e-ribbon-group': RibbonGroupDirective,
        'e-ribbon-collections': RibbonCollectionsDirective,
        'e-ribbon-collection': RibbonCollectionDirective,
        'e-ribbon-items': RibbonItemsDirective,
        'e-ribbon-item': RibbonItemDirective
      },
      provide: {
        ribbon: [RibbonFileMenu, RibbonColorPicker]
      },  
      data: function () {
        return {
          largeSize: RibbonItemSize.Large,
          smallSize: RibbonItemSize.Small,
          fileSettings: {
            visible: true,
            menuItems: [
              { text: "New", iconCss: "e-icons e-file-new", id: "new" },
              { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
              { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
              { text: "Save as", iconCss: "e-icons e-save", id: "save" }
            ]
          },
          pasteSettigs:{ 
            iconCss: "e-icons e-paste", content: "Paste",
            items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }]
          },
          cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
          copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
          formatButton:  { iconCss: "e-icons e-format-painter", content: "Format Painter" },
          styleOptions: {
            dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings" ],
            index: 3,
            width: "150px",
            allowFiltering: true
          },
          sizeOptions: {
            dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96" ],
            index: 4,
            width: "65px"
          },
          boldButton:  { iconCss: "e-icons e-bold", content: "Bold", isToggle: "true" },
          italicButton:  { iconCss: "e-icons e-italic", content: "Italic", isToggle: "true" },
          underlineButton:  { iconCss: "e-icons e-underline", content: "Underline", isToggle: "true" },
          strikethroughButton:  { iconCss: "e-icons e-strikethrough", content: "Strikethrough", isToggle: "true" },
          caseButton:  { iconCss: "e-icons e-change-case", content: "Change Case", isToggle: "true" },
          colorPicker: {value: "#123456" },
          editButton: { iconCss: "e-icons e-edit", content: "Editor" },
          tableSettings:{ 
            iconCss: "e-icons e-table", content: "Table", isDropDownButton: true,
            items: [{ text: "Insert Table" }, { text: "Draw Table" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }]
          },
          chartSettings: { iconCss: "e-icons e-chart", content: "Chart" },
          printSettings: { iconCss: "e-icons e-print-layout", content: "Print Layout" },
          layoutSettings: { iconCss: "e-icons e-web-layout", content: "Web Layout" },
          rulerSettings:  { label: "Ruler", checked: false },
          gridSettings:  { label: "Gridlines", checked: false },
          navigationSettings:  { label: "Navigation Pane", checked: true },      
        };
      }
    };
  </script>

  <style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";  
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/material.css";
    
    .ribbonTemplate {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .ribbonTemplate.Large {
      flex-direction: column;
    }

    .ribbonTemplate.Large .e-icons {
      font-size: 35px;
    }

    .ribbonTemplate.Medium .e-icons,
    .ribbonTemplate.Small .e-icons{
      font-size: 20px;
      margin: 15px 5px;
    }

    .ribbonTemplate.Small .text {
      display:none;
    }

    .font-group .e-ribbon-group-content {
      justify-content: center;
    }

  </style>

```

Run the application using the following command.

```bash
npm run serve
```

Web server will be initiated, Open the quick start app in the browser at port [`localhost:8080`](http://localhost:8080/).

![Output](./images/ribbon.png)
