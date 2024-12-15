---
layout: post
title: Markers in Vue Maps component | Syncfusion
description: Learn here all about Markers in Syncfusion Vue Maps component of Syncfusion Essential JS 2 and more.
control: Markers 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Markers in Vue Maps component

Markers are notes that are used to leave a message on the Maps. It indicates or marks a specific location with desired symbols on the Maps. It can be enabled by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#visible) property of the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/) to **true**.

## Adding marker

To add the markers, the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#datasource) property of the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/) has a list of objects that contains the data for markers. Using this property, any number of markers can be added to the layers of the Maps. By default, it displays the markers based on the specified latitude and longitude in the given data source. Each data source object contains the following list of properties.

* latitude - The latitude point which determines the X location of the marker.
* longitude - The longitude point which determines the Y location of the marker.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs61/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs61" %}

## Adding marker template

The Marker can be added as a template in the Maps component. The [`template`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#template) property of the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/) is used to set the HTML string or id of an element as a template.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs62/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs62" %}

## Customization

The following properties are available in [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/) to customize the Markers of the Maps component.

* [`border`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#border) - To customize the color, width and opacity of the border for the markers in Maps.
* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#fill) - To apply the color for markers in Maps.
* [`dashArray`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#dasharray) - To define the pattern of dashes and gaps that is applied to the outline of the markers in Maps.
* [`height`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#height) - To customize the height of the markers in Maps.
* [`width`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#width) - To customize the width of the markers in Maps.
* [`offset`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#offset) - To customize the position of the markers in Maps.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#opacity) - To customize the transparency of the markers in Maps.
* [`animationDelay`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#animationdelay) - To change the time delay in the transition for markers.
* [`animationDuration`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#animationduration) - To change the time duration of animation for markers.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs63/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs63" %}

## Marker shapes

The Maps component supports the following marker shapes. To set the shape of the marker, the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#shape) property in [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel) is used.

* Balloon
* Circle
* Cross
* Diamond
* Image
* Rectangle
* Start
* Triangle
* VerticalLine
* HorizontalLine

### Rendering marker shape as image

To render a marker as an image in Maps, set the [`shape`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#shape) property of [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/) as **Image** and specify the path of the image to [`imageUrl`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#imageurl) property. There is another way to render a marker as an image using the [`imageUrlValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#imageurlvaluepath) property of the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/). Bind the field name that contains the path of the image in the data source to the [`imageUrlValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#imageurlvaluepath) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs64/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs64" %}

## Multiple marker groups

Multiple groups of markers can be added in the Maps using the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel) in which the properties of markers are added as an array. The customization for the markers can be done with the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel).

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs65/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs65" %}

## Customize marker shapes from data source

### Bind different colors and shapes to the marker from data source

Using the [`shapeValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#shapevaluepath) and [`colorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#colorvaluepath) properties, apply the color and shape of the marker can be applied from the given data source. Bind the data source to the [`dataSource`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#datasource) property of the [`markerSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/) and set the field names that contains the shape and color values in the data source to the [`shapeValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#shapevaluepath) and [`colorValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#colorvaluepath) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs66/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs66" %}

### Setting value path from the data source

The latitude and longitude values are used to determine the location of each marker in the Maps. The [`latitudeValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#latitudevaluepath) and [`longitudeValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#longitudevaluepath) properties are used to specify the value path that presents in the data source of the marker. In the following example, the field name from the data source is set to the [`latitudeValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#latitudevaluepath) and [`longitudeValuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#longitudevaluepath) properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs67/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs67" %}

### Setting different sizes for markers individually

The size of the markers in a marker group can be customized using the [widthValuePath](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#widthvaluepath) and [heightValuePath](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#heightvaluepath) properties, which allow the user to change the width and height of the markers based on values from the given data source. Bind the data source to the [dataSource](https://helpej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#datasource) property of the [markerSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/), and specify the field names containing the width and height values in the data source for the `widthValuePath` and `heightValuePath` properties.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/marker-size-customization-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/marker-size-customization-cs1" %}

## Repositioning the marker using drag and drop

The markers on the map can be dragged and dropped to change their position. To enable marker drag and drop, set the [enableDrag](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/#enabledrag) property to **true** in the [markerSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel) property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs100/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs100" %}

The data of the drag and dropped marker in the marker data source can be customized using the [markerDragStart](https://ej2.syncfusion.com/vue/documentation/api/maps#markerdragstart) and [markerDragEnd](https://ej2.syncfusion.com/vue/documentation/api/maps#markerdragend) events. When you change the appropriate marker data, the tooltip and legend item text of that marker are automatically updated. The following properties are available in the event argument of the marker drag events.

|   Argument Name      |   Description                               |
|----------------------| --------------------------------------------|
|   dataIndex          |   It represents the index of the data of the dragged marker in the marker data source.                          |
|   latitude           |   It represents the latitude coordinate point of the dragged marker.                                            |
|   longitude          |   It represents the longitude coordinate point for the dragged marker.                                          |
|   markerIndex        |   It represents the index of the marker setting.                                                                |
|   layerIndex         |   It represents the index of the layer in which the marker belongs.                                             |
|   name               |   It represents the name of the event.                                                                          |
|   x                  |   It represents the horizontal location of the mouse pointer on the map when the drag action is performed.      |
|   y                  |   It represents the vertical location of the mouse pointer on the map when the drag action is performed.        |

The following example shows how to use marker drag events to customize the data of the drag and dropped marker in the marker data source.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs101/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs101" %}

## Marker zooming

The Maps can be initially scaled to the center value based on the marker distance. This can be achieved by setting the [`shouldZoomInitially`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/#shouldzoominitially) property in [`zoomSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/zoomSettingsModel/) as **true**.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs68/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs68" %}

## Marker Clustering

Maps support hiding and clustering markers when they overlap. The number on a cluster indicates how many overlapping markers it contains. When zooming into any cluster location on the map, the number on the cluster decreases, and individual markers become visible. When zooming out, the overlapping markers increase, causing them to cluster again, which increases the count on the cluster.

To enable clustering for markers within a layer, set the [allowClustering](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#allowclustering) property of [markerClusterSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel) in the [layers](https://ej2.syncfusion.com/vue/documentation/api/maps/#layers) to **true**. Customization of clustering can be done using the `markerClusterSettings` property.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs69/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs69" %}

### Customization of marker cluster

The following properties are available to customize the marker clustering in the Maps component.

* [`border`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#border) - To customize the color, width and opacity of the border of cluster in Maps.
* [`connectorLineSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/connectorLineSettingsModel/) - To customize the connector line in cluster separating the markers.
* [`dashArray`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#dasharray) - To customize the dash array for the marker cluster in Maps.
* [`fill`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#fill) - Applies the color of the cluster in Maps.
* [`height`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#height) - To customize the height of the marker cluster in Maps.
* [`imageUrl`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#imageurl) - To customize the URL path for the marker cluster when the cluster shape is set as image in Maps.
* [`labelStyle`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#labelstyle) - To customize the text in marker cluster.
* [`offset`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#offset) - To customize the offset position for the marker cluster in Maps.
* [`opacity`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#opacity) - To customize the opacity of the marker cluster.
* [`shape`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#shape) - To customize the shape for the cluster of markers.
* [`width`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#width) - To customize the width of the marker cluster in Maps.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs70/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs70" %}

### Expanding the marker cluster

The cluster is formed by grouping an identical and non-identical marker from the surrounding area. By clicking on the cluster and setting the [`allowClusterExpand`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#allowclusterexpand) property in [`markerClusterSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel) as **true** to expand the identical markers. If zooming is performed in any of the locations of the cluster, the number on the cluster will decrease and the overlapping marker will be split into an individual marker on the map. When performing zoom out, it will increase the marker count and then cluster it again.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs71/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs71" %}

### Clustering markers within each marker group

Marker clustering can be enabled for each marker group in the map by using the [clusterSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/markerclustersettingsmodel/) property within the [markerSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/markerSettingsModel/) property in the [layers](https://ej2.syncfusion.com/vue/documentation/api/maps/#layers). This allows for individual customization of clusters for each marker group which group markers that are located near each other to reduce clutter and improve readability. When the [allowClustering](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#allowclustering) property is set to **true**, the markers within each group are clustered and visually represented as separate clusters. As users zoom in, the clusters expand to reveal individual markers, enabling more detailed exploration. Clusters can also be expanded manually by setting the [allowClusterExpand](https://ej2.syncfusion.com/vue/documentation/api/maps/markerClusterSettingsModel/#allowclusterexpand) property to **true**. The appearance of the clusters and their expansion behavior can be customized using the `clusterSettings` property, similar to the [markerClusterSettings](https://ej2.syncfusion.com/vue/documentation/api/maps/layerSettingsModel/#markerclustersettings) property, as explained in the sections above.

>When the `clusterSettings` property is enabled for an individual marker group, the `markerClusterSettings` property within the layers becomes ineffective.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/marker-clusters-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/marker-clusters-cs1" %}

## Tooltip for marker

Tooltip is used to display more information about a marker on mouse over or touch end event. This can be enabled separately for marker by setting the [`visible`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#visible) property of [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel) to **true**. The [`valuePath`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel/#valuepath) property in the [`tooltipSettings`](https://ej2.syncfusion.com/vue/documentation/api/maps/tooltipSettingsModel) takes the field name that presents in dataSource and displays that value as tooltip text.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/maps/getting-started-cs72/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/maps/getting-started-cs72" %}
