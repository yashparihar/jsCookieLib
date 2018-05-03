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
    console.log("loded first");
    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            console.log("in readdy state");
            var bodyElement = document.querySelector('body');
        }
    });
})();


function checkStatus() {
    console.log(getCookie("auth"));
    if (getCookie("auth") == "yash") {
        if (window.location.pathname != "/home") window.location.pathname = "/home"
        return true;
    } else {
        if (window.location.pathname != "/") window.location.pathname = "/"
        return false;
    }
}

function checkLogin() {
    if (u.value == "yash" && p.value == "password") {
        setCookie("auth", "yash", 2);
        window.location.pathname = "/home";
    } else {
        alert("something got wrong");
    }
}

function logOff() {
    event.preventDefault();
    console.log('something happends');
    deleteCookie("auth");
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
