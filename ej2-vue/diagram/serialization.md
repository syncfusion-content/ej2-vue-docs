---
layout: post
title: Serialization in Vue Diagram component | Syncfusion
description: Learn here all about Serialization in Syncfusion Vue Diagram component of Syncfusion Essential JS 2 and more.
control: Serialization 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Serialization in Vue Diagram component

**Serialization** is the process of saving and loading for state persistence of the diagram.

## Save

The diagram is serialized as string while saving. The client-side method, [`saveDiagram`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#savediagram) helps to serialize the diagram as a string. The following code illustrates how to save the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram ref="diagramObject" id="diagram" :width='width' :height='height'></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const diagramObject = ref(null);
const width = "100%";
const height = "350px";

onMounted(function () {
  let diagramInstance = diagramObject.value.ej2Instances;
  //returns serialized string of the Diagram
  let saveData = diagramInstance.saveDiagram();
});
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram ref="diagramObject" id="diagram" :width='width' :height='height'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: 'App',
  components: {
    'ej2-diagram': DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "350px",
    }
  },
  mounted: function () {
    let diagramInstance = this.$refs.diagramObject.ej2Instances;
    //returns serialized string of the Diagram
    let saveData = diagramInstance.saveDiagram();
  }
}
</script>

{% endhighlight %}
{% endtabs %}

This string can be converted to JSON data and stored for future use. The following snippet illustrates how to save the serialized string into local storage.

```javascript
//Saves the string in to local storage
localStorage.setItem('fileName', saveData);
saveData = localStorage.getItem('fileName');

```

Diagram can also be saved as raster or vector image files. For more information about saving the diagram as images, refer to `Print and Export`.

## Load

Diagram is loaded from the serialized string data by client-side method, [`loadDiagram`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#loaddiagram).
The following code illustrates how to load the diagram from serialized string data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram ref="diagramObject" id="diagram" :width='width' :height='height'></ejs-diagram>
  </div>
</template>
<script>
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";

export default {
  name: 'app',
  components: {
    'ej2-diagram': DiagramComponent
  },
  data() {
    return {
      width: "100%",
      height: "350px",
    }
  },
  mounted: function () {
    let diagram = this.$refs.diagramObject.ej2Instances;
    //Loads the Diagram from saved json data
    diagram.loadDiagram(saveData);
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-diagram ref="diagramObject" id="diagram" :width='width' :height='height'></ejs-diagram>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from "@syncfusion/ej2-vue-diagrams";

const diagramObject = ref(null);
const width = "100%";
const height = "350px";

onMounted(function () {
  let diagram = diagramObject.value.ej2Instances;
  //Loads the Diagram from saved json data
  diagram.loadDiagram(saveData);
})
</script>

{% endhighlight %}
{% endtabs %}

>Note: Before loading a new diagram, existing diagram is cleared.

## Loaded Event 

The [`loaded`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#loaded) event triggers when all diagram elements are loaded using [`loadDiagram`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#loaddiagram) method. You can use this event to customize diagram elements during the loading process.

```ts
<ejs-diagram id="diagram" :width='width' :height='height' :loaded='loaded'>
</ejs-diagram>

export default {
  data: function() {
    return {
      width: "100%",
      height: "700px",
      loaded:(args) => {
         //You can use this event to customize diagram elements during the loading process
      },
    }
  }
}
```

The event has two arguments such as name, diagram

**name**

Type: String

Description: Returns the event name.

**diagram**

Type: Diagram

Description: Returns the diagram model properties.

Users can perform customizations or modifications to the diagram elements once the loading process is complete.

## Prevent default values

The [`preventDefaults`](https://ej2.syncfusion.com/vue/documentation/api/diagram/serializationSettingsModel) property of serializationSettings is used to simplifying the saved JSON object without adding the default properties that are presented in the diagram.
The following code illustrates how to simplify the JSON object.

```ts
let diagram: Diagram = new Diagram({
 serializationSettings: { preventDefaults: true },
});
```