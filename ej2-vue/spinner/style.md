---
layout: post
title: Style in Vue Spinner | Syncfusion
description: Customize Vue Spinner appearance with CSS that targets the e-spinner-pane and e-spin-material or e-spin-fabric classes to change the stroke color per theme.
control: Style 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Style in Vue Spinner

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the spinner

Use the following CSS to customize the spinner stroke color.

### Material theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-material {
  stroke: green;
}

```

### Fabric theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-fabric {
  stroke: green;
}

```

### Bootstrap theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-bootstrap {
    fill: green;
    stroke: green;
}

```

### Bootstrap4 theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-bootstrap4 {
    stroke: green;
}

```

### High Contrast theme

```css

.e-spinner-pane .e-spinner-inner .e-spin-high-contrast .e-path-arc {
    stroke: green;
}

```