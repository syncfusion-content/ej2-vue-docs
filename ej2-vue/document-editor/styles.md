---
layout: post
title: Styles in Vue Document editor component | Syncfusion
description: Learn here all about Styles in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Styles 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Styles in Vue Document editor component

Styles are useful for applying a set of formatting consistently throughout the document. In document editor, styles are created and added to a document programmatically or via the built-in Styles dialog.

## Styles definition overview

A Style in document editor should have the following properties:

* **name**: Name of the style. All styles in a document have a unique name, which is used as an identifier when applying the style.
* **type**: Specifies the document elements that the style will target. For example, paragraph or character.
* **next**: Specifies that the current style inherits the style set to this property. This is how hierarchical styles are defined.
* **link**: Provides a relation between the paragraph and character style.
* **characterFormat**: Specifies the properties of paragraph and character style.
* **paragraphFormat**: Specifies the properties of paragraph style.
* **basedOn**: Specifies that the current style inherits the style set to this property. This is how hierarchical styles are defined. It can be optional.

> The style type should match the inherited style type. For example, it is not possible to have a character style inherit a paragraph style.

## Default style

The default style for span and paragraph properties is normal. It internally inherits the default style of the document loaded or document editor component.

## Style hierarchy

Each style initially checks its local value for the property that is being evaluated and turns to the style it is based on. If no local value is found, it turns to its default style.

Style inheritance of different styles are listed as follows:

### Character style

Character styles are based only on other character styles.

The inheritance is: Character properties are inherited from the base character style.

### Paragraph style

Paragraph styles are based on other paragraph styles or on linked styles.
When a paragraph style is based on another paragraph style, the inheritance of the properties is as follows:
* Paragraph properties are inherited from the base paragraph style.
* Span properties are inherited from the base paragraph style.

When a paragraph style is based on a linked style, the inheritance of the properties is as follows:
* Paragraph properties are inherited from the paragraph style part in its base linked style.
* Span properties are inherited from the span style part in its base linked style.

### Linked style

Linked styles are composite styles and their components are paragraph and character styles with link between them. To apply paragraph properties, take the properties from the linked paragraph style. Similarly, to apply character properties, take the properties from linked character style.
Linked styles are based on other linked styles or on paragraph styles.

When a linked style is based on a paragraph style, the hierarchy of the properties is as follows:

* Paragraph properties are inherited from the ‘basedOn’ paragraph style.
* Character properties are inherited from the ‘basedOn’ paragraph style.

When a linked style is based on another linked style, the hierarchy of the properties is as follows:

* Paragraph properties are inherited from the paragraph style part in its base linked style.
* Span properties are inherited from the span style part in its base linked style.

## Defining new styles

New Styles are defined and added to the style collection of the document. In this way, they will be discovered by the default UI and applied to the parts of a document.

## Defining a character style

The following example shows how to programmatically create a character style.

```ts
let styleJson: any = {
    "type": "Character",
    "name": "New CharacterStyle",
    "basedOn": "Default Paragraph Font",
    "characterFormat": {
        "fontSize": 16.0,
        "fontFamily": "Calibri Light",
        "fontColor": "#2F5496",
        "bold": true,
        "italic": true,
        "underline": "Single"
    }
};
this.$refs.documenteditor.ej2Instances.editor.createStyle(JSON.stringify(styleJson));
```

## Defining a paragraph style

The following example shows how to programmatically create a paragraph style.

```ts
let styleJson: any = {
    "type": "Paragraph",
    "name": "New ParagraphStyle",
    "basedOn": "Normal",
    "characterFormat": {
        "fontSize": 16.0,
        "fontFamily": "Calibri Light",
        "fontColor": "#2F5496",
        "bold": true,
        "italic": true,
        "underline": "Single"
    },
    "paragraphFormat": {
        "leftIndent": 0.0,
        "rightIndent": 0.0,
        "firstLineIndent": 0.0,
        "beforeSpacing": 12.0,
        "afterSpacing": 0.0,
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple",
        "textAlignment": "Left",
        "outlineLevel": "Level1"
    }
};
this.$refs.documenteditor.ej2Instances.editor.createStyle(JSON.stringify(styleJson));
```

## Defining a linked style

The following example shows how to programmatically create linked style.

```ts
let styleJson: any = {
    "type": "Paragraph",
    "name": "New Linked",
    "basedOn": "Normal",
    "next": "Normal",
    "link": "New Linked Char",
    "characterFormat": {
        "fontSize": 16.0,
        "fontFamily": "Calibri Light",
        "fontColor": "#2F5496"
    },
    "paragraphFormat": {
        "leftIndent": 0.0,
        "rightIndent": 0.0,
        "firstLineIndent": 0.0,
        "beforeSpacing": 12.0,
        "afterSpacing": 0.0,
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple",
        "textAlignment": "Left",
        "outlineLevel": "Level1"
    }
};
this.$refs.documenteditor.ej2Instances.editor.createStyle(JSON.stringify(styleJson));
```

## Applying a style

The styles are applied using the **applyStyle** method of **Editor**, the parameter should be passed is the **Name** of the Style.

The styles of the **Character** type is applied to the currently selected part of the document. If there is no selection, the values that will be applied to the word at caret position. The styles of **Paragraph** type follow the same logic and are applied to all paragraphs in the selection or the current paragraph.

When there is no selection, styles of **Linked** type will change the values of the paragraph, and apply both the Paragraph and Character properties. When there is selection, Linked Style changes only the character properties of the selected text.

For example, the following line will apply the "New Linked" to the current paragraph.

```ts
this.$refs.documenteditor.ej2Instances.editor.applyStyle('New Linked');
//Clear direct formatting and apply the specified style
this.$refs.documenteditor.ej2Instances.editor.applyStyle('New Linked', true);
```

## Get Styles

You can get the styles in the document using the below code snippet.

```typescript
//Get paragraph styles
let paragraphStyles = this.$refs.documenteditor.ej2Instances.documentEditor.getStyles('Paragraph');
//Get character styles
let paragraphStyles = this.$refs.documenteditor.ej2Instances.documentEditor.getStyles('Character');
```

## Modify an existing style

You can modify a existing style with the specified style properties using [`createStyle`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#createStyle) method. If modifyExistingStyle parameter is set to `true` the style properties is updated to the existing style.

The following illustrate to modify an existing style.

```typescript
let styleJson: any = {
    "type": "Paragraph",
    "name": "Heading 1",
    "characterFormat": {
        "fontSize": 32,
        "fontFamily": "Calibri"
    }
};
this.$refs.documenteditor.ej2Instances.documentEditor.editor.createStyle(styleName, true);
```

> If modifyExistingStyle parameter is set to true and a style already exists with same name, it modifies the specified properties in the existing style.
> If modifyExistingStyle parameter is set to false and a style already exists with same name, it creates a new style with unique name by appending ‘_1’. Hence, the newly style will not have the specified name.
> If no style exists with same name, it creates a new style.
Footer
