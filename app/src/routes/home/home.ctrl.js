"use strict";

const users= {
    id: ['jsyoo1029', 'ariana grande', 'olivia rodrigo'],
    pw: ['123', '1234', '12345']
};

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
        const id= req.body.id,
        pw= req.body.pw;
        
        if(users.id.includes(id)){
            const idx= users.id.indexOf(id);
            if(users.pw[idx]===pw){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            message: "로그인 실패"
        });

    }
};

module.exports= {
    output,
    process

};