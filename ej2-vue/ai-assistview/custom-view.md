---
layout: post
title: Custom View with Vue AI AssistView component | Syncfusion
description: Checkout and learn about Custom View with Vue AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Custom views in Vue AI AssistView component

The AI AssistView component supports multiple views that allow you to organize different types of content within the same component.

## Adding custom views

The `e-views` selector enables you to define a collection of different view models within the AI AssistView component. Each view can be independently customized with different appearances and content.

### Setting view type

You can specify the type of view using the [type](../api/ai-assistview#assistViewType) property within the `e-view` selector. It accepts two values such as `Assist`, and `Custom`.

```html

<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' :prompt-request="onPromptRequest" ref="aiassist">
      <e-views>
        <e-view type="Assist"></e-view>
        <e-view type="Custom"></e-view>
      </e-views>
    </ejs-aiassistview>
  </div>
</template>
<script>
import { AIAssistViewComponent, ViewDirective, ViewsDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective
  },
  data: function () {
    return {
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>

```

### Setting name

You can use the [name](../api/ai-assistview/assistViewModel#name) property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

```html

<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' :prompt-request="onPromptRequest" ref="aiassist">
      <e-views>
        <e-view name="Prompt"></e-view>
        <e-view name="Response"></e-view>
      </e-views>
    </ejs-aiassistview>
  </div>
</template>
<script>
import { AIAssistViewComponent, ViewDirective, ViewsDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective
  },
  data: function () {
    return {
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>

```

### Setting iconCss

You can customize the view icons using the [iconCss](../api/ai-assistview/assistViewModel#iconcss) property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

```html

<template>
  <div id='container' style="height: 350px; width: 650px;">
    <br>
    <ejs-aiassistview id='aiAssistView' :prompt-request="onPromptRequest" ref="aiassist">
      <e-views>
        <e-view icon-css="e-icons e-assistview-icon"></e-view>
        <e-view icon-css="e-icons e-comment-show" type="Custom"></e-view>
      </e-views>
    </ejs-aiassistview>
  </div>
</template>
<script>
import { AIAssistViewComponent, ViewDirective, ViewsDirective } from "@syncfusion/ej2-vue-interactive-chat";

export default {
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'e-views': ViewsDirective,
    'e-view': ViewDirective
  },
  data: function () {
    return {
    }
  },
  methods: {
    onPromptRequest: (args) => {
      setTimeout(() => {
        let defaultAiassist = this.$refs.aiassist.ej2Instances;
        let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        defaultAiassist.addPromptResponse(defaultResponse);
      }, 1000);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css";
</style>

```

The following example illustrates how types, name, and iconCss are used in a AI AssistView component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/custom-view/type/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/custom-view/type/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/type" %}

### Setting view template 

The [viewTemplate](../api/ai-assistview/assistViewModel#viewtemplate) property allows to define custom content for multiple views within the AI AssistView.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/custom-view/viewTemplate/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/custom-view/viewTemplate/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/viewTemplate" %}

## Setting activeView

You can use the [activeView](../api/ai-assistview#activeview) property to specify which view should be displayed when the AI AssistView component initializes. By default, the first view (index 0) is set as active.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/custom-view/active-view/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/custom-view/active-view/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/active-view" %}
