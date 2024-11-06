"use strict";
exports.__esModule = true;
var sdk_1 = require("@directus/sdk");
var directus = sdk_1.createDirectus('https://direct-green.dev.testen2go.de/')["with"](sdk_1.rest());
exports["default"] = directus;
