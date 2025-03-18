'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useFileInput } from "./root";
export function FileInputControl(_a) {
    var { multiple = false } = _a, props = __rest(_a, ["multiple"]);
    const { id, onFilesSelected } = useFileInput();
    function handleFilesSelected(event) {
        var _a;
        if (!((_a = event.target.files) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const files = Array.from(event.target.files);
        onFilesSelected(files, multiple);
    }
    return (<input type="file" className="sr-only" id={id} {...props} multiple={multiple} onChange={handleFilesSelected}/>);
}
