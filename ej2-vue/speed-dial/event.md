---
layout: post
title: Event in Vue Speed dial component | Syncfusion
description: Learn here all about Event in Syncfusion Vue Speed dial component of Syncfusion Essential JS 2 and more.
control: Event 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Event in Vue Speed dial component

This section explains the Speed Dial events that will be triggered when appropriate actions are performed.

## clicked

The SpeedDial component triggers the [`clicked`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#clicked) event with [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemEventArgs/) argument when an action item is clicked. You can use this event to perform the required action.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' :items='items' :clicked="clicked"></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(SpeedDialPlugin);
export default {
    data () {
        return {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    },
    methods: {
      clicked: function(args) {
          //Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## created

The Speed Dial component triggers the [`created`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#created) event when SpeedDial component rendering is completed.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' :items='items' :created="created"></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(SpeedDialPlugin);
export default {
    data () {
        return {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    },
    methods: {
      created: function(args) {
          //Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## beforeOpen

The SpeedDial component triggers the [`beforeOpen`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#beforeopen) event with [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is opened.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' :items='items' :beforeOpen="beforeOpen"></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(SpeedDialPlugin);
export default {
    data () {
        return {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    },
    methods: {
      beforeOpen: function(args) {
          //Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## onOpen

The SpeedDial component triggers the [`onOpen`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#onopen) event with [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is opened.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' :items='items' :onOpen="onOpen"></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(SpeedDialPlugin);
export default {
    data () {
        return {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    },
    methods: {
      onOpen: function(args) {
          //Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## beforeClose

The SpeedDial component triggers the [`beforeClose`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#beforeclose) event with [`SpeedDialBeforeOpenCloseEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialBeforeOpenCloseEventArgs/) argument before the SpeedDial popup is closed.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' :items='items' :beforeClose="beforeClose"></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(SpeedDialPlugin);
export default {
    data () {
        return {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    },
    methods: {
      beforeClose: function(args) {
          //Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## onClose

The SpeedDial component triggers the [`onClose`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#onclose) event with [`SpeedDialOpenCloseEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialOpenCloseEventArgs/) argument when SpeedDial popup is closed.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' :items='items' :onClose="onClose"></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(SpeedDialPlugin);
export default {
    data () {
        return {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    },
    methods: {
      onClose: function(args) {
          //Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

## beforeItemRender

The SpeedDial component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial#beforeitemrender) event with [`SpeedDialItemEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/speed-dial/speedDialItemEventArgs/) argument for each `SpeedDialItem` once it is rendered.

```
<template>
    <ejs-speeddial id='speeddial' content='Edit'  target='#targetElement' :items='items' :beforeItemRender="beforeItemRender"></ejs-speeddial>
</template>

<script>
import Vue from 'vue';
import { SpeedDialPlugin  } from "@syncfusion/ej2-vue-buttons";

Vue.use(SpeedDialPlugin);
export default {
    data () {
        return {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        };
    },
    methods: {
      beforeItemRender: function(args) {
          //Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>
```

Below example demonstrates the clicked event of the Speed Dial component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/speed-dial/action-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/speed-dial/action-cs1" %}