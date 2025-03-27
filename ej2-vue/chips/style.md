---
layout: post
title: Style in Vue Chips component | Syncfusion
description: Learn here all about style and appearance in Syncfusion Vue Chip component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style in Vue Chips component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the Chip text

Use the following CSS to customize the chip text properties.

```
.e-chip .e-chip-text {
    font-size: 20px;
    color: black;
    font-weight: normal;
}
```

## Customizing the Chip icon

Use the following CSS to customize the chip icon properties.

```
.e-chip .e-icon {
    background-image: url('https://ej2.syncfusion.com/demos/src/chips/images/laura.png');
    opacity: 0.8;
}
```

## Customizing the Chip delete button

Use the following CSS to customize the chip delete button.

```
.e-chip-list .e-chip .e-chip-delete.e-dlt-btn {
    color: #e3165b;
    font-size: 12px;
}
```

## Customizing the Chip outline

Use the following CSS to customize the chip outline.

```
.e-chip-list .e-chip.e-outline {
    border-color: #e3165b;
    border-width: 3px;
}
```

## Customizing the Chip on selection

Use the following CSS to customize the chip on selection.

```
/* To customize single chip on selection */
.e-chip-list.e-selection .e-chip.e-active {
    background-color: #ffca1c;
    color: #e3165b;
}

/* To customize multiple chip on selection */
.e-chip-list .e-chip.e-active {
    background-color: #e3165b;
    color: white;
}
```

## Customizing the Chip avatar text

Use the following CSS to customize the chip avatar text properties.

```
.e-chip-list .e-chip .e-chip-avatar {
    background-color: #d51a1a;
    color: #fafafa;
}
```

## Customizing the Chip height

Use the following CSS to customize the Chips height.

```
.e-chip-list.e-chip {
    height: 60px;
  }
```
