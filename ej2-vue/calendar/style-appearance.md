---
layout: post
title: Style appearance in Vue Calendar component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Vue Calendar component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in Vue Calendar component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the background color for the Calendar

Use the following CSS to customize the background color and border for the Calendar.

```
/* To specify background color and border */
.e-calendar {
        background-color: peachpuff;
        border: 3px solid red;
}
```

## Customizing the Calendar date elements on hovering

Use the following CSS to customize the date elements on hovering in the Calendar.

```
/* To specify background color, color, and border */
.e-calendar .e-content td:hover span.e-day, .e-calendar .e-content td:focus span.e-day, .e-bigger.e-small .e-calendar .e-content td:hover span.e-day, .e-bigger.e-small .e-calendar .e-content td:focus span.e-day {
        background-color: red;
        border: 2px solid;
        color: #212529;
}
```

## Customizing the border of date cell grid

Use the following CSS to add the border to the date cell grid.

```
/* To specify border */
.e-calendar .e-content span.e-day, .e-bigger.e-small .e-calendar .e-content span.e-day {
        border: 1px solid;
}
```

## Customizing the Calendar title

Use the following CSS to customize the Calendar title.

```
/* To specify color and font size  */
.e-calendar .e-header .e-title, .e-bigger.e-small .e-calendar .e-header .e-title {
        color: black;
        font-size: 20px;
}
```

## Customizing the previous and next icon

Use the following CSS to customize the previous and next icon.

```
/* To specify color and border  */
.e-calendar .e-header span, .e-bigger.e-small .e-calendar .e-header span {
        border: 1px solid;
        color: chocolate;
}
```

## Customizing the footer button

Use the following CSS to customize the footer button.

```
/* To specify background color, color, and border-color  */
.e-calendar .e-btn.e-today.e-flat.e-primary, .e-calendar .e-css.e-btn.e-today.e-flat.e-primary {
        background-color: red;
        border-color: black;
        color: black;
}
```

## Customizing the selected date cell grid

Use the following CSS to customize the selected date cell grid in Calendar.

```
/* To specify background color and color  */
.e-calendar .e-content td.e-focused-date.e-today span.e-day {
        background-color: maroon;
        color: #fff;
}
```

## Customizing the content header in Calendar

Use the following CSS to customize the content header in Calendar.

```
/* To specify background */
.e-calendar .e-content thead, .e-bigger.e-small .e-calendar .e-content thead {
    background: aquamarine;
}
```