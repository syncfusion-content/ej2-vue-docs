---
layout: post
title: Events in Vue OTP Input component | Syncfusion
description:  Learn here all about Events in Syncfusion Vue OTP Input component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: OTP Input
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue OTP Input component

This section describes the OTP Input events that will be triggered when appropriate actions are performed. The following events are available in the OTP Input component.

## created

The OTP Input component triggers the [created](https://ej2.syncfusion.com/vue/documentation/api/otp-input#created) event when the component rendering is completed.

```
<template>
  <div class='wrap'>
    <ejs-otpinput id="otp_input" :created="created"></ejs-otpinput>
  </div>
</template>

<script>
import { OtpInputComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
    name: "App",
    components: { 'ejs-otpinput': OtpInputComponent },
    methods: {
      created : function(args) {
        // Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  width: 350px;
  margin-top: 30px;
  padding: 30px;
}
</style>
```

## focus 

The OTP Input component triggers the [focus](https://ej2.syncfusion.com/vue/documentation/api/otp-input#focus) event when the OTP Input is focused. The `OtpFocusEventArgs ` passed as an event argument provides the details of the focus event.

```
<template>
  <div class='wrap'>
    <ejs-otpinput id="otp_input" :focus="focus"></ejs-otpinput>
  </div>
</template>

<script>
import { OtpInputComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
    name: "App",
    components: { 'ejs-otpinput': OtpInputComponent },
    methods: {
      focus : function(args) {
        // Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  width: 350px;
  margin-top: 30px;
  padding: 30px;
}
</style>
```

## blur

The OTP Input component triggers the [blur](https://ej2.syncfusion.com/vue/documentation/api/otp-input#blur) event when the OTP Input is focused out. The `OtpFocusEventArgs ` passed as an event argument provides the details of the blur event.

```
<template>
  <div class='wrap'>
    <ejs-otpinput id="otp_input" :blur="blur"></ejs-otpinput>
  </div>
</template>

<script>
import { OtpInputComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
    name: "App",
    components: { 'ejs-otpinput': OtpInputComponent },
    methods: {
      blur : function(args) {
        // Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  width: 350px;
  margin-top: 30px;
  padding: 30px;
}
</style>
```

## input

The OTP Input component triggers the [input](https://ej2.syncfusion.com/vue/documentation/api/otp-input#input) event when the value of each OTP Input is changed. The `OtpInputEventArgs` passed as an event argument provides the details of the each value is changed.

```
<template>
  <div class='wrap'>
    <ejs-otpinput id="otp_input" :input="input"></ejs-otpinput>
  </div>
</template>

<script>
import { OtpInputComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
    name: "App",
    components: { 'ejs-otpinput': OtpInputComponent },
    methods: {
      input : function(args) {
        // Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  width: 350px;
  margin-top: 30px;
  padding: 30px;
}
</style>
```

## valueChanged

The OTP Input component triggers the [valueChanged](https://ej2.syncfusion.com/vue/documentation/api/otp-input#valuechanged) event when the value of the OTP Input is changed and matching the OTP Input length. The `OtpChangedEventArgs` passed as an event argument provides the details when value is changed.

```
<template>
  <div class='wrap'>
    <ejs-otpinput id="otp_input" :valueChanged="valueChanged"></ejs-otpinput>
  </div>
</template>

<script>
import { OtpInputComponent } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default {
    name: "App",
    components: { 'ejs-otpinput': OtpInputComponent },
    methods: {
      valueChanged : function(args) {
        // Your required action here
      }
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

.wrap {
  width: 350px;
  margin-top: 30px;
  padding: 30px;
}
</style>
```

Below example demonstrates the valueChanged event of the OTP Input component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/otp-input/events/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/otp-input/events/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/otp-input/events" %}