---
layout: post
title: Selection cropping in Vue Image editor component | Syncfusion
description: Learn here all about Selection cropping in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
control: Selection cropping 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Selection cropping in the Vue Image Editor component

The cropping feature in the Image Editor allows you to select and crop specific regions of an image. It offers different selection options, including custom shapes, squares, circles, and various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9.

To perform a selection, you can use the [`select`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#select) method, which allows you to define the desired selection area within the image. Once the selection is made, you can then use the [`crop`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#crop) method to crop the image based on the selected region. This enables you to extract and focus on specific parts of the image while discarding the rest.

## Insert custom / square / circle region 

The [`select`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#select) method allows to perform selection based on the type of selection. Here, the `select` method is used to perform the selection as custom, circle, or square. The selection region can also be customized using the select method based on the parameters below. 

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

The [`select`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#select) method is used to perform the selection with the various aspect ratios such as 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 5:7, 7:5, 9:16, and 16:9. The selection region can also be customized using the `select` method based on the parameters below. 

type - Specify the type of selection 

startX - Specify the x-coordinate of the selection region’s starting point 

startY - Specify the y-coordinate of the selection region’s starting point 

Here is an example of ratio selection using the `select` method.

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

The [`crop`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#crop) method allows cropping based on the selected region. Here is an example of cropping the selection region using the `crop` method. 

Here is an example of circle cropping using the [`select`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#select) and `crop` method.

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

The [`cropping`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#cropping) event is triggered when performing cropping on the image. This event is passed an object that contains information about the cropping event, such as the start and end point of the selection region. And this event uses [`CropEventArgs`](https://helpej2.syncfusion.com/vue/documentation/api/image-editor/cropEventArgs/) to handle the cropping action in the image.

The parameter available in the `cropping` event is, 

CroppingEventArgs.startPoint – The x and y coordinates of a start point as ImageEditorPoint of the selection region. 

CroppingEventArgs.endPoint - The x and y coordinates of an end point as ImageEditorPoint of the selection region. 

CroppingEventArgs.cancel - To cancel the cropping action.

### Maintaining original image size during cropping 

In the image editor, when an image is cropped, it is usually enlarged or scaled to improve visibility within the user interface. If you want to prevent this scaling and maintain the original cropping size, you can bind to the ‘[`cropping`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#cropping)’ event and set the `preventScaling` value to true. This not only keeps the image size consistent during cropping but also ensures that the saved image retains its original cropping size without being enlarged.

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

The selection region can be changed programmatically by using [`selectionChanging`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#selectionchanging) event. This event is activated during resizing the selection using mouse, and it allows for alterations to the selection region by adjusting the specified properties. 

The [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/selectionChangeEventArgs/#selectionchangeeventargs) is used in this event to customize the selection and it has the following parameters.

SelectionChangeEventArgs.action - The type of action such as inserting or resizing.

SelectionChangeEventArgs.currentSelectionPoint - Represents all the details of the selection including its type, position, width, and height after the current action as CropSelectionSettings. 

SelectionChangeEventArgs.previousSelectionPoint - Represents all the details of the selection including its type, position, width, and height before this current action as CropSelectionSettings.

### Locking selection area during cropping 

When selecting an area for cropping, users can typically resize the selection from all corners and edges. If you want to prevent the resizing of the selection area, you can bind to the [`resizing`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#resizing) event and set `cancel` to true. This will lock the selection area, preventing any adjustments to its size.

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

Users can perform cropping either through the toolbar or by using our public methods. While predefined ratio selections are available in the toolbar, users can also crop with custom ratios using our public method, [`select`](https://ej2.syncfusion.com/javascript/documentation/api/image-editor/#select). Regardless of the ratio type used, the selection will adhere to the specified ratio, even when resizing the selection area.

Here is an example of cropping with a custom ratio selection using the [selectionChanging](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#selectionchanging) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs55/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/image-editor/getting-started-cs55/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs55" %}