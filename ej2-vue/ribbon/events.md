---
layout: post
title: Events in Vue Ribbon Component | Syncfusion
description: Check out and learn about Events in Syncfusion Vue Ribbon Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Ribbon component

This section describes the ribbon events that will be triggered when appropriate actions are performed. The following events are available in the ribbon component.

## tabSelected

The [tabSelected](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonModel/#tabselected) event is triggered after selecting the tab item.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## tabSelecting

The [tabSelecting](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonModel/#tabselecting) event is triggered before selecting the tab item.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## ribbonCollapsing

The [ribbonCollapsing](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonModel/#ribboncollapsing) event is triggered before collapsing the ribbon.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## ribbonExpanding

The [ribbonExpanding](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonModel/#ribbonexpanding) event is triggered before expanding the ribbon.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## launcherIconClick

The [launcherIconClick](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonModel/#launchericonclick) event is triggered when the launcher icon of the group is clicked.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## Button item events

### click

The [clicked](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettings/#clicked) event is triggered when the button is clicked.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonButtonSettings/#created) event is triggered when the button is created.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## Checkbox item events

### change

The [change](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the the Checkbox state is changed.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonCheckBoxSettings/#created) event is triggered once the Checkbox is created.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## Colorpicker item events

### change

The [change](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#change) event is triggered while changing the colors.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
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

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#created) event is triggered once the Colorpicker is created.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
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

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#open) event is triggered while opening the Colorpicker popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
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

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#select) event is triggered while selecting the color in picker / palette, when showButtons property is enabled.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
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

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before closing the Colorpicker popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before opening the Colorpicker popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
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

### beforeTileRender

The [beforeTileRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonColorPickerSettingsModel/#beforetilerender) event is triggered while rendering each palette tile.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [ RibbonColorPicker ]
    },
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

## Combobox item events

### change

The [change](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or when the model value is changed by user.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#created) event is triggered once the Combobox is created.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### filtering

The [filtering](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#filtering) event triggers on typing a character in the Combobox.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonComboBoxSettings/#beforeOpen) event triggers before opening the popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## Dropdown item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before closing the DropdownButton popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before opening the Dropdown button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each Popup item of Dropdown button.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#open) event is triggered while opening the Dropdown button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### close

The [close](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#close) event is triggered while closing the Dropdown button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#created) event is triggered while selecting an action item in Dropdown button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonDropDownSettings/#select) event is triggered while selecting an action item in Dropdown button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## Split button item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before closing the Split button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before opening the Split button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each Popup item of Split button.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#open) event is triggered while opening the Split button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### close

The [close](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#close) event is triggered while closing the Split button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### created

The [created](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#created) event is triggered while selecting an action item in Split button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#select) event is triggered while selecting an action item in Split button popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

### click

The [click](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonSplitButtonSettings/#click) event is triggered while clicking the primary button in Split button.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

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

## File menu events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#beforeclose) event is triggered before closing the file menu popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [RibbonFileMenu]
    },
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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#beforeopen) event is triggered before opening the file menu popup.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [RibbonFileMenu]
    },
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

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon file menu item.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [RibbonFileMenu]
    },
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

### open

The [open](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#open) event is triggered when file menu popup is opened.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [RibbonFileMenu]
    },
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

### close

The [close](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#close) event is triggered when file menu popup is closed.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [RibbonFileMenu]
    },
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

### select

The [select](https://ej2.syncfusion.com/vue/documentation/api/ribbon/fileMenuSettings/#select) event is triggered while selecting an item in ribbon file menu.

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

<script>
  import Vue from "vue";
  import { RibbonPlugin, RibbonFileMenu } from "@syncfusion/ej2-vue-ribbon";
  Vue.use(RibbonPlugin);

  export default {
    provide: {
      ribbon: [RibbonFileMenu]
    },
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