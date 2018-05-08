import {cookieMap} from './cookieMap.js';
import {SHA512} from './hashing.js';
import {postData} from './apiCallutil.js';

var cookie = new cookieMap();

try {
    var u = document.getElementById("user");
    var p = document.getElementById("pass");
    var btn = document.getElementById("logme");
} catch (err) {
}

try {
    var outbtn = document.getElementById("logout");
} catch (err) {
}

(function () {
    checkStatus();
    var bodyElement = document.querySelector('body');
    console.log("loaded first");
    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            console.log("in readdy state");
            var bodyElement = document.querySelector('body');
        }
    });
})();


function checkStatus() {
    var obj = cookie.getCookie("auth");
    if (obj && obj.uname == "yash") {
        if (window.location.pathname != "/home") window.location.pathname = "/home"
        return true;
    } else {
        if (window.location.pathname != "/") window.location.pathname = "/"
        return false;
    }
}


function checkLogin() {
// "email": "teaglo@mailinator.com",
//    "password": "23bbe686a76e0aa6bb045aade01b506714e31664987d573a427b6710d5a442c064d58dc329bb66680b39887462911ab1e93b2207cb5f34bd6d1d9537a66605b2"
    /*
        if (u.value == "yash" && p.value == "password") {
            var authObj = {
                uname: u.value,
                "desig": "dev"
            }
            cookie.setCookie("auth", authObj, 2);
            window.location.pathname = "/home";
        } else {
            //  alert("something got wrong");
        }
    */
    var data = {
        "email": u.value,
        "password": SHA512(p.value)
    }

    postData('http://192.168.3.121:7000/auth/adminsignin', data)
        .then(response => {

            if (response.status === 1) {
                console.log(response.message);
                console.log(response.data);
                //Redirect to home page using history api

            } else if (response.status === 0) {
                alert(response.message);
            }
        })
        .catch(error => {
            alert("Network issue");
            console.error(error)
        })
}

function logOff() {
    event.preventDefault();
    console.log('something happends');
    cookie.deleteCookie("auth");
    window.location.pathname = "/";
}

try {
    outbtn.addEventListener("click", logOff);
} catch (err) {
}

try {
    btn.addEventListener("click", checkLogin);
} catch (err) {
}
