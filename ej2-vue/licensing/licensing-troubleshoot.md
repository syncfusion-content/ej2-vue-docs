---
layout: post
title: Licensing troubleshoot in Vue Licensing component | Syncfusion
description: Learn here all about Licensing troubleshoot in Syncfusion Vue Licensing component of Syncfusion Essential JS 2 and more.
control: Licensing troubleshoot 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Licensing troubleshoot in Vue

## Is an internet connection required for license validation

No, an internet connection is not required for Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> Studio license validation. License validation is performed offline during application execution. Applications registered with a Syncfusion<sup style="font-size:70%">&reg;</sup> license key can be deployed on systems without internet access.

## Upgrade from trial version after purchasing a license

To upgrade from the trial version, there are two possible solutions:

* Uninstall the trial version and install the fully licensed build from the [License & Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* If you are using Syncfusion<sup style="font-size:70%">&reg;</sup> controls from the [npm](https://www.npmjs.com/search?q=scope:syncfusion), replace the currently used trial license key with a paid license key that can be generated from the [License & Downloads](https://www.syncfusion.com/account/downloads) section of Syncfusion<sup style="font-size:70%">&reg;</sup> website. Refer to [this](https://help.syncfusion.com/common/essential-studio/licensing/license-key#how-to-register-the-syncfusion-license-key) topic for more information regarding registering the license in the application.

> The license registration is not required if you reference Syncfusion<sup style="font-size:70%">&reg;</sup> scripts from the Licensed installer. These licensing changes apply to all evaluators who refer to the Syncfusion<sup style="font-size:70%">&reg;</sup> scripts from the evaluation installer and those who use the Syncfusion<sup style="font-size:70%">&reg;</sup> NuGet packages form [nuget.org](https://www.nuget.org/).

## Where can I get a license key

License keys can be generated from the [License & Downloads](https://syncfusion.com/account/downloads) or the [Trial & Downloads](https://www.syncfusion.com/account/manage-trials/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website.

![Get Community License](images/get-community-license-key.png)

Syncfusion<sup style="font-size:70%">&reg;</sup> license keys are version- and platform-specific. Refer to the [KB article](https://www.syncfusion.com/kb/8976/how-to-generate-license-key-for-licensed-products) to generate the license key for the required version and platform. Also refer to this [KB article](https://www.syncfusion.com/kb/8951/which-version-syncfusion-license-key-should-i-use-in-my-application) to determine which version of the license key should be used.

> When using ASP.NET Core controls with JavaScript (ES5) components, register the license key in both the JavaScript (ES5) and [ASP.NET Core](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/license-key-registration) applications, as license validation occurs on both client and server sides.

## Will the registered license key expire

No, Syncfusion<sup style="font-size:70%">&reg;</sup> license keys do not expire for a particular version and can be used indefinitely. Trial keys expire after 30 days and should not be used in production.

> When upgrading to newer versions of Syncfusion<sup style="font-size:70%">&reg;</sup> packages, generate and register new license keys.

## When to generate new license key while upgrading

You don't need to generate and change license keys for minor version upgrades. However, when upgrading from one major version to another major version, you must generate a new license key and update it in your application.

For example,
* If you are using a version like `25.1.X`, it is important to use the same version for all Syncfusion<sup style="font-size:70%">&reg;</sup> components in your application. The license key generated for version `25.X.XX` can be used. This key can be used across all minor versions within that major version, `v25`. This means you can upgrade all packages to `25.2.X` while still using the same license key.

* However, if you upgrade from one major version to another—such as from `25.1.X` to `26.1.X`—you will need to generate a new license key for the latest version and update it in your application.

>Note: The above-mentioned guidelines are not applicable to our packages on version `20.X.XX`, where `20.1` denotes one major version and `20.2` another major version. However, starting with our release version 21, we have adjusted the pattern. So if you are using `20.1.X`, when you upgrade to `20.2.X`, you have to generate new license keys for `20.2.X` and change in the application. Therefore, these guidelines apply to versions `21` and later.

## License registration for multiple developers on your project

Syncfusion<sup style="font-size:70%">&reg;</sup> license key is a version based and it’s not based on the developer. You don’t have to register different keys for each developer. Just register one valid license key when developing and publishing the software.

## Can I use the same key for all the web apps under the project

Yes, you can use the same license key for all the web apps.

## Does the license registration access any resources or data

No, the license registration doesn't access any data or resources.

## License & Downloads shows the "Essential<sup style="font-size:70%">&reg;</sup> Studio Enterprise Edition Binary with Test Studio" and the "Project License". Which license to use

Use any licenses shown on the [accounts & downloads](https://www.syncfusion.com/account/downloads) page. It shows two licenses because if you are part of your company's enterprise portal Global license and an individual license is also assigned to your account, on your account & downloads page, the individual license and your enterprise portal Global license are shown.

 ![Project License](images/project-license.png)

Refer to the [KB](https://www.syncfusion.com/kb/11532/definition-of-terms-for-syncfusion-licenses) article which explains the Licenses offered by Syncfusion<sup style="font-size:70%">&reg;</sup>.

## If I registered the license key in both the application and the license text file

The application registered license key is set priority and used for license validation.

## Reactivating license once after updating the package version while using npx

It is essential to reactivate the license key when upgrading the Syncfusion<sup style="font-size:70%">&reg;</sup> packages while the license has been registered through the `npx` command.

## Potential causes of licensing errors

Common causes of licensing errors:

* Duplicate Syncfusion<sup style="font-size:70%">&reg;</sup> packages in the application.
* Syncfusion<sup style="font-size:70%">&reg;</sup> packages referenced with multiple versions.
* License key version mismatch with the referenced Syncfusion<sup style="font-size:70%">&reg;</sup> package version.
* Inclusion of [non-Vue packages](#license-issue-due-to-including-non-vue-packages-in-the-dependencies) in dependencies.

### License issue due to duplicate Syncfusion<sup style="font-size:70%">&reg;</sup> packages in the application

Duplicate packages may exist after upgrading. To resolve:
1. Delete the `@syncfusion` folder from `node_modules` and the `package-lock.json` file from the application root.
2. Clear the npm cache: `npm cache clean --force` or delete the cache folder.
3. Update all Syncfusion<sup style="font-size:70%">&reg;</sup> components in `package.json` to the same major version (e.g., all components to `20.4.XX`).
4. Run `npm install`.

### Invalid license issue because of Syncfusion<sup style="font-size:70%">&reg;</sup> packages referred with multiple version

It is essential to ensure that all the components used in a project are compatible and work seamlessly together. One common issue that arises in such scenarios is `version mismatch`. Version mismatch occurs when `different components` have `different major versions`, leading to compatibility issues and difficulties in license registration.

For example, consider a situation where one component in the project has a version of `v20.1.XX`, while another component has a version of `v20.2.XX`. When such components are used together, a `version mismatch` occurs, leading to license errors. To avoid version mismatch and ensure smooth functioning of the project, it is crucial to use the `same major version` for all the Syncfusion<sup style="font-size:70%">&reg;</sup> components. This will ensure compatibility and prevent any licensing issues that may arise due to version incompatibility.

### Registering the license key of a different version than the referred Syncfusion<sup style="font-size:70%">&reg;</sup> package version in the application

When developing an application with Syncfusion<sup style="font-size:70%">&reg;</sup> packages, it is important to register the appropriate license key that matches the version of the package installed. Failure to do so may result in license errors within the application. 

For instance, if you are using a component version labeled as `(v20.4.XX)`, it is essential to register the license key generated `specifically` for that version. By doing so, it ensures the smooth functioning of the controls and provides access to all features and functionality without encountering any license validation errors.

### License issue due to including non-Vue packages in the dependencies

When integrating Syncfusion<sup style="font-size:70%">&reg;</sup> with your vue project, it's essential to include only our vue component packages in the dependencies, as shown in the image below.

![Including our Vue component packages](images/vuepackages.png)

Avoid including our TypeScript packages separately.

![Including NonVue component packages](images/nonvuepackages.png)

These are sub-dependencies of our Vue component packages and are automatically installed along with them. Including them separately may sometimes result in duplicate instances of packages, which can lead to issues with license validation. Therefore, to ensure proper license validation and avoid conflicts, stick to including our Vue component packages alone in your project dependencies.
## See also

* [License key generation](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-generation)
* [License key registration](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-registration)
* [Licensing errors](https://ej2.syncfusion.com/vue/documentation/licensing/licensing-errors)