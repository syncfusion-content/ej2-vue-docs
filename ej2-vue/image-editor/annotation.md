---
layout: post
title: Annotation in Vue Image Editor component | Syncfusion
description: Add, customize, and delete text, freehand, and shape annotations such as rectangles, ellipses, arrows, paths, and lines in the Vue Image Editor.
control: Annotation
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Annotation in the Vue Image Editor component

The Vue Image Editor allows adding annotations to the image, including text, freehand drawings, and shapes like rectangles, ellipses, arrows, paths, and lines. This gives the flexibility to mark up the image with notes, sketches, and other visual elements as needed. These annotation tools can help to communicate and share ideas more effectively. Users can draw multiple annotations simultaneously, enhancing creative flexibility. Furthermore, every action, including customizations, will be tracked in the undo/redo collection, ensuring a seamless user experience and making it easier to experiment with different designs.

## Text annotation

The text annotation feature in the Image Editor provides the capability to add and customize labels, captions, and other text elements directly onto the image. With this feature, you can easily insert text at specific locations within the image and customize various aspects of the text to meet your requirements.

You can customize the following options for a text annotation including text content, font family, font style, font color, fill color, stroke color, stroke width, font size, rotation, and text decorations (bold, italic, underline, strikethrough).

### Add a text

The [drawText](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawtext) method in the Vue Image Editor allows you to insert a text annotation into the image with specific customization options. This method accepts the following parameters:

* `x`: Specifies the x-coordinate of the text, determining its horizontal position within the image (in pixels).

* `y`: Specifies the y-coordinate of the text, determining its vertical position within the image (in pixels).

* `text`: Specifies the actual text content to be added to the image.

* `fontFamily`: Specifies the font family of the text, allowing you to choose a specific typeface or style for the text.

* `fontSize`: Specifies the font size of the text in pixels.

* `bold`: Specifies whether the text should be displayed in bold style. Set to `true` for bold text, and `false` for regular text.

* `italic`: Specifies whether the text should be displayed in italic style. Set to `true` for italic text, and `false` for regular text.

* `color`: Specifies the font color of the text (CSS color value, e.g., `#FF0000` or `red`).

* `isSelected`: Specifies whether to show the text in the selected state (`boolean`).

* `degree`: Specifies the degree to rotate the text (number, `0`–`360`).

* `fillColor`: Specifies the background color of the text (CSS color value).

* `strokeColor`: Specifies the outline color of the text annotation.

* `strokeWidth`: Specifies the outline stroke width of the text annotation (in pixels).

* `transformCollection`: Specifies the transform collection applied to the text annotation.

* `underline`: Specifies whether the text should be underlined (`boolean`).

* `strikethrough`: Specifies whether the text should have a strikethrough (`boolean`).

Using the `drawText` method with these parameters, you can precisely position and customize text annotations within the image. This provides the flexibility to add labels, captions, or other text elements with specific font styles, sizes, and colors, enhancing the visual presentation and clarity of the image.

Here is an example of adding a text in a button click using `drawText` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs1" %}

### Multiline text

The [drawText](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawtext) method in the Vue Image Editor component is commonly used to insert text annotations into an image. If the provided text parameter contains a newline character (\n), the text will be automatically split into multiple lines, with each line appearing on a separate line in the annotation.

Here is an example of adding a multiline text in a button click using `drawText` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs27/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs27/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs27" %}

### Delete an annotation

The [deleteShape](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#deleteshape) method removes any annotation (text, freehand drawing, or shape) from the image editor. To use this method, pass the `shapeId` of the annotation as a parameter. 

The `shapeId` is a unique identifier assigned to each text annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired text element. By specifying the `shapeId` associated with the text annotation you want to remove, you can effectively delete it from the image editor.

To retrieve the inserted text annotations, you can utilize the [getShapeSetting](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#getshapesetting) method, which provides a collection of annotations represented by [ShapeSettings](https://ej2.syncfusion.com/vue/documentation/api/image-editor/shapesettings). This method allows you to access and work with the annotations that have been inserted into the image.

Here is an example of deleting a text in a button click using `deleteShape` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs28" %}

### Customize font family and text color

The [shapeChanging](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#shapechanging) event in the Image Editor component is triggered when a text annotation is being modified or changed through the toolbar interaction. This event provides an opportunity to make alterations to the text's color and font family by adjusting the relevant properties. 

By leveraging the `shapeChanging` event, you can enhance the customization options for text annotations and provide a more tailored and interactive experience within the Image Editor component. 

Here is an example of changing the text’s color and its font family using the `shapeChanging` event. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs29" %}

### Add additional font families

The [fontFamily](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#fontfamily) property in the Image Editor control provides the flexibility to incorporate supplementary font families, expanding your options for text styling and ensuring a broader range of fonts can be utilized within your design or content. The font value will be determined by the `id` property.

By leveraging the `fontFamily` property, you can elevate the scope of customization for text annotations, enriching the user experience within the Image Editor control. This enhancement offers a more personalized and dynamic interaction, empowering users to tailor their text styles for a truly engaging editing experience.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs44/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs44/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs44" %}

### Formatting text with bold, italic, underline, and strikethrough

The [drawText](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawtext) method in the Image Editor component allows you to insert a text annotation into the image with specific customization options. Applying these styles enhances the text by improving readability and emphasizing key information, where bold increases visual weight to highlight important points, italic adds a slanted emphasis or creative touch, underline draws a line beneath the text for clarity or separation, and strikethrough places a line through text to indicate removal or outdated content. These formatting options enable users to make their annotations more visually distinctive and effective in conveying information.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs11/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs11/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs11" %}

## Freehand drawing

The Freehand Draw annotation tool in the Vue Image Editor component is a versatile feature that allows users to draw and sketch directly on the image using mouse or touch input. This tool provides a flexible and creative way to add freehand drawings or annotations to the image.

The [freehandDraw](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#freehanddraw) method is used to enable or disable the freehand drawing option in the Vue Image Editor component.

Here is an example of using the `freeHandDraw` method in a button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs2" %}

### Adjust the stroke width and color 

The [shapeChanging](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#shapechanging) event in the Vue Image Editor component is triggered when a freehand annotation is being modified or changed through the toolbar interaction. This event provides an opportunity to make alterations to the freehand annotation's color and stroke width by adjusting the relevant properties. 

By leveraging the `shapeChanging` event, you can enhance the customization options for freehand annotations and provide a more tailored and interactive experience within the Image Editor component. 

Here is an example of changing the freehand draw stroke width and color using the `shapeChanging` event.  

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs34/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs34/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs34" %}

### Delete a freehand drawing

The [deleteShape](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#deleteshape) method in the Vue Image Editor allows you to remove a freehand annotation from the image editor. To use this method, you need to pass the `shapeId` of the annotation as a parameter.

The `shapeId` is a unique identifier assigned to each freehand annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired annotation. By specifying the `shapeId` associated with the freehand annotation you want to remove, you can effectively delete it from the image editor.

To retrieve the inserted freehand annotations, you can utilize the [getShapeSetting](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#getshapesetting) method, which provides a collection of annotations represented by [ShapeSettings](https://ej2.syncfusion.com/vue/documentation/api/image-editor/shapesettings). This method allows you to access and work with the annotations that have been inserted into the image.

Here is an example of deleting a freehand annotation in a button click using `deleteShape` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs33/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs33" %}

## Shape annotation

The Image Editor component provides the ability to add shape annotations to an image. These shape annotations include rectangles, ellipses, arrows, paths, and lines, allowing you to highlight, emphasize, or mark specific areas or elements within the image. 

### Add a rectangle /ellipse / line / arrow / path

The [drawRectangle](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawrectangle) method is used to insert a rectangle to the Vue Image Editor component. Rectangle annotations are valuable tools for highlighting, emphasizing, or marking specific areas of an image to draw attention or provide additional context.

The `drawRectangle` method in the Vue Image Editor component takes 10 parameters to define the properties of the rectangle annotation:

* `x`: Specifies the x-coordinate of the top-left corner of the rectangle (in pixels).

* `y`: Specifies the y-coordinate of the top-left corner of the rectangle (in pixels).

* `width`: Specifies the width of the rectangle (in pixels).

* `height`: Specifies the height of the rectangle (in pixels).

* `strokeWidth`: Specifies the stroke width of the rectangle's border (in pixels).

* `strokeColor`: Specifies the stroke color of the rectangle's border (CSS color value).

* `fillColor`: Specifies the fill color of the rectangle (CSS color value).

* `degree`: Specifies the degree to rotate the rectangle (`0`–`360`).

* `isSelected`: Specifies whether to show the rectangle in the selected state (`boolean`).

* `borderRadius`: Specifies the border radius (in pixels) to apply to the rectangle's corners.

The [drawEllipse](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawellipse) method is used to insert an ellipse in the Vue Image Editor component. Ellipse annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The `drawEllipse` method in the Vue Image Editor component takes 9 parameters to define the properties of the ellipse annotation:

* `x`: Specifies the x-coordinate of the center of the ellipse (in pixels).

* `y`: Specifies the y-coordinate of the center of the ellipse (in pixels).

* `radiusX`: Specifies the horizontal radius of the ellipse (in pixels).

* `radiusY`: Specifies the vertical radius of the ellipse (in pixels).

* `strokeWidth`: Specifies the width of the ellipse's stroke/border (in pixels).

* `strokeColor`: Specifies the color of the ellipse's stroke/border (CSS color value).

* `fillColor`: Specifies the fill color of the ellipse (CSS color value).

* `degree`: Specifies the degree to rotate the ellipse (`0`–`360`).

* `isSelected`: Specifies whether to show the ellipse in the selected state (`boolean`).

The [drawLine](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawline) method is used to insert a line in the Vue Image Editor component. Line annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The `drawLine` method in the Vue Image Editor component takes 7 parameters to define the properties of the line annotation:

* `startX`: Specifies the x-coordinate of the start point (in pixels).

* `startY`: Specifies the y-coordinate of the start point (in pixels).

* `endX`: Specifies the x-coordinate of the end point (in pixels).

* `endY`: Specifies the y-coordinate of the end point (in pixels).

* `strokeWidth`: Specifies the stroke width of the line (in pixels).

* `strokeColor`: Specifies the stroke color of the line (CSS color value).

* `isSelected`: Specifies whether to show the line in the selected state (`boolean`).

The [drawArrow](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawarrow) method is used to insert an arrow in the Vue Image Editor component. Arrow annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The `drawArrow` method in the Vue Image Editor component takes 9 parameters to define the properties of the arrow annotation:

* `startX`: Specifies the x-coordinate of the start point (in pixels).

* `startY`: Specifies the y-coordinate of the start point (in pixels).

* `endX`: Specifies the x-coordinate of the end point (in pixels).

* `endY`: Specifies the y-coordinate of the end point (in pixels).

* `strokeWidth`: Specifies the stroke width of the arrow (in pixels).

* `strokeColor`: Specifies the stroke color of the arrow (CSS color value).

* `arrowStart`: Specifies the arrowhead at the start of the arrow, using `ImageEditorArrowHeadType` (e.g., `None`, `Arrow`, `Circle`, `Square`, `Diamond`).

* `arrowEnd`: Specifies the arrowhead at the end of the arrow, using `ImageEditorArrowHeadType` (e.g., `None`, `Arrow`, `Circle`, `Square`, `Diamond`).

* `isSelected`: Specifies whether to show the arrow in the selected state (`boolean`).

The [drawPath](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawpath) method is used to insert a path in the Vue Image Editor component. Path annotations are valuable for highlighting, emphasizing, or marking specific areas of an image.

The `drawPath` method in the Vue Image Editor component takes 4 parameters to define the properties of the path annotation:

* `points`: Specifies the collection of x and y coordinates as `ImageEditorPoint` objects that define the path. Example structure: `[{ x: 50, y: 50 }, { x: 100, y: 100 }, { x: 150, y: 75 }]`.

* `strokeWidth`: Specifies the stroke width of the path (in pixels).

* `strokeColor`: Specifies the stroke color of the path (CSS color value).

* `isSelected`: Specifies whether to show the path in the selected state (`boolean`).

Here is an example of inserting rectangle, ellipse, arrow, path, and line in a button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs3" %}

### Delete a shape

The [deleteShape](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#deleteshape) method in the Vue Image Editor allows you to remove a shape annotation from the image editor. To use this method, you need to pass the `shapeId` of the annotation as a parameter.

The `shapeId` is a unique identifier assigned to each shape annotation within the image editor. It serves as a reference to a specific annotation, enabling targeted deletion of the desired annotation. By specifying the `shapeId` associated with the shape annotation you want to remove, you can effectively delete it from the image editor.

To retrieve the inserted shape annotations, you can utilize the [getShapeSetting](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#getshapesetting) method, which provides a collection of annotations represented by [ShapeSettings](https://ej2.syncfusion.com/vue/documentation/api/image-editor/shapesettings). This method allows you to access and work with the annotations that have been inserted into the image.

Here is an example of deleting rectangle, ellipse, arrow, path, and line in a button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs24/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs24/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs24" %}

### Customize default stroke color for shapes

We provide default settings for stroke color, stroke width, fill color, and other customizations. If users wish to modify only the default options while preserving their previously selected customizations, they can do so by using the [shapeChanging](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#shapechanging) event. Within this event, users can update the values in the `currentShapeSettings` object to apply their own preferences instead of the defaults. This approach allows conditional updates to the `currentShapeSettings`, ensuring that only the desired defaults are changed while maintaining the other settings.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs54/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs54/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs54" %}

## Image annotation

The image annotation feature in the Image Editor provides the capability to add and customize images directly onto the image. With this feature, you can easily insert an image or icon at a specific location within the image and customize various aspects of the image to meet your requirements. You have control over the customization options including rotate, flip, and transparency for the image annotation.

### Add an image annotation

The [drawImage](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#drawimage) method serves the purpose of inserting an image into the Image Editor control, allowing for image annotations to be added. These image annotations can be used for various purposes, such as adding logos, watermarks, or decorative elements to the image.

The `drawImage` method in the Image Editor control takes 9 parameters to define the properties of the image annotation:

* `data`: Specifies the image data or URL of the image to be inserted.

* `x`: Specifies the x-coordinate of the top-left corner of the image (in pixels).

* `y`: Specifies the y-coordinate of the top-left corner of the image (in pixels).

* `width`: Specifies the width of the image (in pixels).

* `height`: Specifies the height of the image (in pixels).

* `isAspectRatio`: Specifies whether the image is rendered with aspect ratio or not.

* `degree`: Specifies the degree to rotate the image (`0`–`360`).

* `opacity`: Specifies the opacity of the inserted image (number, `0`–`1`, where `0` is fully transparent and `1` is fully opaque).

* `isSelected`: Specifies whether to show the image in the selected state (`boolean`).

In the following example, you can use the `drawImage` method in the button click event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs43/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs43/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs43" %}