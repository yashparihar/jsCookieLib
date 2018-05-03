

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
