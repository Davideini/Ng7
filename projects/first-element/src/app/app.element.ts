import { AngularCustomElementBridge } from "elements-lib";
import { AppComponent } from "./app.component";

export class AppElement extends HTMLElement {
    static bridge: AngularCustomElementBridge<AppComponent>;
    static attributes: string[] = [];
    
    constructor() {
      super();
      AppElement.bridge.prepare();
    }
  
    static get observedAttributes() {
      return AppElement.attributes;
    }
  
    connectedCallback() {
        AppElement.bridge.initComponent(this);
    }
  
    disconnectedCallback() {
        AppElement.bridge.destroyComponent();
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
        AppElement.bridge.setInput(attrName, newVal);
    }
}