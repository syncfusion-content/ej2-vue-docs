---
layout: post
title:  Swim lane in symbol palette Vue Diagram component | Syncfusion®
description: Learn here all about Swim lane in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Swim lane in symbol palette 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

## Add swimlane to palette

Diagram provides support to add swimlane and phases to symbol palette. The following code sample illustrate how to add swimlane and phases to palette.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/palette-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/swimlane/palette-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/swimlane/palette-cs1" %}

### Drag and drop swimlane to palette

* The drag and drop support for swimlane shapes has been provided.
* Horizontal lanes can be added to vertical swimlanes, and vice versa.
* The phase will only drop on swimlane shape with same orientation. The following image illustrates how to drag symbol from palette.
![Drag Symbol from Palette](../images/swimlane-drag-dropGif.gif)
