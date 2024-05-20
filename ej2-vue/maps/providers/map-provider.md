---
layout: post
title: Map provider in Vue Maps Component | Syncfusion
description: Learn here all about map provider support in Syncfusion Essential Vue Maps component, it's elements and more.
control: Map provider 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Map provider in Vue Maps Component

The OpenStreetMap (OSM) is the online Maps provider built by a community of developers; it is free to use under an open license. It allows to view geographical data in a collaborative way from anywhere on the earth. The OSM Maps provides small tile images based on our requests and combines those images into a single image to display the Maps area in the Maps component.

## Adding OpenStreetMap

The OSM Maps can be rendered using the [urlTemplate](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#urltemplate) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs82/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs82" %}

### Changing the tile server of the OpenStreetMap

The OSM tile server can be changed by setting the tile URL in the [urlTemplate](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#urltemplate) property. For more details about the OSM tile server, refer [here](https://wiki.openstreetmap.org/wiki/Tiles).

## Enabling zooming and panning

The OSM Maps layer can be zoomed and panned. Zooming helps to get a closer look at a particular area on a Maps for in-depth analysis. Panning helps to move a Maps around to focus the targeted area.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs83/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs83" %}

## Adding markers and navigation line

Markers can be added to the layers of OSM Maps by setting the corresponding location's coordinates of latitude and longitude using [e-markerSetting](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#markersettings) tag. Navigation lines can be added on top of an OSM Maps layer for highlighting a path among various places by setting the corresponding location's coordinates of latitude and longitude in the [e-navigationLineSetting](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#navigationlinesettings) tag.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs84/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs84" %}

## Adding sublayer

Any GeoJSON shape can be rendered as a sublayer on top of the OSM Maps layer for highlighting a particular continent or country in OSM Maps by adding another layer and specifying the [type](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#type) property of Maps layer to "**SubLayer**".

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs85/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs85" %}

## Enabling legend

The legend can be added to the tile Maps by setting the [visible](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel/#visible) property of [legendSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/legendSettingsModel/) to **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs86/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs86" %}