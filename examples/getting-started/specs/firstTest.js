const wd = require("wd");
const {setDriverMethods} = require('../Libraries/example.js');
const {DATA} = require('/Users/hakantektas/appium-wd-examples/test-settings.js');
const tesultsReporter = require("mocha-tesults-reporter");
require('colors');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const should = chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;
exports.should = should;
const axios = require('axios').default;
const {expect} = require('chai');
var assert = require('assert');
axios.defaults.baseURL = 'https://fakestoreapi.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 25000;

var DEFAULT_TIMEOUT=8000;
var DEFAULT_TIMEOUT_MID=1500;
var DEFAULT_TIMEOUT_MIN=500;

const serverConfigLocal = {
    host: 'localhost',
    port: 4723
};

const serverConfigRemete = {
    hostname: DATA.CLOUD['momentum.hostname'],
    port: DATA.CLOUD['momentum.gw'],
    path: DATA.CLOUD['momentum.path'],
    protocol: DATA.CLOUD['momentum.protocol'],
};

    

describe("sample test", function () {

    this.timeout(300000);

    let driver;
    let allPassed = true;


    before(function () {

        driver=wd.remote(serverConfigRemete);

        driver.on('status', function (info) {
            console.log(info.cyan);
        });
        driver.on('command', function (meth, path, data) {
            console.log(' > ' + meth.yellow, path.grey, data || '');
        });
        driver.on('http', function (meth, path, data) {
            console.log(' > ' + meth.magenta, path, (data || '').grey);
        });

        setDriverMethods(driver);

        const desired = {
            platformName: 'Android',
            deviceName: '988d9145524846413130',
            app:"/Users/hakantektas/Desktop/wd-js-example/wd-js-example/app/sample.apk",
            fullReset: false,
            noReset: true
        };
        const  desiredCaps = {

            platformName: "android",
            automationName: "UiAutomator2",
            autoGrantPermissions: true,
            app:DATA.CLOUD['momentum.app'],
            fullReset: true,
            noReset: false,
            deviceName: "",
            udid: "",
            "momentum:user": DATA.CLOUD['momentum.user'],
            "momentum:token": DATA.CLOUD['momentum.token'],
            "momentum:gw": DATA.CLOUD['momentum.deviceList'][0]
        };
        return driver
            .init(desiredCaps);
    });

    after(function () {
        return driver
            .quit();
    });

    afterEach(function () {
            allPassed = allPassed && this.currentTest.state === 'passed';
        });

        
    it("login example", function () {
       
        return driver
            .elementById("app.com.sandjs.bankaccountfakewallet:id/username_txt")
            .click()
            .elementById("app.com.sandjs.bankaccountfakewallet:id/username_txt")
            .sendKeys("hakana")
            .hideKeyboard()
            .elementById("app.com.sandjs.bankaccountfakewallet:id/password_txt")
            .sendKeys("123456Aa.")
            .hideKeyboard()
            .elementById("app.com.sandjs.bankaccountfakewallet:id/login_btn")
            .click();

    });
});


