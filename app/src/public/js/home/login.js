"use strict";

const id= document.querySelector('#id'),
pw= document.querySelector('#pw'),
loginBtn= document.querySelector('button');

loginBtn.addEventListener('click', login);

function login(){
    const req= {
        id: id.value,
        pw: pw.value        
    };

    console.log(req, JSON.stringify(req));
    
    
    fetch("/login", {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(req)
    })
}