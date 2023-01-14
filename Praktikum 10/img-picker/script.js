function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "assets/images/flareon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar flareon.png";
        alert("Ini adalah gambar flareon.png");
    } else if (picker == "water") {
        images.src = "assets/images/vaporeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar vaporeon.png";
        alert("Ini adalah gambar vaporeon.png");
    } else if (picker == "electric") {
        images.src = "assets/images/jolteon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar jolteon.png";
        alert("Ini adalah gambar jolteon.png");
    } else if (picker == "dark") {
        images.src = "assets/images/umbreon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar umbreon.png";
        alert("Ini adalah gambar umbreon.png");
    } else if (picker == "psyhic") {
        images.src = "assets/images/espeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar espeon.png";
        alert("Ini adalah gambar espeon.png");
    } else if (picker == "fairy") {
        images.src = "assets/images/sylveon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar sylveon.png";
        alert("Ini adalah gambar sylveon.png");
    } else if (picker == "grass") {
        images.src = "assets/images/leafeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar leafeon.png";
        alert("Ini adalah gambar leafeon.png");
    } else if (picker == "ice") {
        images.src = "assets/images/glaceon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar glaceon.png";
        alert("Ini adalah gambar glaceon.png");
    } else {
        alert("Tidak dapat menampilkan gambar.");
    }
}