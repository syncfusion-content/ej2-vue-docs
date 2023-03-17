---
layout: post
title: Installation in Vue Installation and upgrade component | Syncfusion
description: Learn here all about Installation in Syncfusion Vue Installation and upgrade component of Syncfusion Essential JS 2 and more.
control: Installation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD024 -->

# Installation

## Install by using npm CLI

Syncfusion Vue (Essential JS 2) packages are published in [npm](https://www.npmjs.com/search?q=scope:syncfusion). You can install the necessary packages from npm’s install command. For example, vue grid package can be installed using following command.

```
npm install @syncfusion/ej2-vue-grids --save
```

## Install by using package.json

1. Add the Syncfusion Vue (Essential JS 2) package references in the `dependencies` of `~/package.json` file.

    ```
    {
        "dependencies": {
            "@syncfusion/ej2-vue-grids": "*",
            "@syncfusion/ej2-vue-charts": "*"
        }
    }
    ```
    > The `*` indicates the latest version of npm package. Refer the [documentation](https://docs.npmjs.com/misc/semver#versions) for more details about npm versioning.

2. Now, open the command prompt and run the `npm install` command line. This will install all npm dependencies in a single command line.

> Refer the [documentation](https://docs.npmjs.com/files/package.json) for more details about npm package.json