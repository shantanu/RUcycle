//variables needed
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
let recycleN = ['bottle', 'paper', 'can', 'packing', 'plastic'];
let recycleE = ['phone', 'laptop', 'mouse', 'battery']
let searchLink1 = 'http://api.wolframalpha.com/v2/query?input=define+';
let searchLink2 = '&appid=9YHKG4-KWJYE9H2GV&includepodid=Definition:WordData';
let modelLink = "https://www.wolframcloud.com/objects/josh.siegel/Recycler";
let img64 = "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";

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
        console.log("I've been got");
        response = response.substring(4);
        response = response.substring(0, response.indexOf('"'));
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
    console.log(img);
        //return callback(null, img.length.toString());
    queryWolfram1(modelLink, img, (err, result) => {
        if (err) {
            return callback(err);
        }
        return callback(null, result);
    });
    
    //checkList1
    //if null, queryWolfram2
    //checkListDef
    //if still null query user
    //var searchRes = queryWolfram2('bag', (err, result) => {
    //    if (err) {
    //        return callback(err);
    //    }
    //    
    //    return callback(null, result);
    //});
    //return callback(null, 'recycle');
};


