---
layout: post
title: Modules in Vue Ribbon Component | Syncfusion
description: Check out and learn about Modules in Syncfusion Ribbon Vue Component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Ribbon component

The following modules are available in Ribbon. If the module injection type is **selective**, manual injection is required to extend the Ribbon's functionality.

| Module | Description | Module Injection Type |
|------|-------------|------|
| `RibbonButton` | To use the built-in button as a ribbon item. | default |
| `RibbonCheckBox` | To use the built-in checkbox as a ribbon item.| default |
| `RibbonDropDown` | To use the built-in dropdown button as a ribbon item.| default |
| `RibbonSplitButton` | To use the built-in split button as a ribbon item.| default |
| `RibbonComboBox` | To use the built-in combobox as a ribbon item. | default |
| `RibbonColorPicker` | Inject this module to use the built-in colorpicker as a ribbon item.| selective |
| `RibbonFileMenu` | Inject this module to use the file menu feature.| selective |

These selective modules should be injected into the `provide` section and use `ribbon` as a key of the object.

```html
<template>
  <ejs-ribbon>
    // Render Tabs here
  </ejs-ribbon>
</template>

<script>
    import { RibbonFileMenu, RibbonColorPicker } from "@syncfusion/ej2-vue-ribbon";
    export default {
        provide: {
            ribbon: [RibbonFileMenu, RibbonColorPicker]
        },
    };
</script>
```