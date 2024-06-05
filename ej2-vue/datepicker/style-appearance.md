---
layout: post
title: Style appearance in Vue Datepicker component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Vue Datepicker component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in Vue Datepicker component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DatePicker wrapper element

Use the following CSS to customize the appearance of wrapper element.

```
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        height: 40px;
        font-size: 20px;
}
```

## Customizing the DatePicker icon element

Use the following CSS to customize the DatePicker icon element

```
/* To specify background color and font size */
.e-input-group .e-input-group-icon:last-child, .e-input-group.e-control-wrapper .e-input-group-icon:last-child {
        font-size: 12px;
        background-color: darkgray;
}
```

## Customizing the Calendar popup of the DatePicker

Please check the below section, to customize the style and appearance of the Calendar component

[Customizing Calendar's style and appearance](../calendar/style-appearance/)

## Full screen mode support in mobiles and tablets

The DatePicker component's full-screen mode feature enables users to view the component popup element in full-screen mode on mobile devices with improved visibility and a better user experience. It is important to mention that this feature is exclusively available for mobile and tablet devices in both landscape and portrait orientations. To activate the full screen mode within the DatePicker component, simply set the [fullScreenMode](https://ej2.syncfusion.com/vue/documentation/api/datepicker#fullScreenMode) API value to `true`. This action will extend the calendar element to occupy the entire screen on mobile devices.

```html
<template>
    <div id="app">
    <ejs-datepicker :fullScreenMode="mobileMode" ></ejs-datepicker>
  </div>
</template>
<script setup>

import { DatePickerComponent } from '@syncfusion/ej2-vue-calendars';


export default {
   data () {
    return {
      mobileMode : true
    }
  }
}
</script>
```

![DatePickerFullScreen](../images/DatePickerFullScreen.gif)