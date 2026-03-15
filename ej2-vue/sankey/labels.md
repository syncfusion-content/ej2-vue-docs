---
layout: post
title: Labels in Vue Sankey Chart component | Syncfusion
description: Learn here all about Labels in Syncfusion Vue Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Labels
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Labels in Vue Sankey Chart component

Labels display descriptive text associated with nodes in the Sankey Chart, making the diagram more understandable and interpretable. The Sankey Chart provides comprehensive label customization options including visibility control, font styling, individual label configuration, and dynamic rendering events.

This guide covers label appearance configuration, visibility control, font styling, and advanced label customization.

## Label Settings Properties

The `labelSettings` property provides options to control label appearance, text styling, and visibility. These properties apply globally to all node labels.

### Label Configuration Properties

| Property   | Type              | Default | Description                                             |
|------------|-------------------|---------|---------------------------------------------------------|
| visible    | boolean           | true    | Shows or hides all node labels.                         |
| fontSize   | string \| number  | '12px'  | Font size of the labels.                                |
| color      | string            | ''      | Text color of the labels.                               |
| fontFamily | string            | null    | Font family for the label text.                         |
| fontWeight | string            | '400'   | Font weight (e.g., '400' for normal, '700' for bold).   |
| fontStyle  | string            | 'normal'| Font style (e.g., 'normal' or 'italic').               |
| padding    | number            | 10      | Space around the label text.                            |

Configure global label styling for all nodes by setting properties like font size, color, font family, and font weight.

Here is an example of customizing label appearance:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/customization-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/labels/customization-cs1" %}

## Hiding Labels

Control label visibility using the `visible` property in `labelSettings`. Set it to `false` to hide all node labels, which can be useful for creating cleaner visualizations when labels take up too much space:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/hidden-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/hidden-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/labels/hidden-cs1" %}

## Font Styling

Apply custom font styling to all labels using properties such as:

- **`fontSize`**: Adjust text size (e.g., '12px', '14px')
- **`fontFamily`**: Specify font family (e.g., 'Arial', 'Times New Roman')
- **`fontWeight`**: Control text thickness ('400' = normal, '700' = bold)
- **`fontStyle`**: Apply text styling ('normal' or 'italic')
- **`color`**: Set text color (hex or color names)

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/fontstyle-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/fontstyle-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/labels/fontstyle-cs1" %}

## Individual Node Labels

Customize the appearance of specific node labels by configuring the `label` property on each node object. This allows you to override global label settings for specific nodes, enabling data-driven label customization:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/individual-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/individual-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/labels/individual-cs1" %}

## Advanced Label Configuration

### Dynamic Label Customization

Use the `labelRendering` event to customize label text, styling, and appearance dynamically during the render process. This event is triggered for each label before rendering, allowing you to apply conditional formatting, modify text, or adjust styling based on data values:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/rendering-event-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/sankey/labels/rendering-event-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/labels/rendering-event-cs1" %}
