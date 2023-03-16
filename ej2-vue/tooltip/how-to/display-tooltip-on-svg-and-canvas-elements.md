---
layout: post
title: Display tooltip on svg and canvas elements in Vue Tooltip component | Syncfusion
description: Learn here all about Display tooltip on svg and canvas elements in Syncfusion Vue Tooltip component of Syncfusion Essential JS 2 and more.
control: Display tooltip on svg and canvas elements 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Display tooltip on svg and canvas elements in Vue Tooltip component

Tooltip can be displayed on both SVG and Canvas elements. You can directly attach the `<svg>` or `<canvas>` elements to show tooltips on data visualization elements.

## SVG

Create the SVG square element and refer to the following code snippet to render the tooltip on SVG square.

```ts

<ejs-tooltip target='#square'  cssClass='e-tooltip-css' content='SVG Square'>
    <svg>
    <rect id="square" class="shape" x="50" y="20" width="50" height="50" style="fill:#FDA600;stroke:none;stroke-width:5;stroke-opacity:0.9" />
    </svg>
</ejs-tooltip>

```

## Canvas

Create the canvas circle element and refer to the following code snippet to render the tooltip on Canvas circle.

```ts

<ejs-tooltip target='#circle'  cssClass='e-tooltip-css' content='Canvas Circle'>
    <canvas id="circle" class="shape" width="60" height="60"></canvas>
</ejs-tooltip>

```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/tooltip/canvas-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tooltip/canvas-cs1" %}