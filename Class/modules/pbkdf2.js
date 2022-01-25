const { rejects } = require('assert');
const crypto = require('crypto');
const { resolve } = require('path');
const config = require('../configs/crypto.config');

module.exports.getSalt = ()=>{
    return new Promise((resolve, reject)=>{
        crypto.randomBytes(64, (err, buf)=>{
            if(!err) 
                resolve(buf.toString('base64'));
            else
                reject(err);
        });
    });
};

module.exports.getKey = (password, salt)=>{
    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(
            password,
            salt, 
            config.count,
            config.length,
            config.digest, 
            (err, derivedKey)=>{
                if(!err){
                    encoded = derivedKey.toString('base64');
                    resolve(encoded);
                } else
                    reject(err);
            }
        );
    });
};