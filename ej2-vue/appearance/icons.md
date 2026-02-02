---
layout: post
title: Icons in Vue Appearance component | Syncfusion
description: Learn here all about Icons in Syncfusion Vue Appearance component of Syncfusion Essential JS 2 and more.
control: Icons 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Predefined Icons Library in Syncfusion<sup style="font-size:70%">&reg;</sup> Vue Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> icon library provides a collection of pre-designed icons to enhance application user interfaces. These icons are base64-formatted font icons that help create a cohesive, visually appealing design across applications.

## Referring icons in the Vue application

Using the below approaches, the icons can be referenced in the Vue application.

* [npm package](#the-npm-package) - Install and import icons from the npm package
* [CDN reference](#cdn-reference) - Link to icons via CDN for quick setup

### The npm package

All Syncfusion<sup style="font-size:70%">&reg;</sup> theme icons are available in the [ej2-icons](https://www.npmjs.com/package/@syncfusion/ej2-icons) package, published on [npmjs.com](https://www.npmjs.com/~syncfusionorg). This package contains CSS and SCSS theme files for all Syncfusion<sup style="font-size:70%">&reg;</sup> themes.

Icons can be used from the npm package `ej2-icons`. To use the icons, install the npm package using the following command:

```bash
 npm install @syncfusion/ej2-icons
```

Refer to the following syntax to use icons in a Vue application:

`[src/App.vue]`

```
<style>
@import "../node_modules/@syncfusion/ej2-icons/styles/<theme_name>.css";
</style>
```

**Example:**

```
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
```

### CDN reference

All Syncfusion<sup style="font-size:70%">&reg;</sup> theme icons are available on the CDN. Instead of using a local resource on the server, use a cloud CDN to refer to the icons.

Make sure that the version of the icons in the URL matches the version of the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue package. This will prevent compatibility issues and ensure that the correct version of the icons is loaded.

To use the icons from the CDN, refer to the icons by URLs in the application. This can be done by linking the icons in the HTML file by adding a link tag to the head section.

```
// Bootstrap5
<head>
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet"/>
</head>
//Material
<head>
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/material.css" rel="stylesheet"/>
</head>
```

## Steps to use icons library

Let's create a Vue application using the following command:

For an introduction and configuration of the common specifications, see [getting started with the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue application](https://ej2.syncfusion.com/vue/documentation/getting-started/tutorial).

### Using icons directly in HTML element

The built-in Syncfusion<sup style="font-size:70%">&reg;</sup> icons can be rendered directly in the HTML element by defining the `e-icons` class, which contains the font-family and common properties of font icons, and defining the available icon's class with the `e-` prefix.

The following steps explain the direct rendering of the Syncfusion<sup style="font-size:70%">&reg;</sup> icon in the HTML element.

1. Add the class name `e-icons` to the HTML element that needs to render the icon.

2. Add the icon class with corresponding icon content from the [available icons](#available-icons). For example, the below code snippet represents the paste icon class.

    ```
    .e-paste:before {
        content:'\e355';
    }
    ```

3. Add `e-icons` and `e-paste` classes to the HTML element.

    ```
    <span class="e-icons e-paste"></span>
    ```

4. Add the CDN link reference of icons library in the `~index.html` file.

    ```
    <link href="https://cdn.syncfusion.com/ej2/ej2-icons/styles/bootstrap5.css" rel="stylesheet" />
    ```

   The below code snippet represents a complete example of icon usage.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs1" %}

### Icon size
The `ej2-icons` package supports different icon sizes to optimize for touch or mouse interactions. Use the pre-defined size classes to adjust icon dimensions:

* `e-small` - Sets the icon size to 8px
* `e-medium` - Sets the icon size to 16px
* `e-large` - Sets the icon size to 24px

**Example:**

```html
<span class="e-icons e-small e-search"></span>
<span class="e-icons e-medium e-search"></span>
<span class="e-icons e-large e-search"></span>
```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs2" %}

### Icon appearance customization

The Syncfusion<sup style="font-size:70%">&reg;</sup> Vue icons can be customized with custom color and size by overriding the `e-icons` class. Customizing the icons in the library can be useful for making the icons more visually appealing and fitting to the design of the application. For example, a user can change the color of an icon to match the color scheme of their application, or increase the size of an icon to make it more visible on smaller screens. It may also be useful for creating a consistent look and feel across different parts of the application. Overall, customizing the icons in the library can improve the overall user experience of the application.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/common/animation-multiple-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/animation-multiple-cs3" %}

## Available icons

The complete package of Essential<sup style="font-size:70%">&reg;</sup> JS 2 icons is listed below. The corresponding icon content can be referred in the content section.

<!-- markdownlint-disable MD033 -->

### Material 3

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material3/demo.html" style="height:1000px;width:100%;"></iframe>

### Material

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material/demo.html" style="height:1000px;width:100%;"></iframe>

### Fabric

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fabric/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap 4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap4/demo.html" style="height:1000px;width:100%;"></iframe>

### Bootstrap 5

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap5/demo.html" style="height:1000px;width:100%;"></iframe>

### High Contrast

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/highcontrast/demo.html" style="height:1000px;width:100%;"></iframe>

### Tailwind CSS

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind/demo.html" style="height:1000px;width:100%;"></iframe>

### Tailwind 3.4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind3/demo.html" style="height:1000px;width:100%;"></iframe>

### Fluent 2

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent2/demo.html" style="height:1000px;width:100%;"></iframe>

### Fluent

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent/demo.html" style="height:1000px;width:100%;"></iframe>