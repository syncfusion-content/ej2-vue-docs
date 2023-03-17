

<template>
<div id="app">
    <div id='container'>
    <h3> Built-in Components </h3>
        <table class="table-section">
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DatePicker </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="date" mode="Inline" type="Date" :model="dateModel" :value="datePickerValue">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DateTimePicker </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="dateTime" mode="Inline" type="DateTime" :model="datetimeModel" :value="dateTimeValue">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DropDownList </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="dropDowns" mode="Inline" type="DropDownList" :model="dropdownModel" value="Android">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> MaskedTextBox </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="masked" type="Mask" mode="Inline" :model="maskModel" value="123-345-678">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> NumericTextBox </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="numeric" type="Numeric" mode="Inline" :model="numericModel" value=10>
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> TextBox </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="textbox" type="Text" mode="Inline" :model="textModel" value="Andrew">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
        <h3> Injectable Components </h3>
        <table class="table-section">
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> AutoComplete </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="autoComplete" type="AutoComplete" mode="Inline" :model="autocompleteModel" value="Android">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> ColorPicker </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="color" type="Color" mode="Inline" value="#81aefd">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> ComboBox </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="combobox" type="ComboBox" mode="Inline" :model="textModel" value="Android">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DateRangePicker </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="dateRange" type="DateRange" mode="Inline" :model="dateRangeModel"  :value="dateRangeValue">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> MultiSelect </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="multiselect" type="MultiSelect" mode="Inline" :model="multiselectModel"  :value = "multivalue">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> RTE </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="rte" type="RTE" :model="rteModel" mode="Inline" value="<p>Enter your content here</p>">
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Slider </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="slider" type="Slider" mode="Inline" value=20>
                    </ejs-inplaceeditor>
                </td>
            </tr>
            <tr>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> TimePicker </td>
                <td class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <ejs-inplaceeditor id="time" type="Time" mode="Inline" :model="timeModel" :value="timeValue">
                    </ejs-inplaceeditor>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { InPlaceEditorPlugin,TimePicker, DateRangePicker , Rte, MultiSelect,  AutoComplete, ComboBox, ColorPicker, Slider  } from '@syncfusion/ej2-vue-inplace-editor';

Vue.use(InPlaceEditorPlugin);
export default {
    name: app,
    data() {
        let frameWorkList: string[] = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue','Ionic'];
        return {
            dateModel: {
                placeholder: 'Select date'
            },
            datetimeModel: {
                placeholder: 'Select dateTime'
            },
            dropdownModel: {
                placeholder: 'Select frameWorks',
                dataSource: frameWorkList
            },
            maskModel: {
                mask: '000-000-000'
            },
            numericModel: {
                placeholder: 'Enter Number'
            },
            textModel: {
               placeholder: 'Enter Some Text'
            },
            dateRangeModel: {
                placeholder: 'Select date'
            },
            autocompleteModel: {
                placeholder: 'Select frameWorks',
                dataSource: frameWorkList
            },
            rteModel: {
               placeholder: 'Enter your content here'
            },
            timeModel: {
                placeholder: 'Select time'
            },
            multiselectModel: {
                placeholder: 'Select frameWorks',
                dataSource: frameWorkList
            },
            datePickerValue: new Date('11/23/2018'),
            timeValue: new Date('11/23/2018 12:00 PM'),
            dateTimeValue: new Date('11/23/2018 12:30 PM'),
            dateRangeValue: [new Date('11/12/2018'), new Date('11/15/2018')],
            multivalue : ['Android']
        }
    },
     provide:{
        "inplaceeditor":[TimePicker, DateRangePicker , Rte, MultiSelect,  AutoComplete, ComboBox, ColorPicker, Slider ]
  }
}
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inplace-editor/styles/material.css";
#loader {
color: #008cff;
height: 40px;
left: 45%;
position: absolute;
top: 45%;
width: 30%;
}
body {
padding: 20px0
}
.control-title {
font-weight: 600;
padding-right: 20px;
}
td {
height: 80px;
}
trtd:first-child {
text-align: right;
}
trtd:last-child {
text-align: left;
}
.table-section {
margin: 0 auto;
}
h3 {
text-align: center;
font-size: 24px;
}
</style>


