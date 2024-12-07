---
layout: post
title: Swim lane in Vue Diagram component | Syncfusion®
description: Learn here all about Swim lane in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Swim lane 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Swim lane in Vue Diagram component

A swimlane is a type of diagram node commonly used to visualize the relationship between a business process and the department responsible for it. It focuses on illustrating the logical connections between activities, making it simpler to grasp the dynamics of the process and the corresponding departmental responsibilities.

![Swimlane](images/swimlane-image.png)

## Create a swimlane

To create a swimlane, the type of shape should be set as [`swimlane`](https://ej2.syncfusion.com/vue/documentation/api/diagram/swimLaneModel/).By default, swimlanes are arranged horizontally.

The following code example illustrates how to define a swimlane object.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/swimlane/swimlaneheader-cs1" %}

## Headers

Header was the primary element for swimlanes. The [`header`](https://ej2.syncfusion.com/vue/documentation/api/diagram/headerModel/) property of swimlane allows you to define its textual description and customize its appearance.

>Note: By using this header, the swimlane interaction will be performed,like selection, dragging,etc.

The following code example illustrates how to define a swimlane header.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/swimlaneheader-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/swimlane/swimlaneheader-cs2" %}

### Customization of headers

The height and width of swimlane header can be customized with [`width`](https://ej2.syncfusion.com/vue/documentation/api/diagram/headerModel/#width) and [`height`](https://ej2.syncfusion.com/vue/documentation/api/diagram/headerModel/#height) properties of swimlane header. set fill color of header by using the [`style`](https://ej2.syncfusion.com/vue/documentation/api/diagram/headerModel/#style)property. The orientation of the swimlane can be customized with the [`orientation`](https://ej2.syncfusion.com/vue/documentation/api/diagram/swimLaneModel/#orientation) property of the header.

>Note: By default, the swimlane orientation is horizontal.

The following code example illustrates how to customize the swimlane header.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/headercustomize-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/headercustomize-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/swimlane/headercustomize-cs1" %}

#### Dynamic customization of swimlane header

You can customize the swimlane header style and text properties dynamically. The following code illustrates how to dynamically customize the swimlane header..

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/dynamicheader-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/dynamicheader-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/swimlane/dynamicheader-cs1" %}

### Header editing

Diagram provides the support to edit swimlane headers at runtime. We achieve the header editing by double click event. Double clicking the header label will enables the editing of that. The following image illustrates how to edit the swimlane header.  ![Header Editing](images/swimlane-header-edit.gif).

## Orientation

Swimlanes can be oriented in two ways: horizontally or vertically. This flexibility allows for versatile visualization of business processes and departmental relationships.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/orientation-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/orientation-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/swimlane/orientation-cs1" %}

## Limitations

* Connectors cannot be added directly to swimlane.