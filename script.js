var h1Text = document.querySelector(".h1-absolute");
var h2Text = document.querySelector(".h2-absolute");
var h4Text = document.querySelector(".h4");

var texts=[h1Text,h2Text];


if (!document.querySelector("body").classList.contains("fire-off")) {
    document.querySelector("body").classList.add("fire-off");
    document.querySelector("#switch").classList.add("switched");
    h1Text.style.opacity = 0;
    h2Text.style.opacity = 0;
    h4Text.style.opacity=1
}


document.querySelector("#switch").addEventListener('click', function () {
    if (document.querySelector("body").classList.contains("fire-off")) {
        document.querySelector("body").classList.remove("fire-off");
        document.querySelector("#switch").classList.remove("switched");
        h1Text.style.opacity = 1;
        h2Text.style.opacity = 1;
        h4Text.style.opacity=0

    }
    else {
        document.querySelector("body").classList.add("fire-off");
        document.querySelector("#switch").classList.add("switched");
        h1Text.style.opacity = 0;
        h2Text.style.opacity = 0;
        h4Text.style.opacity=1


    }
});