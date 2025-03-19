const button = document.querySelector(".button");
const urlInput = document.querySelector("#url");
const fileInput = document.querySelector(".file");

function Qrcode(url, color, backgroundColor, isDownload, insideImg, width = 280, height = 280) {
    const qrCode = new QRCodeStyling({
        width: width,
        height: height,
        type: "svg",
        data: url,
        image: insideImg,
        dotsOptions: {
            color: color,
            type: "rounded"
        },
        backgroundOptions: {
            color: backgroundColor,
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 10
        }
    });

    document.getElementById("canvas").innerHTML = "";
    qrCode.append(document.getElementById("canvas"));
    if (isDownload) {
        qrCode.download({ name: "qr", extension: "svg" });
    }
}

Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp")

// ** Asosiy Generate tugmasi bosilganda**
button.addEventListener("click", function () {
    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            Qrcode(urlInput.value, "#000", "#fff", false, imageUrl);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        Qrcode(urlInput.value, "#000", "#fff", false, "../img/logo-big.png");
    }
});

// ** Oq rang tugmasi bosilganda**
document.querySelector(".white").addEventListener("click", function () {

    if (this.window.screen.availWidth <= 380) {
        Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 200, 200);
        console.log("Ishladi");
    } else {
        Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 280, 280);
    }

    document.querySelector(".black").style.border = "none";
    document.querySelector(".white").style.border = "2px solid blue";

    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            Qrcode(urlInput.value, "#fff", "#000", false, imageUrl);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        Qrcode(urlInput.value, "#fff", "#000", false, "../img/logo-big.png");
    }
    document.querySelector(".main_box_qrcode").style.backgroundColor = "#000";
});

// ** Qora rang tugmasi bosilganda**
document.querySelector(".black").addEventListener("click", function () {

    if (this.window.screen.availWidth <= 380) {
        Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 200, 200);
        console.log("Ishladi");
    } else {
        Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 280, 280);
    }

    document.querySelector(".black").style.border = "2px solid blue";
    document.querySelector(".white").style.border = "none";

    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            Qrcode(urlInput.value, "#000", "#fff", false, imageUrl);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        Qrcode(urlInput.value, "#000", "#fff", false, "../img/logo-big.png");
    }
    document.querySelector(".main_box_qrcode").style.backgroundColor = "#fff";
});

// ** QR kodni yuklab olish**
document.querySelector(".download").addEventListener("click", function () {
    if (fileInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (event) {
            let imageUrl = event.target.result;
            Qrcode(urlInput.value, "#000", "#fff", true, imageUrl);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        Qrcode(urlInput.value, "#000", "#fff", true, "../img/logo-big.png");
    }
});


window.addEventListener("resize", function () {
    if (this.window.screen.availWidth <= 380) {
        Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 200, 200);
        console.log("Ishladi");
    } else {
        Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 280, 280);
    }
});

if (this.window.screen.availWidth <= 380) {
    Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 200, 200);
    console.log("Ishladi");
} else {
    Qrcode("https://qr-code-navy-three.vercel.app/", "#000", "#fff", false, "../img/scan_me.webp", 280, 280);
}