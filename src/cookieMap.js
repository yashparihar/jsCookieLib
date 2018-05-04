export class cookieMap {

    constructor() {
    }

    getCookieList() {
        if (document.cookie == "") return false;

        var cookStr = document.cookie.split(";");
        console.log(cookStr);

        var str = cookStr;
        var cookieList = {};

        for (var each in cookStr) {
            var ele = cookStr[each].split("=");
            cookieList[ele[0].trim()] = ele[1];
        }
        return cookieList;
    }


    getCookie(key) {
        var cookieList = this.getCookieList();
        var res = cookieList[key];
        if (res)
            return JSON.parse(decodeURI(res));
    }

    encodingURI(val) {
        var uri = JSON.stringify(val);
        return encodeURI(uri);
    }

    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname.trim() + "=" + this.encodingURI(cvalue) + ";" + expires + ";path=/";
    }

    isCookie(key) {
        var ele = this.getCookie(key);
        if (ele) {
            return ele;
        } else {
            this.setCookie(key, "some_value", 365);
        }

    }

    deleteCookie(key) {
        console.log(this.getCookie(key));
        if (this.getCookie(key)) {
            console.log("setting cookie expiretime to negative");
            this.setCookie(key, "", -4);
        }
    }
}

/*
function getCookieList() {
    if (document.cookie=="") return false;

    var cookStr = document.cookie.split(";");
    console.log(cookStr);

    var str = cookStr;
    var cookieList = {};

    for (var each in cookStr) {
        var ele = cookStr[each].split("=");
        cookieList[ele[0].trim()] = ele[1].trim();
    }
    return cookieList;
}


function getCookie(key) {
    var cookieList = getCookieList();
    return cookieList[key];
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname.trim() + "=" + cvalue.trim() + ";" + expires + ";path=/";
}

function isCookie(key) {
    var ele = getCookie(key);

    if (ele) {
        return ele;
    } else {
        setCookie(key, "some_value", 365);
    }

}

function deleteCookie(key) {
    console.log(getCookie(key));
    if (getCookie(key)){
        console.log("setting cookke to getdel")
        setCookie(key,"",-4);
    }
}

*/

