/// <reference path="../node_modules/babylonjs/babylon.d.ts" />
/// <reference path="../node_modules/@types/es6-promise/index.d.ts" />

import { BasicallyAlone } from './BasicallyAlone';

window.addEventListener('DOMContentLoaded', () => {
    // your code here
    console.log("INDEX.TS");
    window['gametop'] = new BasicallyAlone();
});
