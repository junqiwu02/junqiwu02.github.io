let isMobile = typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1;

window.onscroll = function () {
    if (!isMobile) {
        scrollFunction();
    }
};

if (isMobile) {
    document.getElementsByClassName("spacer")[0].style.padding = "0";
    document.getElementsByClassName("navbar")[0].style.position = "relative";
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("seal").style.height = "0";
        document.getElementById("seal").style.margin = "10px";

    } else {
        document.getElementById("seal").style.height = "90px";
        document.getElementById("seal").style.margin = "30px";
    }
}