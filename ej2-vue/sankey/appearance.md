---
layout: post
title: Appearance in Vue Sankey Chart component | Syncfusion
description: Learn here all about Appearance in Syncfusion Vue Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Appearance 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue Sankey Chart component

The Sankey Chart provides comprehensive customization options to control visual appearance, dimensions, responsiveness, colors, borders, and themes. These appearance settings enable you to create diagrams that match your application's design system and user experience requirements. This guide covers dimension configuration, responsive sizing, backgrounds, borders, margins, and theme selection.

## Dimensions
Control the size of the Sankey Chart using the `width` and `height` properties. You can specify dimensions in pixels (px) or percentages (%) to create fixed or responsive layouts.

### Width and Height Properties

| Property | Type   | Default | Description                                      |
|----------|--------|---------|--------------------------------------------------|
| width    | string | null    | Width of the chart as a CSS value (e.g., '700px' or '100%'). |
| height   | string | null    | Height of the chart as a CSS value (e.g., '420px' or '100%'). |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/dimensions-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/dimensions-cs1" %}

## Responsive Sizing
Use percentage-based dimensions for responsive layouts that adapt to container sizes. This is recommended for applications that need to work across different device sizes and screen orientations:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/responsive-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/responsive-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/responsive-cs1" %}

## Background Customization
Customize the background of the Sankey Chart with solid colors or background images to match your application's theme or create specific visual effects.

### Background Properties

| Property        | Type   | Default | Description                          |
|-----------------|--------|---------|--------------------------------------|
| background      | string | null    | Background color of the chart (CSS color value). |
| backgroundImage | string | null    | Background image URL.                |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/background-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/background-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/background-cs1" %}

## Border Customization
Customize the border of the Sankey Chart container.

### Border Properties

| Property          | Type   | Default | Description                                      |
|-------------------|--------|---------|--------------------------------------------------|
| border.color      | string | ''      | Border color. Accepts values in hex or RGBA as valid CSS color strings. |
| border.width      | number | 1       | Border width in pixels.                          |
| border.dashArray  | string | ''      | Sets the length of dashes in the stroke of border. |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/border-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/border-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/border-cs1" %}

## Margin Customization
Control the spacing around the chart content using margins.

### Margin Properties

| Property       | Type   | Default | Description                  |
|----------------|--------|---------|------------------------------|
| margin.left    | number | 10      | Left margin in pixels.       |
| margin.right   | number | 10      | Right margin in pixels.      |
| margin.top     | number | 10      | Top margin in pixels.        |
| margin.bottom  | number | 10      | Bottom margin in pixels.     |

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/margin-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/margin-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/margin-cs1" %}

## Theme
The Sankey Chart provides multiple built-in themes to customize the visual appearance. Apply a theme using the `theme` property.

### Theme Configuration

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/theme-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/appearance/theme-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/appearance/theme-cs1" %}