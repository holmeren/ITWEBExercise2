import {Router, Request, Response} from 'express';
import {StartPageController} from '../controllers/startpage-controller';

const router = Router();

var startPageController = new StartPageController();

router.get('/', startPageController.StartPage);

router.post('/', startPageController.Post);

export const StartPageApi: Router = router;