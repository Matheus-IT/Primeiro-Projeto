window.setInterval( () => {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    window.document.querySelector("div#hours").innerHTML = `<p>${h}:${m}:${s}</p>`;
}, 1000); //Show the h, m and s on the div "hours" each second
