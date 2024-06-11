---
layout: post
title: Events in Vue TextArea component | Syncfusion
description: Handling events triggered by user interactions or changes in the Vue TextArea component of Syncfusion Essential JS 2 and more.
control: Events
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue TextArea Component

This section describes the TextArea events that will be triggered when appropriate actions are performed. The following events are available in the TextArea component.

## Created event

The TextArea component triggers the [created](https://ej2.syncfusion.com/vue/documentation/api/textarea/#created) event when the TextArea component is created. This event provides users with an opportunity to perform actions immediately after the TextArea has been created and initialized.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="rating" :created="created"></ejs-textarea>
    </div>
</template>

<script setup>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    },
    methods : {
        created: function() {
          //Your required action here
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }
</style>

```

## Input event

The TextArea component triggers the [input](https://ej2.syncfusion.com/vue/documentation/api/textarea/#input) each time when the value of TextArea has changed. This event provides users with an opportunity to perform actions in response to real-time changes in the TextArea's content.
The [InputEventArgs](https://ej2.syncfusion.com/vue/documentation/api/textbox/InputEventArgs/) passed as an event argument provides the details about the input event in the TextArea.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="rating" :input="inputHandler"></ejs-textarea>
    </div>
</template>

<script setup>
import { TextAreaComponent, InputEventArgs } from '@syncfusion/ej2-vue-inputs';

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    },
    methods : {
        inputHandler: function(args: InputEventArgs) {
          //Your required action here
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }
</style>

```

## Change event

The TextArea component triggers the [change](https://ej2.syncfusion.com/vue/documentation/api/textarea/#change) event when the content of TextArea has changed and gets focus-out. This event provides users with an opportunity to execute specific actions in response to changes made by the user.
The [ChangedEventArgs](https://ej2.syncfusion.com/vue/documentation/api/textbox/ChangedEventArgs/) passed as an event argument provides the details about the changes in the TextArea's value.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="rating" :change="changeHandler"></ejs-textarea>
    </div>
</template>

<script setup>
import { TextAreaComponent, ChangedEventArgs } from '@syncfusion/ej2-vue-inputs';

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    },
    methods : {
        changeHandler: function(args: ChangedEventArgs) {
          //Your required action here
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }
</style>

```

## Focus event

The TextArea component triggers the [focus](https://ej2.syncfusion.com/vue/documentation/api/textarea/#focus ) when the TextArea gains focus. This event allows developers to execute specific actions when the user interacts with the TextArea by focusing on it.
The [FocusInEventArgs](https://ej2.syncfusion.com/vue/documentation/api/textbox/FocusInEventArgs/) passed as an argument provides details about the focus event in the TextArea.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="rating" :focus="focusHandler"></ejs-textarea>
    </div>
</template>

<script setup>
import { TextAreaComponent, FocusInEventArgs } from '@syncfusion/ej2-vue-inputs';

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    },
    methods : {
        focusHandler: function(args: FocusInEventArgs) {
          //Your required action here
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }
</style>

```

## Blur event

The TextArea component triggers the [blur](https://ej2.syncfusion.com/vue/documentation/api/textarea/#blur) when the TextArea loses focus. This event allows users to execute specific actions when the user interacts with the TextArea by moving focus away from it.
The [FocusOutEventArgs](https://ej2.syncfusion.com/vue/documentation/api/textbox/FocusOutEventArgs/) passed as an argument provides details about the blur event in the TextArea.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="rating" :blur="blurHandler"></ejs-textarea>
    </div>
</template>

<script setup>
import { TextAreaComponent, FocusOutEventArgs } from '@syncfusion/ej2-vue-inputs';

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    },
    methods : {
        blurHandler: function(args: FocusOutEventArgs) {
          //Your required action here
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }
</style>

```

## Destroyed event

The TextArea component triggers the [destroyed](https://ej2.syncfusion.com/vue/documentation/api/textarea/#destroyed) when the TextArea component is destroyed.

```
<template>
    <div class='wrap'>
        <ejs-textarea id="rating" :destroyed="destroyed"></ejs-textarea>
    </div>
</template>

<script setup>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';

export default {
   components: {
    'ejs-textarea': TextAreaComponent
   },
   data: function() {
        return { }
    },
    methods : {
        destroyed: function() {
          //Your required action here
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }
</style>

```