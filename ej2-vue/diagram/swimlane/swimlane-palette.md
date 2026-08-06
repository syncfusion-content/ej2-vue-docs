---
layout: post
title: Swim lane palette in Vue Diagram | Syncfusion®
description: Add swimlanes and phases to the symbol palette in the Syncfusion® Vue Diagram so users can drag them onto the canvas as reusable shapes.
control: Swim lane in symbol palette 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Swim lane palette in Vue Diagram

## Add swimlane to palette

[Vue Diagram](https://www.syncfusion.com/vue-components/vue-diagram) provides support to add swimlane and phases to symbol palette. The following code sample illustrate how to add swimlane and phases to palette.

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
