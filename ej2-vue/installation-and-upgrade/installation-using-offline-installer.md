---
layout: post
title: Installation using offline installer in Vue Installation and upgrade component | Syncfusion
description: Learn here all about Installation using offline installer in Syncfusion Vue Installation and upgrade component of Syncfusion Essential JS 2 and more.
control: Installation using offline installer 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Installation using Offline Installer

Refer to the [Download](https://ej2.syncfusion.com/vue/documentation/installation-and-upgrade/download) section to learn how to obtain the JavaScript – EJ2 trial or licensed installer.

The frameworks supported by this installer:

* JavaScript
* Angular
* React
* Vue
* JavaScript (ES5)

## Installing with UI

The steps below describe how to install the Essential<sup style="font-size:70%">&reg;</sup> Studio JavaScript – EJ2 installer.

1. Open the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 offline installer file from downloaded location by double-clicking it. The Installer Wizard automatically opens and extracts the package

    ![license download](images/offline1.png)

    > Note: The Installer wizard displays a dialog showing the package extraction progress.

2. To unlock the Syncfusion<sup style="font-size:70%">&reg;</sup> offline installer, choose one of the following options:

    * Login To Install
    * Use Unlock Key

    **Login To Install**
    Enter the Syncfusion<sup style="font-size:70%">&reg;</sup> email address and password. If you do not have a Syncfusion<sup style="font-size:70%">&reg;</sup> account, click **"Create an account"** to sign up. If you have forgotten the password, click **"Forgot Password"** to reset it. After entering credentials, click Next.
    ![license download](images/offline2.png)

    **Use Unlock Key**
    Unlock keys are used to unlock the Syncfusion<sup style="font-size:70%">&reg;</sup> offline installer, and they are platform and version specific. You should use either Syncfusion<sup style="font-size:70%">&reg;</sup> licensed or trial Unlock key to unlock Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 installer.

    The trial unlock key is only valid for 30 days, and the installer will not accept an expired trial key.

    To learn how to generate an unlock key for both trial and licensed products, see [this](https://www.syncfusion.com/kb/2326) Knowledge Base article.

    ![license download](images/offline3.png)

3. After reading the License Terms and Privacy Policy, check the **“I agree to the License Terms and Privacy Policy”** check box. Click the Next button.

4. Change the install and sample locations here. You can also change the Additional settings. Click Next/Install to install with the default settings.

    ![license download](images/offline4.png)

    **Additional settings**

    * Select the **Install Demos** check box to install Syncfusion<sup style="font-size:70%">&reg;</sup> samples, or leave the check box unchecked, if you do not want to install Syncfusion<sup style="font-size:70%">&reg;</sup> samples
    * Select the **Configure Syncfusion<sup style="font-size:70%">&reg;</sup> Extensions in Visual Studio** checkbox to configure the Syncfusion<sup style="font-size:70%">&reg;</sup> Extensions in Visual Studio or clear this check box when you do not want to configure the Syncfusion<sup style="font-size:70%">&reg;</sup> Extensions in Visual Studio.
    * Check the **Create Desktop Shortcut** checkbox to add a desktop shortcut for Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel
    * Check the **Create Start Menu Shortcut** checkbox to add a shortcut to the start menu for Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel

5. If any previous versions of the current product is installed, the **Uninstall** Previous Version(s) wizard will be opened. Select Uninstall checkbox to uninstall the previous versions and then click the Proceed button.

    ![license download](images/offline5.png)

    >Note: From the 2021 Volume 1 release, Syncfusion<sup style="font-size:70%">&reg;</sup> has added the option to uninstall previous versions from 18.1 while installing the new version.
    >
    >Note: If any version is selected to uninstall, a confirmation screen will appear; if continue is selected, the Progress screen will display the uninstall and install progress, respectively. If none of the versions are chosen to be uninstalled, only the installation progress will be displayed.

    **Confirmation alert**

    ![license download](images/offline6.png)

    **Uninstall progress:**

    ![license download](images/offline7.png)

    **Install progress**

    ![license download](images/offline8.png)

    >Note: The Completed screen is displayed once the JavaScript – EJ2 product is installed. If any version is selected to uninstall, The completed screen will display both install and uninstall status.

    ![license download](images/offline9.png)

6. After installing, click the Launch Control Panel link to open the Syncfusion<sup style="font-size:70%">&reg;</sup> Control Panel.

7. Click the Finish button. Your system has been installed with the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> Studio JavaScript – EJ2 product.

## Installing in silent mode

The Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> Studio JavaScript – EJ2 Installer supports installation and uninstallation via the command line.

### Command line installation

To install through the command line in silent mode:

1. Run the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 installer by double-clicking it. The Installer Wizard opens and extracts the package.
2. The `syncfusionejs2_(version).exe` file is extracted to the Temp directory.
3. Run `%temp%` to open the Temp folder. Locate the `syncfusionejs2_(version).exe` file in one of the subfolders.
4. Copy the extracted `syncfusionejs2_(version).exe` file to a local drive.
5. Exit the Wizard.
6. Run Command Prompt in administrator mode and enter the following arguments:

    Arguments: “installer file path/SyncfusionEssentialStudio(product)_(version).exe” /Install silent /UNLOCKKEY:“(product unlock key)” [/log “{Log file path}”] [/InstallPath:{Location to install}] [/InstallSamples:{true/false}] [/InstallAssemblies:{true/false}] [/UninstallExistAssemblies:{true/false}] [/InstallToolbox:{true/false}]

    >Note: [..] – Arguments inside the square brackets are optional.

    **Example:** “D:/Temp/syncfusionejs2x.x.x.x.exe” /Install silent /UNLOCKKEY:“product unlock key” /log “C:/Temp/EssentialStudioPlatform.log” /InstallPath:C:/Syncfusion/x.x.x.x /InstallSamples:true /InstallAssemblies:true /UninstallExistAssemblies:true /InstallToolbox:true

7. Essential<sup style="font-size:70%">&reg;</sup> Studio for JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS2) is installed.

    >Note: x.x.x.x should be replaced with the Essential<sup style="font-size:70%">&reg;</sup> Studio version and the Product Unlock Key needs to be replaced with the Unlock Key for that version.

### Command line uninstallation

Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 can be uninstalled silently using the Command Line.

1. Run the Syncfusion<sup style="font-size:70%">&reg;</sup> JavaScript – EJ2 installer by double-clicking it. The Installer Wizard opens and extracts the package.
2. The `syncfusionejs2_(version).exe` file is extracted to the Temp directory.
3. Run `%temp%` to open the Temp folder. Locate the `syncfusionejs2_(version).exe` file in one of the subfolders.
4. Copy the extracted `syncfusionejs2_(version).exe` file to a local drive.
5. Exit the Wizard.

6. Run Command Prompt in administrator mode and enter the following arguments.

    Arguments: “Copied installer file path/ syncfusionejs2_(version).exe” /uninstall silent
    Example: “D:/Temp/syncfusionejs2_x.x.x.x.exe” /uninstall silent

7. Essential<sup style="font-size:70%">&reg;</sup> Studio for JavaScript (Essential<sup style="font-size:70%">&reg;</sup> JS2) is uninstalled.