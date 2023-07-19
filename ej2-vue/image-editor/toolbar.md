---
layout: post
title: Toolbar in Vue Image editor component | Syncfusion
description: Learn here all about Toolbar in Syncfusion Vue Image editor component of Syncfusion Essential JS 2 and more.
control: Toolbar 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in the Vue Image Editor component

The toolbars in the Image Editor are a key component for interacting with and editing images. They provide a range of tools and options that can be customized to suit the needs and preferences. Add or remove items from the toolbar to create a personalized set of tools, or they can even create their own custom toolbar from scratch. This flexibility and customization allow them to create a unique image editing experience that is tailored to their specific needs and workflow. 

In the Image Editor, the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property provides the ability to customize the toolbar by adding or removing items, as well as defining a completely custom toolbar. This feature is valuable for creating a personalized image editing experience that aligns with specific requirements and workflows. 

## Built-in toolbar items

Specifies the toolbar items to perform UI interactions. Refer to the built-in toolbar items for the default value.

* Crop
* Transform
* Annotate
* ZoomIn
* ZoomOut
* Open
* Reset
* Save
* Pan

## Add a custom toolbar items

Users can define their own toolbars for an image editor by customizing the items or the entire toolbar. Users can achieve this by using the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property.

The built-in toolbar can be customized using the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property, so the specified toolbar items can be enabled in the Image Editor toolbar. And the contextual toolbar which is enabled while inserting annotations can also be customized in the [`toolbarUpdating`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbarupdating) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs16" %}

## Show or hide a toolbar 

The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property controls the visibility of the toolbar in the Image Editor. When the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property is set to an empty list, the toolbar is hidden. Conversely, if the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property contains a list of items, the toolbar is shown, displaying the specified items. This feature provides flexibility for users to personalize their image editing experience. 

Here is an example of hiding the toolbar of the image editor using [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property. 

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs35/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs35" %}

## Enable or disable a toolbar item 

The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property is employed to enable or disable toolbar items in the Image Editor. By default, the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property includes the default toolbar items, and these items cannot be disabled. However, if you have defined custom toolbar items using the toolbarItemModel, you can enable or disable them by configuring their respective properties within the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property. This provides the flexibility to control the availability and functionality of custom toolbar items based on your specific requirements. 

Here is an example of disabling the custom toolbar item using [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property.

## Enable or disable a contextual toolbar item 

The toolbarItems property in the toolbarEventArgs is used to enable or disable contextual toolbar items in the Image Editor. To enable or disable the default toolbar items, you can accomplish this by setting the Disabled property to true in the ImageEditorToolbarItemModel within the ToolbarItems property. This allows you to selectively enable or disable specific default toolbar items based on your requirements, providing a customized toolbar experience in the Image Editor.

## Show or hide a toolbar item

The [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property controls the visibility of the toolbar in the Image Editor. When the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property is set to an empty list, the toolbar is hidden. Conversely, if the [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property contains a list of items, the toolbar is shown, displaying the specified items. This feature provides flexibility for users to personalize their image editing experience. 

Here is an example of hiding the toolbar of the image editor using [`toolbar`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbar) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs36/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs36" %}

## Toolbar template

The [`toolbarTemplate`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbartemplate) property in the Image Editor provides the capability to fully customize the toolbar by supplying a custom template. This feature is valuable when you want to create a distinct and personalized image editing experience that goes beyond the default toolbar or the customizable toolbar options offered by the Image Editor. By defining a custom template for the toolbar, you have complete control over its layout, appearance, and functionality. This empowers you to design a unique and tailored toolbar that aligns perfectly with your specific requirements and desired user experience. 

Here is an example of using [`toolbarTemplate`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbartemplate) to render only the button to toggle the freehand draw option. 
The toolbar of the Image Editor can be replaced with the user specific UI using the [`toolbarTemplate`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbartemplate) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs17" %}

## Customize contextual toolbar

The [`toolbarUpdating`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbarupdating) event is triggered when inserting or selecting annotations, which opens the contextual toolbar in the Image Editor. Within this event, the [`toolbarItems`](https://helpej2.syncfusion.com/vue/documentation/api/image-editor/toolbarEventArgs/#toolbaritems) property in the [`ToolbarEventArgs`](https://helpej2.syncfusion.com/vue/documentation/api/image-editor/toolbarEventArgs/) is utilized to add or remove contextual toolbar items.

In the following example, the contextual toolbar for rectangle will be rendered with only stroke color by excluding fill color and stroke width using [`toolbarUpdating`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbarupdating) event.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs18" %}

## Toolbar item clicked event 

The [`toolbarItemClicked`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbaritemclicked) event is triggered when a toolbar item is clicked in the Image Editor. This event is particularly useful when you have added custom options to both the main toolbar and contextual toolbar, as it allows you to capture the user's interaction with those custom options. By subscribing to the [`toolbarItemClicked`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbaritemclicked) event, you can execute specific actions or handle logic based on the toolbar item that was clicked. 

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs40/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs40" %}

## Toolbar created event 

The [`toolbarCreated`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbarcreate) event is triggered after the toolbar is created in the Image Editor. This event can be useful when you need to perform any actions or make modifications to the toolbar once it is fully initialized and ready for interaction. By subscribing to the [`toolbarCreated`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbarcreate) event, you can access the toolbar object and perform tasks such as adding event handlers, customizing the appearance, or configuring additional functionality. 

## Add an additional contextual Toolbar item to text shape 

The contextual toolbar that appears when inserting annotations in the Image Editor is customizable using the [`toolbarUpdating`](https://ej2.syncfusion.com/vue/documentation/api/image-editor/#toolbarupdating) event. This event is triggered when the contextual toolbar is rendered, allowing you to modify its contents. To add additional toolbar items to the contextual toolbar, you can access the [`toolbarItems`](https://helpej2.syncfusion.com/vue/documentation/api/image-editor/toolbarEventArgs/#toolbaritems) property of the object within the event handler. By adding or removing items from the [`toolbarItems`](https://helpej2.syncfusion.com/vue/documentation/api/image-editor/toolbarEventArgs/#toolbaritems) property based on the Item property, you can customize the options available in the contextual toolbar according to your needs. This gives you the ability to extend the functionality of the contextual toolbar and provide additional tools and options for working with inserted annotations.  

Here is an example of adding the custom toolbar item to the contextual toolbar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/image-editor/getting-started-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/getting-started-cs4" %}