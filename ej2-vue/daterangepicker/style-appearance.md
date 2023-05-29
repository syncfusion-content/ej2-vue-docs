---
layout: post
title: Style appearance in Vue Daterangepicker component | Syncfusion
description: Learn here all about Style appearance in Syncfusion Vue Daterangepicker component of Syncfusion Essential JS 2 and more.
control: Style appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style appearance in Vue Daterangepicker component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of DateRangePicker wrapper element

Use the following CSS to customize the appearance like height and font size of the wrapper element.

```
/* To specify height and font size */
.e-input-group input.e-input, .e-input-group.e-control-wrapper input.e-input {
        font-size: 20px;
        height: 40px;
}
```

## Customizing the DateRangePicker icon element

Use the following CSS to customize the DateRangePicker icon element

```
/* To specify background color and font size */
.e-input-group .e-input-group-icon:last-child, .e-input-group.e-control-wrapper .e-input-group-icon:last-child {
        background-color: darkgray;
        font-size: 14px;
}
```

## Customizing the DateRangePicker popup calendar header

Use the following CSS to customize the DateRangePicker popup calendar header

```
/* To specify background and height */
.e-daterangepicker.e-popup .e-range-header {
        background: beige;
        height: 80px;
}
```

## Customizing the DateRangePicker popup calendar header title

Use the following CSS to customize the DateRangePicker popup calendar header title

```
/* To specify color and font size */
.e-daterangepicker.e-popup .e-range-header .e-start-label, .e-daterangepicker.e-popup .e-range-header .e-end-label {
        color: brown;
        font-size: 30px;
}
```

## Customizing the DateRangePicker popup calendar content

Use the following CSS to customize the DateRangePicker popup calendar content

```
/* To specify background color */
.e-daterangepicker.e-popup .e-calendar {
        background-color: brown;
}
```

## Customizing the DateRangePicker popup calendar content title

Use the following CSS to customize the DateRangePicker popup calendar content title

```
/* To specify color and font size */
.e-daterangepicker.e-popup .e-calendar .e-header .e-title {
        color: beige;
        font-size: 20px;
}
```

## Customizing the DateRangePicker popup calendar previous and next icon

Use the following CSS to customize the DateRangePicker popup calendar previous and next icon

```
/* To specify font size */
.e-calendar .e-header .e-prev, .e-calendar .e-header .e-next, .e-bigger.e-small .e-calendar .e-header .e-prev, .e-bigger.e-small .e-calendar .e-header .e-next {
        font-size: 20px;
}
```

## Customizing the DateRangePicker popup calendar date cell grid on hovering

Use the following CSS to customize the DateRangePicker popup calendar date cell grid on hovering

```
/* To specify background color and border */
.e-calendar .e-content td:hover span.e-day {
        background-color: beige;
        border: 1px solid black;
}
```

## Customizing the DateRangePicker popup calendar primary button in footer

Use the following CSS to customize the DateRangePicker popup calendar primary button in footer

```
/* To specify background color and border color */
.e-daterangepicker.e-popup .e-footer .e-btn.e-apply.e-flat.e-primary:disabled, .e-daterangepicker.e-popup .e-footer .e-btn.e-apply.e-flat.e-primary:disabled, .e-daterangepicker.e-popup .e-footer .e-css.e-btn.e-apply.e-flat.e-primary:disabled, .e-daterangepicker.e-popup .e-footer .e-css.e-btn.e-apply.e-flat.e-primary:disabled {
        background-color: brown;
        border-color: black;  
}
```

## Customizing the DateRangePicker popup calendar cancel button in footer

Use the following CSS to customize the DateRangePicker popup calendar cancel button in footer

```
/* To specify background color, color, and border color */
.e-daterangepicker.e-popup .e-footer .e-btn.e-flat, .e-daterangepicker.e-popup .e-footer .e-css.e-btn.e-flat {
        background-color: beige;
        border-color: black;
        color: maroon;
}
```

## Customizing the footer element in the DateRangePicker popup calendar

Use the following CSS to customize the DateRangePicker popup calendar footer element

```
/* To specify background color, color, and border color */
.e-daterangepicker.e-popup .e-footer {
        background-color: beige;
        height: 50px;
}
```

## Customizing the selected date cell grid in the DateRangePicker popup calendar

Use the following CSS to customize the selected date cell grid in the DateRangePicker popup calendar

```
/* To specify background and border */
.e-calendar .e-content td.e-focused-date.e-today span.e-day {
        background: lightgrey;
        border: 1px solid black;
    }
```