---
layout: post
title: Label Appearance in Vue Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Label Appearance
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in Vue Diagram component

You can change the font style of the annotations with the font specific properties [`fontSize`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#fontsize), [`fontFamily`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#fontfamily), [`color`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#color).
The label’s [`bold`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#bold), [`italic`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#italic), and [`textDecoration`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#textdecoration) properties are used to style the label’s text.

The label’s [`fill`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#fill), [`strokeColor`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#strokecolor), and [`strokeWidth`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#strokewidth) properties are used to define the background color and border color of the annotation and the [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#opacity) property is used to define the transparency of the annotations.

The [`visible`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationmodel#visibility) property of the annotation enables or disables the visibility of annotation.

 The following code illustrates how to customize the appearance of the annotation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Appear-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Appear-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Appear-cs1" %}

## Horizontal and vertical alignment

The following tables illustrates all the possible alignments visually with 'offset (0, 0)'.

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Label Alignment](../images/Label1.png) |
| Center | Top | ![Center Top Label Alignment](../images/Label2.png) |
| Right | Top |  ![Right Top Label Alignment](../images/Label3.png) |
| Left | Center | ![Left Center Label Alignment](../images/Label4.png) |
| Center | Center| ![Center Center Label Alignment](../images/Label5.png) |
| Right | Center | ![Right Center Label Alignment](../images/Label6.png) |
| Left | Bottom | ![Left Bottom Label Alignment](../images/Label7.png) |
| Center | Bottom | ![Center Bottom Label Alignment](../images/Label8.png) |
| Right |Bottom |![Right Bottom Label Alignment](../images/Label9.png) |

The following codes illustrates how to align annotations.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Alignment-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Alignment-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Alignment-cs1" %}

## Annotation Margin

[`Margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationmodel#margin) is an absolute value used to add some blank space in any one of its four sides. The annotations can be displaced with the margin property. The following code example illustrates how to align a annotation based on its `offset`, `horizontalAlignment`, `verticalAlignment`, and [`margin`](https://ej2.syncfusion.com/vue/documentation/api/diagram/marginmodel) values.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Margin-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Margin-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Margin-cs1" %}

## Hyperlink

Diagram provides a support to add a [`hyperlink`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationmodel#hyperlink) for the nodes/connectors annotation. It can also be customized with the below properties.

A User can open the hyperlink in the new window, the same tab and the new tab by using the  [`hyperlinkOpenState`](https://ej2.syncfusion.com/vue/documentation/api/diagram/hyperlinkmodel#hyperlinkopenstate) property.

The [`content`](https://ej2.syncfusion.com/vue/documentation/api/diagram/hyperlinkmodel#content) property of `hyperlink` is used to display the content of the hyper link display text. The [`color`](https://ej2.syncfusion.com/vue/documentation/api/diagram/hyperlinkmodel#color) property of the `hyperlink` is used to display the color of the hyper link.
The [`textDecoration`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textdecoration) property is used to decorate the hyper link text with **Underline**, **LineThrough**, **Overline**. The following example illustrates how to define and customize hyper link in both node and connector.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Link-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Link-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Link-cs1" %}

## Rotate Annotation

Annotation can be rotated by setting the [`rotateAngle`](https://ej2.syncfusion.com/vue/documentation/api/diagram/shapeannotationmodel#rotateangle) property of the annotation. The following example shows how to rotate annotation text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/RotateAnnotation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/RotateAnnotation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/RotateAnnotation-cs1" %}

## Template support for annotation

Diagram provides template support for annotation. You can either define a string template and assign it to [`template`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationmodel#template) property of annotation or define a annotation template in html file and assign it to the [`annotationTemplate`](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#annotationtemplate) property of the diagram.

### String template

For string template you should define a SVG/HTML content as string in the annotation's [`template`](https://ej2.syncfusion.com/vue/documentation/api/diagram/annotationmodel#template) property.

The following code illustrates how to define a template in annotation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/labeltemplate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/labeltemplate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/labeltemplate-cs1" %}

N> For the proper alignment of template, we need to mention width and height for the annotation while using template.

### Annotation template

For annotation template you should define a template in html file which you want to render in annotation and assign it to the [`annotationTemplate`](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#annotationtemplate) property of diagram. This template can be applied to both nodes and connectors within the diagram.

The following code illustrates how to define a annotationTemplate in annotation for nodes and connectors.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Opacity-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Opacity-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Opacity-cs1" %}

### Functional template

We can define a function which would return a string template and assign that method to the `annotationTemplate` property of diagram. Inside that function we can do customizations based on the id of the annotation.

The following code illustrates how to define a functional template.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/AnnotationTemplate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/AnnotationTemplate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/AnnotationTemplate-cs1" %}

## Text align

The [`textAlign`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#textalign) property of annotation allows you to set how the text should be aligned (left, right, center, or justify) inside the text block. The following codes illustrate how to set textAlign for an annotation.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/TextAlign-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/TextAlign-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/TextAlign-cs1" %}

The following table shows the different text alignment.

|Text Align|Output image|
|-----|-----|
|Right|![Text align right](../images/textAlign-right.png)|
|Left|![Text align left](../images/textAlign-left.png)|
|Center|![Text align center](../images/textAlign-center.png)|
|Justify|![Text align justify](../images/textAlign-Justify.png)|

## Text Wrapping

When text overflows node boundaries, you can control it by using [`text wrapping`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#textwrapping). So, it is wrapped into multiple lines. The wrapping property of annotation defines how the text should be wrapped. The following code illustrates how to wrap a text in a node.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Wrap-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Wrap-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Wrap-cs1" %}

| Value | Description | Image |
| -------- | -------- | -------- |
| No Wrap | Text will not be wrapped. | ![Label No Wrap](../images/Wrap1.png) |
| Wrap | Text-wrapping occurs, when the text overflows beyond the available node width. | ![Label Wrap](../images/Wrap2.png) |
| WrapWithOverflow (Default) | Text-wrapping occurs, when the text overflows beyond the available node width. However, the text may overflow beyond the node width in the case of a very long word. | ![Label WrapWith Overflow](../images/Wrap3.png) |

## Text overflow

The label’s [`TextOverflow`](https://ej2.syncfusion.com/vue/documentation/api/diagram/textstylemodel#textoverflow) property is used control whether to display the overflowed content in node or not. 

- `Clip` - The text which overflowing node's bounds will be removed.
- `Ellipsis` - The text which overflowing nodes's bounds will be replaced by three dots.
- `Wrap` - Entire text will be rendered overflowing in y-axis and wrapped in x-axis.

Types of text overflow are shown in below table.

|TextOverflow|output image|
|-----|-----|
|Clip|![Text Overflow Clip](../images/text-overflow-clip.png)|
|Ellipsis|![Text Overflow Ellipsis](../images/text-overflow-ellipsis.png)|
|Wrap(Default)|![Text Overflow Wrap](../images/text-overflow-wrap.png)|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Overflow-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/labels/Overflow-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/labels/Overflow-cs1" %}
