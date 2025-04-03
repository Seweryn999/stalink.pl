// declarations.d.ts

// Deklaracja dla FontLoader
declare module "three/examples/jsm/loaders/FontLoader" {
  import { Loader } from "three";

  export class FontLoader extends Loader {
    constructor();
    load(
      url: string,
      onLoad?: (font: any) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): any;
    parse(json: any): any;
  }
}

// Deklaracja dla plików JSON
declare module "*.json" {
  const value: any;
  export default value;
}
