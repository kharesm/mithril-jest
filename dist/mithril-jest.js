!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("tidy-html5"),require("mithril")):"function"==typeof define&&define.amd?define(["exports","tidy-html5","mithril"],t):t(e["mithril-jest"]={},e["tidy-html5"],e.m)}(this,function(e,t,i){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,i=i&&i.hasOwnProperty("default")?i.default:i;var n={"show-body-only":!0,"drop-empty-elements":!1,doctype:"omit",indent:!0,quiet:!0,"show-warnings":!1,"new-blocklevel-tags":["svg","defs"],"new-inline-tags":["path","polyline","line","polygon"]};e.tidy=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,d=document.createElement("div");i.render(d,e);var l=d.innerHTML;return t.tidy_html5(l,o)},e.defaultHtmlTidyOptions=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=mithril-jest.js.map