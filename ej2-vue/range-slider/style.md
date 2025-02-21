---
layout: post
title: Style in Vue Range Slider component | Syncfusion
description: Learn here all about Style in Syncfusion Vue Range Slider component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style in Vue Range Slider component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on user preferences.

## Customizing the Slider track

Use the following CSS to customize the Slider track.

```
.e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {
    background: #007bff;
    height: 3px;
}
```

## Customizing the Slider handle

Use the following CSS to customize the Slider handle properties.

```
.e-control-wrapper.e-slider-container .e-slider .e-handle {
    background-color: #f9920b;
    border-radius: 50%;
    border: 0;
}
```

## Customizing the Slider limits

Use the following CSS to customize the Slider limits.

```
.e-control-wrapper.e-slider-container.e-horizontal .e-limits {
    background-color: rgba(69, 100, 233, 0.46);
}
```

## Customizing the Slider ticks

Use the following CSS to customize the Slider ticks.

```
.e-scale .e-tick.e-custom::before {
    content: '\e967';
    position: absolute;
}
```

## Customizing the Slider buttons

Use the following CSS to customize the Slider buttons.

```
.e-control-wrapper.e-slider-container .e-slider-button {
    background: #007bff;
    height: 25px;
    width: 25px;
}
```