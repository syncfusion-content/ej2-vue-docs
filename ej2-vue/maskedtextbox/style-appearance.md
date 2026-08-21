---
layout: post
title: Style and Appearance in Vue MaskedTextBox | Syncfusion
description: Customize the Syncfusion Vue MaskedTextBox wrapper, input, and hover styles using CSS overrides for font, border, and height.
control: Style appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Vue MaskedTextBox

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on the user preference.

## Customizing the appearance of MaskedTextBox wrapper element

Use the following CSS to customize the appearance of wrapper element.

```
/* To specify height, font size, and border */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input, .e-input-group textarea.e-input, .e-input-group.e-control-wrapper textarea.e-input {
        font-size: 20px;
        border-color: red;
        height: 40px;
        border: 2px solid;
  }
```

## Customizing the MaskedTextBox element on hovering

Use the following CSS to customize the Input Mask element on hovering

```
/* To specify border */
.e-input-group input.e-input, .e-input-group input.e-input:hover:not(.e-success):not(.e-warning):not(.e-error):not([disabled]):not(:focus), .e-input-group.e-control-wrapper input.e-input,.e-input-group.e-control-wrapper input.e-input:hover:not(.e-success):not(.e-warning):not(.e-error):not([disabled]):no(:focus){
      border: 3px solid red;
}
```