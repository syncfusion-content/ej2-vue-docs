<template>
    <div>
        <div class="col-lg-9 control-section">
            <ejs-pdfviewer 
                id="pdfviewer" 
                ref="pdfviewer" 
                :documentPath="documentPath"
                :resourceUrl="resourceUrl"
                :documentLoad="documentLoad"
                :customContextMenuSelect="customContextMenuSelect"
                :customContextMenuBeforeOpen="customContextMenuBeforeOpen">
            </ejs-pdfviewer>
        </div>
        <div class="col-lg-3 property-section">
            <table id="property" class="left-side-property" title="Properties">   
                <tbody>
                     <tr>
                        <td class="left-side">Hide Default Context Menu</td>
                        <td>
                            <ejs-checkbox 
                                id="enable" 
                                @change="contextmenuHelper" 
                                :checked="false" 
                                cssClass="multiline" 
                            ></ejs-checkbox>
                        </td>
                    </tr>
                    <tr>
                        <td class="left-side">Add Custom option at bottom</td>
                        <td>
                            <ejs-checkbox 
                                id="position" 
                                @change="contextmenuHelper" 
                                :checked="false" 
                                cssClass="multiline" 
                            ></ejs-checkbox>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
	#pdfviewer {
		height: 640px;
	}

.left-side-property .left-side {
    font-size: 14px;
    padding: 8px;
    width: auto;
}

.left-side-property.property-panel-table div.multiline {
    padding: 20px;
}

.property-section{
    padding: 20px 15px;
}
</style>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-switch': SwitchComponent ,
        'ejs-menu': MenuComponent,
        'ejs-checkbox': CheckBoxComponent 
    },
    data: function() {
        return {
			documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
            menuItems : [
            {
                text: 'Search In Google',
                id: 'search_in_google',
                iconCss: 'e-icons e-de-ctnr-find'
            },
            {
                text: 'Lock Annotation',
                iconCss: 'e-icons e-lock',
                id: 'lock_annotation'
            },
            {
                text: 'Unlock Annotation',
                iconCss: 'e-icons e-unlock',
                id: 'unlock_annotation'
            },
            {
                text: 'Lock Form Field',
                iconCss: 'e-icons e-lock',
                id: 'read_only_true'
            },
            {
                text: 'Unlock Form Field',
                iconCss: 'e-icons e-unlock',
                id: 'read_only_false'
            },
        ]
        }
    },
	provide: {
      PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, 
                   TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]
    },
    methods: {     
    documentLoad: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;       
        viewer.addCustomMenu(this.menuItems, false, false);
    },

    customContextMenuSelect: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;
        switch (args.id) {
            case 'search_in_google':
                for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
                        window.open('http://google.com/search?q=' + content);
                    }
                }
                break;
            case 'lock_annotation':
                this.lockAnnotations(args);
                break;
            case 'unlock_annotation':
                this.unlockAnnotations(args);
                break;
            case 'read_only_true':
                this.setReadOnlyTrue(args);
                break;
            case 'read_only_false':
                this.setReadOnlyFalse(args);
                break;
            default:
                break;
        }
    },

    customContextMenuBeforeOpen : function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;
        for (var i = 0; i < args.ids.length; i++) {
            var search = document.getElementById(args.ids[i]);
            if (search) {
                search.style.display = 'none';
                if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
                    search.style.display = 'block';
                } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                    var isLockOption = args.ids[i] === "lock_annotation";
                    for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
                        var selectedAnnotation = viewer.selectedItems.annotations[j];
                        if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                            var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                            search.style.display = shouldDisplay ? 'block' : 'none';
                        }
                    }
                } else if (args.ids[i] === "read_only_true" && viewer.selectedItems.formFields.length !== 0) {
                    var selectedFormField = viewer.selectedItems.formFields[0].isReadonly;
                    search.style.display = selectedFormField ? 'none' : 'block';
                } else if (args.ids[i] === "read_only_false" && viewer.selectedItems.formFields.length !== 0) {
                    var selectedFormField = viewer.selectedItems.formFields[0].isReadonly;
                    search.style.display = selectedFormField ? 'block' : 'none';
                } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
                    search.style.display = 'block';
                }
            }
        }
    },

    lockAnnotations: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;
        var selectedAnnotations = viewer.selectedItems.annotations;
        for (var i = 0; i < selectedAnnotations.length; i++) {
            var annotation = selectedAnnotations[i];
            if (annotation && annotation.annotationSettings) {
                annotation.annotationSettings.isLock = true;
                viewer.annotationModule.editAnnotation(annotation);
                args.cancel = false;
            }
        }
    },
    unlockAnnotations: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;
        var selectedAnnotations = viewer.selectedItems.annotations;
        for (var i = 0; i < selectedAnnotations.length; i++) {
            var annotation = selectedAnnotations[i];
            if (annotation && annotation.annotationSettings) {
                annotation.annotationSettings.isLock = false;
                viewer.annotationModule.editAnnotation(annotation);
                args.cancel = false;
            }
        }
    },

    setReadOnlyTrue: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                viewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: true,
                });
            }
            args.cancel = false;
        }
    },

    setReadOnlyFalse: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                viewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: false,
                });
            }
            args.cancel = false;  
                                
        }
    },

    contextmenuHelper: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.addCustomMenu(this.menuItems, enable.checked, position.checked);
    },
  }
};
</script>