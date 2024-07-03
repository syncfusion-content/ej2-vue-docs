---
layout: post
title: Global local in Vue Spreadsheet component | Syncfusion
description: Learn here all about Global local in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Global local 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Global local in Vue Spreadsheet component

## Localization

The [`Localization`](https://ej2.syncfusion.com/vue/documentation/common/localization) library allows you to localize the default text content of the Spreadsheet. The Spreadsheet has static text on some features (cell formatting, Merge, Data validation, etc.) that can be changed to other cultures (Arabic, Deutsch, French, etc.) by defining the
[`locale`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#locale) value and translation object.

The following list of properties and their values are used in the Spreadsheet.

Locale keywords |Text
-----|-----
Cut | Cut
Copy | Copy
Paste | Paste
PasteSpecial | Paste Special
All | All
Values | Values
Formats | Formats
Font | Font
FontSize | Font Size
Bold | Bold
Italic | Italic
Underline | Underline
Strikethrough | Strikethrough
TextColor | Text Color
FillColor | Fill Color
HorizontalAlignment | Horizontal Alignment
AlignLeft | Align Left
AlignCenter | Center
AlignRight | Align Right
VerticalAlignment | Vertical Alignment
AlignTop | Align Top
AlignMiddle | Align Middle
AlignBottom | Align Bottom
InsertFunction | Insert Function
Insert | Insert
Delete | Delete
Rename | Rename
Hide | Hide
Unhide | Unhide
NameBox | Name Box
ShowHeaders | Show Headers
HideHeaders | Hide Headers
ShowGridLines | Show Gridlines
HideGridLines | Hide Gridlines
AddSheet | Add Sheet
ListAllSheets | List All Sheets
FullScreen | Full Screen
CollapseToolbar | Collapse Toolbar
ExpandToolbar | Expand Toolbar
CollapseFormulaBar | Collapse Formula Bar
ExpandFormulaBar | Expand Formula Bar
File | File
Home | Home
Formulas | Formulas
View | View
New | New
Open | Open
SaveAs | Save As
ExcelXlsx | Microsoft Excel
ExcelXls | Microsoft Excel 97-2003
CSV | Comma-separated values
FormulaBar | Formula Bar
Ok | Ok
Close | Close
Cancel | Cancel
Apply | Apply
MoreColors | More Colors
StandardColors | Standard Colors
General | General
Number | Number
Currency | Currency
Accounting | Accounting
ShortDate | Short Date
LongDate | Long Date
Time | Time
Percentage | Percentage
Fraction | Fraction
Scientific | Scientific
Text | Text
NumberFormat | Number Format
MobileFormulaBarPlaceHolder | Enter value or Formula
PasteAlert | You can't paste it here because the copy area and paste area aren't in the same size. Please try pasting in a different range.
DestroyAlert | Are you sure you want to destroy the current workbook without saving and create a new workbook?
SheetRenameInvalidAlert | Sheet name contains invalid character.
SheetRenameEmptyAlert | Sheet name cannot be empty.
SheetRenameAlreadyExistsAlert | Sheet name already exists. Please enter another name.
DeleteSheetAlert | Are you sure you want to delete this sheet?
DeleteSingleLastSheetAlert | A Workbook must contain at least one visible worksheet.
PickACategory | Pick a category
Description | Description
UnsupportedFile | Unsupported File
InvalidUrl | Invalid Url
SUM | Adds a series of numbers and/or cells.
SUMIF | Adds the cells based on the specified condition.
SUMIFS | Adds the cells based on the specified conditions.
ABS | Returns the value of a number without its sign.
RAND | Returns a random number between 0 and 1.
RANDBETWEEN | Returns a random integer based on the specified values.
FLOOR | Rounds a number down to the nearest multiple of a given factor.
CEILING | Rounds a number up to the nearest multiple of a given factor.
PRODUCT | Multiplies a series of numbers and/or cells.
AVERAGE | Calculates average for the series of numbers and/or cells excluding text.
AVERAGEIF | Calculates average for the cells based on the specified criterion.
AVERAGEIFS | Calculates average for the cells based on the specified conditions.
AVERAGEA | Calculates the average for the cells evaluating TRUE as 1 text and FALSE as 0.
COUNT | Counts the cells that contain numeric values in a range.
COUNTIF | Counts the cells based on the specified condition.
COUNTIFS | Counts the cells based on specified conditions.
COUNTA | Counts the cells that contain values in a range.
MIN | Returns the smallest number of the given arguments.
MAX | Returns the largest number of the given arguments.
DATE | Returns the date based on the given year, month, and day.
DAY | Returns the day from the given date.
DAYS | Returns the number of days between two dates.
IF | Returns value based on the given expression.
IFS | Returns value based on the given multiple expressions.
AND | Returns TRUE if all the arguments are TRUE otherwise returns FALSE.
OR | Returns TRUE if any of the arguments are TRUE otherwise returns FALSE.
IFERROR | Returns value if no error found else it will return specified value.
CHOOSE | Returns a value from the list of values based on the index number.
INDEX | Returns the value of the cell in a given range based on row and column number.
FIND | Returns the position of a string within another string which is case sensitive.
CONCATENATE | Combines two or more strings together.
CONCAT | Concatenates a list or a range of text strings.
SUBTOTAL | Returns subtotal for a range using the given function number.
RADIANS | Converts degrees into radians.
MATCH | Returns the relative position of a specified value in the given range.
DefineNameExists | This name already exists try a different name.
CircularReference | When a formula refers to one or more circular references this may result in an incorrect calculation.
ShowRowsWhere | Show rows where |
CustomFilterDatePlaceHolder | Choose a date
CustomFilterPlaceHolder | Enter the value
CustomFilter | Custom Filter
Between | Between
MatchCase | Match Case
DateTimeFilter | DateTime Filters
Undo | Undo
Redo | Redo
DateFilter | Date Filters
TextFilter | Text Filters
NumberFilter | Number Filters
ClearFilter | Clear Filter
NoResult | No Matches Found
FilterFalse | False
FilterTrue | True
Blanks | Blanks
SelectAll | Select All
GreaterThanOrEqual | Greater Than Or Equal
GreaterThan | Greater Than
LessThanOrEqual | Less Than Or Equal
LessThan | Less Than
NotEqual | Not Equal
Equal | Equal
Contains | Contains
EndsWith | Ends With
StartsWith | Starts With
ClearButton | Clear
FilterButton | Filter
CancelButton | Cancel
OKButton | OK
Search | Search
Link | Link
Hyperlink | Hyperlink
EditHyperlink | Edit Hyperlink
OpenHyperlink | Open Hyperlink
RemoveHyperlink | Remove Hyperlink
InsertLink | Insert Link
EditLink | Edit Link
WebPage | WEB PAGE
ThisDocument | THIS DOCUMENT
DisplayText | Display Text
Url | URL
CellReference | Cell Reference
Sheet | Sheet
DefinedNames | Defined Names
EnterTheTextToDisplay | Enter the text to display
EnterTheUrl | Enter the URL
ProtectSheet | Protect Sheet
UnprotectSheet | Unprotect Sheet
SelectCells | Select cells
FormatCells | Format cells
FormatRows | Format rows
Format Columns | Format columns
InsertLinks | Insert links
ProtectContent | Protect the contents of locked cells
ProtectAllowUser | Allow all users of this worksheet to |
EditAlert | The cell you're trying to change is protected. To make a change, unprotect the sheet.
FindReplaceTooltip | Find & Replace
InsertingEmptyValue | Reference value is not valid.
ByRow |  By Row
ByColumn | By Column
MatchExactCellElements | Match Exact Cell Contents
EntercellAddress | Enter Cell Address
FindAndReplace | Find and Replace
ReplaceAllEnd |  matches replaced with.
FindNextBtn | Find Next
FindPreviousBtn | Find Previous
ReplaceBtn | Replace
ReplaceAllBtn | Replace All
GotoHeader | Go To
GotoSpecialHeader | Go To Special
SearchWithin | Search within
SearchBy | Search by
Reference | Reference
Workbook | Workbook
NoElements | We couldn’t find what you were looking for.
FindWhat | Find what
ReplaceWith | Replace with
EnterValue | Enter Value
DefineNameInValid | The name that you entered is not valid.
FindValue | Find Value
ReplaceValue | Replace Value
DataValidation | Data Validation
CLEARALL | CLEAR ALL
APPLY | APPLY
CellRange | Cell Range
Allow | Allow
Data | Data
Minimum | Minimum
Maximum | Maximum
IgnoreBlank | Ignore blank
WholeNumber | Whole Number
Decimal | Decimal
Date | Date
TextLength | Text Length
List | List
NotBetween | Not between
EqualTo | Equal to
NotEqualTo | Not equal to
Greaterthan | Greater than
Lessthan | Less than
GreaterThanOrEqaulTo | Greater than or eqaul to
LessThanOrEqualTo | Less than or equal to
InCellDropDown | In-cell-dropdown
Sources | Sources
Value | Value
Retry | Retry
DialogError | The list source must be a reference to a single row or column.
ValidationError | This value doesn't match the data validation restrictions defined for the cell.
HideRow | Hide Row
HideRows | Hide Rows
UnHideRows | UnHide Rows
HideColumn | Hide Column
HideColumns | Hide Columns
UnHideColumns | UnHide Columns
InsertRow | Insert Row
InsertRows | Insert Rows
InsertColumn | Insert Column
InsertColumns | Insert Columns
DeleteRow | Delete Row
DeleteRows | Delete Rows
DeleteColumn | Delete Column
DeleteColumns | Delete Columns
Borders | Borders
TopBorders | Top Borders
LeftBorders | Left Borders
RightBorders | Right Borders
BottomBorders | Bottom Borders
AllBorders | All Borders
HorizontalBorders | Horizontal Borders
VerticalBorders | Vertical Borders
OutsideBorders | Outside Borders
InsideBorders | Inside Borders
NoBorders | No Borders
BorderColor | Border Color
BorderStyle | Border Style
INTERCEPT | Calculates the point of the Y-intercept line via linear regression.
SLOPE | Returns the slope of the line from linear regression of the data points.
FreezePanes | Freeze Panes
FreezeRows | Freeze Rows
FreezeColumns | Freeze Columns
UnfreezePanes | Unfreeze Panes
UnfreezeRows | Unfreeze Rows
UnfreezeColumns | Unfreeze Columns
MergeCells | Merge Cells
MergeAll | Merge All
MergeHorizontally | Merge Horizontally
MergeVertically | Merge Vertically
Unmerge | Unmerge
UnmergeCells | Unmerge Cells
SortAscending | Ascending
SortDescending | Descending
CustomSort | Custom Sort
ClearAllFilter | Clear
ReapplyFilter | Reapply
Clear | Clear
ClearContents | Clear Contents
ClearAll | Clear All
ClearFormats | Clear Formats
ClearHyperlinks | Clear Hyperlinks
Image | Image
AddColumn | Add Column
SortBy | Sort by
ThenBy | Then by
Chart | Chart
Column | Column
Bar | Bar
Area | Area
Pie | Pie
Doughnut | Doughnut
PieAndDoughnut | Pie/Doughnut
Line | Line
Radar | Radar
Scatter | Scatter
ChartDesign | Chart Design
ClusteredColumn | Clustered Column
StackedColumn | Stacked Column
StackedColumn100 | 100% Stacked Column
ClusteredBar | Clustered Bar
StackedBar | Stacked Bar
StackedBar100 | 100% Stacked Bar
StackedArea | Stacked Area
StackedArea100 | 100% Stacked Area
StackedLine | Stacked Line
StackedLine100 | 100% Stacked Line
AddChartElement | Add Chart Element
Axes | Axes
AxisTitle | Axis Title
ChartTitle | Chart Title
DataLabels | Data Labels
Gridlines | Gridlines
Legends | Legends
PrimaryHorizontal | Primary Horizontal
PrimaryVertical | Primary Vertical
None | None
AboveChart | Above Chart
Center | Center
InsideEnd | Inside End
InsideBase | Inside Base
OutsideEnd | OutSide End
PrimaryMajorHorizontal | Primary Major Horizontal
PrimaryMajorVertical | Primary Major Vertical
PrimaryMinorHorizontal | Primary Minor Horizontal
PrimaryMinorVertical | Primary Minor Vertical
Right | Right
Left | Left
Bottom | Bottom
Top | Top
SwitchRowColumn | Switch Row/Column
ChartTheme | Chart Theme
ChartType | Chart Type
Material | Material
Fabric | Fabric
Bootstrap | Bootstrap
HighContrastLight | HighContrastLight
MaterialDark | MaterialDark
FabricDark | FabricDark
HighContrast | HighContrast
BootstrapDark | BootstrapDark
Bootstrap4 | Bootstrap4
VerticalAxisTitle | Vertical Axis Title
HorizontalAxisTitle | Horizontal Axis Title
EnterTitle | Enter Title
ProtectWorkbook | Protect Workbook
Password | Password (optional) |
unProtectPassword | Password
EnterThePassword | Enter the password
ConfirmPassword | Confirm Password
EnterTheConfirmPassword | Re-enter your password
PasswordAlert | Confirmation password is not identical
UnProtectWorkbook | Unprotect Workbook
UnProtectPasswordAlert | The password you supplied is not correct.
InCorrectPassword | Unable to open the file or worksheet with the given password.
PasswordAlertMsg | Please enter the password
ConfirmPasswordAlertMsg | Please enter the confirm password
IsProtected | is protected

### Loading translations

To load translation object in an application, use [`load`](https://ej2.syncfusion.com/vue/documentation/common/localization#loading-translations) function of the [`L10n`](https://ej2.syncfusion.com/vue/documentation/common/internationalization) class.

The following example demonstrates the Spreadsheet in `French` culture. In the below sample we have translated the ribbon tab names and Home tab content (clipboard, cell style).

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/local-data-binding-cs2" %}

## Internationalization

The Internationalization library is used to globalize number, date, and time values in the spreadsheet component.

The following example demonstrates the Spreadsheet in French [ `fr-CH`] culture. In the below sample we have globalized the Date(Date column), Time(Time column), and Currency(Amount column) formats.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <ejs-spreadsheet ref="spreadsheet" locale="fr-CH" :created="created">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import {
  L10n,
  setCulture,
  setCurrencyCode,
  loadCldr,
} from "@syncfusion/ej2-base";
import { SpreadsheetComponent as EjsSpreadsheet, RangesDirective as ERanges, RangeDirective as ERange, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';

L10n.load({
    'fr-CH': {
        'spreadsheet': {
            'File': 'Fichier',
            'Home': 'Accueil',
            'Insert': 'Insérer',
            'Formulas': 'Formules',
            'Data': 'Les données',
            'View': 'Vue',
            'Cut': 'Coupe',
            'Copy': 'Copie',
            'Paste': 'Pâte',
            'PasteSpecial': 'Pâte spéciale',
            'All': 'Tous les',
            'Values': 'Valeurs',
            'Formats': 'Les formats',
            'Font': 'fonte',
            'FontSize': 'Taille de police',
            'Bold': 'Audacieux',
            'Italic': 'Italique',
            'Underline': 'Souligner',
            'Strikethrough': 'Barré',
            'TextColor': 'Couleur du texte',
            'FillColor': 'La couleur de remplissage',
            'HorizontalAlignment': 'Alignement horizontal',
            'AlignLeft': 'Alignez à gauche',
            'AlignCenter': 'centre',
            'AlignRight': 'Aligner à droite',
            'VerticalAlignment': 'Alignement vertical',
            'AlignTop': 'Aligner en haut',
            'AlignMiddle': 'Aligner le milieu',
            'AlignBottom': 'Aligner le bas',
            'InsertFunction': 'Insérer une fonction',
            'Delete': 'Effacer',
            'Rename': 'Rebaptiser',
            'Hide': 'Cacher',
            'Unhide': 'Démasquer',
            'NumberFormat': 'Nombre Format',
        }
    }
});
import * as numberingSystems from "./numberingSystems.json";
import * as gregorian from "./ca-gregorian.json";
import * as numbers from "./numbers.json";
import * as timeZoneNames from "./timeZoneNames.json";
import * as currencies from "./currencies.json";

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, currencies);
setCulture("fr-CH");
setCurrencyCode("EUR");

const spreadsheet = ref(null);
const dataSource = defaultData;
const created = function () {
  //Applies cell and number formatting to specified range of the active sheet
  spreadsheet.value.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
  spreadsheet.value.numberFormat('$#,##0.00', 'F2:F11');
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
 @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-spreadsheet ref="spreadsheet" locale="fr-CH" :created="created">
    <e-sheets>
      <e-sheet>
        <e-ranges>
          <e-range :dataSource="dataSource"></e-range>
        </e-ranges>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script>
import {
  L10n,
  setCulture,
  setCurrencyCode,
  loadCldr,
} from "@syncfusion/ej2-base";
import { SpreadsheetComponent, RangesDirective, RangeDirective, SheetsDirective, SheetDirective } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';

L10n.load({
    'fr-CH': {
        'spreadsheet': {
            'File': 'Fichier',
            'Home': 'Accueil',
            'Insert': 'Insérer',
            'Formulas': 'Formules',
            'Data': 'Les données',
            'View': 'Vue',
            'Cut': 'Coupe',
            'Copy': 'Copie',
            'Paste': 'Pâte',
            'PasteSpecial': 'Pâte spéciale',
            'All': 'Tous les',
            'Values': 'Valeurs',
            'Formats': 'Les formats',
            'Font': 'fonte',
            'FontSize': 'Taille de police',
            'Bold': 'Audacieux',
            'Italic': 'Italique',
            'Underline': 'Souligner',
            'Strikethrough': 'Barré',
            'TextColor': 'Couleur du texte',
            'FillColor': 'La couleur de remplissage',
            'HorizontalAlignment': 'Alignement horizontal',
            'AlignLeft': 'Alignez à gauche',
            'AlignCenter': 'centre',
            'AlignRight': 'Aligner à droite',
            'VerticalAlignment': 'Alignement vertical',
            'AlignTop': 'Aligner en haut',
            'AlignMiddle': 'Aligner le milieu',
            'AlignBottom': 'Aligner le bas',
            'InsertFunction': 'Insérer une fonction',
            'Delete': 'Effacer',
            'Rename': 'Rebaptiser',
            'Hide': 'Cacher',
            'Unhide': 'Démasquer',
            'NumberFormat': 'Nombre Format',
        }
    }
});
import * as numberingSystems from "./numberingSystems.json";
import * as gregorian from "./ca-gregorian.json";
import * as numbers from "./numbers.json";
import * as timeZoneNames from "./timeZoneNames.json";
import * as currencies from "./currencies.json";

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, currencies);
setCulture("fr-CH");
setCurrencyCode("EUR");

export default {
   data: () => {
    return {
      dataSource: defaultData
    }
  },
  methods: {
  created: function () {
    let spreadsheet = this.$refs.spreadsheet;
    //Applies cell and number formatting to specified range of the active sheet
    spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
    spreadsheet.numberFormat('$#,##0.00', 'F2:F11');
    }
  }
}
</script>
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
 @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
 @import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
 @import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>

{% endhighlight %}
{% endtabs %}

Internalization [`sample link`](https://codesandbox.io/s/vue-template-forked-cthq7?file=/src/App.vue)

## Right to left (RTL)

RTL provides an option to switch the text direction and layout of the Spreadsheet component from right to left. It improves the user experiences and accessibility for users who use right-to-left languages (Arabic, Farsi, Urdu, etc.). To enable RTL Spreadsheet, set the [`enableRtl`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#enablertl) to true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/local-data-binding-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/local-data-binding-cs3" %}

## Note

You can refer to our [Vue Spreadsheet](https://www.syncfusion.com/vue-ui-components/vue-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://ej2.syncfusion.com/vue/demos/#/material/spreadsheet/default.html) to knows how to present and manipulate data.

## See Also

* [Localization](https://ej2.syncfusion.com/vue/documentation/common/localization)