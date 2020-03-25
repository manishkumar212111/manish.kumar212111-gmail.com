'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

const randomVars = { 
    randomString(len , type) {
        var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?><|}{+~!"
        switch(type){
            case 'string':
                p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                break;
            case 'number':
                p = "0123456789"
                break;
            case 'alnum':
                p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                break;
            
        }
        return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
    },
    passwordGeneretor(len , type){
        var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        if(type){
            switch(type){
                case 'weak':
                    p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                    break;
                case 'moderate':
                    p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                    break;
                case 'strong':
                    p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()?><|}{+~!"
                    break;   
            }
        }
        return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
    }
}

module.exports = randomVars;
