---
layout: post
title: Vue Grid Header Customization | Syncfusion
description: Learn how to customize header styles in Vue Data Grid with header templates, icons, and interactive header elements.
control: Header 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Header Style in Vue Data Grid

You can customize the appearance of the header elements in the [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) component using CSS. Here are examples of how to customize the Grid header, header cell, and header cell div element.

## Customizing the grid header

To customize the appearance of the Grid header root element, you can use the following CSS code:

```css

.e-grid .e-gridheader {
    border: 2px solid green;
}
```
In this example, the **.e-gridheader** class targets the Grid header root element. You can modify the `border` property to change the style of the header border. This customization allows you to override the thin line between the header and content of the grid.

![Grid header](../images/grid-header.png)

## Customizing the grid header cell

To customize the appearance of the grid header cell elements, you can use the following CSS code:

```css

.e-grid .e-headercell {
    color: #ffffff;
    background-color: #1ea8bd;
}

```
In this example, the **.e-headercell** class targets the header cell elements. You can modify the `color` and `background-color` properties to change the text color and background of the header cells.

![Grid header cell](../images/grid-header-cell.png)

## Customizing the grid header cell div element

To customize the appearance of the grid header cell div element, you can use the following CSS code:

```css

.e-grid .e-headercelldiv {
    font-size: 15px;
    font-weight: bold;
    color: darkblue;
}
```
In this example, the **.e-headercelldiv** class targets the div element within the header cell. You can modify the `font-size`, `font-weight`, `color` properties to change the font size, font-weight and color of the header text content.

![Grid header cell div element](../images/grid-header-cell-div-element.png)