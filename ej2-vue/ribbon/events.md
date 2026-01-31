---
layout: post
title: Events in Vue Ribbon Component | Syncfusion
description: Check out and learn about Events in Syncfusion Vue Ribbon Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Ribbon component

The Vue Ribbon component triggers a variety of events in response to user interactions, such as selecting a tab, clicking a button, or expanding the ribbon. This section provides detailed explanations and code examples for each available event.

## tabSelected

The [tabSelected](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#tabselected) event is triggered after a tab is successfully selected, allowing you to execute logic based on the newly active tab.

```html
<template>
  <ejs-ribbon :tabSelected="tabSelected">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      };
    },
    methods:{
      tabSelected: function(args){
        // Your required action here
      }
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>
```

## tabSelecting

The [tabSelecting](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#tabselecting) event is triggered before a tab is selected. This event can be canceled to prevent the tab selection.

```html
<template>
  <ejs-ribbon :tabSelecting="tabSelecting">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      };
    },
    methods:{
      tabSelecting: function(args){
        // Your required action here
      }
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## ribbonCollapsing

The [ribbonCollapsing](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#ribboncollapsing) event is triggered before the ribbon is collapsed. This action can be canceled.

```html
<template>
  <ejs-ribbon :ribbonCollapsing="ribbonCollapsing">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      };
    },
    methods:{
      ribbonCollapsing: function(args){
        // Your required action here
      }
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## ribbonExpanding

The [ribbonExpanding](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#ribbonexpanding) event is triggered before the ribbon is expanded. This action can be canceled.

```html
<template>
  <ejs-ribbon :ribbonExpanding="ribbonExpanding">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      };
    },
    methods:{
      ribbonExpanding: function(args){
        // Your required action here
      }
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## launcherIconClick

The [launcherIconClick](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#launchericonclick) event is triggered when the launcher icon of a group is clicked. This is useful for opening dialogs or performing group-specific actions.

```html
<template>
  <ejs-ribbon :launcherIconClick="launchIconClick">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard" :showLauncherIcon="true">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      };
    },
    methods:{
      launchIconClick: function(args){
        // Your required action here
      }
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## overflowPopupOpen

The [overflowPopupOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#overflowpopupopen) event is triggered while the overflow popup is opening.

## overflowPopupClose

The [overflowPopupClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/#overflowpopupclose) event is triggered while the overflow popup is closing.

The following code example demonstrates the ribbon with the `overflowPopupOpen` and `overflowPopupClose` events.

```html
<template>
  <ejs-ribbon :overflowPopupOpen="overflowPopupOpen" :overflowPopupClose="overflowPopupClose" activeLayout="Simplified">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      };
    },
    methods:{
      overflowPopupOpen: function(args){
        // Your required action here
      },
      overflowPopupClose: function(args){
        // Your required action here
      }
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## Button item events

### clicked

The [clicked](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettings/#clicked) event is triggered when a ribbon button is clicked.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        cutButton: {
          iconCss: "e-icons e-cut", 
          content: "Cut", 
          clicked: () => {
              // Your required action here 
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettings/#created) event is triggered when a ribbon button is created.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () { 
      return {
        cutButton:  {
          iconCss: "e-icons e-cut", 
          content: "Cut", 
          created: () => {
              // Your required action here 
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## CheckBox item events

### change

The [change](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the state of the checkbox is changed.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="CheckBox" :checkBoxSettings="rulerSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        rulerSettings: {
          label: 'Ruler',
          checked: false,
          change: () => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettings/#created) event is triggered once the checkbox is created.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="CheckBox" :checkBoxSettings="rulerSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        rulerSettings: {
          label: 'Ruler',
          checked: false,
          created: () => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## ColorPicker item events

### change

The [change](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#change) event is triggered when changing the color value.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [ RibbonColorPicker ]);,
    data: function () {
      return {
        colorPicker: {
          value: "#123456",
          change:(args: ChangeEventArgs) => {
            // Your required action here
          }
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#created) event is triggered once the ColorPicker is created.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [ RibbonColorPicker ]);,
    data: function () {
      return {
        colorPicker: {
          value: "#123456",
          created:(args: ChangeEventArgs) => {
            // Your required action here
          }
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#open) event is triggered while the ColorPicker popup is opening.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [ RibbonColorPicker ]);,
    data: function () {
      return {
        colorPicker: {
          value: "#123456",
          open:(args: ChangeEventArgs) => {
            // Your required action here
          }
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#select) event is triggered when selecting a color from the picker or palette, particularly when the `showButtons` property is enabled.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [ RibbonColorPicker ]);,
    data: function () {
      return {
        colorPicker: {
          value: "#123456",
          select:(args: ChangeEventArgs) => {
            // Your required action here
          }
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before the ColorPicker popup closes.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [ RibbonColorPicker ]);,
    data: function () {
      return {
        colorPicker: {
          value: "#123456",
          beforeClose:(args: ChangeEventArgs) => {
            // Your required action here
          }
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before the ColorPicker popup opens.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [ RibbonColorPicker ]);,
    data: function () {
      return {
        colorPicker: {
          value: "#123456",
          beforeOpen:(args: ChangeEventArgs) => {
            // Your required action here
          }
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeTileRender

The [beforeTileRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#beforetilerender) event is triggered while rendering each palette tile, allowing for customization.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ColorPicker" :colorPickerSettings="colorPicker" >
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [ RibbonColorPicker ]);,
    data: function () {
      return {
        colorPicker: {
          value: "#123456",
          beforeTileRender:(args: ChangeEventArgs) => {
            // Your required action here
          }
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## ComboBox item events

### change

The [change](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or the model value is changed by the user.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        styleOptions: {
          dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
          index: 3,
          change: (args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### close

The [close](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#close) event is triggered when the popup is closed.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        styleOptions: {
          dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
          index: 3,
          close: (args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#open) event is triggered when the popup is opened.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        styleOptions: {
          dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
          index: 3,
          open: (args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#created) event is triggered when the ComboBox is created.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        styleOptions: {
          dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
          index: 3,
          created: (args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### filtering

The [filtering](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#filtering) event triggers when typing a character in the ComboBox.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        styleOptions: {
          dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
          index: 3,
          filtering: (args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#select) event is triggered when an item in the popup is selected.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        styleOptions: {
          dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
          index: 3,
          select: (args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#beforeopen) event triggers before the popup opens.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Font">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="ComboBox" :comboBoxSettings="styleOptions" >
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        styleOptions: {
          dataSource: ['Algerian', 'Arial', 'Calibri', 'Cambria', 'Cambria Math', 'Courier New', 'Candara', 'Georgia'],
          index: 3,
          beforeOpen: (args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## DropDown item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before the DropDownButton popup closes.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        tableSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          beforeClose:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before the DropDownButton popup opens.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        tableSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          beforeOpen:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each popup item of the DropDownButton.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        tableSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          beforeItemRender:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#open) event is triggered when the DropDownButton popup opens.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        tableSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          open:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### close

The [close](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#close) event is triggered when the DropDownButton popup closes.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        tableSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          close:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#created) event is triggered when the DropDownButton is created.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        tableSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          created:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#select) event is triggered when an action item is selected in the DropDownButton popup.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="DropDown" :dropDownSettings="tableSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        tableSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          select:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## SplitButton item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before the SplitButton popup closes.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          beforeClose:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before the SplitButton popup opens.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          beforeOpen:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each popup item of the SplitButton.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          beforeItemRender:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#open) event is triggered when the SplitButton popup opens.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          open:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### close

The [close](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#close) event is triggered when the SplitButton popup closes.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          close:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#created) event is triggered when the SplitButton is created.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          created:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#select) event is triggered when an action item is selected in the SplitButton popup.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          select:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### click

The [click](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#click) event is triggered when clicking the primary button in the SplitButton.

```html
<template>
  <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Header & Footer">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="SplitButton" :splitButtonSettings="dropDownSettings">
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

<script setup>
  
  import { RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        dropDownSettings: {
          content: 'Header',
          iconCss: 'e-icons e-header',
          items: [{ text: 'Insert Header' }, { text: 'Edit Header' }, { text: 'Remove Header' }],
          click:(args) => {
            // Your required action here
          }
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## GroupButton item events

### beforeClick

The [beforeClick](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#beforeclick) event is triggered before a button is selected from the GroupButton items.

```html

<template>
    <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Paragraph">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="GroupButton" :allowedSizes="size" :groupButtonSettings="groupButtonMultiple"></e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script setup>
  
  import { RibbonItemSize, RibbonGroupButtonSelection, RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
          size: RibbonItemSize.Medium,
          groupButtonMultiple: {
            selection: RibbonGroupButtonSelection.Multiple, 
            items: [{ iconCss: 'e-icons e-bold', content: 'Bold', selected: true, beforeClick: () => { 
              // Your required action here
            } }, 
            {iconCss: 'e-icons e-italic', content: 'Italic', beforeClick: () => { 
              // Your required action here 
            }}, 
            {iconCss: 'e-icons e-underline', content: 'Underline', beforeClick: () => { 
              // Your required action here 
            }}, 
            {iconCss: 'e-icons e-strikethrough', content: 'Strikethrough', beforeClick: () => {  
              // Your required action here 
            }}, 
            {iconCss: 'e-icons e-change-case', content: 'Change Case', beforeClick: () => {
               // Your required action here  
            }}
          ]
        }
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### click

The [click](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGroupButtonItemModel/#click) event is triggered when a button is selected from the GroupButton items.

```html

<template>
    <ejs-ribbon>
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Paragraph">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="GroupButton" :allowedSizes="size" :groupButtonSettings="groupButtonSingle"></e-ribbon-item>
                </e-ribbon-items>
              </e-ribbon-collection>
            </e-ribbon-collections>
          </e-ribbon-group>
        </e-ribbon-groups>
      </e-ribbon-tab>
    </e-ribbon-tabs>
  </ejs-ribbon>
</template>

<script setup>
  
  import { RibbonItemSize, RibbonGroupButtonSelection , RibbonComponent } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    data: function () {
      return {
        size: RibbonItemSize.Medium,
          groupButtonSingle: { 
          selection: RibbonGroupButtonSelection.Single, 
          items: [
            {iconCss: 'e-icons e-align-left', content: 'Align Left', selected: true, click: () => { 
               // Your required action here
            }},
            {iconCss: 'e-icons e-align-center',content: 'Align Center', click: () => { 
               // Your required action here
            }}, 
            {iconCss: 'e-icons e-align-right',content: 'Align Right', click: () => {
               // Your required action here
            }}, 
            {iconCss: 'e-icons e-justify',content: 'Justify', click: () => { 
               // Your required action here
            }}
          ]
        },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## FileMenu events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#beforeclose) event is triggered before the File Menu popup closes.

```html
<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton">
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [RibbonFileMenu]);,
    data: function () {
      return {
        fileSettings: {
        visible: true,
        menuItems: [
          { text: "New", iconCss: "e-icons e-file-new", id: "new" },
          { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
          { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
          { text: "Save as", iconCss: "e-icons e-save", id: "save" }
        ],
        beforeClose: (args) => {
          // Your required action here
        }
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#beforeopen) event is triggered before the File Menu popup opens.

```html
<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton">
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [RibbonFileMenu]);,
    data: function () {
      return {
        fileSettings: {
        visible: true,
        menuItems: [
          { text: "New", iconCss: "e-icons e-file-new", id: "new" },
          { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
          { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
          { text: "Save as", iconCss: "e-icons e-save", id: "save" }
        ],
        beforeOpen: (args) => {
          // Your required action here
        }
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon File Menu item.

```html
<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton">
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [RibbonFileMenu]);,
    data: function () {
      return {
        fileSettings: {
        visible: true,
        menuItems: [
          { text: "New", iconCss: "e-icons e-file-new", id: "new" },
          { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
          { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
          { text: "Save as", iconCss: "e-icons e-save", id: "save" }
        ],
        beforeItemRender: (args) => {
          // Your required action here
        }
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#open) event is triggered when the File Menu popup opens.

```html
<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton">
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [RibbonFileMenu]);,
    data: function () {
      return {
        fileSettings: {
        visible: true,
        menuItems: [
          { text: "New", iconCss: "e-icons e-file-new", id: "new" },
          { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
          { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
          { text: "Save as", iconCss: "e-icons e-save", id: "save" }
        ],
        open: (args) => {
          // Your required action here
        }
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### close

The [close](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#close) event is triggered when the File Menu popup closes.

```html
<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton">
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [RibbonFileMenu]);,
    data: function () {
      return {
        fileSettings: {
        visible: true,
        menuItems: [
          { text: "New", iconCss: "e-icons e-file-new", id: "new" },
          { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
          { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
          { text: "Save as", iconCss: "e-icons e-save", id: "save" }
        ],
        close: (args) => {
          // Your required action here
        }
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#select) event is triggered when an item is selected in the ribbon File Menu.

```html
<template>
  <ejs-ribbon :fileMenu="fileSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
                  </e-ribbon-item>
                  <e-ribbon-item type="Button" :buttonSettings="copyButton">
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [RibbonFileMenu]);,
    data: function () {
      return {
        fileSettings: {
        visible: true,
        menuItems: [
          { text: "New", iconCss: "e-icons e-file-new", id: "new" },
          { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
          { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
          { text: "Save as", iconCss: "e-icons e-save", id: "save" }
        ],
        select: (args) => {
          // Your required action here
        }
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      copyButton:  { iconCss: "e-icons e-copy", content: "Copy" },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## Backstage view events

### backStageItemClick

The [backStageItemClick](https://ej2.syncfusion.com/vue/documentation/api/ribbon/backstageItemModel/#backstageitemclick) event is triggered when a backstage item is selected.

```html
<template>
  <ejs-ribbon :backStageMenu="backstageSettings">
    <e-ribbon-tabs>
      <e-ribbon-tab header="Home">
        <e-ribbon-groups>
          <e-ribbon-group header="Clipboard">
            <e-ribbon-collections>
              <e-ribbon-collection>
                <e-ribbon-items>
                  <e-ribbon-item type="Button" :buttonSettings="cutButton">
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

<script setup>
import { provide } from "vue";
  
  import { RibbonComponent, RibbonBackstage } from "@syncfusion/ej2-vue-ribbon";
  

  export default {
    provide('ribbon',  [RibbonBackstage]);,
    data: function () {
      return {
        backstageSettings: {
          visible: true,
          items: [
            { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: '#homeContent', backStageItemClick: () => {
                  // Your required action here
          }  },
          ],
          backButton: {
            text: 'Close',
          }
      },
      cutButton:  { iconCss: "e-icons e-cut", content: "Cut" },
      };
    }
};
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";  
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-vue-ribbon/styles/tailwind3.css";
</style>

```

## Gallery events

### popupOpen

The [popupOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettings/#popupopen) event is triggered when the gallery popup opens.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/popupOpen/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/popupOpen/app.vue %}
{% endhighlight %}
{% endtabs %}

### popupClose

The [popupClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettings/#popupclose) event is triggered when the gallery popup closes.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/popupClose/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/popupClose/app.vue %}
{% endhighlight %}
{% endtabs %}

### itemHover

The [itemHover](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettings/#itemhover) event is triggered when hovering over a gallery item.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/itemHover/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/itemHover/app.vue %}
{% endhighlight %}
{% endtabs %}

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettings/#beforeitemrender) event is triggered before each gallery item is rendered.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/beforeItemRender/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/beforeItemRender/app.vue %}
{% endhighlight %}
{% endtabs %}

### beforeSelect

The [beforeSelect](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettings/#beforeselect) event is triggered before an item is selected in the Ribbon gallery.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/beforeSelect/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/beforeSelect/app.vue %}
{% endhighlight %}
{% endtabs %}

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonGallerySettings/#select) event is triggered when an item is selected in the Ribbon Gallery.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/select/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ribbon/gallery-items/select/app.vue %}
{% endhighlight %}
{% endtabs %}
