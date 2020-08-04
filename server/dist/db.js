"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pool = undefined;

var _pg = require("pg");

var pool = exports.pool = new _pg.Pool({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});
//# sourceMappingURL=db.js.map