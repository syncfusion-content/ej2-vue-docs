---
layout: post
title: Get or set local storage value in Vue Grid component | Syncfusion
description: Learn here all about Get or set local storage value in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Get or set local storage value 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get or set local storage value in Vue Grid component

If the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/grid/#enablepersistence) property set as true,The Grid property value is saved in the `window.localStorage` for reference. You can get/set the localStorage value by using the `getItem`/`setItem` method in `window.localStorage`.

```ts
//get the Grid model.
let value = window.localStorage.getItem('gridGrid'); //"gridGrid" is component name + component id.
let model = JSON.parse(model);

```

```ts
//set the Grid model.
window.localStorage.setItem('gridGrid', JSON.stringify(model)); //"gridGrid" is component name + component id.

```