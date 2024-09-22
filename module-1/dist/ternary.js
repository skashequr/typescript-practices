"use strict";
// ? ?? ? 
// Ternary , Optional chining , nullish
{
    // Nulished ??
    const x = null;
    const y = undefined;
    const z = "";
    const result = x !== null && x !== void 0 ? x : "gest";
    const result2 = x ? x : "guest";
    const result3 = z !== null && z !== void 0 ? z : "guest";
}
