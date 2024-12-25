---
layout: post
title: Style in Vue Range slider component | Syncfusion
description: Learn here all about Style in Syncfusion Vue Range slider component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style in Vue Range slider component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on user preferences.

## Customizing the slider track

Use the following CSS to customize the slider track.

```
.e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {
    background: #007bff;
    height: 3px;
}
```

## Customizing the slider handle

Use the following CSS to customize the slider handle properties.

```
.e-control-wrapper.e-slider-container .e-slider .e-handle {
    background-color: #f9920b;
    border-radius: 50%;
    border: 0;
}
```

## Customizing the slider limits

Use the following CSS to customize the slider limits.

```
.e-control-wrapper.e-slider-container.e-horizontal .e-limits {
    background-color: rgba(69, 100, 233, 0.46);
}
```

## Customizing the slider ticks

Use the following CSS to customize the slider ticks.

```
.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}
```

## Customizing the slider buttons

Use the following CSS to customize the slider buttons.

```
.e-control-wrapper.e-slider-container .e-slider-button {
    background: #007bff;
    height: 25px;
    width: 25px;
}
```