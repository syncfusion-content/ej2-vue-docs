---
layout: post
title: Measurement annotation in Vue Pdfviewer component | Syncfusion
description: Learn here all about Measurement annotation in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Measurement annotation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Measurement annotation in Vue Pdfviewer component

The PDF Viewer provides the options to add measurement annotations. You can measure the page annotations with the help of measurement annotation. The supported measurement annotations in the PDF Viewer control are:

* Distance
* Perimeter
* Area
* Radius
* Volume

![CalibrateAnnotation](../../pdfviewer/images/calibrate_annotation.png)

## Adding measurement annotations to the PDF document

The measurement annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Click the **Measurement Annotation** dropdown button. A dropdown pop-up will appear and shows the measurement annotations to be added.
* Select the measurement type to be added to the page in the dropdown pop-up. It enables the selected measurement annotation mode.
* You can measure and add the annotation over the pages of the PDF document.

In the pan mode, if the measurement annotation mode is entered, the PDF Viewer control will switch to text select mode.

![CalibrateTool](../../pdfviewer/images/calibrate_tool.png)

Refer to the following code snippet to switch to distance annotation mode.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
        <button id="set">Distance</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :resourceUrl="resourceUrl"
            :documentLoad="documentLoad">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

var viewer;
export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
    };
  },
  
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},
  methods: {
    documentLoad() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      document.getElementById('set').addEventListener('click', ()=> {
          viewer.annotation.setAnnotationMode('Distance');
      });
    }
  }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
        <button id="set">Distance</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            :documentLoad="documentLoad">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

var viewer;
export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},
  methods: {
    documentLoad() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      document.getElementById('set').addEventListener('click', ()=> {
          viewer.annotation.setAnnotationMode('Distance');
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Adding a measurement annotation to the PDF document Programmatically

With the PDF Viewer library, you can add a measurement annotation to the PDF Viewer control programmatically using the [**addAnnotation()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/annotation/#addannotation) method.

Here's a example of how you can utilize the **addAnnotation()** method to include a measurement annotation programmatically:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template> 
  <div id="app">
    <button v-on:click="addDistanceAnnotation">Add Distance Annotation programatically</button>
    <button v-on:click="addPerimeterAnnotation">Add Perimeter Annotation programatically</button>
    <button v-on:click="addAreaAnnotation">Add Area Annotation programatically</button>
    <button v-on:click="addRadiusAnnotation">Add Radius Annotation programatically</button>
    <button v-on:click="addVolumeAnnotation">Add Volume Annotation programatically</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
      };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]},
    methods: {
    addDistanceAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Distance", {
        offset: { x: 200, y: 230 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
      });
    },
    addPerimeterAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Perimeter", {
        offset: { x: 200, y: 350 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
      });
    },
    addAreaAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Area", {
        offset: { x: 200, y: 500 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
      });
    },
    addRadiusAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Radius", {
        offset: { x: 200, y: 630 },
        pageNumber: 1,
        width: 90,
        height: 90
      });
    },
    addVolumeAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Volume", {
        offset: { x: 200, y: 810 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template> 
  <div id="app">
    <button v-on:click="addDistanceAnnotation">Add Distance Annotation programatically</button>
    <button v-on:click="addPerimeterAnnotation">Add Perimeter Annotation programatically</button>
    <button v-on:click="addAreaAnnotation">Add Area Annotation programatically</button>
    <button v-on:click="addRadiusAnnotation">Add Radius Annotation programatically</button>
    <button v-on:click="addVolumeAnnotation">Add Volume Annotation programatically</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :serviceUrl="serviceUrl">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]},
    methods: {
    addDistanceAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Distance", {
        offset: { x: 200, y: 230 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 230 }, { x: 350, y: 230 }]
      });
    },
    addPerimeterAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Perimeter", {
        offset: { x: 200, y: 350 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 350 }, { x: 285, y: 350 }, { x: 286, y: 412 }]
      });
    },
    addAreaAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Area", {
        offset: { x: 200, y: 500 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 500 }, { x: 288, y: 499 }, { x: 289, y: 553 }, { x: 200, y: 500 }]
      });
    },
    addRadiusAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Radius", {
        offset: { x: 200, y: 630 },
        pageNumber: 1,
        width: 90,
        height: 90
      });
    },
    addVolumeAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.annotation.addAnnotation("Volume", {
        offset: { x: 200, y: 810 },
        pageNumber: 1,
        vertexPoints: [{ x: 200, y: 810 }, { x: 200, y: 919 }, { x: 320, y: 919 }, { x: 320, y: 809 }, { x: 200, y: 810 }]
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Edit the existing measurement annotation programmatically

To modify existing measurement annotation in the Syncfusion PDF viewer programmatically, you can use the **editAnnotation()** method.

Here is an example of how you can use the **editAnnotation()** method:

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <button v-on:click="editDistanceAnnotation">Edit Distance Annotation programatically</button>
    <button v-on:click="editPerimeterAnnotation">Edit Perimeter Annotation programatically</button>
    <button v-on:click="editAreaAnnotation">Edit Area Annotation programatically</button>
    <button v-on:click="editRadiusAnnotation">Edit Radius Annotation programatically</button>
    <button v-on:click="editVolumeAnnotation">Edit Volume Annotation programatically</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
      };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]},
  methods: {
  editDistanceAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Distance calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
  editPerimeterAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Perimeter calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
    editAreaAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Area calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
    editRadiusAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Radius calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
    editVolumeAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Volume calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
    <button v-on:click="editDistanceAnnotation">Edit Distance Annotation programatically</button>
    <button v-on:click="editPerimeterAnnotation">Edit Perimeter Annotation programatically</button>
    <button v-on:click="editAreaAnnotation">Edit Area Annotation programatically</button>
    <button v-on:click="editRadiusAnnotation">Edit Radius Annotation programatically</button>
    <button v-on:click="editVolumeAnnotation">Edit Volume Annotation programatically</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :serviceUrl="serviceUrl">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer ]},
    methods: {
    editDistanceAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Distance calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
    editPerimeterAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Perimeter calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
    editAreaAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Area calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
    editRadiusAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
      for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Radius calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    },
    editVolumeAnnotation: function () {
    var viewer = this.$refs.pdfviewer.ej2Instances;
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].subject === "Volume calculation") {
          viewer.annotationCollection[i].annotationSelectorSettings.resizerShape = "Circle"
          viewer.annotationCollection[i].strokeColor = "#0000FF";
          viewer.annotationCollection[i].thickness = 2 ;
          viewer.annotationCollection[i].fillColor = "#FFFF00";
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
      }
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Editing the properties of measurement annotation

The fill color, stroke color, thickness, and opacity of the measurement annotation can be edited using the Edit Color tool, Edit Stroke Color tool, Edit Thickness tool, and Edit Opacity tool in the annotation toolbar.

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![CalibrateFillColor](../../pdfviewer/images/calibrate_fillcolor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![CalibrateStrokeColor](../../pdfviewer/images/calibrate_stroke.png)

### Editing thickness

The thickness of the border of the annotation can be edited using the range slider provided in the Edit thickness tool.

![CalibrateThickness](../../pdfviewer/images/calibrate_thickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![CalibrateOpacity](../../pdfviewer/images/calibrate_opacity.png)

### Editing the line properties

The properties of the line shapes such as distance and perimeter annotations can be edited using the Line properties window. It can be opened by selecting the Properties option in the context menu that appears on right-clicking the distance and perimeter annotations.

![CalibrateProperty](../../pdfviewer/images/calibrate_lineprop.png)

## Setting default properties during control initialization

The properties of the shape annotations can be set before creating the control using distanceSettings, perimeterSettings, areaSettings, radiusSettings and volumeSettings. Refer to the following code snippet to set the default annotation settings.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :resourceUrl="resourceUrl"
            :documentPath="documentPath"
            :distanceSettings="distanceSettings"
            :perimeterSettings="perimeterSettings"
            :areaSettings="areaSettings"
            :radiusSettings="radiusSettings"
            :volumeSettings="volumeSettings">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

var viewer;
export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
      distanceSettings: {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'},
      perimeterSettings: {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'},
      areaSettings: {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'},
      radiusSettings: {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'},
      volumeSettings: {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}
    };
  },
  
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            :distanceSettings="distanceSettings"
            :perimeterSettings="perimeterSettings"
            :areaSettings="areaSettings"
            :radiusSettings="radiusSettings"
            :volumeSettings="volumeSettings">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

var viewer;
export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      distanceSettings: {fillColor: 'blue', opacity: 0.6, strokeColor: 'green'},
      perimeterSettings: {fillColor: 'green', opacity: 0.6, strokeColor: 'blue'},
      areaSettings: {fillColor: 'yellow', opacity: 0.6, strokeColor: 'orange'},
      radiusSettings: {fillColor: 'orange', opacity: 0.6, strokeColor: 'pink'},
      volumeSettings: {fillColor: 'pink', opacity: 0.6, strokeColor: 'yellow'}
    };
  },
  
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},
}
</script>
{% endhighlight %}
{% endtabs %}

## Editing scale ratio and unit of the measurement annotation

The scale ratio and unit of measurement can be modified using the scale ratio option provided in the context menu of the PDF Viewer control.

![CalibrateScaleRatio](../../pdfviewer/images/calibrate_scaleratio.png)

The Units of measurements support for the measurement annotations in the PDF Viewer are

* Inch
* Millimeter
* Centimeter
* Point
* Pica
* Feet

![CalibrateScaleDialog](../../pdfviewer/images/calibrate_scaledialog.png)

## Setting default scale ratio settings during control initialization

The properties of scale ratio for measurement annotation can be set before creating the control using ScaleRatioSettings as shown in the following code snippet,


{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :resourceUrl="resourceUrl"
            :measurementSettings="measurementSettings">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

var viewer;
export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: 'https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib',
      measurementSettings: {scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm'}
    };
  },
  
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},
  methods: {
    documentLoad() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      document.getElementById('set').addEventListener('click', ()=> {
          viewer.annotation.setAnnotationMode('Distance');
      });
    }
  }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :serviceUrl="serviceUrl"
            :measurementSettings="measurementSettings">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import {  PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation,
          BookmarkView, Annotation, ThumbnailView, Print, TextSelection,
          TextSearch, FormFields, FormDesigner, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

var viewer;
export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      measurementSettings: {scaleRatio: 2, conversionUnit: 'cm', displayUnit: 'cm'}
    };
  },
  
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]},
  methods: {
    documentLoad() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      document.getElementById('set').addEventListener('click', ()=> {
          viewer.annotation.setAnnotationMode('Distance');
      });
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}