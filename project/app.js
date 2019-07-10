var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");
btn.addEventListener("click", function() {

    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if (XHR.status == 200 && XHR.readyState == 4) {
            var data = JSON.parse(XHR.responseText);
            // console .log(data);
            img.src = data.message;

        }
    }
    XHR.open("GET", "https://dog.ceo/api/breeds/image/random ");
    XHR.send();
})