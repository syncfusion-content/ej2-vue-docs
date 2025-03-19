---
layout: post
title: Layout events in Vue Diagram component | Syncfusion®
description: Learn here all about Layout events in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-vue
control: Layout events
documentation: ug
domainurl: ##DomainURL##
---

# Layout events in Vue Diagram control

## DataLoaded event

The [`dataLoaded`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iDataLoadedEventArgs/) event is triggered after the diagram is populated from the external data source.

The following code example explains the data loaded event in the diagram.

```javascript

<ejs-diagram id="diagram" :width="width" :height="height" :nodes="nodes" :connectors="connectors" :dataLoaded="dataLoaded"></ejs-diagram>
    

  export default {
    name: 'App',
    components: {
        'ejs-diagram': DiagramComponent,
    },
    data() {
        return {
            width: "1000px",
            height: '590px',
            nodes: nodes,
            connectors: connectors,

            dataLoaded: (args) => {
              //we can get diagram instance in args.
              console.log(args);

              //customize
            }
        };
    },
  };

```

## ExpandStateChange event

The [`expandStateChange`](https://ej2.syncfusion.com/vue/documentation/api/diagram/iExpandStateChangeEventArgs/) will be triggered when the state of the expand and collapse icon change for a node.

The following code example explains the `expandStateChange` event in the diagram.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/automatic-layout/layoutEvent-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/automatic-layout/layoutEvent-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/automatic-layout/layoutEvent-cs1" %}

## Animation complete event

The [`animationComplete`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#animationcomplete) event is triggered after the animation of the diagram elements is completed. The following example demonstrates how to handle the animation complete event and customize based on the expand state of the root node.


{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram/automatic-layout/layoutEvent-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram/automatic-layout/layoutEvent-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/diagram/automatic-layout/layoutEvent-cs2" %}

## Layout updated event

The [`layoutUpdated`](https://ej2.syncfusion.com/vue/documentation/api/diagram/#layoutupdated) event is triggered when the layout rendering process in the diagram either starts or completes. This event allows users to track the state of the layout rendering process.

The following code example explains the layout updated event in the diagram.

```ts

<ejs-diagram id="diagram" :width="width" :height="height" :nodes="nodes" :connectors="connectors" :layout="layout" @layoutUpdated="layoutUpdated"></ejs-diagram>

export default {
  name: 'App',
  components: {
      'ejs-diagram': DiagramComponent,
  },
  data() {
      return {
          width: "100%",
          height: '550px',
          nodes: nodes,
          connectors: connectors,
          layout: { type: 'HierarchicalTree'},
      };
  },
  methods : {
    layoutUpdated(args) {
      if (args.state === 'Started') {
        console.log('layout started rendering');
      }
    }
  },
};
```
