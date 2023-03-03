---
layout: post
title: Api markerSettings in Vue Chart component | Syncfusion
description: Learn here all about Api markerSettings in Syncfusion Vue Chart component of Syncfusion Essential JS 2 and more.
control: Api markerSettings 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Api markerSettings in Vue Chart component

 Configures the marker in the series.

## Properties

### border [`BorderModel`](https://ej2.syncfusion.com/vue/documentation/api-borderModel.html)

Options for customizing the border of a marker.

### dataLabel [`DataLabelSettingsModel`](https://ej2.syncfusion.com/vue/documentation/api-dataLabelSettingsModel.html)

The data label for the series.

### fill `string`

 The fill color of the marker that accepts value in hex and rgba as a valid CSS color string. By default, it will take series' color.

Defaults to *null*

### height `number`

The height of the marker in pixels.

Defaults to *5*

### imageUrl `string`

The URL for the Image that is to be displayed as a marker.  It requires marker `shape` value to be an `Image`.

Defaults to *''*

### opacity `number`

The opacity of the marker.

Defaults to *1*

### shape `string`

The different shape of a marker:
* Circle
* Rectangle
* Triangle
* Diamond
* HorizontalLine
* VerticalLine
* Pentagon
* InvertedTriangle
* Image

Defaults to *'Circle'*

### visible `boolean`

If set to true the marker for series is rendered. This is applicable only for line and area type series.

Defaults to *false*

### width `number`

The width of the marker in pixels.

Defaults to *5*
