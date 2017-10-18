import { User } from '../models/user';
import { DataAccess } from '../../app_api/services/data-acces';
import { Router } from 'express';

export  class AuthenticationController {
    public async Register(req, res) {
        const user = new User();
        user.name = req.body;

        var dataAccess = new DataAccess();

        await dataAccess.create("Users", user).then(result =>{
            console.log(result);
        });
        res.json({});
    }

    public Login(req, res) {

    }

}