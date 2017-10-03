"use strict";
exports.__esModule = true;
var express_1 = require("express");
var start_page_controller_1 = require("../controllers/start-page-controller");
var router = express_1.Router();
var startPageController = new start_page_controller_1.StartPageController();
router.get('/', startPageController.StartPage);
router.post('/', startPageController.Post);
exports.StartPage = router;
//# sourceMappingURL=index.js.map