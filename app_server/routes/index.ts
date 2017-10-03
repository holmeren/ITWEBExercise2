
import {Router, Request, Response} from 'express';
import {Exercise} from '../../app_api/models/exercise';
import {DataAccess} from '../../app_api/services/data-acces';
import {StartPageController} from '../controllers/start-page-controller'

const router = Router();

var startPageController= new StartPageController();

router.get('/', startPageController.StartPage);

router.post('/', startPageController.Post);

export const StartPage: Router = router;