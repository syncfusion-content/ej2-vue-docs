---
layout: post
title: User interactions in Vue Maps component | Syncfusion
description: Learn here all about User interactions in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: User interactions 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# User interactions in Vue Maps component

## Zooming

The zooming feature is used to zoom in and out of Maps to show in-depth information. It is controlled by the [`zoomFactor`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#zoomfactor) property of the [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel). The [`zoomFactor`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#zoomfactor) is increased or decrease dynamically based on zoom in and out interaction.

<b>Enable zooming</b>

Zooming of Maps is enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/) to **true**.

<b>Enable panning</b>

To enable the panning feature, set the [`enablePanning`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#enablepanning) property of [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel) to **true**.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            enablePanning: true
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

### Various type of zooming

Zooming can be performed in following types:

#### Zooming toolbar

By default, the toolbar is rendered with **zoom-in**, **zoom-out**, and **reset** options when it is set to **true** in the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#enable) property of [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/).

The following options are available in toolbar.

1. Zoom - Provides rectangular zoom support.
2. ZoomIn - Zoom in the Maps.
3. ZoomOut - Zoom out the Maps.
4. Pan - Switches to panning if rectangular zoom is activated.
5. Reset - Restores the Maps to the default view.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            buttonSettings: {
                toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
            }
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

#### Pinch zooming

To enable or disable the pinch zooming, use the [`pinchZooming`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#pinchzooming) property in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel).

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            pinchZooming: true
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

#### Single-click zooming

To enable or disable the single-click zooming, use the [`zoomOnClick`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#zoomonclick) property in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel).

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            zoomOnClick: true
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

#### Double-click zooming

To enable or disable the double-click zooming, use the [`doubleClickZoom`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#doubleclickzoom) property in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/).

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            doubleClickZoom: true
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

#### Mouse wheel zooming

To enable or disable mouse wheel zooming, use the [`mouseWheelZoom`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#mousewheelzoom) property in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/).

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            mouseWheelZoom: true
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

#### Selection zooming

To enable or disable selection zooming, use the [`enableSelectionZooming`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#enableselectionzooming) property in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/). The [`enablePanning`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#enablepanning) property must be set to **false** to enable the selection zooming in Maps.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            enableSelectionZooming: true,
            enablePanning: false
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

### Setting minimum and maximum values for zoom factor

The zooming range can be adjusted using the [`minZoom`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#minzoom) and [`maxZoom`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#maxzoom) properties in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/). The minZoom value is set to 1 by default, and the maxZoom value is set to 10.

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            minZoom: 2,
            maxZoom: 12
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

### Zooming with animation

To zoom in or zoom out the Maps with animation, use the [`animationDuration`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#animationduration) property in [`layers`](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel).

```
<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :animationDuration='animationDuration' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        zoomSettings: {
            enable: true,
            mouseWheelZoom: true
        },
        shapeData: world_map,
        animationDuration: 500
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
```

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs87/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs87" %}

### Customizing the zoom toolbar

The zoom toolbar can be customized by using the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#toolbarsettings) option in the [zoomSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/). The following properties can be used to customize the zoom toolbar.

* [backgroundColor](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#backgroundcolor) - It is used to customize the background color of the zoom toolbar.
* [borderOpacity](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#borderopacity) - It is used to customize the opacity of the border of the zoom toolbar.
* [borderWidth](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#borderwidth) - It is used to customize the thickness of the border of the zoom toolbar.
* [borderColor](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#bordercolor) - It is used to customize the color of the border of the zoom toolbar.
* [horizontalAlignment](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#horizontalalignment) - It is used to position the zoom toolbar in near, far, and center positions to customize its horizontal placement.
* [verticalAlignment](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#verticalalignment) - It is used to position the zoom toolbar in near, far, and center positions to customize its vertical placement.
* [orientation](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#orientation) - It is used to change the orientation (horizontal/vertical) of the zoom toolbar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs102/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs102" %}

<!-- markdownlint-disable MD036 -->
**Customizing the buttons in the zoom toolbar**

The appearance of the buttons in the zoom toolbar can be customized by using the [buttonSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#buttonsettings) option in the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#toolbarsettings) of the [zoomSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel) property. The following properties can be used to customize the zoom toolbar buttons.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#fill) - It is used to set the background color of the buttons.
* [color](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#color) - It is used to customize the color of the icons inside the button.
* [borderOpacity](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#borderopacity) - It is used to set the opacity of the border of the zoom toolbar buttons.
* [borderWidth](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#borderwidth) - It is used to set the thickness of the border of the zoom toolbar buttons.
* [borderColor](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#bordercolor) - It is used to set the color of the border of the zoom toolbar buttons.
* [radius](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#radius) - It is used to set the size of the button.
* [selectionColor](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#selectioncolor) - It is used to set the color of the icons inside the button when selection is performed.
* [highlightColor](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#highlightcolor) - It is used to change the color of the button when the mouse is hovered over it.
* [padding](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#padding) - It is used to change the padding space between each button.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#opacity) - It is used to change the opacity of the button.
* [toolbarItems](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarButtonSettingsModel/#toolbaritems) - It is used to change the items that should be displayed in the zoom toolbar. By default, zoom-in, zoom-out, and reset buttons will be available. Other options include selection zoom and panning.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs103/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs103" %}

<!-- markdownlint-disable MD036 -->
**Customizing the tooltip of the zoom toolbar**

The appearance of the tooltip of the zoom toolbar can be customized by using the [tooltipSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarSettingsModel/#tooltipsettings) option in the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#toolbarsettings) of the [zoomSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel) property. The following properties are available to customize the zoom toolbar tooltip.

* [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#visible) - Enables or disables the tooltip of the zoom toolbar.
* [fill](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fill) - It is used to change the background color of the tooltip of the zoom toolbar.
* [borderOpacity](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#borderopacity) - It is used to change the opacity of the border of the zoom toolbar's tooltip.
* [borderWidth](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#borderwidth) - It is used to change the thickness of the border of the zoom toolbar's tooltip.
* [borderColor](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#bordercolor) - It is used to change the color of the border of the zoom toolbar's tooltip.
* [fontColor](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontcolor) - It is used to change the color of the text in the tooltip of the zoom toolbar.
* [fontFamily](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontfamily) - It is used to change the font family of the text in the tooltip of the zoom toolbar.
* [fontStyle](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontstyle) - It is used to change the font style of the text in the tooltip of the zoom toolbar.
* [fontWeight](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontweight) - It is used to change the font weight of the text in the tooltip of the zoom toolbar.
* [fontSize](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontsize) - It is used to change the size of the text in the tooltip of the zoom toolbar.
* [fontOpacity](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomToolbarTooltipSettingsModel/#fontopacity) - It is used to change the opacity of the text in the tooltip of the zoom toolbar.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs104/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs104" %}

## Selection

Each shape in the Maps can be selected and deselected during interaction with the shapes. Selection is enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel) to **true**.

The following properties are available to customize the selection of Maps elements such as shapes, bubbles, markers and legends.

* [`border`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#border) - To customize the color, width and opacity of the border of which element is selected in Maps.
* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#fill) - Applies the color for the element that is selected.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#opacity) - To customize the transparency for the element that is selected.
* [`enableMultiSelect`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#enablemultiselect) - To enable or disable the selection for multiple shapes or markers or bubbles in the Maps.

By tapping on the specific legend, the shapes which are bounded to the selected legend is also selected and vice versa.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs88/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs88" %}

### Enable selection for bubbles

To enable the selection for bubbles in Maps, set the [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel) in [`bubbleSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/bubbleSettingsModel/) and set the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#enable) property of [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel) as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs89/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs89" %}

### Enable selection for markers

To enable the selection for markers in Maps, set the [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel) in the[`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel) and set the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#enable) property of the [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel) as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs90/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs90" %}

### Enable selection for polygons

When the [enable](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#enable) property of [selectionSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/polygonSettingsModel/#selectionsettings) is set to **true**, the polygon shapes can be selected via user interaction. The following properties are available in `selectionSettings` to customize the polygon shape when it is selected.

* [enableMultiSelect](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#enablemultiselect) - It is used to enable multiple selection of polygon shapes.
* [fill](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#fill) - It is used to change the color of the selected polygon shape.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#opacity) - It is used to change the opacity of the selected polygon shape.
* [border](https://ej2.syncfusion.com/vue/documentation/api/maps/selectionSettingsModel/#border) - This property is used to change the color, width, and opacity of the border of the selected polygon shape.

>To use the polygon feature, the **Polygon** module must be injected, as described in [this link](polygon).

The following example shows how to select the polygon shape in the geometry map.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/polygon-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs2" %}

### Public method for the shape selection

The [`shapeSelection`](https://ej2.syncfusion.com/vue/documentation/api/maps/#shapeselection) method can be used to select each shape in the Maps.
LayerIndex, propertyName, country name, and selected value as a boolean state(true / false) are the input parameters for this method.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs91/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs91" %}

### Initial shape selection

The shape is initially selected using the [`initialShapeSelection`](https://ej2.syncfusion.com/vue/documentation/api/maps/initialShapeSelectionSettingsModel), and the values are mapped to the [`shapePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/initialShapeSelectionSettingsModel/#shapepath) and [`shapeValue`](https://ej2.syncfusion.com/vue/documentation/api/maps/initialShapeSelectionSettingsModel/#shapevalue).

**Note:** initialShapeSelection is an Array property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs92/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs92" %}

### Initial marker selection

Using the [`initialMarkerSelection`](https://ej2.syncfusion.com/vue/documentation/api/maps/initialMarkerSelectionSettingsModel), the marker shape can be selected initially. Markers render based on the [`latitude`](https://ej2.syncfusion.com/vue/documentation/api/maps/initialMarkerSelectionSettingsModel/#latitude) and [`longitude`](https://ej2.syncfusion.com/vue/documentation/api/maps/initialMarkerSelectionSettingsModel/#longitude) values.

**Note:** initialMarkerSelection is an Array property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs93/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs93" %}

## Highlight

Each shape in the Maps can be highlighted during mouse hover on the Maps elements such as shapes, bubbles, markers and legends. Highlight is enabled by setting the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel) to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs94/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs94" %}

### Enable highlight for bubbles

To enable the highlight for bubbles in Maps, set the [`highlightSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel) in [`bubbleSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/bubbleSettingsModel) and set the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel) as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs95/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs95" %}

### Enable highlight for markers

To enable the highlight for markers in Maps, set the [`highlightSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel) in [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel) and set the [`enable`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel/#enable) property of [`highlightSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel) as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs96/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs96" %}

### Enable highlight for polygons

The polygon shapes can be highlighted via user interaction if the [enable](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel/#enable) property of [highlightSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/polygonSettingsModel/#highlightsettings) is set to **true**. The following properties are available in `highlightSettings` to customize the polygon shape when it is highlighted.

* [fill](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel/#fill) - It is used to change the color of the highlighted polygon shape.
* [opacity](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel/#opacity) - It is used to change the opacity of the highlighted polygon shape.
* [border](https://ej2.syncfusion.com/vue/documentation/api/maps/highlightSettingsModel/#border) - This property is used to change the color, width, and opacity of the border of the highlighted polygon shape.

>To use the polygon feature, the **Polygon** module must be injected, as described in [this link](polygon).

The following example shows how to highlight a polygon shape on a geometry map.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/polygon-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/polygon-cs3" %}

## Tooltip

On mouse over or touch end event, the tooltip is used to get more information about the layer, bubble, or marker. It can be enabled separately for layer or bubble or marker by using the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/) as **true**. The [`valuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#valuepath) property in the tooltip takes the field name that presents in dataSource and displays that value as tooltip text. The [`tooltipDisplayMode`](https://ej2.syncfusion.com/vue/documentation/api/maps/mapsModel/#tooltipdisplaymode) property is used to change the display mode of the tooltip in Maps. Following display modes of tooltip are available in the Maps component. By default,  [`tooltipDisplayMode`](https://ej2.syncfusion.com/vue/documentation/api/maps/mapsModel/#tooltipdisplaymode) is set to **MouseMove**.

* MouseMove
* Click
* DoubleClick

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs97/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs97" %}

### Customization

The following properties are available in the tooltipSettings to customize the tooltip of the Maps component.

* [`border`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#border) - To customize the color, width and opacity of the border of the tooltip in layers, markers, and bubbles of Maps.
* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#fill) - Applies the color of the tooltip in layers, markers, and bubbles of Maps.
* [`format`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#format) - To customize the format of the tooltip in layers, markers, and bubbles of Maps
* [`textStyle`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#textstyle) - To customize the style of the text in the tooltip for layers, markers, and bubbles of Maps.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs98/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs98" %}

### Tooltip template

The HTML element can be rendered in the tooltip of the Maps using the [`template`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#template) property of the [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/). In the following example, ${value1} and ${value2} are the place holders in the HTML element to display the value1 and value2 values of the corresponding shape.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs99/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs99" %}
