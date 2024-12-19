---
layout: post
title: Theme in Vue Appearance component | Syncfusion
description: Learn here all about Theme in Syncfusion Vue Appearance component of Syncfusion Essential JS 2 and more.
control: Theme 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Theme in Vue Appearance component

The Syncfusion Vue library has provided the below list of in-built themes,

|Theme |Style Sheet Name|
|--------|--------|
|Bootstrap 5.3 | bootstrap5.3.css |
|Bootstrap 5.3 Dark | bootstrap5.3-dark.css |
|Fluent 2 | fluent2.css |
|Fluent 2 Dark | fluent2-dark.css |
|Material 3 | material3.css |
|Material 3 Dark | material3-dark.css |
|Bootstrap 5 | bootstrap5.css |
|Bootstrap 5 Dark | bootstrap5-dark.css |
|Fluent | fluent.css |
|Fluent Dark | fluent-dark.css |
|Google’s Material | material.css |
|Google’s Material-Dark | material-dark.css |
|Tailwind CSS | tailwind.css |
|TailwindDark CSS | tailwind-dark.css |
|Microsoft Office Fabric | fabric.css |
|Microsoft Office Fabric Dark | fabric-dark.css |
|High Contrast | highcontrast.css |

> The Syncfusion Bootstrap theme is designed based on `Bootstrap v3`, however, it can be compatible with `Bootstrap v4` applications. In addition to these four built-in themes, [ThemeStudio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/) provides support for the Fusion Theme that can only be downloaded from [ThemeStudio](https://ej2.syncfusion.com/themestudio/?theme=fusion).

## Optimized CSS files

Syncfusion components provide two size modes for each theme: **normal** and **bigger**. By default, the **normal size mode** is applied, offering a standard appearance that is suitable for all devices. The **bigger size mode** provides an enlarged interface for enhanced interactions, visibility, and an overall improved user experience by increasing the size of the UI components.

The bigger size mode is ideal when an enlarged appearance is needed, while the normal size mode works best for maintaining the default appearance of components.

Below is a comparison of the Button component in normal and bigger size modes:

![bigger-sized-button](./images/bigger-theme-button.png)

Each theme includes both normal and bigger size modes, which increases the overall file size. To optimize performance, Syncfusion offers additional theme files (e.g., `fluent2-lite.css`), which only include the normal size mode styles. This results in a significant reduction in file size, improving load times and overall application performance, especially when the bigger size mode is unnecessary.

Refer to the comparison below for the default and optimized theme file sizes:

| Theme Name | Default Theme Size | Optimized Theme Size |
| -- | -- | -- |
| Fluent 2 | 3.97 MB | 2.96 MB |

Themes are shipped as individual and combined CSS files. Combined CSS file can be referred from the npm package `@syncfusion/ej2` and individual CSS files are available within same component repository’s `style` folder. In ej2 npm packages, we have shipped both CSS and SCSS files for all components.

Referring All components CSS

```
@import "./node_modules/@syncfusion/ej2/<theme_name>.css";
```

Referring All components SCSS

```scss
@import "ej2/<theme_name>.scss";
```

## Referring individual control theme

We can get the individual theme from the individual npm package or from an overall ej2 npm package.

Referring individual control from individual package

```scss
@import "<dependent-package>/<dependent-control>/<theme_name>.scss";
@import "ej2-buttons/styles/button/<theme_name>.scss";
```

**Example:**

```scss
@import "ej2-base/styles/material.scss";
@import "ej2-buttons/styles/button/material.scss";
```

> `ej2-base` is common dependent package for all Syncfusion JavaScript control styles. So, it needs first to be added in the import statement.

Referring individual control from ej2 package

```scss
@import "ej2/<dependent-control>/<theme_name>.scss";
@import "ej2/button/<theme_name>.scss";
```

**Example:**

```scss
@import "ej2/base/material.scss";
@import "ej2/button/material.scss";
```

> The individual control theme will not include its dependent control styles. I.e. The dependent controls theme should be added before adding the individual control themes.

### Referring all components optimized CSS file

To refer to all component's optimized CSS files from the `@syncfusion/ej2` package, follow the below syntax:

```css
@import "@syncfusion/ej2/<theme_name>-lite.css";
/* or */
@import "@syncfusion/ej2/<theme_name>-lite.scss";
```

**Example:**

```css
@import "@syncfusion/ej2/fluent2-lite.css";
/* or */
@import "@syncfusion/ej2/fluent2-lite.scss";
```

### Referring individual component optimized CSS file

To refer to individual component's optimized CSS files from an individual packages, follow the below syntax:

```css
@import "<dependent-package>/styles/<theme_name>-lite.css";
/* or */
@import "<dependent-package>/styles/<theme_name>-lite.scss";
```

**Example:**

```css
@import "@syncfusion/ej2-buttons/styles/fluent2-lite.css";
/* or */
@import "@syncfusion/ej2-buttons/styles/fluent2-lite.scss";
```

### Advantages of using the individual components theme

* Reducing the page load time of the application.
* Reducing the bundle size of the application.
* Avoids using the unused components CSS.

## Common variables

The below list of common variables used in the Syncfusion Vue library themes for all components. You can change these variables to customize the corresponding theme.

### Syncfusion Bootstrap 5.3 theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>--color-sf-black</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0,0,0)"></span> rgb(0,0,0)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0,0,0)"></span> rgb(0,0,0)
            </td>
        </tr>
        <tr>
            <td>--color-sf-white</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255,255,255)"></span> rgb(255,255,255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255,255,255)"></span> rgb(255,255,255)
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(13,110,253,1)"></span> rgba(13,110,253,1)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(13,110,253,1)"></span> rgba(13,110,253,1)
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-text-color</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #86b7fe"></span> #86b7fe
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #86b7fe"></span> #86b7fe
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-lighter</td>
            <td>
                <span class="circle-color-indicator" style="background: #cfe2ff"></span> #cfe2ff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #031633"></span> #031633
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #3367d1"></span> #3367d1
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #073ba6"></span> #073ba6
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-darker</td>
            <td>
                <span class="circle-color-indicator" style="background: #052c65"></span> #052c65
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6ea8fe"></span> #6ea8fe
            </td>
        </tr>
        <tr>
            <td>--color-sf-success</td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(25,135,84,1)"></span> rgba(25,135,84,1)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(25,135,84,1)"></span> rgba(25,135,84,1)
            </td>
        </tr>
        <tr>
            <td>--color-sf-info</td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(13,202,240,1)"></span> rgba(13,202,240,1)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(13,202,240,1)"></span> rgba(13,202,240,1)
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning</td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(255,193,7,1)"></span> rgba(255,193,7,1)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(255,193,7,1)"></span> rgba(255,193,7,1)
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger</td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(220,53,69,1)"></span> rgba(220,53,69,1)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgba(220,53,69,1)"></span> rgba(220,53,69,1)
            </td>
        </tr>
        <tr>
            <td>--color-sf-success-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #d1e7dd"></span> #d1e7dd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #75b798"></span> #75b798
            </td>
        </tr>
        <tr>
            <td>--color-sf-info-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #cff4fc"></span> #cff4fc
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6edff6"></span> #6edff6
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff3cd"></span> #fff3cd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ffda6a"></span> #ffda6a
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #f8d7da"></span> #f8d7da
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ea868f"></span> #ea868f
            </td>
        </tr>
        <tr>
            <td>--color-sf-success-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #0a3622"></span> #0a3622
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #75b798"></span> #75b798
            </td>
        </tr>
        <tr>
            <td>--color-sf-info-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #055160"></span> #055160
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6edff6"></span> #6edff6
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #664d03"></span> #664d03
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ffda6a"></span> #ffda6a
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #58151c"></span> #58151c
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ea868f"></span> #ea868f
            </td>
        </tr>
        <tr>
            <td>--color-sf-success-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #d1e7dd"></span> #d1e7dd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #051b11"></span> #051b11
            </td>
        </tr>
        <tr>
            <td>--color-sf-info-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #cff4fc"></span> #cff4fc
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #032830"></span> #032830
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff3cd"></span> #fff3cd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #332701"></span> #332701
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #f8d7da"></span> #f8d7da
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #2c0b0e"></span> #2c0b0e
            </td>
        </tr>
    </tbody>
</table>

### Syncfusion Fluent 2 theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>--color-sf-black</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>--color-sf-white:</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary</td>
            <td>
                <span class="circle-color-indicator" style="background: #0f6cbd"></span> #0f6cbd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #115ea3"></span> #115ea3
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-text-color</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #b4d6fa"></span> #b4d6fa
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0e4775"></span> #0e4775
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-lighter</td>
            <td>
                <span class="circle-color-indicator" style="background: #ebf3fc"></span> #ebf3fc
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #082338"></span> #082338
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #0f548c"></span> #0f548c
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #62abf5"></span> #62abf5
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-darker</td>
            <td>
                <span class="circle-color-indicator" style="background: #0c3b5e"></span> #0c3b5e
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #96c6fa"></span> #96c6fa
            </td>
        </tr>
        <tr>
            <td>--color-sf-success</td>
            <td>
                <span class="circle-color-indicator" style="background: #0e700e"></span> #0e700e
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #107c10"></span> #107c10
            </td>
        </tr>
        <tr>
            <td>--color-sf-info</td>
            <td>
                <span class="circle-color-indicator" style="background: #008aa9"></span> #008aa9
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0099bc"></span> #0099bc
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning</td>
            <td>
                <span class="circle-color-indicator" style="background: #bc4b09"></span> #bc4b09
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #faa06b"></span> #faa06b
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger</td>
            <td>
                <span class="circle-color-indicator" style="background: #d13438"></span> #d13438
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dc626d"></span> #dc626d
            </td>
        </tr>
        <tr>
            <td>--color-sf-success-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #54b054"></span> #54b054
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #094509"></span> #094509
            </td>
        </tr>
        <tr>
            <td>--color-sf-info-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #56bfd7"></span> #56bfd7
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #005669"></span> #005669
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #fee5d7"></span> #fee5d7
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #4a1e04"></span> #4a1e04
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #eeacb2"></span> #eeacb2
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6e0811"></span> #6e0811
            </td>
        </tr>
        <tr>
            <td>--color-sf-success-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #54b054"></span> #54b054
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #c9eac9"></span> #c9eac9
            </td>
        </tr>
        <tr>
            <td>--color-sf-info-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #56bfd7"></span> #56bfd7
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #cdedf4"></span> #cdedf4
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #8a3707"></span> #8a3707
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fee5d7"></span> #fee5d7
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #6e0811"></span> #6e0811
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fee5d7"></span> #fee5d7
            </td>
        </tr>
        <tr>
            <td>--color-sf-success-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #f1faf1"></span> #f1faf1
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #052505"></span> #052505
            </td>
        </tr>
        <tr>
            <td>--color-sf-info-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #f2fafc"></span> #f2fafc
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #002e38"></span> #002e38
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff9f5"></span> #fff9f5
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #4a1e04"></span> #4a1e04
            </td>
        </tr>
        <tr>
            <td>--color-sf-danger-light-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #fdf3f4"></span> #fdf3f4
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #3b0509"></span> #3b0509
            </td>
        </tr>
        <tr>
            <td>--color-sf-badge-warning</td>
            <td>
                <span class="circle-color-indicator" style="background: #fde300"></span> #fde300
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fde300"></span> #fde300
            </td>
        </tr>
        <tr>
            <td>--color-sf-badge-warning-text</td>
            <td>
                <span class="circle-color-indicator" style="background: #847619"></span> #847619
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fde300"></span> #fde300
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-label-color</td>
            <td>
                <span class="circle-color-indicator" style="background: #0f6cbd"></span> #0f6cbd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #479ef5"></span> #479ef5
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-cell-selection</td>
            <td>
                <span class="circle-color-indicator" style="background: #ebf3fc"></span> #ebf3fc
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ebf3fc"></span> #ebf3fc
            </td>
        </tr>
    </tbody>
</table>

### Syncfusion Material 3 theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>--color-sf-black</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0,0,0)"></span> rgb(0,0,0)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0,0,0)"></span> rgb(0,0,0)
            </td>
        </tr>
        <tr>
            <td>--color-sf-white</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255,255,255)"></span> rgb(255,255,255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255,255,255)"></span> rgb(255,255,255)
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(103, 80, 164)"></span> rgb(103, 80, 164)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(208, 188, 255)"></span> rgb(208, 188, 255)
            </td>
        </tr>
        <tr>
            <td>--color-sf-primary-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(234, 221, 255)"></span> rgb(234, 221, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(79, 55, 139)"></span> rgb(79, 55, 139)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-primary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 255, 255)"></span> rgb(255, 255, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(55, 30, 115)"></span> rgb(55, 30, 115)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-primary-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(33, 0, 94)"></span> rgb(33, 0, 94)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(234, 221, 255)"></span> rgb(234, 221, 255)
            </td>
        </tr>
        <tr>
            <td>--color-sf-surface</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 255, 255)"></span> rgb(255, 255, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(28, 27, 31)"></span> rgb(28, 27, 31)
            </td>
        </tr>
        <tr>
            <td>--color-sf-surface-variant</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(231, 224, 236)"></span> rgb(231, 224, 236)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(73, 69, 79)"></span> rgb(73, 69, 79)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-surface</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(28, 27, 31)"></span> rgb(28, 27, 31)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(230, 225, 229)"></span> rgb(230, 225, 229)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-surface-variant</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(73, 69, 78)"></span> rgb(73, 69, 78)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(202, 196, 208)"></span> rgb(202, 196, 208)
            </td>
        </tr>
        <tr>
            <td>--color-sf-secondary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(98, 91, 113)"></span> rgb(98, 91, 113)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(204, 194, 220)"></span> rgb(204, 194, 220)
            </td>
        </tr>
        <tr>
            <td>--color-sf-secondary-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(232, 222, 248)"></span> rgb(232, 222, 248)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(74, 68, 88)"></span> rgb(74, 68, 88)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-secondary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 255, 255)"></span> rgb(255, 255, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(51, 45, 65)"></span> rgb(51, 45, 65)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-secondary-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(30, 25, 43)"></span> rgb(30, 25, 43)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(232, 222, 248)"></span> rgb(232, 222, 248)
            </td>
        </tr>
        <tr>
            <td>--color-sf-tertiary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(125, 82, 96)"></span> rgb(125, 82, 96)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(239, 184, 200)"></span> rgb(239, 184, 200)
            </td>
        </tr>
        <tr>
            <td>--color-sf-tertiary-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 216, 228)"></span> rgb(255, 216, 228)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(99, 59, 72)"></span> rgb(99, 59, 72)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-tertiary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 255, 255)"></span> rgb(255, 255, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(73, 37, 50)"></span> rgb(73, 37, 50)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-tertiary-containe</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(55, 11, 30)"></span> rgb(55, 11, 30)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 216, 228)"></span> rgb(255, 216, 228)
            </td>
        </tr>
        <tr>
            <td>--color-sf-background</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 255, 255)"></span> rgb(255, 255, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(28, 27, 31)"></span> rgb(28, 27, 31)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-background</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(28, 27, 31)"></span> rgb(28, 27, 31)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(230, 225, 229)"></span> rgb(230, 225, 229)
            </td>
        </tr>
        <tr>
            <td>--color-sf-outline</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(121, 116, 126)"></span> rgb(121, 116, 126)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(147, 143, 153)"></span> rgb(147, 143, 153)
            </td>
        </tr>
        <tr>
            <td>--color-sf-outline-variant</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(196, 199, 197)"></span> rgb(196, 199, 197)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(68, 71, 70)"></span> rgb(68, 71, 70)
            </td>
        </tr>
        <tr>
            <td>--color-sf-shadow</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0, 0, 0)"></span> rgb(0, 0, 0)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0, 0, 0)"></span> rgb(0, 0, 0)
            </td>
        </tr>
        <tr>
            <td>--color-sf-surface-tint-color</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(103, 80, 164)"></span> rgb(103, 80, 164)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(208, 188, 255)"></span> rgb(208, 188, 255)
            </td>
        </tr>
        <tr>
            <td>--color-sf-inverse-surface</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(49, 48, 51)"></span> rgb(49, 48, 51)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(230, 225, 229)"></span> rgb(230, 225, 229)
            </td>
        </tr>
        <tr>
            <td>--color-sf-inverse-on-surface</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(244, 239, 244)"></span> rgb(244, 239, 244)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(49, 48, 51)"></span> rgb(49, 48, 51)
            </td>
        </tr>
        <tr>
            <td>--color-sf-inverse-primary</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(208, 188, 255)"></span> rgb(208, 188, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(103, 80, 164)"></span> rgb(103, 80, 164)
            </td>
        </tr>
        <tr>
            <td>--color-sf-scrim</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0, 0, 0)"></span> rgb(0, 0, 0)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0, 0, 0)"></span> rgb(0, 0, 0)
            </td>
        </tr>
        <tr>
            <td>--color-sf-error</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(179, 38, 30)"></span> rgb(179, 38, 30)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(242, 184, 181)"></span> rgb(242, 184, 181)
            </td>
        </tr>
        <tr>
            <td>--color-sf-error-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(249, 222, 220)"></span> rgb(249, 222, 220)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(140, 29, 24)"></span> rgb(140, 29, 24)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-error</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 250, 250)"></span> rgb(255, 250, 250)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(96, 20, 16)"></span> rgb(96, 20, 16)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-error-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(65, 14, 11)"></span> rgb(65, 14, 11)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(249, 222, 220)"></span> rgb(249, 222, 220)
            </td>
        </tr>
        <tr>
            <td>--color-sf-success</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(32, 81, 7)"></span> rgb(32, 81, 7)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(83, 202, 23)"></span> rgb(83, 202, 23)
            </td>
        </tr>
        <tr>
            <td>--color-sf-success-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(209, 255, 186)"></span> rgb(209, 255, 186)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(22, 62, 2)"></span> rgb(22, 62, 2)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-success</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(244, 255, 239)"></span> rgb(244, 255, 239)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(13, 39, 0)"></span> rgb(13, 39, 0)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-success-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(13, 39, 0)"></span> rgb(13, 39, 0)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(183, 250, 150)"></span> rgb(183, 250, 150)
            </td>
        </tr>
        <tr>
            <td>--color-sf-info</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(1, 87, 155)"></span> rgb(1, 87, 155)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(71, 172, 251)"></span> rgb(71, 172, 251)
            </td>
        </tr>
        <tr>
            <td>--color-sf-info-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(233, 245, 255)"></span> rgb(233, 245, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0, 67, 120)"></span> rgb(0, 67, 120)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-info</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(250, 253, 255)"></span> rgb(250, 253, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0, 51, 91)"></span> rgb(0, 51, 91)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-info-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(0, 51, 91)"></span> rgb(0, 51, 91)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(173, 219, 255)"></span> rgb(173, 219, 255)
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(145, 76, 0)"></span> rgb(145, 76, 0)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(245, 180, 130)"></span> rgb(245, 180, 130)
            </td>
        </tr>
        <tr>
            <td>--color-sf-warning-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(254, 236, 222)"></span> rgb(254, 236, 222)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(123, 65, 0)"></span> rgb(123, 65, 0)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-warning</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 255, 255)"></span> rgb(255, 255, 255)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(99, 52, 0)"></span> rgb(99, 52, 0)
            </td>
        </tr>
        <tr>
            <td>--color-sf-on-warning-container</td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(47, 21, 0)"></span> rgb(47, 21, 0)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: rgb(255, 220, 193)"></span> rgb(255, 220, 193)
            </td>
        </tr>
    </tbody>
</table>

### Bootstrap 5 theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$black</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$white</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$gray-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #f8f9fa"></span> #f8f9fa
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f8f9fa"></span> #f8f9fa
            </td>
        </tr>
        <tr>
            <td>$gray-200</td>
            <td>
                <span class="circle-color-indicator" style="background: #e9ecef"></span> #e9ecef
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #e9ecef"></span> #e9ecef
            </td>
        </tr>
        <tr>
            <td>$gray-300</td>
            <td>
                <span class="circle-color-indicator" style="background: #dee2e6"></span> #dee2e6
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dee2e6"></span> #dee2e6
            </td>
        </tr>
        <tr>
            <td>$gray-400</td>
            <td>
                <span class="circle-color-indicator" style="background: #ced4da"></span> #ced4da
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ced4da"></span> #ced4da
            </td>
        </tr>
        <tr>
            <td>$gray-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #adb5bd"></span> #adb5bd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #adb5bd"></span> #adb5bd
            </td>
        </tr>
        <tr>
            <td>$gray-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #6c757d"></span> #6c757d
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6c757d"></span> #6c757d
            </td>
        </tr>
        <tr>
            <td>$gray-700</td>
            <td>
                <span class="circle-color-indicator" style="background: #495057"></span> #495057
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #495057"></span> #495057
            </td>
        </tr>
        <tr>
            <td>$gray-800</td>
            <td>
                <span class="circle-color-indicator" style="background: #343a40"></span> #343a40
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #343a40"></span> #343a40
            </td>
        </tr>
        <tr>
            <td>$gray-900</td>
            <td>
                <span class="circle-color-indicator" style="background: #212529"></span> #212529
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #212529"></span> #212529
            </td>
        </tr>
        <tr>
            <td>$blue</td>
            <td>
                <span class="circle-color-indicator" style="background: #0d6efd"></span> #0d6efd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0d6efd"></span> #0d6efd
            </td>
        </tr>
        <tr>
            <td>$indigo</td>
            <td>
                <span class="circle-color-indicator" style="background: #6610f2"></span> #6610f2
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6610f2"></span> #6610f2
            </td>
        </tr>
        <tr>
            <td>$purple</td>
            <td>
                <span class="circle-color-indicator" style="background: #6f42c1"></span> #6f42c1
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6f42c1"></span> #6f42c1
            </td>
        </tr>
        <tr>
            <td>$pink</td>
            <td>
                <span class="circle-color-indicator" style="background: #d63384"></span> #d63384
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #d63384"></span> #d63384
            </td>
        </tr>
        <tr>
            <td>$red</td>
            <td>
                <span class="circle-color-indicator" style="background: #dc3545"></span> #dc3545
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dc3545"></span> #dc3545
            </td>
        </tr>
        <tr>
            <td>$orange</td>
            <td>
                <span class="circle-color-indicator" style="background: #fd7e14"></span> #fd7e14
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fd7e14"></span> #fd7e14
            </td>
        </tr>
        <tr>
            <td>$yellow</td>
            <td>
                <span class="circle-color-indicator" style="background: #ffc107"></span> #ffc107
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ffc107"></span> #ffc107
            </td>
        </tr>
        <tr>
            <td>$green</td>
            <td>
                <span class="circle-color-indicator" style="background: #198754"></span> #198754
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #198754"></span> #198754
            </td>
        </tr>
        <tr>
            <td>$teal</td>
            <td>
                <span class="circle-color-indicator" style="background: #20c997"></span> #20c997
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #20c997"></span> #20c997
            </td>
        </tr>
        <tr>
            <td>$cyan</td>
            <td>
                <span class="circle-color-indicator" style="background: #0dcaf0"></span> #0dcaf0
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0dcaf0"></span> #0dcaf0
            </td>
        </tr>
    </tbody>
</table>

### Fluent theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$black</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$white</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$gray220</td>
            <td>
                <span class="circle-color-indicator" style="background: #11100f"></span> #11100f
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #11100f"></span> #11100f
            </td>
        </tr>
        <tr>
            <td>$gray210</td>
            <td>
                <span class="circle-color-indicator" style="background: #161514"></span> #161514
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #161514"></span> #161514
            </td>
        </tr>
        <tr>
            <td>$gray200</td>
            <td>
                <span class="circle-color-indicator" style="background: #1b1a19"></span> #1b1a19
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #1b1a19"></span> #1b1a19
            </td>
        </tr>
        <tr>
            <td>$gray190</td>
            <td>
                <span class="circle-color-indicator" style="background: #201f1e"></span> #201f1e
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #201f1e"></span> #201f1e
            </td>
        </tr>
        <tr>
            <td>$gray180</td>
            <td>
                <span class="circle-color-indicator" style="background: #252423"></span> #252423
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #252423"></span> #252423
            </td>
        </tr>
        <tr>
            <td>$gray170</td>
            <td>
                <span class="circle-color-indicator" style="background: #292827"></span> #292827
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #292827"></span> #292827
            </td>
        </tr>
        <tr>
            <td>$gray160</td>
            <td>
                <span class="circle-color-indicator" style="background: #323130"></span> #323130
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #323130"></span> #323130
            </td>
        </tr>
        <tr>
            <td>$gray150</td>
            <td>
                <span class="circle-color-indicator" style="background: #3b3a39"></span> #3b3a39
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #3b3a39"></span> #3b3a39
            </td>
        </tr>
        <tr>
            <td>$gray140</td>
            <td>
                <span class="circle-color-indicator" style="background: #484644"></span> #484644
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #484644"></span> #484644
            </td>
        </tr>
        <tr>
            <td>$gray130</td>
            <td>
                <span class="circle-color-indicator" style="background: #605e5c"></span> #605e5c
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #605e5c"></span> #605e5c
            </td>
        </tr>
        <tr>
            <td>$gray120</td>
            <td>
                <span class="circle-color-indicator" style="background: #797775"></span> #797775
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #797775"></span> #797775
            </td>
        </tr>
        <tr>
            <td>$gray110</td>
            <td>
                <span class="circle-color-indicator" style="background: #8a8886"></span> #8a8886
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #8a8886"></span> #8a8886
            </td>
        </tr>
        <tr>
            <td>$gray100</td>
            <td>
                <span class="circle-color-indicator" style="background: #979593"></span> #979593
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #979593"></span> #979593
            </td>
        </tr>
        <tr>
            <td>$gray90</td>
            <td>
                <span class="circle-color-indicator" style="background: #a19f9d"></span> #a19f9d
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #a19f9d"></span> #a19f9d
            </td>
        </tr>
        <tr>
            <td>$gray80</td>
            <td>
                <span class="circle-color-indicator" style="background: #b3b0ad"></span> #b3b0ad
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #b3b0ad"></span> #b3b0ad
            </td>
        </tr>
        <tr>
            <td>$gray70</td>
            <td>
                <span class="circle-color-indicator" style="background: #bebbb8"></span> #bebbb8
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #bebbb8"></span> #bebbb8
            </td>
        </tr>
        <tr>
            <td>$gray60</td>
            <td>
                <span class="circle-color-indicator" style="background: #c8c6c4"></span> #c8c6c4
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #c8c6c4"></span> #c8c6c4
            </td>
        </tr>
        <tr>
            <td>$gray50</td>
            <td>
                <span class="circle-color-indicator" style="background: #d2d0ce"></span> #d2d0ce
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #d2d0ce"></span> #d2d0ce
            </td>
        </tr>
        <tr>
            <td>$gray40</td>
            <td>
                <span class="circle-color-indicator" style="background: #e1dfdd"></span> #e1dfdd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #e1dfdd"></span> #e1dfdd
            </td>
        </tr>
        <tr>
            <td>$gray30</td>
            <td>
                <span class="circle-color-indicator" style="background: #edebe9"></span> #edebe9
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #edebe9"></span> #edebe9
            </td>
        </tr>
        <tr>
            <td>$gray20</td>
            <td>
                <span class="circle-color-indicator" style="background: #f3f2f1"></span> #f3f2f1
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f3f2f1"></span> #f3f2f1
            </td>
        </tr>
        <tr>
            <td>$gray10</td>
            <td>
                <span class="circle-color-indicator" style="background: #faf9f8"></span> #faf9f8
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #faf9f8"></span> #faf9f8
            </td>
        </tr>
        <tr>
            <td>$cyanblue10</td>
            <td>
                <span class="circle-color-indicator" style="background: #0078d4"></span> #0078d4
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0078d4"></span> #0078d4
            </td>
        </tr>
        <tr>
            <td>$red10</td>
            <td>
                <span class="circle-color-indicator" style="background: #d13438"></span> #d13438
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #d13438"></span> #d13438
            </td>
        </tr>
        <tr>
            <td>$orange20</td>
            <td>
                <span class="circle-color-indicator" style="background: #ca5010"></span> #ca5010
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ca5010"></span> #ca5010
            </td>
        </tr>
        <tr>
            <td>$green20</td>
            <td>
                <span class="circle-color-indicator" style="background: #0b6a0b"></span> #0b6a0b
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0b6a0b"></span> #0b6a0b
            </td>
        </tr>
        <tr>
            <td>$cyan20</td>
            <td>
                <span class="circle-color-indicator" style="background: #038387"></span> #038387
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #038387"></span> #038387
            </td>
        </tr>
    </tbody>
</table>

### Material theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$accent</td>
            <td>
                <span class="circle-color-indicator" style="background: #e3165b"></span> #e3165b
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ff80ab"></span> #ff80ab
            </td>
        </tr>
        <tr>
            <td>$accent-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$primary</td>
            <td>
                <span class="circle-color-indicator" style="background: #3f51b5"></span> #3f51b5
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #3f51b5"></span> #3f51b5
            </td>
        </tr>
        <tr>
            <td>$primary-50</td>
            <td>
                <span class="circle-color-indicator" style="background: #e8eaf6"></span> #e8eaf6
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #e8eaf6"></span> #e8eaf6
            </td>
        </tr>
        <tr>
            <td>$primary-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #c5cae9"></span> #c5cae9
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #c5cae9"></span> #c5cae9
            </td>
        </tr>
        <tr>
            <td>$primary-200</td>
            <td>
                <span class="circle-color-indicator" style="background: #9fa8da"></span> #9fa8da
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #9fa8da"></span> #9fa8da
            </td>
        </tr>
        <tr>
            <td>$primary-300</td>
            <td>
                <span class="circle-color-indicator" style="background: #7986cb"></span> #7986cb
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #7986cb"></span> #7986cb
            </td>
        </tr>
        <tr>
            <td>$primary-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$primary-50-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$primary-100-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$primary-200-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$primary-300-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$grey-white</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$grey-black</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$grey-50</td>
            <td>
                <span class="circle-color-indicator" style="background: #fafafa"></span> #fafafa
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fafafa"></span> #fafafa
            </td>
        </tr>
        <tr>
            <td>$grey-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #f5f5f5"></span> #f5f5f5
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f5f5f5"></span> #f5f5f5
            </td>
        </tr>
        <tr>
            <td>$grey-200</td>
            <td>
                <span class="circle-color-indicator" style="background: #eee"></span> #eee
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #eee"></span> #eee
            </td>
        </tr>
        <tr>
            <td>$grey-300</td>
            <td>
                <span class="circle-color-indicator" style="background: #e0e0e0"></span> #e0e0e0
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #e0e0e0"></span> #e0e0e0
            </td>
        </tr>
        <tr>
            <td>$grey-400</td>
            <td>
                <span class="circle-color-indicator" style="background: #bdbdbd"></span> #bdbdbd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #bdbdbd"></span> #bdbdbd
            </td>
        </tr>
        <tr>
            <td>$grey-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #9e9e9e"></span> #9e9e9e
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #9e9e9e"></span> #9e9e9e
            </td>
        </tr>
        <tr>
            <td>$grey-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #757575"></span> #757575
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #757575"></span> #757575
            </td>
        </tr>
        <tr>
            <td>$grey-700</td>
            <td>
                <span class="circle-color-indicator" style="background: #616161"></span> #616161
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #616161"></span> #616161
            </td>
        </tr>
        <tr>
            <td>$grey-800</td>
            <td>
                <span class="circle-color-indicator" style="background: #424242"></span> #424242
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #424242"></span> #424242
            </td>
        </tr>
        <tr>
            <td>$grey-900</td>
            <td>
                <span class="circle-color-indicator" style="background: #212121"></span> #212121
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #212121"></span> #212121
            </td>
        </tr>
        <tr>
            <td>$grey-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #303030"></span> #303030
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #303030"></span> #303030
            </td>
        </tr>
        <tr>
            <td>$grey-light-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$grey-dark-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$base-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$error-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #f44336"></span> #f44336
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ff6652"></span> #ff6652
            </td>
        </tr>
        <tr>
            <td>$success-bg</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #4caf50"></span> #4caf50
            </td>
        </tr>
        <tr>
            <td>$error-bg</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #ff6652"></span> #ff6652
            </td>
        </tr>
        <tr>
            <td>$warning-bg</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #ff9800"></span> #ff9800
            </td>
        </tr>
        <tr>
            <td>$info-bg</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #03a9f4"></span> #03a9f4
            </td>
        </tr>
        <tr>
            <td>$message-font</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$success-font</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #4caf50"></span> #4caf50
            </td>
        </tr>
        <tr>
            <td>$warning-font</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #ff9800"></span> #ff9800
            </td>
        </tr>
        <tr>
            <td>$info-font</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #03a9f4"></span> #03a9f4
            </td>
        </tr>
    </tbody>
</table>

### Tailwind CSS theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$black</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$white</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$transparent</td>
            <td>
                <span class="circle-color-indicator" style="background: transparent"></span> transparent
            </td>
            <td>
                <span class="circle-color-indicator" style="background: transparent"></span> transparent
            </td>
        </tr>
        <tr>
            <td>$cool-gray-50</td>
            <td>
                <span class="circle-color-indicator" style="background: #f9fafb"></span> #f9fafb
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f9fafb"></span> #f9fafb
            </td>
        </tr>
        <tr>
            <td>$cool-gray-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #f3f4f6"></span> #f3f4f6
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f3f4f6"></span> #f3f4f6
            </td>
        </tr>
        <tr>
            <td>$cool-gray-200</td>
            <td>
                <span class="circle-color-indicator" style="background: #e5e7eb"></span> #e5e7eb
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #e5e7eb"></span> #e5e7eb
            </td>
        </tr>
        <tr>
            <td>$cool-gray-300</td>
            <td>
                <span class="circle-color-indicator" style="background: #d1d5db"></span> #d1d5db
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #d1d5db"></span> #d1d5db
            </td>
        </tr>
        <tr>
            <td>$cool-gray-400</td>
            <td>
                <span class="circle-color-indicator" style="background: #9ca3af"></span> #9ca3af
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #9ca3af"></span> #9ca3af
            </td>
        </tr>
        <tr>
            <td>$cool-gray-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #6b7280"></span> #6b7280
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6b7280"></span> #6b7280
            </td>
        </tr>
        <tr>
            <td>$cool-gray-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #4b5563"></span> #4b5563
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #4b5563"></span> #4b5563
            </td>
        </tr>
        <tr>
            <td>$cool-gray-700</td>
            <td>
                <span class="circle-color-indicator" style="background: #374151"></span> #374151
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #374151"></span> #374151
            </td>
        </tr>
        <tr>
            <td>$cool-gray-800</td>
            <td>
                <span class="circle-color-indicator" style="background: #1f2937"></span> #1f2937
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #1f2937"></span> #1f2937
            </td>
        </tr>
        <tr>
            <td>$cool-gray-900</td>
            <td>
                <span class="circle-color-indicator" style="background: #111827"></span> #111827
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #111827"></span> #111827
            </td>
        </tr>
        <tr>
            <td>$red-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #fee2e2"></span> #fee2e2
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fee2e2"></span> #fee2e2
            </td>
        </tr>
        <tr>
            <td>$red-400</td>
            <td>
                <span class="circle-color-indicator" style="background: #f87171"></span> #f87171
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f87171"></span> #f87171
            </td>
        </tr>
        <tr>
            <td>$red-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #ef4444"></span> #ef4444
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ef4444"></span> #ef4444
            </td>
        </tr>
        <tr>
            <td>$red-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #dc2626"></span> #dc2626
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dc2626"></span> #dc2626
            </td>
        </tr>
        <tr>
            <td>$red-800</td>
            <td>
                <span class="circle-color-indicator" style="background: #991b1b"></span> #991b1b
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #991b1b"></span> #991b1b
            </td>
        </tr>
        <tr>
            <td>$green-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #dcfce7"></span> #dcfce7
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dcfce7"></span> #dcfce7
            </td>
        </tr>
        <tr>
            <td>$green-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #22c55e"></span> #22c55e
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #22c55e"></span> #22c55e
            </td>
        </tr>
        <tr>
            <td>$green-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #16a34a"></span> #16a34a
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #16a34a"></span> #16a34a
            </td>
        </tr>
        <tr>
            <td>$green-700</td>
            <td>
                <span class="circle-color-indicator" style="background: #15803d"></span> #15803d
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #15803d"></span> #15803d
            </td>
        </tr>
        <tr>
            <td>$orange-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #ffedd5"></span> #ffedd5
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ffedd5"></span> #ffedd5
            </td>
        </tr>
        <tr>
            <td>$orange-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #f97316"></span> #f97316
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f97316"></span> #f97316
            </td>
        </tr>
        <tr>
            <td>$orange-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #ea580c"></span> #ea580c
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ea580c"></span> #ea580c
            </td>
        </tr>
        <tr>
            <td>$orange-700</td>
            <td>
                <span class="circle-color-indicator" style="background: #c2410c"></span> #c2410c
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #c2410c"></span> #c2410c
            </td>
        </tr>
        <tr>
            <td>$orange-800</td>
            <td>
                <span class="circle-color-indicator" style="background: #9a3412"></span> #9a3412
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #9a3412"></span> #9a3412
            </td>
        </tr>
        <tr>
            <td>$cyan-300</td>
            <td>
                <span class="circle-color-indicator" style="background: #67e8f9"></span> #67e8f9
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #67e8f9"></span> #67e8f9
            </td>
        </tr>
        <tr>
            <td>$cyan-400</td>
            <td>
                <span class="circle-color-indicator" style="background: #22d3ee"></span> #22d3ee
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #22d3ee"></span> #22d3ee
            </td>
        </tr>
        <tr>
            <td>$cyan-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #06b6d4"></span> #06b6d4
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #06b6d4"></span> #06b6d4
            </td>
        </tr>
        <tr>
            <td>$cyan-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #0891b2"></span> #0891b2
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0891b2"></span> #0891b2
            </td>
        </tr>
        <tr>
            <td>$cyan-800</td>
            <td>
                <span class="circle-color-indicator" style="background: #155e75"></span> #155e75
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #155e75"></span> #155e75
            </td>
        </tr>
        <tr>
            <td>$indigo-50</td>
            <td>
                <span class="circle-color-indicator" style="background: #eef2ff"></span> #eef2ff
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #e0e7ff"></span> #e0e7ff
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-200</td>
            <td>
                <span class="circle-color-indicator" style="background: #c7d2fe"></span> #c7d2fe
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-300</td>
            <td>
                <span class="circle-color-indicator" style="background: #a5b4fc"></span> #a5b4fc
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-400</td>
            <td>
                <span class="circle-color-indicator" style="background: #818cf8"></span> #818cf8
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-500</td>
            <td>
                <span class="circle-color-indicator" style="background: #6366f1"></span> #6366f1
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-600</td>
            <td>
                <span class="circle-color-indicator" style="background: #4f46e5"></span> #4f46e5
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-700</td>
            <td>
                <span class="circle-color-indicator" style="background: #4338ca"></span> #4338ca
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-800</td>
            <td>
                <span class="circle-color-indicator" style="background: #3730a3"></span> #3730a3
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$indigo-900</td>
            <td>
                <span class="circle-color-indicator" style="background: #312e81"></span> #312e81
            </td>
            <td> </td>
        </tr>
        <tr>
            <td>$green-400</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #4ade80"></span> #4ade80
            </td>
        </tr>
        <tr>
            <td>$light-blue-50</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #f0f9ff"></span> #f0f9ff
            </td>
        </tr>
        <tr>
            <td>$light-blue-100</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #e0f2fe"></span> #e0f2fe
            </td>
        </tr>
        <tr>
            <td>$light-blue-400</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #38bdf8"></span> #38bdf8
            </td>
        </tr>
        <tr>
            <td>$light-blue-500</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #0ea5e9"></span> #0ea5e9
            </td>
        </tr>
        <tr>
            <td>$light-blue-600</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #0284c7"></span> #0284c7
            </td>
        </tr>
        <tr>
            <td>$light-blue-700</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #0369a1"></span> #0369a1
            </td>
        </tr>
        <tr>
            <td>$light-blue-800</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #075985"></span> #075985
            </td>
        </tr>
    </tbody>
</table>

### Microsoft Office Fabric theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value (Default Theme) </th>
            <th>Value (Dark Theme) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$theme-primary</td>
            <td>
                <span class="circle-color-indicator" style="background: #0078d6"></span> #0078d6
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0074cc"></span> #0074cc
            </td>
        </tr>
        <tr>
            <td>$theme-dark-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #006fc7"></span> darken($theme-primary, 3%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #006bbd"></span> darken($theme-primary, 3%)
            </td>
        </tr>
        <tr>
            <td>$theme-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #005ba3"></span> darken($theme-primary, 10%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #0063ad"></span> darken($theme-primary, 6%)
            </td>
        </tr>
        <tr>
            <td>$theme-darker</td>
            <td>
                <span class="circle-color-indicator" style="background: #00457a"></span> darken($theme-primary, 18%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #005799"></span> darken($theme-primary, 10%)
            </td>
        </tr>
        <tr>
            <td>$theme-secondary</td>
            <td>
                <span class="circle-color-indicator" style="background: #0081e5"></span> lighten($theme-primary, 3%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #007ddb"></span> lighten($theme-primary, 3%)
            </td>
        </tr>
        <tr>
            <td>$theme-tertiary</td>
            <td>
                <span class="circle-color-indicator" style="background: #42acff"></span> lighten($theme-primary, 21%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #38a9ff"></span> lighten($theme-primary, 21%)
            </td>
        </tr>
        <tr>
            <td>$theme-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #b7e0ff"></span> lighten($theme-primary, 44%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #addcff"></span> lighten($theme-primary, 44%)
            </td>
        </tr>
        <tr>
            <td>$theme-lighter</td>
            <td>
                <span class="circle-color-indicator" style="background: #d1ebff"></span> lighten($theme-primary, 49%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #c7e7ff"></span> lighten($theme-primary, 49%)
            </td>
        </tr>
        <tr>
            <td>$theme-lighter-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #eff8ff"></span> lighten($theme-primary, 55%)
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #e5f4ff"></span> lighten($theme-primary, 55%)
            </td>
        </tr>
        <tr>
            <td>$neutral-white</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #201f1f"></span> #201f1f
            </td>
        </tr>
        <tr>
            <td>$neutral-lighter-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #f8f8f8"></span> #f8f8f8
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #282727"></span> #282727
            </td>
        </tr>
        <tr>
            <td>$neutral-lighter</td>
            <td>
                <span class="circle-color-indicator" style="background: #f4f4f4"></span> #f4f4f4
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #333232"></span> #333232
            </td>
        </tr>
        <tr>
            <td>$neutral-light</td>
            <td>
                <span class="circle-color-indicator" style="background: #eaeaea"></span> #eaeaea
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #414040"></span> #414040
            </td>
        </tr>
        <tr>
            <td>$neutral-quintenaryalt</td>
            <td>
                <span class="circle-color-indicator" style="background: #dadada"></span> #dadada
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #4a4848"></span> #4a4848
            </td>
        </tr>
        <tr>
            <td>$neutral-quintenary</td>
            <td>
                <span class="circle-color-indicator" style="background: #d0d0d0"></span> #d0d0d0
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #514f4f"></span> #514f4f
            </td>
        </tr>
        <tr>
            <td>$neutral-tertiary-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #c8c8c8"></span> #c8c8c8
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #6f6c6c"></span> #6f6c6c
            </td>
        </tr>
        <tr>
            <td>$neutral-tertiary</td>
            <td>
                <span class="circle-color-indicator" style="background: #a6a6a6"></span> #a6a6a6
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #9a9a9a"></span> #9a9a9a
            </td>
        </tr>
        <tr>
            <td>$neutral-secondary-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #767676"></span> #767676
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #c8c8c8"></span> #c8c8c8
            </td>
        </tr>
        <tr>
            <td>$neutral-secondary</td>
            <td>
                <span class="circle-color-indicator" style="background: #666"></span> #666
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dadada"></span> #dadada
            </td>
        </tr>
        <tr>
            <td>$neutral-primary</td>
            <td>
                <span class="circle-color-indicator" style="background: #333"></span> #333
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$neutral-dark</td>
            <td>
                <span class="circle-color-indicator" style="background: #212121"></span> #212121
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f4f4f4"></span> #f4f4f4
            </td>
        </tr>
        <tr>
            <td>$neutral-black</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #f8f8f8"></span> #f8f8f8
            </td>
        </tr>
        <tr>
            <td>$alert-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #deecf9"></span> #deecf9
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #bf7500"></span> #bf7500
            </td>
        </tr>
        <tr>
            <td>$error-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #fde7e9"></span> #fde7e9
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #cd2a19"></span> #cd2a19
            </td>
        </tr>
        <tr>
            <td>$success-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #dff6dd"></span> #dff6dd
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #37844d"></span> #37844d
            </td>
        </tr>
        <tr>
            <td>$theme-dark-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$theme-primary-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$theme-light-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #333"></span> #333
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$neutral-light-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #333"></span> #333
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dadada"></span> #dadada
            </td>
        </tr>
        <tr>
            <td>$neutral-light-fontalt</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$grey-dark-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$base-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #333"></span> #333
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #dadada"></span> #dadada
            </td>
        </tr>
        <tr>
            <td>$message-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #333"></span> #333
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$alert-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #d83b01"></span> #d83b01
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ff9d48"></span> #ff9d48
            </td>
        </tr>
        <tr>
            <td>$error-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #a80000"></span> #a80000
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #ff5f5f"></span> #ff5f5f
            </td>
        </tr>
        <tr>
            <td>$success-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #107c10"></span> #107c10
            </td>
            <td>
                <span class="circle-color-indicator" style="background: #8eff8d"></span> #8eff8d
            </td>
        </tr>
        <tr>
            <td>$info-bg</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #1e79cb"></span> #1e79cb
            </td>
        </tr>
        <tr>
            <td>$info-font</td>
            <td> </td>
            <td>
                <span class="circle-color-indicator" style="background: #62cfff"></span> #62cfff
            </td>
        </tr>
    </tbody>
</table>

### High Contrast theme

<table>
    <style>
        .circle-color-indicator {
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, .08);
            vertical-align: middle;
        }
        th, td {
        text-align: left;
        padding: 5px 15px;
        vertical-align: top;
        }
    </style>
    <thead>
        <tr>
            <th>Name</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>$selection-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #ffd939"></span> #ffd939
            </td>
        </tr>
        <tr>
            <td>$selection-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$selection-border</td>
            <td>
                <span class="circle-color-indicator" style="background: #ffd939"></span> #ffd939
            </td>
        </tr>
        <tr>
            <td>$hover-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #685708"></span> #685708
            </td>
        </tr>
        <tr>
            <td>$hover-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$hover-border</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$border-default</td>
            <td>
                <span class="circle-color-indicator" style="background: #969696"></span> #969696
            </td>
        </tr>
        <tr>
            <td>$border-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #757575"></span> #757575
            </td>
        </tr>
        <tr>
            <td>$border-fg</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$border-fg-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #ffd939"></span> #ffd939
            </td>
        </tr>
        <tr>
            <td>$bg-base-0</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$bg-base-5</td>
            <td>
                <span class="circle-color-indicator" style="background: #0d0d0d"></span> #0d0d0d
            </td>
        </tr>
        <tr>
            <td>$bg-base-10</td>
            <td>
                <span class="circle-color-indicator" style="background: #1a1a1a"></span> #1a1a1a
            </td>
        </tr>
        <tr>
            <td>$bg-base-15</td>
            <td>
                <span class="circle-color-indicator" style="background: #262626"></span> #262626
            </td>
        </tr>
        <tr>
            <td>$bg-base-20</td>
            <td>
                <span class="circle-color-indicator" style="background: #333"></span> #333
            </td>
        </tr>
        <tr>
            <td>$bg-base-75</td>
            <td>
                <span class="circle-color-indicator" style="background: #bfbfbf"></span> #bfbfbf
            </td>
        </tr>
        <tr>
            <td>$bg-base-100</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$header-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #ffd939"></span> #ffd939
            </td>
        </tr>
        <tr>
            <td>$header-font-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$content-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$content-font-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #969696"></span> #969696
            </td>
        </tr>
        <tr>
            <td>$link</td>
            <td>
                <span class="circle-color-indicator" style="background: #8a8aff"></span> #8a8aff
            </td>
        </tr>
        <tr>
            <td>$invert-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #000"></span> #000
            </td>
        </tr>
        <tr>
            <td>$success-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #166600"></span> #166600
            </td>
        </tr>
        <tr>
            <td>$error-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #b30900"></span> #b30900
            </td>
        </tr>
        <tr>
            <td>$message-font</td>
            <td>
                <span class="circle-color-indicator" style="background: #fff"></span> #fff
            </td>
        </tr>
        <tr>
            <td>$alert-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #944000"></span> #944000
            </td>
        </tr>
        <tr>
            <td>$info-bg</td>
            <td>
                <span class="circle-color-indicator" style="background: #0056b3"></span> #0056b3
            </td>
        </tr>
        <tr>
            <td>$success-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #2bc700"></span> #2bc700
            </td>
        </tr>
        <tr>
            <td>$error-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #ff6161"></span> #ff6161
            </td>
        </tr>
        <tr>
            <td>$alert-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #ff7d1a"></span> #ff7d1a
            </td>
        </tr>
        <tr>
            <td>$info-alt</td>
            <td>
                <span class="circle-color-indicator" style="background: #66b0ff"></span> #66b0ff
            </td>
        </tr>
        <tr>
            <td>$disable</td>
            <td>
                <span class="circle-color-indicator" style="background: #757575"></span> #757575
            </td>
        </tr>
    </tbody>
</table>
