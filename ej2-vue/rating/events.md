---
layout: post
title: Events in Vue Rating component | Syncfusion
description: Learn here all about Events in Syncfusion Vue Rating component of Syncfusion Essential JS 2 and more.
control: Events 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Rating component

This section describes the rating events that will be triggered when appropriate actions are performed. The following events are available in the rating component.

## beforeItemRender

The rating component triggers the [`beforeItemRender`](https://ej2.syncfusion.com/vue/documentation/api/rating/#beforeitemrender) event before rendering each rating item. The [`RatingItemEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/rating/ratingItemEventArgs/) passed as an event argument provides the details of the item to be rendered.

```
<template>
    <div class='wrap'>
        <ejs-rating id="rating" :beforeItemRender="beforeItemRender"></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

export default {
    methods : {
        beforeItemRender: function(args: RatingItemEventArgs) {
          //Your required action here
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

</style>
```

## created

The rating component triggers the [`created`](https://ej2.syncfusion.com/vue/documentation/api/rating/#created) event when the rendering of the rating component is completed.

```
<template>
    <div class='wrap'>
        <ejs-rating id="rating" :created="created"></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

export default {
    methods : {
        created: function() {
          //Your required action here
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

</style>
```

## onItemHover

The rating component triggers the [`onItemHover`](https://ej2.syncfusion.com/vue/documentation/api/rating/#onitemhover) event when the rating item is hovered. The [`RatingHoverEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/rating/ratingHoverEventArgs/) passed as an event argument provides the details of the hovered item.

```
<template>
    <div class='wrap'>
        <ejs-rating id="rating" :onItemHover="onItemHover"></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

export default {
    methods : {
        onItemHover: function(args: RatingHoverEventArgs) {
          //Your required action here
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

</style>
```

## valueChanged

The rating component triggers the [`valueChanged`](https://ej2.syncfusion.com/vue/documentation/api/rating/#valuechanged) event when the value of the rating is changed. The [`RatingChangedEventArgs`](https://ej2.syncfusion.com/vue/documentation/api/rating/ratingChangedEventArgs/) passed as an event argument provides the details when value is changed.

```
<template>
    <div class='wrap'>
        <ejs-rating id="rating" :valueChanged="valueChanged"></ejs-rating>
    </div>
</template>

<script>
import Vue from 'vue';
import { RatingPlugin  } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(RatingPlugin);

export default {
    methods : {
        valueChanged: function(args: RatingChangedEventArgs) {
          //Your required action here
        }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';

.wrap {
  margin: 50px auto;
  text-align: center;
}

</style>
```

Below example demonstrates the valueChanged event of the Rating component.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/rating/events-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/rating/events-cs1" %}
