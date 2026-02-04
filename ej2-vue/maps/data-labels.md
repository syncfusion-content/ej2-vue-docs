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

Data labels display information about Maps shapes. Enable data labels by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#visible) property of the [dataLabelSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel) to **true**.

>To use the data label feature, the **DataLabel** module must be injected.

## Adding data labels

To display data labels, specify the field name containing the label text in the [labelPath](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#labelpath) property of [dataLabelSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel). The field can come from either the shape data or the layer data source.

The following example sets [labelPath](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#labelpath) from a field in the shape data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs28/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs28/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs28" %}

The following example sets [labelPath](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#labelpath) from a field in the layer data source.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs29/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs29/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs29" %}

## Customization

Customize data label appearance using the following properties in  [dataLabelSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel).

* [border](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [fill](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#fill) - To apply the color of the data labels in Maps.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#opacity) - To customize the transparency of the data labels in Maps.
* [textStyle](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs30/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs30/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs30" %}

## Label animation

Animate data labels during initial rendering by setting the [animationDuration](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#animationduration) property in the `dataLabelSettings`. Specify the duration in milliseconds.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs106/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs106/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs106" %}

## Smart labels

Control label behavior when labels exceed shape boundaries using the [smartLabelMode](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#smartlabelmode) property. The following modes are available:

* **None** -  It specifies that no action is taken, when a label exceeds the shape's region.
* **Hide** -  It specifies to hide the labels, when it exceeds the shape's region.
* **Trim** -  It specifies to trim the labels, when it exceeds the shape's region.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs31/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs31/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs31" %}

## Intersect action

Control label behavior when labels overlap with other labels using the [intersectionAction](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#intersectionaction) property. The following options are available:

* **None** -  It specifies that no action is taken, when the labels intersect.
* **Hide** -  It specifies to hide the labels when they intersect.
* **Trim** -  It specifies to trim the labels when they intersect.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs32/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs32/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs32" %}

## Adding data label as a template

Add custom HTML elements as data label templates using the [template](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel#template) property of [dataLabelSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/dataLabelSettingsModel).

>The `smartLabelMode`, `intersectionAction`, `animationDuration`, `border`, `fill`, `opacity`, and `textStyle` properties do not apply to templates. Apply styles to label templates using standard CSS for HTML elements.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs33/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/maps/getting-started-cs33/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs33" %}