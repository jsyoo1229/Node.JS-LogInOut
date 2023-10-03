"use strict";

const UserStorage= require("../../models/UserStorage");

const output= {
    home: (req, res)=> {
        res.render('home/index');
    },
    
    login: (req, res)=> {
        res.render('home/login');
    },
};

const process= {
    login: (req, res)=>{
        // const user= new User(req.body);
        // const response= user.login();
        // return res.json(response);

        
        const id= req.body.id,
        pw= req.body.pw;
        
        const users= UserStorage.getUsers('id', 'pw');

        
        const response= {};
        if(users.id.includes(id)){
            const idx= users.id.indexOf(id);
            if(users.pw[idx]===pw){
                response.success= true;
                return res.json();
            }
        }

        response.success= false;
        response.message= "로그인 실패"
        return res.json(response);
    }
};

module.exports= {
    output,
    process

};