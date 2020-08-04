'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _db = require('./db');

require('regenerator-runtime');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();

// Middleware
app.use((0, _cors2.default)());
app.use(_express2.default.json());

// Routes

// Create a todo
app.post('/todos', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var description, newTodo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        description = req.body.description;
                        _context.next = 4;
                        return _db.pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);

                    case 4:
                        newTodo = _context.sent;


                        res.json(newTodo);
                        _context.next = 11;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0.message);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

// Get all todos

// Get a todo

// Update a todo

// Delete a todo

app.listen(5000, function () {
    console.log('Server has started on port 5000');
});
//# sourceMappingURL=index.js.map