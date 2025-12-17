---
layout: post
title: Events in Vue AI AssistView component | Syncfusion
description: Checkout and learn about events with Vue AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue AI AssistView component

This section describes the AI AssistView events that will be triggered when appropriate actions are performed. The following events are available in the AI AssistView component.

## created

The AI AssistView component triggers the [created](../api/ai-assistview#created) event when the component rendering is completed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/created/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/created/app.vue %}
{% endhighlight %}
{% endtabs %}

## promptRequest

The [promptRequest](../api/ai-assistview#promptrequest) event is triggered when the prompt request is made in the AI AssistView control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/promptRequest/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/promptRequest/app.vue %}
{% endhighlight %}
{% endtabs %}

## promptChanged

The [promptChanged](../api/ai-assistview#promptchanged) event is triggered when the prompt text is changed in the AI AssistView control.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/promptChanged/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/promptChanged/app.vue %}
{% endhighlight %}
{% endtabs %}

## beforeAttachmentUpload

The [beforeAttachmentUpload](../api/ai-assistview#beforeattachmentupload) event is triggered before the attached files upload begins in the AI AssistView

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/before-attachment/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/before-attachment/app.vue %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadSuccess

The [attachmentUploadSuccess](../api/ai-assistview#attachmentuploadsuccess) event is triggered when the attached file is successfully uploaded in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-success/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-success/app.vue %}
{% endhighlight %}
{% endtabs %}

## attachmentUploadFailure

The [attachmentUploadFailure](../api/ai-assistview#attachmentuploadfailure) event is triggered when the attached file upload fails in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-failure/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-failure/app.vue %}
{% endhighlight %}
{% endtabs %}

## attachmentRemoved

The [attachmentRemoved](../api/ai-assistview#attachmentremoved) event is triggered when an attached file is removed in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-removed/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-removed/app.vue %}
{% endhighlight %}
{% endtabs %}

## attachmentClick

The [attachmentClick](../api/ai-assistview#attachmentclick) event is triggered when an attached file is clicked in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-click/app-composition.vue%}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/ai-assistview/events/attachment-click/app.vue %}
{% endhighlight %}
{% endtabs %}
