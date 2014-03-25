function loadPackages(){
    var packages = {};
    
    // all external packages should be initialized here

    // this will give us better control to manage exernal packages

    packages.Promise = require("bluebird");
    packages.lodash = require("lodash");
    packages.Bookshelf = require("bookshelf");
    packages.SCrypt = require("scrypt"); // only usable on linux environment
    packages.dateFormat = require("dateformat");
    packages.Oyster = require("node-oyster");
    global.Packages = packages;
}

module.exports = loadPackages;