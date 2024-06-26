function get_initials(name) {
    return fastn_utils.getStaticValue(name)
        .split(" ")
        .map((p) => p[0].toUpperCase())
        .join("");
}

function string_field_with_default_js(name, default_value) {
    let r = fastn.recordInstance();
    r.set("name", name);
    r.set("value", fastn_utils.getFlattenStaticValue(default_value));
    r.set("error", null);
    return r;
}

function callAlert(msg) {
    alert(msg)
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function set_language(language) {
    eraseCookie("fastn-lang");
    createCookie("fastn-lang", language, 365 * 60);
    document.location.reload();
}



function linkedin_share_url() {
    let url = window.location.href;
    return `https://www.linkedin.com/shareArticle?url=${url}`;
}


function twitter_share_url() {
    let url = window.location.href;
    return `https://twitter.com/share?url=${url}`;
}


function copy_share_url() {
    let url = window.location.href;
    return url;
}