---
layout: post
title: Style Appearance Customization | Syncfusion
description: Learn here all about Style in Syncfusion Vue Rich text editor component of Syncfusion Essential JS 2 and more.
control: Style Appearance Customization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style Appearance Customization in the Vue Rich Text Editor component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the Rich Text Editor content

Use the following CSS to customize the default Rich Text Editor's content properties like font-family, font-size and color.

```css
/* To change font family and font size */
.e-richtexteditor .e-rte-content .e-content,
.e-richtexteditor .e-source-content .e-content {
    font-size: 20px;
    font-family: Segoe ui;
}

/* To change font color and content background */
.e-richtexteditor .e-rte-content,
.e-richtexteditor .e-source-content {
    background: seashell;
    color: blue;
}
```

## Customizing the Rich Text Editor's toolbar

Use the following CSS to customize the default color in the Rich Text Editor's toolbar icon.

```css
/* To change font color for toolbar icon */
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons,
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons:active {
    color: red;
}

/* To change font color for toolbar button */
.e-toolbar .e-tbar-btn,
.e-toolbar .e-tbar-btn:active,
.e-toolbar .e-tbar-btn:hover {
    color: red;
}

/* To change font color for toolbar button in active state*/
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-icons, .e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-rte-dropdown-btn-text {
    color: red;
}

/* To change font color for expanded toolbar items */
.e-richtexteditor .e-rte-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn .e-icons,
.e-toolbar.e-extended-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn {
    color: red;
}
```

## Customizing Character Count Display

Use the following CSS to customize the default color in the Rich Text Editor's character count.

```css
/* To change font color, font family, font size and opacity  */
.e-richtexteditor .e-rte-character-count {
    color: red;
    font-family: segoe ui;
    font-size: 18px;
    opacity: 00.54;
    padding-bottom: 2px;
    padding-right: 14px;
}
```

## Customizing Placeholder Text

Use the following CSS to customize the default color in the Rich Text Editor's placeholder.

```CSS

.e-richtexteditor .e-rte-placeholder {
    color: blue;
    font-family: monospace;
}

```

## Customizing Border Color

Use the following CSS to customize the border color in the Rich Text Editor's container.

```CSS

.e-richtexteditor .e-rte-container{
    border: 2px solid #454bc1;
    border-radius: 4px;
}

```
## See Also

* [Text Styling and Formatting](./font-styling)