"use strict";
exports.__esModule = true;
var express_1 = require("express");
var startpage_controller_1 = require("../controllers/startpage-controller");
var router = express_1.Router();
var startPageController = new startpage_controller_1.StartPageController();
router.get('/', startPageController.StartPage);
router.post('/', startPageController.Post);
exports.StartPageApi = router;
//# sourceMappingURL=index.js.map