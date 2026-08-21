---
layout: post
title: Style and Appearance in Vue Numeric Textbox | Syncfusion
description: Customize the Syncfusion Vue Numeric Textbox wrapper and spin icons with CSS overrides for height, font, and background.
control: Style appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Vue Numeric Textbox

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on the user preference.

## Customizing the appearance of NumericTextBox wrapper element

Use the following CSS to customize the appearance of wrapper element.

```
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input {
        height: 40px;
        font-size: 20px;
}
```

## Customizing the NumericTextBox icons

Use the following CSS to customize the Numeric TextBox icons

```
/* To specify font size and background color */
.e-numeric.e-control-wrapper.e-input-group .e-input-group-icon {
        font-size: 20px;
        background-color: beige;
}
```