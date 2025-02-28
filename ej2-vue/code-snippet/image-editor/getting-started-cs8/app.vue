<template>
    <div>
        <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" locale="de-DE"
            :created="created"></ejs-imageeditor>
    </div>
</template>

<script>

import { ImageEditorComponent } from "@syncfusion/ej2-vue-image-editor";
import { Browser } from "@syncfusion/ej2-base";
import { L10n, setCulture } from '@syncfusion/ej2-base';

setCulture('de-DE');

L10n.load({
    'de-DE': {
        'image-editor': {
            'Browse': 'Durchsuche',
            'Crop': 'Ernte',
            'ZoomIn': 'Hineinzoomen',
            'ZoomOut': 'Rauszoomen',
            'Transform': 'Verwandeln',
            'Annotation': 'Anmerkung',
            'Text': 'Text hinzufügen',
            'Pen': 'Stift',
            'Reset': 'Zurücksetzen',
            'Save': 'Speichern',
            'Select': 'Auswählen',
            'RotateLeft': 'Nach links drehen',
            'RotateRight': 'Drehe nach rechts',
            'HorizontalFlip': 'Horizontaler Flip',
            'VerticalFlip': 'Vertikaler Flip',
            'OK': 'OK',
            'Cancel': 'Absagen',
            'FillColor': 'Füllfarbe',
            'StrokeColor': 'Strichfarbe',
            'StrokeWidth': 'Strichbreite',
            'FontFamily': 'Schriftfamilie',
            'FontStyle': 'Schriftstil',
            'FontSize': 'Schriftgröße',
            'FontColor': 'Schriftfarbe',
            'Pan': 'Pfanne',
            'Move': 'Bewegen',
            'Custom': 'Brauch',
            'Square': 'Quadrat',
            'Circle': 'Kreis',
            'Rectangle': 'Rechteck',
            'Line': 'Linie',
            'Default': 'Standard',
            'Bold': 'Fett gedruckt',
            'Italic': 'Kursiv',
            'BoldItalic': 'Fett Kursiv',
        }
    }
});

export default {
    name: "App",
    components: {
        "ejs-imageeditor": ImageEditorComponent
    },
    data: function () {
        return {};
    },
    methods: {
        created() {
            let imageEditor = this.$refs.imageEditorObj?.ej2Instances;
            if (!imageEditor) return;
            let imageUrl = Browser.isDevice
                ? 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png'
                : 'https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png';
            imageEditor.open(imageUrl);
        },
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-image-editor/styles/material.css";

#image-editor {
    width: 550px !important;
    height: 350px !important;
}
</style>