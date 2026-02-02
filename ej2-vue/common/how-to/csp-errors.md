---
layout: post
title: Resolving Content Security Policy in Syncfusion ##Platform_Name##
description: Learn here all about Content Security Policy in Syncfusion  ##Platform_Name##  Common control of Syncfusion Essential JS 2 and more.
platform: ej2-vue
control: common
documentation: ug
domainurl: ##DomainURL##
---

# How to resolve Content Security Policy (CSP) errors

Enabling a strict Content Security Policy (CSP) can cause issues with Syncfusion<sup style="font-size:70%">&reg;</sup> Vue components in your application.

## Image loading

The Syncfusion<sup style="font-size:70%">&reg;</sup> license banner uses a base64 image, which is blocked on sites with strict CSP settings. To allow this image, add the img-src data: directive to your CSP (for example, in a meta tag) or consider [registering the license key](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-registration).

For more about the img-src directive, see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src