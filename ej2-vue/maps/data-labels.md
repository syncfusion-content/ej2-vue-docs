---
layout: post
title: Data labels in Vue Maps component | Syncfusion
description: Learn here all about Data labels in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Data labels 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Vue Maps component

Data labels provide information to users about the shapes of the Maps component. It can be enabled by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#visible) property of the [dataLabelSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/) to **true**.

>To use the data label feature, the **DataLabel** module must be injected.

## Adding data labels

To display the data labels in the Maps, set the field name containing the text to be displayed from the data source or shape data in the [labelPath](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#labelpath) property of the `dataLabelSettings` property.

In the following example, the value of `labelPath` property is set from the field name in the shape data of the Maps layer.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs28" %}

In the following example, the value of `labelPath` property is set from the field name in the data source of the layer settings.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs29" %}

## Customization

The following properties are available in the `dataLabelSettings` to customize the data label of the Maps component.

* [border](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [fill](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#fill) - To apply the color of the data labels in Maps.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#opacity) - To customize the transparency of the data labels in Maps.
* [textStyle](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs30" %}

## Smart labels

The Maps component provides an option to handle the labels when they intersect with the corresponding shape borders using the [smartLabelMode](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#smartlabelmode) property. The following options are available in the `smartLabelMode` property.

* **None** -  It specifies that no action is taken, when a label exceeds the shape's region.
* **Hide** -  It specifies to hide the labels, when it exceeds the shape's region.
* **Trim** -  It specifies to trim the labels, when it exceeds the shape's region.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs31" %}

## Intersect action

The Maps component provides an option to handle the labels when a label intersects with another label using the [intersectionAction](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#intersectionaction) property. The following options are available in the `intersectionAction` property.

* **None** -  It specifies that no action is taken, when the labels intersect.
* **Hide** -  It specifies to hide the labels when they intersect.
* **Trim** -  It specifies to trim the labels when they intersect.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs32" %}

## Adding data label as a template

The custom elements can be added as a template in the data labels by using the [template](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel/#template) property of `dataLabelSettings` in the Maps component.

>The properties of data label such as, `smartLabelMode` , `intersectionAction`, `border`, `fill`, `opacity` and `textStyle` properties are not applicable to `template` property. The styles can be applied to the label template using the CSS styles of the HTML element.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs33" %}