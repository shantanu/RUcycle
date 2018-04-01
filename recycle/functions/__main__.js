//variables needed
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
let recycleN = ['bottle', 'paper', 'can', 'packing', 'plastic'];
let recycleE = ['phone', 'laptop', 'mouse', 'battery']
let searchLink1 = 'http://api.wolframalpha.com/v2/query?input=define+';
let searchLink2 = '&appid=9YHKG4-KWJYE9H2GV&includepodid=Definition:WordData';
let modelLink = "https://www.wolframcloud.com/objects/josh.siegel/Recycler";

function checkListOne(obj) {
    for (var i = 0; i < recycleN.length; i++) {
        if (obj.contains(recycleN[i])) {
            return 'N';
        }
    }
    for (var i = 0; i < recycleE.length; i++) {
        if (obj.contains(recycleE[i])) {
            return 'E';
        }
    }
    return 'T';
}
var Client1 = function() {
    this.get = function(aUrl, string64, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("POST", aUrl, true);            
        anHttpRequest.send(string64);
    }
}
var Client2 = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open("GET", aUrl, true);            
        anHttpRequest.send(null);
    }
}
function queryWolfram1(modelLink, img, callback){
    var client1 = new Client1();
    client1.get(modelLink, img, function(response) {
        return callback(null, response);
    });
}

function queryWolfram2(search, callback){
    var client2 = new Client2();
    client2.get(searchLink1+search+searchLink2, function(response) {
        response = response.substring(response.indexOf("| noun")+9, response.indexOf("\n2"));
        return callback(null, response);
    });
}
/**
* A function to classify an image as trash or recycleable
* @param {string} img base 64 the image you want to classify
* @returns {string} jString Recycleable or Trash
*/

module.exports = (img, context, callback) => {
    queryWolfram1(modelLink, img, (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
};



