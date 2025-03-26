
import Vue from 'vue';
import { ImageEditorPlugin } from "@syncfusion/ej2-vue-image-editor";
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Browser } from "@syncfusion/ej2-base";

Vue.use(ImageEditorPlugin);

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

new Vue({
    el: '#app',
    template: `
        <div>
            <ejs-imageeditor id="image-editor" ref="imageEditorObj" height="350px" width="550px" locale="de-DE" :created="created"></ejs-imageeditor>
        </div>
    `,
    data: function () {
        return {};
    },
    methods: {
        created: function () {
            let imageEditor = this.$refs.imageEditorObj.ej2Instances;
            if (!imageEditor) return;
            let imageUrl = Browser.isDevice
                ? "flower.png"
                : "bridge.png";
            imageEditor.open(imageUrl);
        },
    }

});