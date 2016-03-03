﻿import {buildAndWatch} from '../../../build/build-utils';

console.log("Building...");

buildAndWatch([{
    dirs: ["src/"],
    bundles: {
        "src/Dexie.Observable.js": [
            "dist/dexie-observable.js",
            "dist/dexie-observable.js.map",
            "dist/dexie-observable.min.js",
            "dist/dexie-observable.min.js.map",
            "dist/dexie-observable.es6.js",
            "dist/dexie-observable.es6.js.map"
        ]
    }
}]).then(()=> {
    console.log("All files successfully built. Now watching...");
}).catch(err => {
    console.error(err);
});
