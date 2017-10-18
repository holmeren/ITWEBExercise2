import { User } from '../models/user';
import { DataAccess } from '../../app_api/services/data-acces';
var jwt = require('jsonwebtoken');

export  class AuthenticationController {
    private secret = "badassFitness";

    
    public async Register(req, res) {
        var user = new User();
        user.name = req.body.name;  
        user.email = req.body.email;
        user.password = req.body.password;

        var dataAccess = new DataAccess();

        var result = await dataAccess.create("Users", user);

        if(result instanceof User){

            var token = this.Generate(result);
            res
            .status(200)
            .json({"token": token});
        }else{
            res
            .status(404)
            .json(result);
        }  
    }

    public async Login(req, res) {

        var dataAccess = new DataAccess();

        var result = await dataAccess.getByProperty("Users","email", req.body.email);
        console.log(result)
        if(result != null && req.body.email === result.email && req.body.password === result.password ) {
            var token = this.Generate(result);
            res
            .status(200)
            .json({"token": token});
        } else {
            res.status(401).json({
                error: {
                    message: 'Wrong username or password!'
                }
            });
        }
    }

    private Generate(user:User){

        var myJwt= jwt.sign({user}, this.secret,{ expiresIn: '1h' });
        return myJwt;       
    }

    // public Authorization(req, res){
    //     if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization') ) {
    //         try {
    //             req.user = jwt.verify(req.headers['authorization'], config.JWT_SECRET);
    //         } catch(err) {
    //             return res.status(401).json({
    //                 error: {
    //                     msg: 'Failed to authenticate token!'
    //                 }
    //             });
    //         }
    //     } else {
    //         return res.status(401).json({
    //             error: {
    //                 msg: 'No token!'
    //             }
    //         });
    //     }
    // }

}