---
layout: post
title: EJ1 migration in React Diagram component | Syncfusion®
description: Learn here all about EJ1 migration in Syncfusion® React Diagram component of Syncfusion Essential® JS 2 and more.
control: EJ1 Migration 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

## How to load EJ1 diagram in EJ2 diagram

To load EJ1 JSON data in an EJ2 diagram, follow these steps.

1.	Import and inject the EJ1SerializationModule as shown in the following code example.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-diagram ref="diagramObject" id="diagram"  :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script setup>
const width = "100%";
const height = "350px";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div id="app">
        <ejs-diagram ref="diagramObject" id="diagram"  :width='width' :height='height'></ejs-diagram>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            width: "100%",
            height: "350px",
        }
    },
}
</script>

{% endhighlight %}
{% endtabs %}

2.	Load the EJ1 JSON data using the diagram loadDiagram method and set the second parameter to true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { onMounted } from "vue";

onMounted(function() {
    let diagram = document.getElementById("diagram").ej2_instances[0];
    let ej1Data = {"JSONData"};  //Replace JSONData with your EJ1 JSON data
    //Load the EJ1 JSON and pass a boolean value as true.
    diagram.loadDiagram(ej1Data, true);
})

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
    mounted: function() {
        let diagram = document.getElementById("diagram").ej2_instances[0];
        let ej1Data = {"JSONData"};  //Replace JSONData with your EJ1 JSON data
        //Load the EJ1 JSON and pass a boolean value as true.
        diagram.loadDiagram(ej1Data, true);
    }
}
</script>

{% endhighlight %}
{% endtabs %}
