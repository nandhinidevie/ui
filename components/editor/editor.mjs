import {EditorView, basicSetup} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";

class CMEditor extends HTMLElement {
    constructor() {
        super();
        this.style.width = "100%";
        this.style.height = "100%";
        this.classList.add('fastn-ignore-global-keyboard');
    }

    connectedCallback() {
        window.ide_cm_editor = new EditorView({
            extensions: [basicSetup, javascript()],
            parent: this,
            doc: "function greet(who) {\n  return 'Hello, ' + who + '!';\n}"
        });
    }
}

customElements.define('cm-editor', CMEditor);

window.ide_dispatch_event = function (data) {
    console.log('ide_dispatch_event', data);
    window.dispatchEvent(new CustomEvent("ide-event", { detail: data }));
}