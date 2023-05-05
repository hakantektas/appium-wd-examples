require("../helpers/setup");
const wd = require("wd");
const axios = require('axios').default;
const {expect} = require('chai');
var assert = require('assert');
var should = require('should');
axios.defaults.baseURL = 'https://fakestoreapi.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 25000;

var DEFAULT_TIMEOUT=8000;
var DEFAULT_TIMEOUT_MID=1500;
var DEFAULT_TIMEOUT_MIN=500;

/********* ELEMENTS ********/
var ELEMENT = {

    ///Login Ekranı
        USERNAME_TXT         : "app.com.sandjs.bankaccountfakewallet:id/username_txt", 
        PASSWORD_TXT         : "app.com.sandjs.bankaccountfakewallet:id/password_txt",
        LOGIN_BTN            : "app.com.sandjs.bankaccountfakewallet:id/login_btn"
    //////Accaount Ekranı ///////
}

exports.setDriverMethods = (driver) => {
    
    wd.addPromiseChainMethod('login',(user,pass) => {
    return driver
        .waitForElementById(ELEMENT.USERNAME_TXT, DEFAULT_TIMEOUT)
        .sendKeys(user)
        .sleep(DEFAULT_TIMEOUT_MIN)
        .waitForElementById(ELEMENT.PASSWORD_TXT, DEFAULT_TIMEOUT)
        .sendKeys(pass)
        .sleep(DEFAULT_TIMEOUT_MIN)
        .waitForElementById(ELEMENT.LOGIN_BTN, DEFAULT_TIMEOUT)
        .click()
        .sleep(DEFAULT_TIMEOUT_MID);
    })
};
/*


const path = require('path');
let Momentum = require(path.join(__dirname, '../local/Momentum'));
[Momentum.Library(Id=1329, IsCucumber="false")]
//..::PLEASE DO NOT MODIFY THE FIRST 3 LINES::..
const axios = require('axios').default;
const {expect} = require('chai');
const { wd } = require("../setup/v2setup");

var isStepFailed = false;

var assert = require('assert');
var should = require('should');
axios.defaults.baseURL = 'https://fakestoreapi.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 25000;

var DEFAULT_TIMEOUT=8000;
var DEFAULT_TIMEOUT_MID=1500;
var DEFAULT_TIMEOUT_MIN=500;

/********* ELEMENTS ********/

/*
var ELEMENT = {

    ///Login Ekranı
        USERNAME_TXT         : "app.com.sandjs.bankaccountfakewallet:id/username_txt", 
        PASSWORD_TXT         : "app.com.sandjs.bankaccountfakewallet:id/password_txt",
        LOGIN_BTN            : "app.com.sandjs.bankaccountfakewallet:id/login_btn",
    //////Accaount Ekranı ///////
}

exports.setDriverMethods = (driver) => {
wd.addPromiseChainMethod('getCard', () => {
//----------SET DATA----------
    var loginUsername = "myjsuser@momentumsuite.com";
    var loginPassword = "MyPass123*";

        return new Promise((resolve, reject) => {
                var accessToken = 0;
                //----------SET REQUEST BODY----------
                var requestBody = {
                    'username': loginUsername,
                    'password': loginPassword
                    }
                //driver.log("API Request Body: " + JSON.stringify(requestBody));  
                //----------SET REQUEST HEADERS----------
                var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                driver.log("API Request Headers: " + JSON.stringify(config));  
                //----------API CALL-1 - LOGIN ----------
                return axios.get("/carts/1", config)
                    .then((response) => {
                       // driver.log("API SUCCESS response: " + Object.values(response.data).flat().join()); 
                        driver.log("API SUCCESS response: " + Object.values(response.data).flat().join());     
                        driver.log("Response User id"+":"+response.data.userId);      
                        driver.log("Response quantity"+":"+response.data.products[1]);   
                        driver.log("Response tümü "+":"+response);   
                        resolve(response);
                        expect(response.status).equals(200);
                        expect(response.data.date).equals("2020-03-02T00:00:02.000Z");
                       })
                    .catch((error) => {  
                        driver.log("API ERROR response: " + error);   
                        resolve(null);
                     });

        });
    });
wd.addPromiseChainMethod('login',() => {
    return driver
    .waitForElementById(ELEMENT.USERNAME_TXT, DEFAULT_TIMEOUT)
    .sendKeys(user)
    .sleep(DEFAULT_TIMEOUT_MIN)
    .save()
    .waitForElementById(ELEMENT.PASSWORD_TXT, DEFAULT_TIMEOUT)
    .sendKeys(pass)
    .sleep(DEFAULT_TIMEOUT_MIN)
    .save()
    .waitForElementById(ELEMENT.LOGIN_BTN, DEFAULT_TIMEOUT)
    .click()
    .sleep(DEFAULT_TIMEOUT_MID)
    .save()
})
};

*/