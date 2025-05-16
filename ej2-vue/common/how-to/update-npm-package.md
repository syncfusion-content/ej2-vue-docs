---
layout: post
title: Update npm package in Vue Common control | Syncfusion
description: Learn here all about Update npm package in Syncfusion Vue Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Updating Syncfusion npm packages

Keeping Syncfusion npm packages up to date is important to ensure that you have access to the latest features and bug fixes. The [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) package is a helpful tool that can be used to update your Syncfusion packages to their latest versions.

Updating All Syncfusion Packages

To update all Syncfusion packages, you can install the `npm-check-updates` package globally by running the following command,

```bash
npm install -g npm-check-updates
```

Next, use the `ncu` command to update the `package.json` file to the latest version for all `@syncfusion` packages,

```bash
ncu -u -f /^@syncfusion/
```

Finally, run the following commands to update the packages in `node_modules` and remove any duplicate packages that have been installed,

```bash
npm update
npm dedupe
```

## Updating a specific npm package

You can also update a specific npm package by running the following commands from the command prompt in the root of your application,

```bash
npm update @syncfusion/ej2-grids
npm update @syncfusion/ej2-vue-grids
npm dedupe
```

This will update the specific package you have provided and run npm dedupe command which will remove any duplicate package.