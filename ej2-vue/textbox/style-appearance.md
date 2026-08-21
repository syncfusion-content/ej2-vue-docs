---
layout: post
title: Style and Appearance in Vue TextBox | Syncfusion
description: Restyle the Syncfusion Vue TextBox wrapper, placeholder, and float label by overriding its CSS for custom height, font, color, and asterisks.
control: Style appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Vue TextBox

The following content provides the exact CSS structure that can be used to modify the control’s appearance based on the user preference.

## Customizing the appearance of TextBox wrapper element

Use the following CSS to customize the appearance of wrapper element.

```
/* To specify height and font size */
.e-input:not(:valid), .e-input:valid, .e-float-input.e-control-wrapper input:not(:valid), .e-float-input.e-control-wrapper input:valid, .e-float-input input:not(:valid), .e-float-input input:valid, .e-input-group input:not(:valid), .e-input-group input:valid, .e-input-group.e-control-wrapper input:not(:valid), .e-input-group.e-control-wrapper input:valid, .e-float-input.e-control-wrapper textarea:not(:valid), .e-float-input.e-control-wrapper textarea:valid, .e-float-input textarea:not(:valid), .e-float-input textarea:valid, .e-input-group.e-control-wrapper textarea:not(:valid), .e-input-group.e-control-wrapper textarea:valid, .e-input-group textarea:not(:valid), .e-input-group textarea:valid {
        font-size: 30px;
        height: 40px;
}
```

## Customizing the TextBox placeholder

Use the following CSS to customize the TextBox placeholder

```
/* To specify font size and color */
.e-float-input.e-control-wrapper:not(.e-error) input:valid ~ label.e-float-text, .e-float-input.e-control-wrapper:not(.e-error) input ~ label.e-label-top.e-float-text {
        color: pink;
        font-size: 15px;
}
```