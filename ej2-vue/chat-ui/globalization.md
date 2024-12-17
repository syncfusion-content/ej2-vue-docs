---
layout: post
title: Globalization in Vue Chat UI component | Syncfusion
description:  Checkout and learn about Globalization with Vue Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-vue
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Globalization in Vue Chat UI component

## Localization
 
The Chat UI can be localized to any culture by defining the text of the Chat UI in the corresponding culture. The default locale of the Chat UI is `en` (English). The following table represents the default text of the Chat UI in `en` culture.

|KEY|Text|
|----|----|
|oneUserTyping|{0} is typing|
|twoUserTyping|{0} and {1} are typing|
|threeUserTyping|{0}, {1}, and {2} other are typing|
|multipleUsersTyping|{0}, {1}, and {2} others are typing|

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/globalization/localization/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/globalization/localization/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/localization" %}

## RTL
 
RTL provides an option to switch the text direction and layout of the Chat UI component from right to left by setting the [enableRtl](../api/chat-ui/chatUIModel/#enablertl) property to `true`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/globalization/rtl/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/chat-ui/globalization/rtl/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/chat-ui/globalization/rtl" %}
