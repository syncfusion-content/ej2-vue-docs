---
layout: post
title: Selection and Cropping in Vue Image Editor component | Syncfusion
description: Select custom, square, circle, or aspect-ratio regions in the Vue Image Editor and crop the image to the chosen area using the select and crop methods.
control: Selection and Cropping
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection and Cropping in the Vue Image Editor component

The cropping feature in the Image Editor allows you to select and crop specific regions of an image. The selection can be a custom rectangle, a square, a circle, or an aspect-ratio region. Supported aspect ratios are `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `5:7`, `7:5`, `9:16`, and `16:9`.

To perform a selection, call the [select](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#select) method to define the desired selection area within the image. Once the selection is made, call the [crop](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#crop) method to crop the image to that region. This enables you to extract and focus on specific parts of the image while discarding the rest.

## Insert custom / square / circle region

The [select](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#select) method allows to perform selection based on the type of selection. Here, the `select` method is used to perform the selection as custom, circle, or square. The selection region can also be customized using the select method based on the parameters below.

type - Specify the type of selection 

startX - Specify the x-coordinate of the selection region’s starting point 

startY - Specify the y-coordinate of the selection region’s starting point 

width - Specify the width of the selection region 

height - Specify the height of the selection region 

Here is an example of square selection using the `select` method. 

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs12" %}

## Insert selection based on aspect ratio

The [select](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#select) method also supports aspect-ratio selections: `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `5:7`, `7:5`, `9:16`, and `16:9`. Pass the ratio as the `type` and (optionally) the starting coordinates:

* `type`: The aspect ratio as a string — e.g., `'16:9'`, `'4:3'`, `'1:1'`.
* `startX` (optional): The x-coordinate of the selection region's starting point, in pixels.
* `startY` (optional): The y-coordinate of the selection region's starting point, in pixels.

The following example shows a ratio selection using the `select` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs14" %}

## Crop an image

The [crop](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#crop) method allows cropping based on the selected region. Here is an example of cropping the selection region using the `crop` method.

Here is an example of circle cropping using the [select](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#select) and `crop` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs15" %}

## Cropping event

The [cropping](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#cropping) event fires when cropping is performed on the image. The event receives a [CropEventArgs](https://ej2.syncfusion.com/vue/documentation/api/image-editor/cropEventArgs) object that contains the start and end points of the selection region.

The parameter available in the `cropping` event is, 

* `CroppingEventArgs.startPoint` – The x and y coordinates of a start point as ImageEditorPoint of the selection region. 

* `CroppingEventArgs.endPoint` - The x and y coordinates of an end point as ImageEditorPoint of the selection region. 

* `CroppingEventArgs.cancel` - To cancel the cropping action.

### Maintaining original image size during cropping

When an image is cropped, the editor typically scales it up to improve visibility within the canvas. To prevent this scaling and keep the original cropping size, bind to the [cropping](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#cropping) event and set `args.preventScaling` to `true`. This keeps the image size consistent during cropping and ensures the saved image retains its original cropping size without being enlarged.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs65/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs65/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs65" %}

## SelectionChanging event

The selection region can be changed programmatically by using [selectionChanging](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#selectionchanging) event. This event is activated during resizing the selection using mouse, and it allows for alterations to the selection region by adjusting the specified properties.

The [SelectionChangeEventArgs](https://ej2.syncfusion.com/vue/documentation/api/image-editor/selectionchangeeventargs) is used in this event to customize the selection and it has the following parameters.

* [SelectionChangeEventArgs.action](https://ej2.syncfusion.com/vue/documentation/api/image-editor/selectionchangeeventargs#action) - The type of action such as inserting or resizing.

* [SelectionChangeEventArgs.currentSelectionPoint](https://ej2.syncfusion.com/vue/documentation/api/image-editor/selectionchangeeventargs#currentselectionsettings) - Represents all the details of the selection including its type, position, width, and height after the current action as CropSelectionSettings. 

* [SelectionChangeEventArgs.previousSelectionPoint](https://ej2.syncfusion.com/vue/documentation/api/image-editor/selectionchangeeventargs#previousselectionsettings) - Represents all the details of the selection including its type, position, width, and height before this current action as CropSelectionSettings.

### Locking selection area during cropping

By default the selection area can be resized from all corners and edges. To lock it to its current size, bind to the [resizing](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#resizing) event and set `cancel` to true. This will lock the selection area, preventing any adjustments to its size.
{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs56/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs56/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs56" %}

### Cropping with custom ratio selection

Users can perform cropping either through the toolbar or by using our public methods. While predefined ratio selections are available in the toolbar, users can also crop with custom ratios using our public method, [select](https://ej2.syncfusion.com/javascript/documentation/api/image-editor#select). Regardless of the ratio type used, the selection will adhere to the specified ratio, even when resizing the selection area.

Here is an example of cropping with a custom ratio selection using the [selectionChanging](https://ej2.syncfusion.com/vue/documentation/api/image-editor/index-default#selectionchanging) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs55/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs55/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs55" %}