//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

function openModal(src) {
    document.getElementById('modalImg').src = src;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function showBio(name, country, description, birthDate, hobby) {
    document.getElementById('modalImg').style.display = 'none';
    document.getElementById('bioName').textContent = name;
    document.getElementById('bioCountry').textContent = country;
    document.getElementById('bioDesc').innerHTML = `<p>${description}</p><p><strong>Tanggal Lahir:</strong> ${birthDate}</p><p><strong>Hobi:</strong> ${hobby}</p>`;
    document.getElementById('modal').style.display = 'flex';
}
function showAlert() {
    alert("Halo! Kamu berhasil menjalankan website di localhost.");
}
const express = require("express");
const app = express();
const PORT = 3000;

// Menyajikan file statis dari folder 'public'
app.use(express.static("public"));

// Jalankan server di port 3000
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

    