'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

const randomVars = { 
    randomString(len) {
        var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
    }
}

module.exports = randomVars;
