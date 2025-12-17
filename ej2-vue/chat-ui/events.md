---
layout: post
title: Events in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Events with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Events in Vue Chat UI component component

This section describes the Chat UI events that will be triggered when appropriate actions are performed. The following events are available in the Chat UI component.

## Created

The Chat UI component triggers the [created](../api/chat-ui#created) event when the component rendering is completed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/created/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/created/app.vue %}
{% endhighlight %}
{% endtabs %}

## Sending message

The [messageSend](../api/chat-ui#messagesend) event is triggered before sending a message in the Chat UI component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/messageSend/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/messageSend/app.vue %}
{% endhighlight %}
{% endtabs %}

## User Typing

The [userTyping](../api/chat-ui#usertyping) event is triggered when the user is typing a message in the Chat UI component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/userTyping/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/events/userTyping/app.vue %}
{% endhighlight %}
{% endtabs %}

## Before attachment upload

The [beforeAttachmentUpload](../api/chat-ui#beforeattachmentupload) event is triggered before attached files begin uploading in the Chat UI.

## Attachment upload success

The [attachmentUploadSuccess](../api/chat-ui#attachmentuploadsuccess) event is triggered when an attached file is successfully uploaded in the Chat UI.

## Attachment upload failure

The [attachmentUploadFailure](../api/chat-ui#attachmentuploadfailure) event is triggered when an attached file upload fails in the Chat UI.

## Attachment removed

The [attachmentRemoved](../api/chat-ui#attachmentremoved) event is triggered when an attached file is removed from the Chat UI.

## Attachment click

The [attachmentClick](../api/chat-ui#attachmentclick) event is triggered when an attached file is clicked in the Chat UI.
